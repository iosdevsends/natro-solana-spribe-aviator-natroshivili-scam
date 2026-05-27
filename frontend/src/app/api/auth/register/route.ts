import { NextResponse } from 'next/server';
import { STRAPI_JWT_COOKIE } from '@/lib/auth';
import { verifyTurnstile } from '@/lib/turnstile';

const STRAPI_INTERNAL =
  process.env.STRAPI_INTERNAL_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function POST(req: Request) {
  let body: {
    username?: string;
    email?: string;
    password?: string;
    displayName?: string;
    turnstileToken?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { username, email, password, displayName, turnstileToken } = body;
  if (!username || !email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const captcha = await verifyTurnstile(
    turnstileToken,
    req.headers.get('cf-connecting-ip') || req.headers.get('x-real-ip') || undefined,
  );
  if (!captcha.ok) {
    return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
  }

  const res = await fetch(`${STRAPI_INTERNAL}/api/auth/local/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password, displayName }),
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json(
      { error: data?.error?.message || 'Registration failed' },
      { status: res.status },
    );
  }

  const out = NextResponse.json({ user: data.user });
  out.cookies.set({
    name: STRAPI_JWT_COOKIE,
    value: data.jwt,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return out;
}
