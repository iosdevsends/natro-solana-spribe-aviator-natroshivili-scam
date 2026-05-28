import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { ArchiveCallout } from '@/components/ArchiveCallout';
import { Prose } from '@/components/Prose';
import { LightboxLazy } from '@/components/LightboxLazy';
import { loadCaseFile } from '@/lib/case-file';
import { mediaUrl, strapiPublicUrl } from '@/lib/strapi';
import {
  buildAlternates,
  absoluteUrl,
  ogLocale,
  ogLocaleAlternates,
} from '@/lib/seo';
import type { ExhibitDTO } from '@/lib/types';

const SCAM_ONE_PAGER_PATH = '/scam-one-pager';

/**
 * "Scam one-pager" — single-screen, share-optimised brief.
 *
 * Lives at /scam-one-pager because journalists, regulators, and
 * prospective holders googling "NATRO scam" land best on a URL whose
 * slug matches the search intent. Body content (deck, executive
 * summary, exhibit titles) all comes from the same localised case-file
 * bundle the main route uses, so this page is automatically
 * multilingual without separate translation work. The H1 is hardcoded
 * in English with "scam" in it to maximise share/embed legibility on
 * social cards and search snippets.
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
  const title = `The $NATRO scam — one-pager · ${bundle.config.siteTitle}`;
  const description =
    bundle.config.deck?.slice(0, 200) ||
    bundle.config.seoDescription ||
    bundle.config.tagline;
  return {
    title,
    description,
    alternates: buildAlternates(loc, SCAM_ONE_PAGER_PATH),
    openGraph: {
      title,
      description,
      type: 'article',
      url: absoluteUrl(loc, SCAM_ONE_PAGER_PATH),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ScamOnePagerPage({
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
        <div className="kicker mb-3">Scam brief · 30 seconds</div>
        <h1 className="serif text-[30px] sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight">
          How they scammed people.
        </h1>
        <p className="mt-3 sans text-sm text-[var(--color-ink-faint)] uppercase tracking-widest">
          {bundle.config.headline}
        </p>

        {/* Plain-talk TL;DR for a reader who has 30 seconds and no
            crypto background. The longer journalistic deck and the
            executive summary follow below. */}
        <div className="mt-6 border-l-4 border-[var(--color-accent)] bg-[var(--color-paper-warm)]/60 p-5 md:p-6">
          <p className="sans text-base md:text-lg leading-relaxed">
            Father runs <b>Aviator</b> — the global slot-style gambling
            product made by <b>Spribe</b>. Son <b>Alex Natroshvili</b>{' '}
            launched a Solana memecoin called <b>$NATRO</b> on Pump.fun
            and pitched it on the family name and the Spribe / Aviator
            reputation. People bought in.{' '}
            <b>Within 72 hours</b> the price collapsed{' '}
            <b className="text-[var(--color-damning)]">~98%</b>. Refund
            requests were refused. The team admin&apos;s reply:{' '}
            <i>&ldquo;Nothing to say.&rdquo;</i> The founder&apos;s
            personal Telegram reply when contacted directly:{' '}
            <i>&ldquo;stfu.&rdquo;</i> Within the same window the
            website was taken offline, the NATRO link was removed from
            the founder&apos;s Instagram bio, and the paid KOL video
            (@jrcryptex, 114K followers) was deleted. The blockchain
            trail, the archived website, and the chat logs were not.
          </p>
        </div>

        {bundle.config.deck && (
          <p className="serif italic text-lg md:text-xl text-[var(--color-ink-soft)] mt-8 leading-snug">
            {bundle.config.deck}
          </p>
        )}

        {bundle.config.executiveSummary && (
          <section className="mt-10 border-y border-[var(--color-ink)] py-6">
            <div className="kicker mb-3">What happened · longer version</div>
            <Prose
              text={bundle.config.executiveSummary}
              className="text-base md:text-lg"
            />
          </section>
        )}

        {exhibitsForGrid.length > 0 && (
          <section className="mt-12">
            <div className="kicker mb-4">Key scam exhibits</div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {exhibitsForGrid.map((ex) => (
                <OnePagerExhibit key={ex.slug} exhibit={ex} />
              ))}
            </div>
            <Link
              href={{ pathname: '/', hash: 'gallery' }}
              className="mt-4 inline-block sans text-xs uppercase tracking-widest"
            >
              See all {bundle.exhibits.length} scam exhibits →
            </Link>
          </section>
        )}

        {bundle.config.archiveCallout && (
          <ArchiveCallout {...bundle.config.archiveCallout} />
        )}

        <LightboxLazy
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
                Full scam case file →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Promise · Reality · Scrub · Voices · People · Sources
                </span>
              </Link>
            </li>
            <li>
              <Link href="/on-chain" className="block">
                On-chain scam verification →
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  Live token state, creator wallet activity
                </span>
              </Link>
            </li>
            <li>
              <Link href="/press" className="block">
                Scam press kit →
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
