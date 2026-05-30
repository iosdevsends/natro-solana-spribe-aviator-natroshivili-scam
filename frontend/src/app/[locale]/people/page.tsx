import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { loadCaseFile } from '@/lib/case-file';
import {
  buildAlternates,
  absoluteUrl,
  ogLocale,
  ogLocaleAlternates,
} from '@/lib/seo';
import {
  PEOPLE_PROFILES,
  getLocalizedPersonProfile,
  getPeopleChrome,
} from '@/content/people';

const PEOPLE_PATH = '/people';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const chrome = getPeopleChrome(loc);
  const title = chrome.indexMetaTitle;
  const description = chrome.indexMetaDescription;
  return {
    title,
    description,
    alternates: buildAlternates(loc, PEOPLE_PATH),
    openGraph: {
      title,
      description,
      type: 'website',
      url: absoluteUrl(loc, PEOPLE_PATH),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  };
}

export default async function PeopleIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;

  const bundle = await loadCaseFile(loc);
  const ui = bundle.config.uiStrings || {};
  const chrome = getPeopleChrome(loc);
  const profiles = PEOPLE_PROFILES.map(
    (p) => getLocalizedPersonProfile(p.slug, loc) ?? p,
  );

  return (
    <>
      <CeremonialMasthead
        locale={loc}
        tagline={bundle.config.tagline}
        uiStrings={ui}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '760px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-2">{chrome.indexKicker}</div>
        <h1 className="serif text-[26px] sm:text-3xl md:text-4xl leading-tight font-medium tracking-tight">
          {chrome.indexH1}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)]">
          {chrome.indexStandfirst}
        </p>

        <hr className="rule-divider-strong" />

        <ul className="space-y-6">
          {profiles.map((p) => (
            <li key={p.slug}>
              <article className="border border-[var(--color-rule)] p-5 bg-[var(--color-paper-warm)]/50">
                <div className="kicker mb-2">{p.role}</div>
                <h2 className="serif text-xl font-medium mb-2">
                  <Link href={`/people/${p.slug}` as `/people/${string}`}>
                    {p.name}
                  </Link>
                </h2>
                <p className="sans text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {p.tagline}
                </p>
                <Link
                  href={`/people/${p.slug}` as `/people/${string}`}
                  className="mt-4 inline-block sans text-xs uppercase tracking-widest"
                >
                  {chrome.readFullProfile}
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <nav
          aria-label="Where to next"
          className="mt-12 pt-8 border-t-2 border-[var(--color-ink)]"
        >
          <div className="kicker mb-4">{chrome.whereToNext}</div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 sans text-sm">
            <li>
              <Link href="/" className="block">
                {chrome.fullFile}
              </Link>
            </li>
            <li>
              <Link href="/on-chain" className="block">
                {chrome.onchain}
              </Link>
            </li>
            <li>
              <Link href="/press" className="block">
                {chrome.press}
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
