import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { Prose } from '@/components/Prose';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';
import { getPressContent } from '@/content/press-release';

const RELEASE_PUBLISHED_AT = '2026-05-28T12:24:00Z';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const press = getPressContent(loc);

  return {
    title: clampTitle(`${press.headline} — Press`),
    description: clampDescription(press.dek),
    alternates: buildAlternates(loc, '/press'),
    openGraph: {
      title: press.headline,
      description: press.dek,
      images: [OG_IMAGE],
      type: 'article',
      url: absoluteUrl(loc, '/press'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      publishedTime: RELEASE_PUBLISHED_AT,
      authors: ['@btc3050'],
    },
    robots: { index: true, follow: true },
  };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;
  const press = getPressContent(loc);
  const bundle = await loadCaseFile(loc);
  const url = absoluteUrl(loc, '/press');

  // PressRelease JSON-LD — type: 'PressRelease' is part of schema.org's
  // NewsArticle hierarchy (CreativeWork > Article > NewsArticle > ReportageNewsArticle).
  // Using NewsArticle with isPartOf/keywords below for compatibility.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: press.headline,
    name: press.headline,
    description: press.dek,
    datePublished: RELEASE_PUBLISHED_AT,
    dateModified: RELEASE_PUBLISHED_AT,
    inLanguage: loc,
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: '@btc3050',
      url: 'https://t.me/btc3050',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The NATRO File',
      url: absoluteUrl(loc, ''),
    },
    about: [
      { '@id': 'https://natro.meme/#alex-natroshvili' },
      { '@id': 'https://natro.meme/#david-natroshvili' },
      { '@id': 'https://natro.meme/#spribe' },
      { '@type': 'Thing', name: '$NATRO Solana token launch' },
    ],
    keywords: [
      'press release',
      'Alex Natroshvili',
      'David Natroshvili',
      'NATRO',
      '$NATRO',
      'Spribe',
      'Aviator',
      'Solana memecoin',
      'Pump.fun',
      'crypto scam',
      'rug pull',
      'investigation',
    ].join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CeremonialMasthead
        locale={loc}
        tagline={bundle.config.tagline}
        uiStrings={bundle.config.uiStrings}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />
      <main
        className="press-release relative z-[2] mx-auto"
        style={{
          maxWidth: '780px',
          padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px',
        }}
      >
        {/* Strapline */}
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6 label-strap text-[10px]">
          <span className="text-[var(--color-accent)] font-medium">
            {press.forImmediateRelease.toUpperCase()}
          </span>
          <span>{press.dateline}</span>
        </div>

        {/* Headline */}
        <h1 className="serif text-3xl md:text-[40px] leading-[1.15] font-medium tracking-tight">
          {press.headline}
        </h1>

        {/* Dek */}
        <p className="mt-5 serif italic text-lg md:text-xl text-[var(--color-ink-soft)] leading-snug">
          {press.dek}
        </p>

        <hr className="rule-divider-strong" />

        {/* Lede */}
        <Prose text={press.lede} className="text-base md:text-lg leading-relaxed" />

        {/* Key facts */}
        <section className="mt-10">
          <h2 className="kicker mb-4">{press.keyFactsHeading}</h2>
          <ul className="space-y-4">
            {press.keyFacts.map((fact, i) => (
              <li
                key={i}
                className="pl-5 border-l-2 border-[var(--color-rule)] py-1"
              >
                <Prose text={fact} className="text-[15px] leading-relaxed" />
              </li>
            ))}
          </ul>
        </section>

        {/* Case file */}
        <section className="mt-10">
          <h2 className="kicker mb-3">{press.caseFileHeading}</h2>
          <Prose text={press.caseFileBody} className="text-[15px] leading-relaxed" />
        </section>

        {/* Age note */}
        <section className="mt-10 bg-[var(--color-paper-warm)]/60 border border-[var(--color-rule)] p-5">
          <h2 className="kicker mb-3">{press.ageNoteHeading}</h2>
          <Prose text={press.ageNoteBody} className="text-[15px] leading-relaxed" />
        </section>

        {/* Right of reply */}
        <section className="mt-10">
          <h2 className="kicker mb-3">{press.rorHeading}</h2>
          <Prose text={press.rorBody} className="text-[15px] leading-relaxed" />
        </section>

        {/* Contact */}
        <section className="mt-10 border-t border-[var(--color-rule)] pt-6">
          <h2 className="kicker mb-3">{press.contactHeading}</h2>
          <Prose text={press.contactBody} className="text-[15px] leading-relaxed" />
        </section>

        {/* Downloads — hidden in print */}
        <section className="mt-12 no-print">
          <h2 className="kicker mb-4">{press.downloadsHeading}</h2>
          <ul className="space-y-2 sans text-sm">
            <li>
              →{' '}
              <a
                href="/press/press-release.txt"
                className="underline"
                download
              >
                {press.downloadsLabels.txt}
              </a>
            </li>
            <li>
              →{' '}
              <Link href="/press/fact-sheet" className="underline">
                {press.downloadsLabels.factSheet}
              </Link>{' '}
              <span className="text-[var(--color-ink-faint)]">
                — {press.downloadsLabels.factSheetSub}
              </span>
            </li>
            <li>
              →{' '}
              <a
                href="https://web.archive.org/web/20260521213245/https://natrocoin.net/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                {press.downloadsLabels.waybackArchive}
              </a>
            </li>
            <li>
              →{' '}
              <Link href="/" className="underline">
                {press.downloadsLabels.fullFile}
              </Link>
            </li>
            <li>
              →{' '}
              <Link href="/#gallery" className="underline">
                {press.downloadsLabels.exhibitArchive}
              </Link>
            </li>
          </ul>
        </section>

        {/* Print marker */}
        <div className="mt-12 text-center label-strap text-[10px]">### END ###</div>
      </main>
    </>
  );
}
