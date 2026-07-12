import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

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
  getRedditProvenance,
  REDDIT_THREAD_URL,
  REDDIT_SHOT,
  THREAD_TITLE,
} from '@/content/reddit-provenance';

const PATH = '/reddit-anticasino';

/**
 * "Corroborated on Reddit — with no link home" — a single-subject page on one
 * structural fact about how this story travels: secondary coverage can restate
 * the documented $NATRO events accurately while carrying no link back to the
 * primary record and no name for who compiled it. The example is a real
 * r/anticasino thread (screenshot). The thesis is provenance, carried by the
 * visible thread text and the subreddit's own posted rules — not by any claim
 * that a specific link was removed by a specific party, and not by insult to
 * the poster (who corroborates the record) or the platform. Copy is localised
 * via getRedditProvenance(); the verbatim thread quotes stay English.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const c = getRedditProvenance(loc);
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

export default async function RedditAnticasinoPage({
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
  const c = getRedditProvenance(loc);
  const pageUrl = absoluteUrl(loc, PATH);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${pageUrl}#article`,
    headline: c.metaTitle,
    inLanguage: loc,
    isAccessibleForFree: true,
    datePublished: '2026-07-12T00:00:00Z',
    dateModified: '2026-07-12T00:00:00Z',
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    about: [
      { '@id': 'https://natro.meme/#alex-natroshvili' },
      { '@type': 'Thing', name: '$NATRO Solana token launch' },
    ],
    mentions: [
      { '@id': 'https://natro.meme/#alex-natroshvili' },
      { '@id': 'https://natro.meme/#david-natroshvili' },
      { '@id': 'https://natro.meme/#spribe' },
    ],
    // The secondary coverage this page is about, cited as the discussed source.
    citation: [
      REDDIT_THREAD_URL,
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

        <blockquote className="mt-6 serif text-2xl md:text-3xl leading-tight font-medium text-[var(--color-damning)] border-l-4 border-[var(--color-accent)] pl-5">
          {c.pullQuote}
        </blockquote>

        {/* The thread itself — screenshot links out to the live discussion */}
        <figure className="mt-8">
          <a
            href={REDDIT_THREAD_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={THREAD_TITLE}
            className="group relative block w-full border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 overflow-hidden cursor-pointer"
          >
            <Image
              src={REDDIT_SHOT.src}
              alt={c.imgAlt}
              width={REDDIT_SHOT.width}
              height={REDDIT_SHOT.height}
              sizes="(max-width: 800px) 100vw, 760px"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
              priority
            />
          </a>
          <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug">
            {c.imgCaption}
          </figcaption>
        </figure>

        {/* The same story, told secondhand */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.threadKicker}</div>
          <Prose text={c.threadBody} className="text-base md:text-lg" />
        </section>

        {/* The link that isn't there */}
        <section className="mt-10 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">{c.missingKicker}</div>
          <Prose text={c.missingBody} className="text-base md:text-lg" />
        </section>

        {/* Why summaries travel without their source */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.whyKicker}</div>
          <Prose text={c.whyBody} className="text-base md:text-lg" />
        </section>

        {/* The primary record — the link the summary omitted */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.recordKicker}</div>
          <Prose text={c.recordBody} className="text-base md:text-lg" />
        </section>

        {/* Method & sources */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.methodKicker}</div>
          <Prose
            text={c.methodBody}
            className="text-sm text-[var(--color-ink-soft)]"
          />
        </section>

        {/* Right of reply */}
        <section className="mt-10 border-t border-[var(--color-rule)] pt-6">
          <div className="kicker mb-3">{c.replyKicker}</div>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {c.replyBefore}
            <Link href="/people/alex-natroshvili">{c.replyProfileLabel}</Link>
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
              <Link href="/the-name-in-search" className="block">
                The name in the search box →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Where the search demand came from — the query record
                </span>
              </Link>
            </li>
            <li>
              <Link href="/how-did-natroalex-make-his-money" className="block">
                How did NatroAlex make his money? →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  The record’s answer to the most-searched question
                </span>
              </Link>
            </li>
            <li>
              <Link href="/on-chain" className="block">
                On-chain verification →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Live token state, creator wallet activity
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
