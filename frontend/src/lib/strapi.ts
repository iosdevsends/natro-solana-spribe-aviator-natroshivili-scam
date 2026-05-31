/**
 * Strapi REST client (server-side and edge-safe).
 *
 * In production, prefer STRAPI_INTERNAL_URL (the container hostname inside
 * Docker network) for server-side fetches, and NEXT_PUBLIC_STRAPI_URL for
 * the browser-facing media URLs.
 */

const PUBLIC_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const INTERNAL_URL =
  process.env.STRAPI_INTERNAL_URL || PUBLIC_URL;

const API_TOKEN = process.env.STRAPI_API_TOKEN;

export type StrapiMedia = {
  id: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  url: string;
  mime: string;
  formats?: Record<
    string,
    { url: string; width: number; height: number } | undefined
  >;
};

export type StrapiResponse<T> = {
  data: T;
  meta?: Record<string, unknown>;
};

export type StrapiCollection<T> = StrapiResponse<T[]>;

export function mediaUrl(media?: StrapiMedia | null, format?: string): string | null {
  if (!media) return null;
  const path =
    format && media.formats?.[format]
      ? media.formats[format]!.url
      : media.url;
  if (path.startsWith('http')) return path;
  return `${PUBLIC_URL}${path}`;
}

type FetchOptions = {
  locale?: string;
  filters?: Record<string, unknown>;
  populate?: string | Record<string, unknown> | string[];
  sort?: string | string[];
  pagination?: { page?: number; pageSize?: number; limit?: number };
  publicationState?: 'live' | 'preview';
  status?: 'published' | 'draft';
  revalidate?: number | false;
  cache?: RequestCache;
  tags?: string[];
};

function qs(params: Record<string, unknown>, prefix = ''): string {
  const parts: string[] = [];
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'object') {
          parts.push(qs(item as Record<string, unknown>, `${key}[${i}]`));
        } else {
          parts.push(`${encodeURIComponent(`${key}[${i}]`)}=${encodeURIComponent(String(item))}`);
        }
      });
    } else if (typeof v === 'object') {
      parts.push(qs(v as Record<string, unknown>, key));
    } else {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
    }
  }
  return parts.filter(Boolean).join('&');
}

export async function strapiFetch<T>(
  path: string,
  opts: FetchOptions = {},
): Promise<T> {
  const params: Record<string, unknown> = {};
  if (opts.locale) params.locale = opts.locale;
  if (opts.filters) params.filters = opts.filters;
  if (opts.populate) params.populate = opts.populate;
  if (opts.sort) params.sort = opts.sort;
  if (opts.pagination) params.pagination = opts.pagination;
  if (opts.publicationState) params.publicationState = opts.publicationState;
  if (opts.status) params.status = opts.status;

  const query = qs(params);
  const url = `${INTERNAL_URL}/api${path}${query ? `?${query}` : ''}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const next: Record<string, unknown> = {};
  if (opts.revalidate !== undefined) next.revalidate = opts.revalidate;
  if (opts.tags) next.tags = opts.tags;

  const res = await fetch(url, {
    headers,
    cache: opts.cache,
    next: Object.keys(next).length ? (next as { revalidate?: number; tags?: string[] }) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText} → ${path} :: ${text.slice(0, 200)}`);
  }

  return (await res.json()) as T;
}

export const strapiPublicUrl = PUBLIC_URL;

/**
 * Server-side Strapi call authenticated with the full-access API token.
 * Use for writes and for privileged reads (e.g. the moderation queue) from
 * Next.js route handlers — never expose the token to the browser. Returns the
 * raw Response so callers can branch on status.
 */
export async function strapiTokenFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (API_TOKEN) headers.set('Authorization', `Bearer ${API_TOKEN}`);
  return fetch(`${INTERNAL_URL}/api${path}`, {
    ...init,
    headers,
    cache: init.cache ?? 'no-store',
  });
}
