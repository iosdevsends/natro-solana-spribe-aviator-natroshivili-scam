import { NextResponse } from 'next/server';
import { STRAPI_JWT_COOKIE } from '@/lib/auth';

export async function POST() {
  const out = NextResponse.json({ ok: true });
  out.cookies.set({
    name: STRAPI_JWT_COOKIE,
    value: '',
    httpOnly: true,
    path: '/',
    maxAge: 0,
  });
  return out;
}
