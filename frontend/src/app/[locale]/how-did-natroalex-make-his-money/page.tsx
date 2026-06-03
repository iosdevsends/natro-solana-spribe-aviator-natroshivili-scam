import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { Prose } from '@/components/Prose';
import { LightboxLazy } from '@/components/LightboxLazy';
import { loadCaseFile } from '@/lib/case-file';
import { strapiPublicUrl } from '@/lib/strapi';
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
  getNatroMoney,
  SELFDOXX_QUOTE,
  PERSONA,
  FAQ_QUOTE,
  STFU_EXHIBIT,
  HERO_EXHIBIT_SLUG,
  getStfuCaption,
  DAVID_STORIES,
  getDavidStoriesIntro,
} from '@/content/natro-money';

const PATH = '/how-did-natroalex-make-his-money';
const PROFILE_IMG = '/exhibits/ex02-natroalex-instagram-profile.png';

/**
 * "How did NatroAlex make his money?" — a single-subject page answering one
 * question strictly from the documented record. The thesis (the credibility on
 * offer was the family name, not an independent track record; the one launch
 * that name fronted took retail money in and collapsed ~98%) is carried by
 * sourced facts and verbatim quotes, mirroring /david-natroshvili-scam. Copy is
 * localised via getNatroMoney(); the founder line, the persona descriptor, and
 * the natrocoin.net FAQ line stay in English — they are sacred quotes.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const c = getNatroMoney(loc);
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

export default async function NatroMoneyPage({
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
  const c = getNatroMoney(loc);
  const stfu = getStfuCaption(loc);
  const stories = getDavidStoriesIntro(loc);
  const pageUrl = absoluteUrl(loc, PATH);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${pageUrl}#article`,
    headline: c.metaTitle,
    inLanguage: loc,
    isAccessibleForFree: true,
    datePublished: '2026-06-04T00:00:00Z',
    dateModified: '2026-06-04T00:00:00Z',
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

        {/* The subject — the verified @natroalex profile */}
        <figure className="mt-8">
          <button
            type="button"
            data-exhibit={HERO_EXHIBIT_SLUG}
            aria-label={ui.openFullScreen || 'Open full screen'}
            className="group relative block w-full max-w-[560px] mx-auto border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 overflow-hidden cursor-zoom-in"
          >
            <Image
              src={PROFILE_IMG}
              alt={c.imgAlt}
              width={1823}
              height={1100}
              sizes="(max-width: 640px) 90vw, 560px"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </button>
          <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug max-w-[520px] mx-auto text-center">
            {c.imgCaption}
          </figcaption>
        </figure>

        {/* What the pitch said about him — the self-doxx line, verbatim */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.selfDoxxKicker}</div>
          <p className="sans text-base md:text-lg leading-relaxed">{c.selfDoxxIntro}</p>
          <blockquote className="serif italic text-lg md:text-xl leading-snug mt-4 border-l-4 border-[var(--color-accent)] pl-5">
            &ldquo;{SELFDOXX_QUOTE}&rdquo;
          </blockquote>
          <Prose text={c.selfDoxxAfter} className="text-base md:text-lg mt-4" />
        </section>

        {/* The asset, described — persona, no independent track record */}
        <section className="mt-10 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">{c.assetKicker}</div>
          <p className="sans text-[11px] text-[var(--color-ink-faint)] mb-3">
            &ldquo;{PERSONA}&rdquo;
          </p>
          <Prose text={c.assetBody} className="text-base md:text-lg" />
        </section>

        {/* The one documented money event */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.moneyKicker}</div>
          <Prose text={c.moneyBody} className="text-base md:text-lg" />
        </section>

        {/* David's pre-launch Stories — the solicitation, from the father's account */}
        <section className="mt-10">
          <div className="kicker mb-3">{stories.kicker}</div>
          <p className="sans text-base md:text-lg leading-relaxed">{stories.intro}</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {DAVID_STORIES.map((s) => (
              <figure key={s.img}>
                <button
                  type="button"
                  data-exhibit={s.slug}
                  aria-label={ui.openFullScreen || 'Open full screen'}
                  className="group relative block w-full border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 overflow-hidden cursor-zoom-in"
                >
                  <Image
                    src={s.img}
                    alt={s.caption}
                    width={s.width}
                    height={s.height}
                    sizes="(max-width: 640px) 45vw, 240px"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="mt-2 sans text-[10px] text-[var(--color-ink-faint)] leading-snug">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* The refusal — Exhibit 20, the "stfu" DM */}
        <section className="mt-10">
          <div className="kicker mb-3">{stfu.kicker}</div>
          <figure className="mt-2">
            <button
              type="button"
              data-exhibit={STFU_EXHIBIT.slug}
              aria-label={ui.openFullScreen || 'Open full screen'}
              className="group relative block w-full max-w-[560px] mx-auto border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 overflow-hidden cursor-zoom-in"
            >
              <Image
                src={STFU_EXHIBIT.img}
                alt={stfu.alt}
                width={STFU_EXHIBIT.width}
                height={STFU_EXHIBIT.height}
                sizes="(max-width: 640px) 90vw, 560px"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug max-w-[520px] mx-auto text-center">
              <Prose text={stfu.caption} className="!gap-1" />
              <span className="block mt-1">{STFU_EXHIBIT.attrib}</span>
            </figcaption>
          </figure>
        </section>

        {/* His own figure — recorded as a claim, not a fact */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.figureKicker}</div>
          <Prose text={c.figureBody} className="text-base md:text-lg" />
        </section>

        {/* The line they wrote themselves */}
        <section className="mt-10">
          <div className="kicker mb-3">{c.lineKicker}</div>
          <p className="sans text-base md:text-lg leading-relaxed">{c.lineIntro}</p>
          <blockquote className="serif italic text-xl md:text-2xl leading-snug mt-4 border-l-4 border-[var(--color-accent)] pl-5 text-[var(--color-damning)]">
            &ldquo;{FAQ_QUOTE}&rdquo;
          </blockquote>
          <p className="sans text-base md:text-lg leading-relaxed mt-4">{c.lineAfter}</p>
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
              <Link href="/people/alex-natroshvili" className="block">
                Alex Natroshvili — full profile →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  The founder, named by the project itself — with sources
                </span>
              </Link>
            </li>
            <li>
              <Link href="/david-natroshvili-scam" className="block">
                David Natroshvili &amp; the $NATRO scam →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  The reputation that was the collateral, and who lent it
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

      {/* Click any exhibit on this page to open it full-screen (with prev/next
          across the whole case-file set, keyboard nav, and an "Original" link). */}
      <LightboxLazy
        exhibits={bundle.exhibits}
        publicStrapiUrl={strapiPublicUrl}
        uiStrings={ui}
      />
    </>
  );
}
