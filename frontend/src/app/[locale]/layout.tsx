import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import { locales, isRtlLocale, type Locale } from '@/i18n/routing';
import { Analytics } from '@/components/Analytics';
import { ConsentBanner } from '@/components/ConsentBanner';
import { SkipToContent } from '@/components/SkipToContent';
import { ReadingProgress } from '@/components/ReadingProgress';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  const dir = isRtlLocale(locale) ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        {/* Preconnect to GTM only when GA is actually configured. React 19
            hoists <link rel="preconnect"> rendered anywhere in the tree
            into <head>, so no <head> JSX wrapper (which App Router does
            not support in a Server Component layout). Skipped on builds
            without GA_ID so we don't open a TLS connection nothing uses. */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <link
              rel="preconnect"
              href="https://www.googletagmanager.com"
              crossOrigin=""
            />
            <link
              rel="dns-prefetch"
              href="https://www.googletagmanager.com"
            />
          </>
        )}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SkipToContent />
          <ReadingProgress />
          {children}
          {process.env.NEXT_PUBLIC_GA_ID && <ConsentBanner />}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
