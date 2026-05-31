import { NextResponse } from 'next/server';
import { MODERATION_COOKIE, checkPassphrase, moderationToken } from '@/lib/moderation';

export async function POST(req: Request) {
  let body: { passphrase?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const token = moderationToken();
  if (!token) {
    return NextResponse.json(
      { error: 'Moderation is not configured (MODERATION_SECRET unset).' },
      { status: 503 },
    );
  }
  if (!body.passphrase || !checkPassphrase(body.passphrase)) {
    return NextResponse.json({ error: 'Incorrect passphrase.' }, { status: 401 });
  }

  const out = NextResponse.json({ ok: true });
  out.cookies.set({
    name: MODERATION_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12, // 12 hours
  });
  return out;
}

export async function DELETE() {
  const out = NextResponse.json({ ok: true });
  out.cookies.set({ name: MODERATION_COOKIE, value: '', path: '/', maxAge: 0 });
  return out;
}
