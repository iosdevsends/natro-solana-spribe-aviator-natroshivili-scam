import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { loadCaseFile } from '@/lib/case-file';
import { strapiPublicUrl, mediaUrl } from '@/lib/strapi';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { Lightbox } from '@/components/Lightbox';
import { ArchiveCallout } from '@/components/ArchiveCallout';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates } from '@/lib/seo';
import type { ExhibitDTO } from '@/lib/types';

const PUBLICATION_DATE = '2026-05-26T00:00:00Z';
const MODIFIED_DATE = '2026-05-27T00:00:00Z';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const bundle = await loadCaseFile(loc);
  const description =
    bundle.config.seoDescription ||
    bundle.config.deck?.slice(0, 160) ||
    bundle.config.tagline ||
    bundle.config.siteTitle;
  const url = absoluteUrl(loc);

  return {
    title: bundle.config.siteTitle,
    description,
    alternates: buildAlternates(loc),
    openGraph: {
      title: bundle.config.siteTitle,
      description,
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
      title: bundle.config.siteTitle,
      description,
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

  const sectionsBySlug = Object.fromEntries(
    bundle.sections.map((s) => [s.slug, s]),
  );

  const pageUrl = absoluteUrl(loc);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
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
      { '@type': 'Person', name: 'Alex Natroshvili' },
      { '@type': 'Person', name: 'David Natroshvili' },
      { '@type': 'Organization', name: 'Spribe' },
    ],
    citation: [
      'https://web.archive.org/web/20260521213245/https://natrocoin.net/',
      'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
      'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[var(--color-paper)] focus:p-2">
        Skip to content
      </a>

      <Masthead
        locale={loc}
        title={bundle.config.siteTitle}
        meta={bundle.config.mastheadMeta}
        uiStrings={ui}
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
          {bundle.config.deck && (
            <p className="serif italic text-lg md:text-2xl text-[var(--color-ink-soft)] mt-5 md:mt-6 leading-snug">
              {bundle.config.deck}
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
              <Link href="/privacy" className="uppercase tracking-widest text-[10px]">
                Privacy & cookies
              </Link>
            </div>
          )}
        </footer>
      </main>

      <Lightbox
        exhibits={bundle.exhibits}
        publicStrapiUrl={strapiPublicUrl}
        uiStrings={ui}
      />
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {people.map((p) => (
        <article key={p.id} className="border border-[var(--color-rule)] p-5 bg-[var(--color-paper-warm)]/50">
          <div className="kicker mb-2">{p.role}</div>
          <h3 className="serif text-xl mb-2 font-medium">{p.displayName || p.fullName}</h3>
          {p.handles?.map((h, i) => (
            <div key={i} className="sans text-xs text-[var(--color-ink-faint)]">
              {h.platform}: <span className="text-[var(--color-ink-soft)]">{h.handle}</span>
              {h.followers && ` · ${h.followers}`}
            </div>
          ))}
          <hr className="rule-divider" />
          <Prose text={p.description} className="text-sm" />
          {p.statement && (
            <div className="mt-4 pt-4 border-t border-dashed border-[var(--color-rule)]">
              <div className="label-strap mb-1">{p.statementLabel}</div>
              <div className="serif italic text-sm">{p.statement}</div>
            </div>
          )}
        </article>
      ))}
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
            <h4 className="serif text-lg font-medium mb-1 break-words">{row.title}</h4>
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {exhibits.map((ex) => (
        <ExhibitThumb key={ex.slug} exhibit={ex} />
      ))}
    </div>
  );
}

function ExhibitThumb({ exhibit, small = false }: { exhibit: ExhibitDTO; small?: boolean }) {
  const src =
    mediaUrl(exhibit.thumbnail) ||
    mediaUrl(exhibit.media, 'small') ||
    mediaUrl(exhibit.media) ||
    exhibit.legacySrc ||
    '';
  return (
    <button
      type="button"
      data-exhibit={exhibit.slug}
      aria-label={`${exhibit.exhibitNumber} — ${exhibit.title}`}
      className={`exhibit-thumb ${exhibit.highlighted ? 'highlighted' : ''} ${
        small ? 'w-[120px] h-[80px]' : 'aspect-[4/3] w-full'
      } relative flex items-end overflow-hidden text-left`}
    >
      {exhibit.mediaType === 'video' ? (
        <span className="absolute inset-0 grid place-items-center bg-black/50 text-white">▶</span>
      ) : src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={exhibit.title} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <span className="absolute inset-0 grid place-items-center text-[var(--color-ink-faint)] sans text-xs">{exhibit.exhibitNumber}</span>
      )}
      {!small && (
        <span className="relative z-10 m-1 px-1.5 py-0.5 bg-[var(--color-paper)]/90 sans text-[10px] tracking-widest uppercase">
          {exhibit.exhibitNumber}
        </span>
      )}
    </button>
  );
}
