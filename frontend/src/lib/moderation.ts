/**
 * Lightweight editor gate for the comment-moderation admin.
 *
 * This is intentionally separate from the reader account system (Strapi
 * users-permissions): moderation is a single shared editor passphrase, not a
 * per-user role. The passphrase lives in the server-only `MODERATION_SECRET`
 * env var. On success we set an httpOnly cookie holding a hash of the secret
 * (never the secret itself), and every admin route re-checks it.
 *
 * The privileged Strapi calls behind these routes use the full-access API
 * token, so even with the cookie the browser never sees the token.
 */

import { cookies } from 'next/headers';
import { createHash, timingSafeEqual } from 'crypto';

export const MODERATION_COOKIE = 'natro_mod';

function secret(): string | null {
  return process.env.MODERATION_SECRET || null;
}

/** Stable, non-reversible cookie marker derived from the current secret. */
export function moderationToken(): string | null {
  const s = secret();
  if (!s) return null;
  return createHash('sha256').update(`mod:${s}`).digest('hex');
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

/** True when the request carries a valid moderator cookie. */
export async function isModerator(): Promise<boolean> {
  const expected = moderationToken();
  if (!expected) return false; // no secret configured → admin is closed
  const c = await cookies();
  const got = c.get(MODERATION_COOKIE)?.value;
  return !!got && safeEqual(got, expected);
}

/** Verify a submitted passphrase against MODERATION_SECRET (constant time). */
export function checkPassphrase(passphrase: string): boolean {
  const s = secret();
  if (!s) return false;
  return safeEqual(passphrase, s);
}

export function moderationConfigured(): boolean {
  return !!secret();
}
