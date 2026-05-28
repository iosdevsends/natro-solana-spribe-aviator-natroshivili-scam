import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { ArchiveCallout } from '@/components/ArchiveCallout';
import { Prose } from '@/components/Prose';
import { Lightbox } from '@/components/Lightbox';
import { loadCaseFile } from '@/lib/case-file';
import { mediaUrl, strapiPublicUrl } from '@/lib/strapi';
import {
  buildAlternates,
  absoluteUrl,
  ogLocale,
  ogLocaleAlternates,
} from '@/lib/seo';
import type { ExhibitDTO } from '@/lib/types';

const ONE_PAGER_PATH = '/one-pager';

/**
 * "Scam one-pager" — a single-screen, share-optimised brief.
 *
 * The full case file lives at `/`. This route exists because journalists,
 * regulators, and prospective holders googling "NATRO scam" land best on
 * something they can scan in 30 seconds: headline, two-paragraph summary,
 * four key exhibits, and one Wayback link. The body content (headline,
 * deck, executive summary, exhibit titles) all comes from the same
 * localised case-file bundle the main route uses, so this page is
 * automatically multilingual without separate translation work.
 *
 * Visible label is "Scam one-pager" per the user's explicit naming —
 * matches the search term a reader investigating the launch would
 * actually type. URL slug is the neutral `/one-pager` so the canonical
 * URL stays journalistic.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const bundle = await loadCaseFile(loc);
  const title = `Scam one-pager — ${bundle.config.siteTitle}`;
  const description =
    bundle.config.deck?.slice(0, 200) ||
    bundle.config.seoDescription ||
    bundle.config.tagline;
  return {
    title,
    description,
    alternates: buildAlternates(loc, ONE_PAGER_PATH),
    openGraph: {
      title,
      description,
      type: 'article',
      url: absoluteUrl(loc, ONE_PAGER_PATH),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function OnePagerPage({
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

  // Pick up to four highlighted exhibits (already curated in the bundle
  // as the "key" ones — Foyer screenshot, "Nothing to say", "stfu", the
  // Wayback-archived FAQ). Fall back to first four if fewer are flagged.
  const keyExhibits: ExhibitDTO[] = bundle.exhibits
    .filter((ex) => ex.highlighted)
    .slice(0, 4);
  const exhibitsForGrid: ExhibitDTO[] =
    keyExhibits.length >= 2 ? keyExhibits : bundle.exhibits.slice(0, 4);

  return (
    <>
      <CeremonialMasthead
        locale={loc}
        tagline={bundle.config.tagline}
        uiStrings={ui}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
      />

      <main
        id="main"
        className="relative z-[2] mx-auto"
        style={{
          maxWidth: '780px',
          padding:
            'clamp(20px, 4vw, 56px) clamp(16px, 5vw, 56px) 100px',
        }}
      >
        <div className="kicker mb-3">Scam one-pager · Quick brief</div>
        <h1 className="serif text-[30px] sm:text-4xl md:text-5xl leading-[1.08] font-medium tracking-tight">
          {bundle.config.headline}
        </h1>
        {bundle.config.deck && (
          <p className="serif italic text-lg md:text-xl text-[var(--color-ink-soft)] mt-5 md:mt-6 leading-snug">
            {bundle.config.deck}
          </p>
        )}

        {/* What happened — short executive summary, pulled from the
            already-localised bundle. */}
        {bundle.config.executiveSummary && (
          <section className="mt-10 border-y border-[var(--color-ink)] py-6">
            <div className="kicker mb-3">What happened</div>
            <Prose
              text={bundle.config.executiveSummary}
              className="text-base md:text-lg"
            />
          </section>
        )}

        {/* Key exhibits — 2×2 grid, click-through to the gallery on
            the main case file. */}
        {exhibitsForGrid.length > 0 && (
          <section className="mt-12">
            <div className="kicker mb-4">Key exhibits</div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {exhibitsForGrid.map((ex) => (
                <OnePagerExhibit key={ex.slug} exhibit={ex} />
              ))}
            </div>
            <Link
              href={{ pathname: '/', hash: 'gallery' }}
              className="mt-4 inline-block sans text-xs uppercase tracking-widest"
            >
              See all {bundle.exhibits.length} exhibits →
            </Link>
          </section>
        )}

        {/* Wayback archive — the single strongest source. */}
        {bundle.config.archiveCallout && (
          <ArchiveCallout {...bundle.config.archiveCallout} />
        )}

        {/* Deep links into the full case file. */}
        <Lightbox
          exhibits={bundle.exhibits}
          publicStrapiUrl={strapiPublicUrl}
          uiStrings={ui}
        />

        <nav
          aria-label="Where to next"
          className="mt-12 pt-8 border-t-2 border-[var(--color-ink)]"
        >
          <div className="kicker mb-4">Where to next</div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 sans text-sm">
            <li>
              <Link href="/" className="block">
                Full case file →
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
                Press kit →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Fact sheet, contacts, right of reply
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}

function OnePagerExhibit({ exhibit }: { exhibit: ExhibitDTO }) {
  const src =
    mediaUrl(exhibit.thumbnail) ||
    mediaUrl(exhibit.media, 'small') ||
    mediaUrl(exhibit.media) ||
    exhibit.legacySrc ||
    '';
  const isTallPortrait =
    !!exhibit.legacyWidth &&
    !!exhibit.legacyHeight &&
    exhibit.legacyHeight / exhibit.legacyWidth > 1.4;
  return (
    <figure className="flex flex-col">
      <button
        type="button"
        data-exhibit={exhibit.slug}
        aria-label={`${exhibit.exhibitNumber || ''} — ${exhibit.title}`}
        className="exhibit-thumb aspect-[4/3] w-full relative overflow-hidden border border-[var(--color-rule)] text-left cursor-zoom-in"
      >
        {exhibit.mediaType === 'video' ? (
          <span className="absolute inset-0 grid place-items-center bg-black/55 text-white text-3xl">
            ▶
          </span>
        ) : src ? (
          <Image
            src={src}
            alt={exhibit.title}
            fill
            sizes="(max-width: 640px) 50vw, 380px"
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
      <figcaption className="mt-2 flex flex-col gap-0.5">
        {exhibit.exhibitNumber && (
          <span className="label-strap text-[10px]">
            {exhibit.exhibitNumber}
          </span>
        )}
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
