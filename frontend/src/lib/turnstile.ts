/**
 * Cloudflare Turnstile token verification.
 * Returns `true` only when verification passes (or when CAPTCHA is disabled
 * by leaving TURNSTILE_SECRET empty — useful for local dev).
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export const turnstileEnabled = (): boolean => {
  return !!process.env.TURNSTILE_SECRET && !!process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;
};

export async function verifyTurnstile(
  token: string | undefined | null,
  remoteIp?: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return { ok: true };
  if (!token) return { ok: false, reason: 'missing-turnstile-token' };

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.set('remoteip', remoteIp);

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      cache: 'no-store',
    });
    const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (data.success) return { ok: true };
    return {
      ok: false,
      reason: 'turnstile-failed:' + (data['error-codes']?.join(',') || 'unknown'),
    };
  } catch (err) {
    return { ok: false, reason: 'turnstile-network-error:' + (err as Error).message };
  }
}
