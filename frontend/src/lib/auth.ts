/**
 * Tiny Strapi auth helpers. Stores JWT in an httpOnly cookie set via Next.js
 * route handler (see app/api/auth/*).
 */

import { cookies } from 'next/headers';

const STRAPI_INTERNAL =
  process.env.STRAPI_INTERNAL_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const STRAPI_JWT_COOKIE = 'natro_jwt';

export type StrapiAuthUser = {
  id: number;
  username: string;
  email: string;
  displayName?: string;
  confirmed: boolean;
  blocked: boolean;
};

export async function readJwt(): Promise<string | null> {
  const c = await cookies();
  return c.get(STRAPI_JWT_COOKIE)?.value ?? null;
}

export async function getCurrentUser(): Promise<StrapiAuthUser | null> {
  const jwt = await readJwt();
  if (!jwt) return null;
  try {
    const res = await fetch(`${STRAPI_INTERNAL}/api/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return (await res.json()) as StrapiAuthUser;
  } catch {
    return null;
  }
}

export async function strapiAuthenticatedFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const jwt = await readJwt();
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (jwt) headers.set('Authorization', `Bearer ${jwt}`);
  return fetch(`${STRAPI_INTERNAL}${path}`, { ...init, headers, cache: 'no-store' });
}
