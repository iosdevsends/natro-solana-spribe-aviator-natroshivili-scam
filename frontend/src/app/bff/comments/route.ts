import { NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';
import { strapiTokenFetch } from '@/lib/strapi';
import { verifyTurnstile } from '@/lib/turnstile';

/**
 * Public comment wall endpoint. Unlike `/api/stories` (which requires an
 * account), comments are intentionally low-friction — anyone can leave one —
 * so abuse control leans on Turnstile + a per-IP rate limit, and every comment
 * lands in moderation (`pending`) before it is ever shown.
 *
 * No JWT here: writes go to Strapi with the server-side full-access API token,
 * so the Strapi public role can stay fully locked down.
 */

const CommentSchema = z.object({
  body: z.string().min(2).max(1500),
  authorDisplayName: z.string().max(80).optional(),
  isAnonymous: z.boolean().optional(),
  country: z.string().max(64).optional(),
  locale: z.string().min(2).max(5).optional(),
  turnstileToken: z.string().optional(),
});

const SUBMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const SUBMIT_PER_WINDOW = 4; // comments per IP per hour

function clientIp(req: Request): string | undefined {
  return (
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-real-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    undefined
  );
}

function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT || 'natro-comment-salt';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 32);
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = CommentSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid comment', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const ip = clientIp(req);
  const captcha = await verifyTurnstile(parsed.data.turnstileToken, ip);
  if (!captcha.ok) {
    return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
  }

  const ipHash = ip ? hashIp(ip) : undefined;

  // Per-IP rate limit: count this hash's submissions in the last hour via the
  // privileged moderation-queue endpoint (advisory — never blocks on failure).
  if (ipHash) {
    try {
      const since = new Date(Date.now() - SUBMIT_WINDOW_MS).toISOString();
      const params = new URLSearchParams({
        ipHash,
        since,
        status: 'all',
        pageSize: '1',
      });
      const countRes = await strapiTokenFetch(
        `/case-comments/moderation/queue?${params.toString()}`,
      );
      if (countRes.ok) {
        const json = (await countRes.json()) as {
          meta?: { pagination?: { total?: number } };
        };
        const total = json.meta?.pagination?.total ?? 0;
        if (total >= SUBMIT_PER_WINDOW) {
          return NextResponse.json(
            { error: `Rate limit reached (${SUBMIT_PER_WINDOW}/hour). Please try again later.` },
            { status: 429 },
          );
        }
      }
    } catch {
      // Advisory only.
    }
  }

  const d = parsed.data;
  const isAnonymous = d.isAnonymous ?? false;
  const displayName =
    isAnonymous || !d.authorDisplayName
      ? undefined
      : DOMPurify.sanitize(d.authorDisplayName, { ALLOWED_TAGS: [] }).slice(0, 80);

  const payload = {
    body: DOMPurify.sanitize(d.body, { ALLOWED_TAGS: [] }),
    authorDisplayName: displayName,
    isAnonymous,
    country: d.country
      ? DOMPurify.sanitize(d.country, { ALLOWED_TAGS: [] }).slice(0, 64)
      : undefined,
    localeSubmitted: d.locale,
    ipHash,
  };

  try {
    const res = await strapiTokenFetch('/case-comments', {
      method: 'POST',
      body: JSON.stringify({ data: payload }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error?.message || 'Submit failed' },
        { status: res.status },
      );
    }
    return NextResponse.json({ ok: true, id: data?.data?.id });
  } catch {
    return NextResponse.json(
      { error: 'Cannot reach the server right now. Please try again later.' },
      { status: 502 },
    );
  }
}
