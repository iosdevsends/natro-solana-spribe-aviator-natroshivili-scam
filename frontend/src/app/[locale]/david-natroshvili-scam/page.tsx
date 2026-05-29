import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

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

const PATH = '/david-natroshvili-scam';
const AWARD_IMG = '/exhibits/ex26-david-game-changers-no1.jpg';

/**
 * "David Natroshvili & the $NATRO scam" — a single-subject page built around
 * one artifact: the iGamingExpress "Game Changers 2026" graphic ranking David
 * Natroshvili #1 of the Top 100 Most Influential People in iGaming, posted by
 * the official @spribe.co account ("Cheers to our leader!") while the $NATRO
 * fallout was live. Sets the accolade — the reputation at its quoted peak —
 * against the documented NATRO record. Deadpan; sourced; the contrast carries
 * it. Slug targets the "david natroshvili scam" search intent.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const title =
    'David Natroshvili & the $NATRO scam — #1 Most Influential in iGaming';
  const description =
    'David Natroshvili (Founder & CEO of Spribe) was named #1 of the Top 100 Most Influential People in iGaming, "Game Changers 2026." The same reputation was the collateral on the $NATRO Solana token, which collapsed ~98% — refunds refused, the evidence scrubbed. A documented case in reputation pricing.';
  return {
    title,
    description,
    alternates: buildAlternates(loc, PATH),
    openGraph: {
      title,
      description,
      type: 'article',
      url: absoluteUrl(loc, PATH),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  };
}

export default async function DavidNatroshviliScamPage({
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
  const pageUrl = absoluteUrl(loc, PATH);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${pageUrl}#article`,
    headline:
      'David Natroshvili & the $NATRO scam — #1 Most Influential in iGaming',
    inLanguage: loc,
    isAccessibleForFree: true,
    datePublished: '2026-05-30T00:00:00Z',
    dateModified: '2026-05-30T00:00:00Z',
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
        // eslint-disable-next-line react/no-danger
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
        <div className="kicker mb-3">Reputation pricing · the accolade</div>
        <h1 className="serif text-[30px] sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight">
          How the most influential man in iGaming sold his reputation.
        </h1>
        <p className="mt-4 serif italic text-lg md:text-xl text-[var(--color-ink-soft)] leading-snug">
          Ranked #1 of the &ldquo;Top 100 Most Influential People in
          iGaming&rdquo; &mdash; and the record of the $NATRO scam that
          reputation was spent on.
        </p>

        {/* The artifact — the official @spribe.co post */}
        <figure className="mt-8">
          <div className="relative w-full max-w-[420px] mx-auto border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 overflow-hidden">
            <Image
              src={AWARD_IMG}
              alt={
                'Game Changers 2026 — #1 Place: David Natroshvili, Founder & CEO of SPRIBE. "Top 100 Most Influential People in iGaming," iGamingExpress, posted by @spribe.co.'
              }
              width={1206}
              height={2622}
              sizes="(max-width: 640px) 90vw, 420px"
              className="w-full h-auto"
              priority
            />
          </div>
          <figcaption className="mt-3 sans text-[11px] text-[var(--color-ink-faint)] leading-snug max-w-[520px] mx-auto text-center">
            iGamingExpress &middot; &ldquo;Game Changers 2026.&rdquo; Posted by
            the official <span className="mono">@spribe.co</span> Instagram
            account, 30 May 2026 (393 likes), while the $NATRO fallout was live.
          </figcaption>
        </figure>

        {/* Spribe's own caption, verbatim */}
        <section className="mt-8">
          <div className="kicker mb-3">In Spribe&rsquo;s own words</div>
          <blockquote className="serif italic text-lg md:text-xl leading-snug border-l-4 border-[var(--color-accent)] pl-5">
            &ldquo;SPRIBE CEO David Natroshvili takes the #1 spot on the Top 100
            Most Influential People in iGaming 2026 🏆 &hellip; David is
            redefining player engagement &hellip; turned SPRIBE into a global
            category leader. <span className="not-italic font-medium">Cheers to our leader! 🙌</span>&rdquo;
          </blockquote>
          <p className="mt-2 sans text-[11px] text-[var(--color-ink-faint)]">
            — @spribe.co, Instagram, 30 May 2026 · #SPRIBE #iGaming #Aviator
            #TechLeadership
          </p>
        </section>

        {/* The thesis, made literal */}
        <section className="mt-10">
          <div className="kicker mb-3">Reputation, at its quoted peak</div>
          <p className="sans text-base md:text-lg leading-relaxed">
            The NATRO File describes itself, on every page, as{' '}
            <i>a documented case in reputation pricing.</i> This is the
            reputation being priced. Number one for influence in the industry —
            the single most valuable thing a launch can borrow.
          </p>
        </section>

        {/* What the reputation was collateral for */}
        <section className="mt-10 border-y border-[var(--color-ink)] py-6">
          <div className="kicker mb-3">What it was collateral for</div>
          <p className="sans text-base md:text-lg leading-relaxed">
            In the same May 2026 window, that same name was the collateral on a
            Solana memecoin, <b>$NATRO</b>. From his <b>verified</b> Instagram
            account, David Natroshvili personally solicited presale investment —
            captioned over a Bentley interior:{' '}
            <i>
              &ldquo;If you want to get involved in the crypto project presale
              with me &amp; @natroalex — DM @natroalex1 on telegram. Minimum
              investment size for presale is 1.5k&rdquo;
            </i>{' '}
            — and, over a Ferrari on a Monaco street:{' '}
            <i>
              &ldquo;We&rsquo;re opening private access to our crypto project
              presale with me &amp; @natroalex&hellip;&rdquo;
            </i>
          </p>
          <p className="sans text-base md:text-lg leading-relaxed mt-4">
            Within seventy-two hours of launch the token collapsed{' '}
            <b className="text-[var(--color-damning)]">~98%</b>. Refund requests
            from affected holders were refused — <i>&ldquo;Nothing to say&rdquo;</i>{' '}
            from the team admin, <i>&ldquo;stfu&rdquo;</i> from the founder&rsquo;s
            personal Telegram. Within the same window the website was taken
            offline, the NATRO link was removed from the founder&rsquo;s Instagram
            bio, and the paid promotional video was deleted. While that was
            happening, the <i>#1 most influential</i> ranking was being shared
            and celebrated &mdash; <i>&ldquo;Cheers to our leader.&rdquo;</i>
          </p>
        </section>

        {/* The line they wrote themselves */}
        <section className="mt-10">
          <div className="kicker mb-3">The line they wrote themselves</div>
          <p className="sans text-base md:text-lg leading-relaxed">
            The project&rsquo;s own FAQ — archived in full before it was deleted —
            answered the rug-pull question in one sentence:
          </p>
          <blockquote className="serif italic text-xl md:text-2xl leading-snug mt-4 border-l-4 border-[var(--color-accent)] pl-5 text-[var(--color-damning)]">
            &ldquo;The reputation hit lasts forever; the cash from a rug
            doesn&rsquo;t.&rdquo;
          </blockquote>
          <p className="sans text-base md:text-lg leading-relaxed mt-4">
            Set that sentence beside a #1 &ldquo;most influential&rdquo; ranking,
            and the file&rsquo;s title stops being a metaphor. The reputation was
            real. So is the record of what a slice of it was spent on. Readers
            draw their own conclusion.
          </p>
        </section>

        {/* Right of reply */}
        <section className="mt-10 border-t border-[var(--color-rule)] pt-6">
          <div className="kicker mb-3">Right of reply</div>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)]">
            David Natroshvili and Spribe are invited to respond; a formal notice
            was sent to Spribe&rsquo;s published legal and corporate addresses on
            25 May 2026. Documented factual corrections will be published
            alongside the record. The full sourcing is on his{' '}
            <Link href="/people/david-natroshvili">profile</Link> and the{' '}
            <Link href="/press">press page</Link>.
          </p>
        </section>

        {/* Where to next */}
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
