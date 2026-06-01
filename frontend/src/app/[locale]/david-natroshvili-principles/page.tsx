import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { Prose } from '@/components/Prose';
import { loadCaseFile } from '@/lib/case-file';
import {
  buildAlternates,
  absoluteUrl,
  ogLocale,
  ogLocaleAlternates,
  clampTitle,
  clampDescription,
  OG_IMAGE,
} from '@/lib/seo';
import {
  getDavidPrinciples,
  PRINCIPLES,
  PRESALE_1,
  PRESALE_2,
  PRESALE_3,
  PRESALE_ATTRIB,
} from '@/content/david-principles';

const PATH = '/david-natroshvili-principles';

/**
 * "Stated values, documented conduct" — a single-subject page built around
 * David Natroshvili's public "My core principles & insights" Instagram
 * carousel, set beside his documented, first-person $NATRO presale
 * solicitation. The page renders NO accusation in its own voice: the
 * juxtaposition is built entirely from his own verbatim words, attributed,
 * and the reader draws the conclusion. Copy is localised via
 * getDavidPrinciples(); verbatim quotes stay English.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const c = getDavidPrinciples(loc);
  return {
    title: clampTitle(c.metaTitle),
    description: clampDescription(c.metaDescription),
    alternates: buildAlternates(loc, PATH),
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [OG_IMAGE],
      type: 'article',
      url: absoluteUrl(loc, PATH),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title: c.metaTitle, description: c.metaDescription, images: [OG_IMAGE.url] },
    robots: { index: true, follow: true },
  };
}

export default async function DavidNatroshviliPrinciplesPage({
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
  const c = getDavidPrinciples(loc);
  const pageUrl = absoluteUrl(loc, PATH);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${pageUrl}#article`,
    headline: c.metaTitle,
    inLanguage: loc,
    isAccessibleForFree: true,
    datePublished: '2026-06-01T00:00:00Z',
    dateModified: '2026-06-01T00:00:00Z',
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    about: [
      { '@id': 'https://natro.meme/#david-natroshvili' },
      { '@type': 'Thing', name: '$NATRO Solana token launch' },
    ],
    mentions: [
      { '@id': 'https://natro.meme/#david-natroshvili' },
      { '@id': 'https://natro.meme/#spribe' },
    ],
    citation: [
      'https://web.archive.org/web/20260521213245/https://natrocoin.net/',
      'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CeremonialMasthead
        locale={loc}
        tagline={bundle.config.tagline}
        uiStrings={ui}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />

      <main
        id="main"
        className="relative z-[2] mx-auto"
        style={{
          maxWidth: '760px',
          padding: 'clamp(20px, 4vw, 56px) clamp(16px, 5vw, 56px) 100px',
        }}
      >
        <div className="kicker mb-3">{c.kicker}</div>
        <h1 className="serif text-[30px] sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight">
          {c.h1}
        </h1>
        <p className="mt-4 serif italic text-lg md:text-xl text-[var(--color-ink-soft)] leading-snug">
          {c.standfirst}
        </p>

        {/* His post — verbatim slides */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.postKicker}</div>
          <p className="sans text-base md:text-lg leading-relaxed mb-5">{c.postIntro}</p>
          <ul className="space-y-4">
            {PRINCIPLES.map((p) => (
              <li
                key={p.title}
                className="border-l-4 border-[var(--color-rule)] pl-5"
              >
                <p className="serif text-lg md:text-xl font-medium leading-snug">
                  &ldquo;{p.title}&rdquo;
                </p>
                <p className="serif italic text-base md:text-lg text-[var(--color-ink-soft)] leading-snug mt-1">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 sans text-[11px] text-[var(--color-ink-faint)]">
            {c.postAttrib}
          </p>
        </section>

        {/* What the same account solicited — verbatim presale Stories */}
        <section className="mt-10 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">{c.conductKicker}</div>
          <Prose text={c.conductBody} className="text-base md:text-lg" />
          <blockquote className="serif italic text-lg md:text-xl leading-snug mt-5 border-l-4 border-[var(--color-accent)] pl-5 text-[var(--color-damning)]">
            &ldquo;{PRESALE_1}&rdquo;
          </blockquote>
          <blockquote className="serif italic text-lg md:text-xl leading-snug mt-4 border-l-4 border-[var(--color-accent)] pl-5 text-[var(--color-damning)]">
            &ldquo;{PRESALE_2}&rdquo;
          </blockquote>
          <blockquote className="serif italic text-lg md:text-xl leading-snug mt-4 border-l-4 border-[var(--color-accent)] pl-5 text-[var(--color-damning)]">
            &ldquo;{PRESALE_3}&rdquo;
          </blockquote>
          <p className="mt-3 sans text-[11px] text-[var(--color-ink-faint)]">
            {PRESALE_ATTRIB}
          </p>
        </section>

        {/* The two records, side by side */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.juxtaKicker}</div>
          <Prose text={c.juxtaBody} className="text-base md:text-lg" />
        </section>

        {/* Right of reply */}
        <section className="mt-10 border-t border-[var(--color-rule)] pt-6">
          <div className="kicker mb-3">{c.replyKicker}</div>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {c.replyBefore}
            <Link href="/people/david-natroshvili">{c.replyProfileLabel}</Link>
            {c.replyMid}
            <Link href="/press">{c.replyPressLabel}</Link>
            {c.replyAfter}
          </p>
        </section>

        {/* Where to next (English, matching the other long-form pages) */}
        <nav
          aria-label="Where to next"
          className="mt-12 pt-8 border-t-2 border-[var(--color-ink)]"
        >
          <div className="kicker mb-4">Where to next</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sans text-sm">
            <li>
              <Link href="/people/david-natroshvili" className="block">
                David Natroshvili — full profile →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  The verified presale solicitation, in his own words
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                The full case file →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Promise · Reality · Scrub · Voices · People · Sources
                </span>
              </Link>
            </li>
            <li>
              <Link href="/reputation" className="block">
                The reputation wall →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Can a reputation be sold this cheaply?
                </span>
              </Link>
            </li>
            <li>
              <Link href="/press" className="block">
                Press kit &amp; right of reply →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Fact sheet, contacts, formal notice
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
