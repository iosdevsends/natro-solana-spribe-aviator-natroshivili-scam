import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/seo';

const gscToken = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const yandexToken = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
const bingToken = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

// Site-verification tokens for the major search-console surfaces. Each one
// is opt-in via env so we don't ship invalid placeholders. To register:
//   - Google → search.google.com/search-console → set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
//   - Yandex → webmaster.yandex.com → set NEXT_PUBLIC_YANDEX_VERIFICATION
//   - Bing → www.bing.com/webmasters → set NEXT_PUBLIC_BING_SITE_VERIFICATION
// (Yandex matters specifically for the Russian search market; Google's signal
//  on its own doesn't propagate there.)
const verification = (() => {
  const v: NonNullable<Metadata['verification']> = {};
  if (gscToken) v.google = gscToken;
  if (yandexToken) v.yandex = yandexToken;
  if (bingToken) v.other = { 'msvalidate.01': bingToken };
  return Object.keys(v).length ? v : undefined;
})();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...(verification ? { verification } : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
