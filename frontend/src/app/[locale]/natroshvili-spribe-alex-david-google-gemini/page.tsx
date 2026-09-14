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
  getGeminiRecord,
  GEMINI_SHOTS,
  GEMINI_CONVERSATION_DATE,
} from '@/content/gemini-record';

const PATH = '/natroshvili-spribe-alex-david-google-gemini';

/**
 * "Google Gemini swapped the record — then admitted it" — a single-subject page
 * on one conversation in which Gemini recounted the $NATRO events correctly,
 * omitted the case file that documents them, then called natro.meme the
 * launch's own "primary landing mirror" before admitting "misrepresentation"
 * and "outright fabrication". The thesis is carried by Gemini's verbatim output
 * (cropped captures + quotes), plus one checkable rebuttal in the file's voice:
 * natro.meme was published a week after the launch. No claim is made about
 * Google's intent or Gemini's design. Copy is localised via getGeminiRecord().
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const c = getGeminiRecord(loc);
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

export default async function GoogleGeminiPage({
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
  const c = getGeminiRecord(loc);
  const pageUrl = absoluteUrl(loc, PATH);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${pageUrl}#article`,
    headline: c.metaTitle,
    inLanguage: loc,
    isAccessibleForFree: true,
    datePublished: `${GEMINI_CONVERSATION_DATE}T00:00:00Z`,
    dateModified: `${GEMINI_CONVERSATION_DATE}T00:00:00Z`,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    about: [
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI assistant' },
      { '@type': 'Thing', name: '$NATRO Solana token launch' },
    ],
    mentions: [
      { '@type': 'Organization', name: 'Google' },
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

        <figure className="mt-6">
          <blockquote className="serif text-2xl md:text-3xl leading-tight font-medium text-[var(--color-damning)] border-l-4 border-[var(--color-accent)] pl-5">
            {c.pullQuote}
          </blockquote>
          <figcaption className="mt-2 pl-6 sans text-xs text-[var(--color-ink-faint)]">
            {c.pullQuoteAttribution}
          </figcaption>
        </figure>

        {/* In short */}
        <section className="mt-10 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">{c.summaryKicker}</div>
          <ol className="space-y-4">
            {c.summary.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mono text-xs text-[var(--color-ink-faint)] pt-1.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Prose text={item} className="text-base md:text-lg" />
              </li>
            ))}
          </ol>
        </section>

        {/* The conversation, step by step */}
        <section className="mt-12">
          <div className="kicker mb-6">{c.stepsKicker}</div>
          <ol className="space-y-14">
            {c.steps.map((step, i) => {
              const shot = GEMINI_SHOTS[step.shot];
              return (
                <li key={i}>
                  <h2 className="serif text-2xl md:text-3xl leading-tight font-medium">
                    <span className="mono text-sm text-[var(--color-ink-faint)] mr-3 align-middle">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step.title}
                  </h2>

                  {step.exchanges.map((ex, j) => (
                    <div key={j} className="mt-5">
                      <div className="sans text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                        {ex.paraphrased ? c.paraphrasedLabel : c.askedLabel}
                      </div>
                      <p className="mt-1 sans text-sm md:text-base leading-relaxed text-[var(--color-ink-soft)]">
                        {ex.prompt}
                      </p>
                      <div className="mt-4 sans text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
                        {c.geminiLabel}
                      </div>
                      <blockquote className="mt-2 border-l-2 border-[var(--color-accent)] pl-4 space-y-3">
                        {ex.quotes.map((q, k) => (
                          <p key={k} className="serif italic text-base md:text-lg leading-snug">
                            {q}
                          </p>
                        ))}
                      </blockquote>
                    </div>
                  ))}

                  <figure className="mt-6">
                    <a
                      href={shot.src}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group relative block w-full border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 overflow-hidden cursor-zoom-in"
                    >
                      <Image
                        src={shot.src}
                        alt={step.imgAlt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(max-width: 800px) 100vw, 760px"
                        className="w-full h-auto"
                        priority={i === 0}
                      />
                    </a>
                    <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug">
                      {c.captureLabel} {i + 1} {c.captureOf} {c.steps.length} · Google Gemini ·{' '}
                      {GEMINI_CONVERSATION_DATE}. {c.captureHint}
                    </figcaption>
                  </figure>

                  <div className="mt-5">
                    <Prose text={step.note} className="text-base md:text-lg" />
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* What was swapped */}
        <section className="mt-14 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">{c.swapKicker}</div>
          <Prose text={c.swapBody} className="text-base md:text-lg" />
        </section>

        {/* Why it matters */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.whyKicker}</div>
          <Prose text={c.whyBody} className="text-base md:text-lg" />
        </section>

        {/* Ask it yourself */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.checkKicker}</div>
          <Prose text={c.checkBody} className="text-base md:text-lg" />
        </section>

        {/* The primary record */}
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
            <Link href="/press">{c.replyPressLabel}</Link>
            {c.replyMid}
            <Link href="/on-chain">{c.replyOnChainLabel}</Link>
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
              <Link href="/reddit-anticasino" className="block">
                The story on Reddit →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Corroborated secondhand — with no link home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/the-name-in-search" className="block">
                The name in the search box →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Where the search demand came from — the query record
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
