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
  getSearchRecord,
  GSC_QUERIES,
  BING_QUERIES,
  SELFDOXX_QUOTE,
  type QueryRow,
} from '@/content/search-record';

const PATH = '/the-name-in-search';

/**
 * "The name in the search box" — a single-subject page on one structural fact:
 * a launch built on a borrowed name wins the search result page by default, and
 * the demand it manufactured is visible in the file's own search consoles. The
 * thesis is carried by sourced query data (Google Search Console + Bing
 * Webmaster Tools, taken verbatim) and the project's own quotes, mirroring
 * /how-did-natroalex-make-his-money. Copy is localised via getSearchRecord();
 * the verbatim search strings and the founder line stay English.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const c = getSearchRecord(loc);
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

/** One typeset query table — matches the cream-paper / mono-figures aesthetic. */
function QueryTable({
  rows,
  showImpressions,
  colQuery,
  colImpr,
  colClicks,
}: {
  rows: QueryRow[];
  showImpressions: boolean;
  colQuery: string;
  colImpr: string;
  colClicks: string;
}) {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="border-b border-[var(--color-ink)]">
          <th className="sans text-[10px] uppercase tracking-widest text-[var(--color-ink-faint)] font-medium py-2 pr-3">
            {colQuery}
          </th>
          {showImpressions && (
            <th className="sans text-[10px] uppercase tracking-widest text-[var(--color-ink-faint)] font-medium py-2 px-3 text-right whitespace-nowrap">
              {colImpr}
            </th>
          )}
          <th className="sans text-[10px] uppercase tracking-widest text-[var(--color-ink-faint)] font-medium py-2 pl-3 text-right whitespace-nowrap">
            {colClicks}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr
            key={r.q}
            className="border-b border-[var(--color-rule-soft)] last:border-b-0"
          >
            <td
              className={`mono text-[13px] py-2 pr-3 break-words ${
                r.wealth ? 'text-[var(--color-accent)] font-medium' : ''
              }`}
            >
              {r.q}
            </td>
            {showImpressions && (
              <td className="mono text-[13px] py-2 px-3 text-right tabular-nums text-[var(--color-ink-soft)]">
                {r.impressions}
              </td>
            )}
            <td className="mono text-[13px] py-2 pl-3 text-right tabular-nums text-[var(--color-ink-soft)]">
              {r.clicks}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function SearchRecordPage({
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
  const c = getSearchRecord(loc);
  const pageUrl = absoluteUrl(loc, PATH);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${pageUrl}#article`,
    headline: c.metaTitle,
    inLanguage: loc,
    isAccessibleForFree: true,
    datePublished: '2026-06-10T00:00:00Z',
    dateModified: '2026-06-10T00:00:00Z',
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

        <blockquote className="mt-6 serif text-2xl md:text-3xl leading-tight font-medium text-[var(--color-damning)] border-l-4 border-[var(--color-accent)] pl-5">
          {c.pullQuote}
        </blockquote>

        {/* What people actually type — the real query data */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.dataKicker}</div>
          <p className="sans text-base md:text-lg leading-relaxed">{c.dataIntro}</p>

          <figure className="mt-6 border-y border-[var(--color-ink)] py-5">
            <QueryTable
              rows={GSC_QUERIES}
              showImpressions={false}
              colQuery={c.colQuery}
              colImpr={c.colImpr}
              colClicks={c.colClicks}
            />
            <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug">
              {c.gscCaption}
            </figcaption>
          </figure>

          <figure className="mt-6 border-y border-[var(--color-ink)] py-5">
            <QueryTable
              rows={BING_QUERIES}
              showImpressions
              colQuery={c.colQuery}
              colImpr={c.colImpr}
              colClicks={c.colClicks}
            />
            <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug">
              {c.bingCaption}
            </figcaption>
          </figure>

          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)] mt-4">
            {c.countriesNote}
          </p>
        </section>

        {/* The questions were planted — the self-doxx line, verbatim */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.plantedKicker}</div>
          <Prose text={c.plantedIntro} className="text-base md:text-lg" />
          <blockquote className="serif italic text-lg md:text-xl leading-snug mt-4 border-l-4 border-[var(--color-accent)] pl-5">
            &ldquo;{SELFDOXX_QUOTE}&rdquo;
          </blockquote>
          <Prose text={c.plantedAfter} className="text-base md:text-lg mt-4" />
        </section>

        {/* The record that answers them */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.answersKicker}</div>
          <Prose text={c.answersBody} className="text-base md:text-lg" />
        </section>

        {/* Why the name owns the search box — the structural point */}
        <section className="mt-10 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">{c.structureKicker}</div>
          <Prose text={c.structureBody} className="text-base md:text-lg" />
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
              <Link href="/how-did-natroalex-make-his-money" className="block">
                How did NatroAlex make his money? →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  The record’s answer to the most-searched question
                </span>
              </Link>
            </li>
            <li>
              <Link href="/people/alex-natroshvili" className="block">
                Alex Natroshvili — full profile →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  The founder, named by the project itself — with sources
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
