import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { loadCaseFile } from '@/lib/case-file';
import { strapiPublicUrl, mediaUrl } from '@/lib/strapi';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { Prose } from '@/components/Prose';
import { LightboxLazy } from '@/components/LightboxLazy';
import { ArchiveCallout } from '@/components/ArchiveCallout';
import { OnChainStateBlock } from '@/components/OnChainStateBlock';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates, siteUrl, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';
import type { ExhibitDTO } from '@/lib/types';
// Canonical @id-anchored entities live in one place so the homepage @graph and
// the dedicated /people/<slug> profile pages never drift apart.
import { ALEX_NATROSHVILI, DAVID_NATROSHVILI, SPRIBE_ORG, PEOPLE_PROFILES } from '@/content/people';

// Slugs that have a dedicated /people/<slug> profile page. People cards for
// these show only a lede paragraph and route the full dossier to that page.
const PROFILE_SLUGS = new Set(PEOPLE_PROFILES.map((p) => p.slug));

const PUBLICATION_DATE = '2026-05-26T00:00:00Z';
const MODIFIED_DATE = '2026-05-28T00:00:00Z';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const bundle = await loadCaseFile(loc);
  const description = clampDescription(
    bundle.config.seoDescription ||
    bundle.config.deck?.slice(0, 160) ||
    bundle.config.tagline ||
    bundle.config.siteTitle,
  );
  const url = absoluteUrl(loc);
  // SEO <title> carries the named entities searchers type (Natroshvili /
  // Spribe / NATRO); siteTitle stays the displayed masthead brand.
  const metaTitle = clampTitle(bundle.config.seoTitle || bundle.config.siteTitle);

  return {
    title: metaTitle,
    description,
    alternates: buildAlternates(loc),
    openGraph: {
      title: metaTitle,
      description,
      images: [OG_IMAGE],
      type: 'article',
      url,
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
      publishedTime: PUBLICATION_DATE,
      modifiedTime: MODIFIED_DATE,
      authors: ['An affected early holder (@btc3050)'],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export default async function CaseFilePage({
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
  const tCta = await getTranslations('scamCta');
  const tWall = await getTranslations('wall');

  const sectionsBySlug = Object.fromEntries(
    bundle.sections.map((s) => [s.slug, s]),
  );

  const pageUrl = absoluteUrl(loc);
  const exhibitImageObjects = bundle.exhibits
    .filter((ex) => ex.mediaType === 'image' && ex.legacySrc)
    .map((ex) => ({
      '@type': 'ImageObject',
      contentUrl: `${siteUrl}${ex.legacySrc}`,
      url: `${siteUrl}${ex.legacySrc}`,
      name: ex.title,
      caption: ex.caption || ex.title,
      description: [ex.title, ex.source, ex.whyItMatters].filter(Boolean).join(' — '),
      ...(ex.legacyWidth && ex.legacyHeight ? { width: ex.legacyWidth, height: ex.legacyHeight } : {}),
      creditText: ex.source || undefined,
      isAccessibleForFree: true,
    }));

  // Use schema.org @graph so the named Persons get @id-anchored as standalone
  // entities (stronger Knowledge-Graph signal for "alex natroshvili" /
  // "david natroshvili" queries) and the NewsArticle references them by @id.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ALEX_NATROSHVILI,
      DAVID_NATROSHVILI,
      SPRIBE_ORG,
      {
        '@type': 'NewsArticle',
        '@id': `${pageUrl}#article`,
        headline: bundle.config.headline || bundle.config.siteTitle,
        name: bundle.config.siteTitle,
        description:
          bundle.config.seoDescription || bundle.config.deck?.slice(0, 200),
        inLanguage: loc,
        isAccessibleForFree: true,
        datePublished: PUBLICATION_DATE,
        dateModified: MODIFIED_DATE,
        url: pageUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        image: exhibitImageObjects.length ? exhibitImageObjects : undefined,
        author: {
          '@type': 'Person',
          name: 'An affected early holder',
          alternateName: '@btc3050',
          url: 'https://t.me/btc3050',
        },
        publisher: {
          '@type': 'Organization',
          name: 'The NATRO File',
          url: absoluteUrl(loc, ''),
        },
        about: [
          { '@type': 'Thing', name: '$NATRO Solana token launch' },
          { '@id': 'https://natro.meme/#alex-natroshvili' },
          { '@id': 'https://natro.meme/#david-natroshvili' },
          { '@id': 'https://natro.meme/#spribe' },
        ],
        mentions: [
          { '@id': 'https://natro.meme/#alex-natroshvili' },
          { '@id': 'https://natro.meme/#david-natroshvili' },
          { '@id': 'https://natro.meme/#spribe' },
        ],
        keywords: [
          'Alex Natroshvili',
          'David Natroshvili',
          'NATRO',
          '$NATRO',
          'Spribe',
          'Aviator',
          'Solana memecoin scam',
          'Pump.fun',
          'rug pull',
          'reputation pricing',
        ].join(', '),
        citation: [
          'https://web.archive.org/web/20260521213245/https://natrocoin.net/',
          'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
          'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/',
        ],
      },
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
      />

      <main id="main" className="relative z-[2] mx-auto" style={{ maxWidth: '900px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}>
        {/* Dateline */}
        <DatelineStrip dateline={bundle.config.dateline} />

        {/* Lede */}
        <section className="mt-8 md:mt-10 mb-12 md:mb-16">
          {bundle.config.kicker && <div className="kicker mb-3 md:mb-4">{bundle.config.kicker}</div>}
          <h1 className="serif text-[28px] sm:text-3xl md:text-5xl leading-[1.1] md:leading-[1.08] font-medium tracking-tight">
            {bundle.config.headline}
          </h1>
          {/* Inline `style={{ color: ... }}` on every text node is intentional.
              The global stylesheet sets `a { color: var(--color-accent) }`,
              which inherits down through the <Link>'s children — including the
              h2 — and renders it accent-on-accent. Tailwind utility classes
              lose to the inline declaration here, so the only bullet-proof
              fix is the inline color. Same reason for the divider rule. */}
          <Link
            href="/scam-one-pager"
            aria-label={tCta('aria')}
            className="group block w-full mt-5 mb-2 no-underline transition-colors shadow-[0_10px_30px_-18px_rgba(10,10,8,0.55)] hover:bg-[var(--color-damning)]"
            style={{ background: 'var(--color-accent)', color: 'var(--color-paper)' }}
          >
            <div className="px-5 py-5 sm:px-7 sm:py-6">
              <div
                className="sans text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-paper)' }}
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{
                    background: 'var(--color-paper)',
                    animation: 'natro-pulse 1.8s ease-in-out infinite',
                  }}
                />
                <span>{tCta('kicker')}</span>
              </div>
              <h2
                className="serif text-2xl sm:text-[28px] md:text-[32px] font-medium leading-tight"
                style={{ color: 'var(--color-paper)' }}
              >
                {tCta('headline')}
              </h2>
              <p
                className="mt-3 sans text-base sm:text-lg leading-snug"
                style={{ color: 'var(--color-paper)' }}
              >
                {tCta.rich('body', {
                  b: (chunks) => <b>{chunks}</b>,
                  i: (chunks) => <i>{chunks}</i>,
                })}
              </p>
              <div
                className="mt-5 pt-4 flex items-center justify-between flex-wrap gap-x-4 gap-y-2"
                style={{ borderTop: '1px solid rgba(245, 241, 232, 0.30)' }}
              >
                <div
                  className="mono text-[10px] sm:text-[11px] uppercase tracking-widest flex flex-wrap items-center gap-x-3 gap-y-1"
                  style={{ color: 'var(--color-paper)' }}
                >
                  <span>
                    <b>4</b> {tCta('statsReceipts')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{tCta('statsWayback')}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <b>8</b> {tCta('statsLanguages')}
                  </span>
                </div>
                <span
                  className="sans text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center gap-2 shrink-0"
                  style={{ color: 'var(--color-paper)' }}
                >
                  {tCta('cta')}
                  <span
                    aria-hidden="true"
                    className="text-base inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
          {bundle.config.deck && (
            <p className="serif italic text-lg md:text-2xl text-[var(--color-ink-soft)] mt-5 md:mt-6 leading-snug">
              <HighlightedLede text={bundle.config.deck} />
            </p>
          )}
          <BylineStrip byline={bundle.config.byline} />
        </section>

        {/* Wayback archive callout — single strongest source, surfaced before exec summary */}
        {bundle.config.archiveCallout && (
          <ArchiveCallout {...bundle.config.archiveCallout} />
        )}

        {/* Executive summary */}
        <section className="border-y border-[var(--color-ink)] py-8 mb-16">
          <div className="kicker mb-3">Executive summary</div>
          <Prose text={bundle.config.executiveSummary} className="text-lg" />
        </section>

        {/* § I Promise */}
        <SectionBlock section={sectionsBySlug.promise}>
          <TierTable rows={bundle.tierRows} ui={ui} />
        </SectionBlock>

        {/* § II Reality */}
        <SectionBlock section={sectionsBySlug.reality}>
          <SnapshotGrid cells={bundle.snapshotCells} />
          <OnChainStateBlock
            labels={{
              title: ui['onchain.title'] || 'On-chain state · live',
              subtitle: ui['onchain.subtitle'],
              tokenMint: ui['onchain.tokenMint'],
              mintAuthority: ui['onchain.mintAuthority'],
              freezeAuthority: ui['onchain.freezeAuthority'],
              totalSupply: ui['onchain.totalSupply'],
              pumpStatus: ui['onchain.pumpStatus'],
              pumpSwapPool: ui['onchain.pumpSwapPool'],
              marketCap: ui['onchain.marketCap'],
              lastTrade: ui['onchain.lastTrade'],
              fetched: ui['onchain.fetched'],
              renounced: ui['onchain.renounced'],
              graduated: ui['onchain.graduated'],
              notGraduated: ui['onchain.notGraduated'],
              verify: ui['onchain.verify'],
            }}
          />
          {bundle.config.graduationBlock && (
            <GraduationNote {...bundle.config.graduationBlock} />
          )}
          <PromiseRealityTable rows={bundle.promiseRealityRows} ui={ui} />
        </SectionBlock>

        {/* § III Scrub */}
        <SectionBlock section={sectionsBySlug.coverup}>
          <Timeline events={bundle.timeline} exhibits={bundle.exhibits} />
        </SectionBlock>

        {/* § IV Voices */}
        <SectionBlock section={sectionsBySlug.voices}>
          <Quotes quotes={bundle.quotes} />
        </SectionBlock>

        {/* Reputation wall — reader comment feed (moderated) */}
        <div className="my-16 border-l-4 border-[var(--color-accent)] bg-[var(--color-paper-warm)]/40 p-6 md:p-8">
          <div className="kicker mb-3">§ {tWall('kicker')}</div>
          <p className="serif text-2xl md:text-3xl font-medium leading-tight">{tWall('pageTitle')}</p>
          <p className="mt-3 sans text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-2xl">
            {tWall('inviteLead')}
          </p>
          <Link
            href="/reputation"
            className="mt-5 sans inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition"
          >
            {tWall('inviteTitle')} →
          </Link>
        </div>

        {/* § V People */}
        <SectionBlock section={sectionsBySlug.people}>
          <People people={bundle.people} />
        </SectionBlock>

        {/* § VI Sources */}
        <SectionBlock section={sectionsBySlug.evidence}>
          <Evidence rows={bundle.evidenceRows} />
        </SectionBlock>

        {/* § VII Gallery */}
        <SectionBlock section={sectionsBySlug.gallery}>
          <Gallery exhibits={bundle.exhibits} />
        </SectionBlock>

        {/* FAQ — short Q+A snippets with FAQPage JSON-LD for Google rich snippets */}
        <FaqBlock faq={bundle.faq} ui={ui} />

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t-2 border-[var(--color-ink)] space-y-10">
          <FooterBlock title={ui['ui.right_of_reply'] || 'Right of reply'} text={bundle.config.rightOfReply} />
          <FooterBlock title={ui['ui.contact'] || 'Contact'} text={bundle.config.contactBlock} />
          {bundle.config.compilerAddendum && (
            <div className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 p-6">
              <div className="kicker mb-3">Compiler&rsquo;s addendum · separate from the main file</div>
              <Prose text={bundle.config.compilerAddendum} className="text-base italic" />
            </div>
          )}
          {bundle.config.colophon && (
            <div className="sans text-xs text-[var(--color-ink-faint)] pt-6 border-t border-[var(--color-rule)] flex flex-wrap items-center justify-between gap-3">
              <span>{bundle.config.colophon}</span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 uppercase tracking-widest text-[10px]">
                <a
                  href="https://github.com/iosdevsends/natro-solana-spribe-aviator-natroshivili-scam"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Source · GitHub ↗
                </a>
                <a
                  href="https://x.com/moykin_e/status/2059431395173568828"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Post · X ↗
                </a>
                <Link href="/privacy">
                  Privacy &amp; cookies
                </Link>
              </div>
            </div>
          )}
        </footer>
      </main>

      <LightboxLazy
        exhibits={bundle.exhibits}
        publicStrapiUrl={strapiPublicUrl}
        uiStrings={ui}
      />
    </>
  );
}

/**
 * Lede-accent highlighter. The deck paragraph carries the journalistic
 * "who/what/where" — a third-party reader scanning the page should be
 * able to pick out the named parties and the affiliated brands in one
 * pass. We pull them out of the italic flow visually (upright, medium,
 * accent oxblood) rather than rewriting the prose to bold them in CMS,
 * because the same paragraph ships in 8 locales and per-locale bolding
 * would drift. The keyword list covers the major name transliterations
 * (Latin, Cyrillic — Russian + Ukrainian, Georgian, Arabic) plus the
 * brand identifiers that recur across all language versions.
 */
const LEDE_HIGHLIGHTS = [
  // Token + platform
  '$NATRO',
  'NATRO',
  'Pump.fun',
  // Brand
  'Spribe',
  'Aviator',
  // Names (Latin)
  'Alex Natroshvili',
  'David Natroshvili',
  'Natroshvili',
  // Names (Russian Cyrillic)
  'Алекс Натрошвили',
  'Давид Натрошвили',
  'Натрошвили',
  // Names (Ukrainian Cyrillic)
  'Алекс Натрошвілі',
  'Давид Натрошвілі',
  'Натрошвілі',
  // Names (Georgian)
  'ალექს ნატროშვილი',
  'დავით ნატროშვილი',
  'ნატროშვილი',
  // Names (Arabic)
  'أليكس ناتروشفيلي',
  'ديفيد ناتروشفيلي',
  'ناتروشفيلي',
];

function HighlightedLede({ text }: { text: string }) {
  // Longest-first so "Alex Natroshvili" wins over a bare "Natroshvili" match.
  const sorted = [...LEDE_HIGHLIGHTS].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);
  const matchSet = new Set(LEDE_HIGHLIGHTS);
  return (
    <>
      {parts.map((part, i) =>
        matchSet.has(part) ? (
          <span
            key={i}
            className="not-italic font-medium text-[var(--color-accent)]"
          >
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function DatelineStrip({ dateline }: { dateline?: Array<{ label: string; value: string }> }) {
  if (!dateline?.length) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 border-y border-[var(--color-rule)] py-3">
      {dateline.map((entry, i) => (
        <div key={i}>
          <div className="label-strap">{entry.label}</div>
          <div className="sans text-sm">{entry.value}</div>
        </div>
      ))}
    </div>
  );
}

function BylineStrip({ byline }: { byline?: Array<{ label: string; value: string }> }) {
  if (!byline?.length) return null;
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
      {byline.map((entry, i) => (
        <div key={i}>
          <div className="label-strap">{entry.label}</div>
          <div className="sans text-sm leading-snug">{entry.value}</div>
        </div>
      ))}
    </div>
  );
}

function SectionBlock({
  section,
  children,
}: {
  section?: { anchor: string; numeral?: string; kicker?: string; heading: string; lead?: string; body?: string; pullquoteText?: string; pullquoteAttribution?: string; pullquoteSource?: string };
  children?: React.ReactNode;
}) {
  if (!section) return null;
  return (
    <section id={section.anchor} className="mb-20 scroll-mt-24">
      <div className="kicker mb-3 flex items-baseline gap-3">
        {section.numeral && <span className="section-numeral text-3xl">§ {section.numeral}</span>}
        {section.kicker && <span>{section.kicker}</span>}
      </div>
      <h2 className="serif text-[22px] sm:text-2xl md:text-4xl leading-tight mb-5 md:mb-6 font-medium">
        {section.heading}
      </h2>
      {section.lead && <Prose text={section.lead} className="text-lg leading-relaxed" />}
      {section.body && <Prose text={section.body} className="mt-4" />}
      {section.pullquoteText && (
        <blockquote className="pullquote my-10">
          <div className="mb-2">{section.pullquoteText}</div>
          {(section.pullquoteAttribution || section.pullquoteSource) && (
            <footer className="not-italic sans text-xs text-[var(--color-ink-faint)]">
              {section.pullquoteAttribution}
              {section.pullquoteSource && <> · {section.pullquoteSource}</>}
            </footer>
          )}
        </blockquote>
      )}
      {children && <div className="mt-10 space-y-10">{children}</div>}
    </section>
  );
}

function FooterBlock({ title, text }: { title: string; text?: string }) {
  if (!text) return null;
  return (
    <div>
      <div className="kicker mb-2">{title}</div>
      <Prose text={text} className="text-base" />
    </div>
  );
}

function TierTable({ rows, ui }: { rows: import('@/lib/types').TierRowDTO[]; ui: Record<string, string> }) {
  if (!rows.length) return null;
  return (
    <>
      {/* Mobile: stacked cards */}
      <div className="md:hidden divide-y-2 divide-[var(--color-ink)] border-y-2 border-[var(--color-ink)]">
        {rows.map((row) => (
          <div key={row.id} className={`py-4 ${row.isCompilerRow ? 'bg-[var(--color-paper-warm)] -mx-2 px-2' : ''}`}>
            <div className="serif font-medium text-base mb-1">
              {row.tierId} · {row.tierName}
            </div>
            <div className="mono text-xs text-[var(--color-ink-faint)] mb-3 break-all">{row.threshold}</div>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <div className="label-strap mb-1">{ui['ui.what_promised'] || 'Promised'}</div>
                <div className="text-[var(--color-ink-soft)]">{row.description}</div>
              </div>
              <div>
                <div className="label-strap mb-1">{ui['ui.what_delivered'] || 'Delivered'}</div>
                <div className="font-medium text-[var(--color-damning)]">{row.delivered}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop / tablet: full table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-y-2 border-[var(--color-ink)] text-left">
              <th className="label-strap py-2 pr-3">{ui['ui.tier'] || 'Tier'}</th>
              <th className="label-strap py-2 pr-3">{ui['ui.threshold'] || 'Threshold'}</th>
              <th className="label-strap py-2 pr-3">{ui['ui.what_promised'] || 'What was promised'}</th>
              <th className="label-strap py-2">{ui['ui.what_delivered'] || 'What was delivered'}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={`align-top border-b border-[var(--color-rule)] ${row.isCompilerRow ? 'bg-[var(--color-paper-warm)]' : ''}`}>
                <td className="py-3 pr-3 serif">
                  <span className="font-medium">{row.tierId} · {row.tierName}</span>
                </td>
                <td className="py-3 pr-3 mono text-xs">{row.threshold}</td>
                <td className="py-3 pr-3 text-[var(--color-ink-soft)]">{row.description}</td>
                <td className="py-3 font-medium text-[var(--color-damning)]">{row.delivered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function FaqBlock({ faq, ui }: { faq: import('@/lib/types').FaqEntryDTO[]; ui: Record<string, string> }) {
  if (!faq.length) return null;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.shortAnswer,
      },
    })),
  };
  return (
    <section id="faq" className="mb-20 scroll-mt-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="kicker mb-3 flex items-baseline gap-3">
        <span className="section-numeral text-3xl">§ VIII</span>
        <span>{ui['nav.faq'] || 'Frequently asked'}</span>
      </div>
      <h2 className="serif text-[22px] sm:text-2xl md:text-4xl leading-tight mb-5 md:mb-6 font-medium">
        {ui['faq.headline'] || 'Short, sourced answers.'}
      </h2>
      <div className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
        {faq.map((entry) => (
          <article key={entry.slug} className="py-6">
            <h3 className="serif text-lg md:text-xl font-medium leading-snug">
              <a
                href={`/faq/${entry.slug}`}
                className="text-[var(--color-ink)] no-underline hover:text-[var(--color-accent)]"
              >
                {entry.question}
              </a>
            </h3>
            <Prose text={entry.shortAnswer} className="mt-2 text-sm md:text-base" />
            <a
              href={`/faq/${entry.slug}`}
              className="inline-block mt-2 sans text-xs uppercase tracking-widest"
            >
              {ui['faq.readMore'] || 'Read the full answer'} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function composeAlt(exhibit: ExhibitDTO): string {
  const parts = [exhibit.title];
  if (exhibit.source) parts.push(exhibit.source);
  return parts.filter(Boolean).join(' — ');
}

function GraduationNote({
  kicker,
  headline,
  body,
  linkText,
  linkUrl,
}: {
  kicker?: string;
  headline?: string;
  body?: string;
  linkText?: string;
  linkUrl?: string;
}) {
  if (!body) return null;
  return (
    <aside className="border-l-4 border-[var(--color-gold)] bg-[var(--color-paper-warm)]/40 p-5 md:p-6 overflow-hidden">
      {kicker && (
        <div className="kicker mb-2" style={{ color: 'var(--color-gold)' }}>
          {kicker}
        </div>
      )}
      {headline && (
        <h3 className="serif text-lg md:text-2xl font-medium mb-3 leading-snug">
          {headline}
        </h3>
      )}
      <Prose text={body} className="text-base" />
      {linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-block sans text-xs uppercase tracking-widest"
        >
          {linkText || 'View source'} →
        </a>
      )}
    </aside>
  );
}

function SnapshotGrid({ cells }: { cells: import('@/lib/types').SnapshotCellDTO[] }) {
  if (!cells.length) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 border-y border-[var(--color-rule)] py-6">
      {cells.map((cell) => (
        <div key={cell.id}>
          <div className={`serif text-3xl md:text-4xl leading-none font-medium ${cell.isBad ? 'text-[var(--color-damning)]' : 'text-[var(--color-ink)]'}`}>
            {cell.value}
          </div>
          <div className="sans text-xs text-[var(--color-ink-faint)] mt-2 leading-snug">
            {cell.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function PromiseRealityTable({ rows, ui }: { rows: import('@/lib/types').PromiseRealityRowDTO[]; ui: Record<string, string> }) {
  if (!rows.length) return null;
  return (
    <div className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
      <div className="hidden md:grid md:grid-cols-[180px_1fr_1fr] gap-6 py-3">
        <div className="label-strap"> </div>
        <div className="label-strap">{ui['ui.what_promised'] || 'What was promised'}</div>
        <div className="label-strap">{ui['ui.what_delivered'] || 'What was delivered'}</div>
      </div>
      {rows.map((row) => (
        <div key={row.id} className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-4 md:gap-6 py-5">
          <div className="serif font-medium text-base">{row.categoryLabel}</div>
          <div>
            <div className="md:hidden label-strap mb-1">{ui['ui.what_promised'] || 'Promised'}</div>
            <Prose text={row.promiseText} className="text-sm" />
          </div>
          <div>
            <div className="md:hidden label-strap mb-1">{ui['ui.what_delivered'] || 'Delivered'}</div>
            <Prose text={row.realityText} className="text-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Timeline({ events, exhibits }: { events: import('@/lib/types').TimelineEventDTO[]; exhibits: ExhibitDTO[] }) {
  const bySlug = Object.fromEntries(exhibits.map((e) => [e.slug, e]));
  return (
    <ol className="relative border-l-2 border-[var(--color-rule)] pl-6 space-y-10">
      {events.map((ev) => {
        const attached = (ev.exhibits || []).map((e) => bySlug[e.slug]).filter(Boolean) as ExhibitDTO[];
        return (
          <li key={ev.id} className="relative">
            <span className={`absolute -left-[34px] top-1 block w-3 h-3 rounded-full ${ev.isDamning ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-ink-faint)]'}`} />
            <div className="kicker mb-1">{ev.displayDate}</div>
            <h3 className={`serif text-xl md:text-2xl mb-2 ${ev.isDamning ? 'text-[var(--color-damning)]' : ''}`}>
              {ev.title}
            </h3>
            <Prose text={ev.body} className="text-base" />
            {ev.tags && ev.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {ev.tags.map((t, i) => (
                  <span key={i} className="sans text-[10px] tracking-widest uppercase border border-[var(--color-rule)] px-2 py-0.5 text-[var(--color-ink-faint)]">
                    {t}
                  </span>
                ))}
              </div>
            )}
            {attached.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {attached.map((ex) => (
                  <ExhibitThumb key={ex.slug} exhibit={ex} small />
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Quotes({ quotes }: { quotes: import('@/lib/types').QuoteDTO[] }) {
  return (
    <div className="space-y-10">
      {quotes.map((q) => (
        <figure key={q.id} className={q.isHeadline ? 'border-y-2 border-[var(--color-ink)] py-8' : 'border-y border-[var(--color-rule)] py-6'}>
          <blockquote className={`serif italic ${q.isHeadline ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'} leading-snug ${q.isDamning ? 'text-[var(--color-damning)]' : ''}`}>
            “{q.text}”
          </blockquote>
          <figcaption className="mt-3 sans text-xs text-[var(--color-ink-faint)] flex flex-wrap gap-x-3">
            {q.attribution && <span>{q.attribution}</span>}
            {q.source && <span>· {q.source}</span>}
            {q.sourceDate && <span>· {q.sourceDate}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function People({ people }: { people: import('@/lib/types').PersonDTO[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {people.map((p) => {
        const hasProfile = PROFILE_SLUGS.has(p.slug);
        // Every card shows only the lede paragraph so the grid stays compact
        // and uniform instead of ballooning into a wall of text. The full
        // dossier and verbatim evidence live on the /people/<slug> profile
        // (when one exists) and in the §III–IV timeline / voices sections.
        const cardText = (p.description || '').split(/\n\n+/)[0];
        return (
          <article
            key={p.id}
            className="border border-[var(--color-rule)] p-5 bg-[var(--color-paper-warm)]/50 flex flex-col h-full"
          >
            <div className="kicker mb-2">{p.role}</div>
            <h3 className="serif text-xl mb-2 font-medium">{p.displayName || p.fullName}</h3>
            {p.handles?.map((h, i) => (
              <div key={i} className="sans text-xs text-[var(--color-ink-faint)]">
                {h.platform}: <span className="text-[var(--color-ink-soft)]">{h.handle}</span>
                {h.followers && ` · ${h.followers}`}
              </div>
            ))}
            <hr className="rule-divider" />
            <Prose text={cardText} className="text-sm" />
            {p.statement && (
              <div className="mt-4 pt-4 border-t border-dashed border-[var(--color-rule)]">
                <div className="label-strap mb-1">{p.statementLabel}</div>
                <div className="serif italic text-sm">{p.statement}</div>
              </div>
            )}
            {hasProfile && (
              <Link
                href={`/people/${p.slug}` as `/people/${string}`}
                className="mt-auto pt-4 inline-block sans text-xs uppercase tracking-widest"
              >
                Full profile →
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}

function Evidence({ rows }: { rows: import('@/lib/types').EvidenceRowDTO[] }) {
  return (
    <div className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
      {rows.map((row) => (
        <div key={row.id} className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px] gap-3 md:gap-4 py-5 items-start">
          <div className="label-strap">{row.type}</div>
          <div className="min-w-0">
            <h3 className="serif text-lg font-medium mb-1 break-words">{row.title}</h3>
            <Prose text={row.description} className="text-sm" />
          </div>
          <div className="md:text-right">
            {row.isOnRequest ? (
              <span className="sans text-xs text-[var(--color-ink-faint)] uppercase tracking-widest">
                {row.linkText || 'On request'}
              </span>
            ) : row.linkUrl ? (
              <a
                href={row.linkUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="sans text-xs uppercase tracking-widest break-all"
              >
                {row.linkText || row.linkUrl}
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function Gallery({ exhibits }: { exhibits: ExhibitDTO[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-7">
      {exhibits.map((ex, idx) => (
        <ExhibitThumb key={ex.slug} exhibit={ex} eager={idx < 4} />
      ))}
    </div>
  );
}

/**
 * Heuristic to pick a short, scannable "type" badge for the thumbnail —
 * derived from the `source` string the exhibit ships with. Matches the
 * provenance categories the reader actually cares about (where did this
 * come from? Telegram chat? Founder's verified Instagram? Wayback?).
 * Falls back to mediaType when source doesn't match a known shape.
 */
function exhibitTypeBadge(exhibit: ExhibitDTO): string | null {
  const src = (exhibit.source || '').toLowerCase();
  if (exhibit.mediaType === 'video') return 'Video';
  if (src.includes('instagram story')) return 'IG Story';
  if (src.includes('instagram') && src.includes('bio')) return 'IG profile';
  if (src.includes('instagram')) return 'Instagram';
  if (src.includes('telegram') || src.includes('foyer') || src.includes('lounge') || src.includes('floor')) return 'Telegram';
  if (src.includes('natrocoin.net') || src.includes('wayback')) return 'Website';
  if (src.includes('linkedin')) return 'LinkedIn';
  if (exhibit.mediaType === 'image') return 'Screenshot';
  return null;
}

function ExhibitThumb({ exhibit, small = false, eager = false }: { exhibit: ExhibitDTO; small?: boolean; eager?: boolean }) {
  const src =
    mediaUrl(exhibit.thumbnail) ||
    mediaUrl(exhibit.media, 'small') ||
    mediaUrl(exhibit.media) ||
    exhibit.legacySrc ||
    '';
  const altText = composeAlt(exhibit);
  // Tall portraits (phone screenshots, IG Stories) lose all relevant info
  // when cropped to a 4:3 frame with object-position: center. Detect via
  // the legacyWidth/Height we ship in exhibits.ts and anchor the crop to
  // the top of the image so the meaningful content (the message text,
  // the Story caption) stays visible.
  const isTallPortrait =
    !!exhibit.legacyWidth &&
    !!exhibit.legacyHeight &&
    exhibit.legacyHeight / exhibit.legacyWidth > 1.4;
  const typeBadge = exhibitTypeBadge(exhibit);

  if (small) {
    // Inline thumb (used inside timeline events). Compact, no caption.
    return (
      <button
        type="button"
        data-exhibit={exhibit.slug}
        aria-label={`${exhibit.exhibitNumber} — ${exhibit.title}`}
        className={`exhibit-thumb ${exhibit.highlighted ? 'highlighted' : ''} w-[120px] h-[80px] relative overflow-hidden`}
      >
        {exhibit.mediaType === 'video' ? (
          <span className="absolute inset-0 grid place-items-center bg-black/50 text-white">▶</span>
        ) : src ? (
          <Image
            src={src}
            alt={altText}
            fill
            sizes="120px"
            className="object-cover"
            style={{ objectPosition: isTallPortrait ? 'top' : 'center' }}
            loading="lazy"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-[var(--color-ink-faint)] sans text-xs">
            {exhibit.exhibitNumber}
          </span>
        )}
      </button>
    );
  }

  return (
    <figure className="flex flex-col">
      <button
        type="button"
        data-exhibit={exhibit.slug}
        aria-label={`${exhibit.exhibitNumber} — ${exhibit.title}`}
        className={`exhibit-thumb ${exhibit.highlighted ? 'highlighted' : ''} aspect-[4/3] w-full relative flex items-start justify-between overflow-hidden text-left`}
      >
        {exhibit.mediaType === 'video' ? (
          <span className="absolute inset-0 grid place-items-center bg-black/55 text-white text-3xl">▶</span>
        ) : src ? (
          <Image
            src={src}
            alt={altText}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover"
            style={{ objectPosition: isTallPortrait ? 'top' : 'center' }}
            loading={eager ? 'eager' : 'lazy'}
            priority={eager}
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-[var(--color-ink-faint)] sans text-xs">
            {exhibit.exhibitNumber}
          </span>
        )}
        {/* Top-left: type badge */}
        {typeBadge && (
          <span className="relative z-10 m-1.5 px-1.5 py-0.5 bg-[var(--color-paper)]/95 sans text-[9px] tracking-widest uppercase">
            {typeBadge}
          </span>
        )}
        {/* Top-right: highlighted star (for the strongest exhibits) */}
        {exhibit.highlighted && (
          <span
            className="relative z-10 m-1.5 px-1.5 py-0.5 bg-[var(--color-accent)] text-[var(--color-paper)] sans text-[9px] tracking-widest uppercase font-medium"
            aria-label="Key exhibit"
          >
            ★ Key
          </span>
        )}
      </button>
      {/* Caption below — exhibit number + title (2-line clamp) */}
      <figcaption className="mt-2 flex flex-col gap-0.5">
        <span className="label-strap text-[10px]">{exhibit.exhibitNumber}</span>
        <span
          className="serif text-[13px] leading-snug text-[var(--color-ink-soft)] line-clamp-2"
          title={exhibit.title}
        >
          {exhibit.title}
        </span>
      </figcaption>
    </figure>
  );
}
