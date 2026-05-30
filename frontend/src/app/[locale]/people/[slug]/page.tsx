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
  PEOPLE_PROFILES,
  getLocalizedPersonProfile,
  getPeopleChrome,
  SPRIBE_ORG,
} from '@/content/people';
import { exhibits } from '@/content/exhibits';
import type { ExhibitDTO } from '@/lib/types';

export function generateStaticParams() {
  // Pre-render every (locale, slug) so each entity profile ships as static HTML
  // that search engines index without hitting Next.js dynamically.
  return locales.flatMap((locale) =>
    PEOPLE_PROFILES.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const profile = getLocalizedPersonProfile(slug, loc);
  if (!profile) return {};

  const title = clampTitle(profile.metaTitle);
  const description = clampDescription(profile.metaDescription);
  return {
    title,
    description,
    alternates: buildAlternates(loc, `/people/${slug}`),
    openGraph: {
      title,
      description,
      images: [OG_IMAGE],
      type: 'profile',
      url: absoluteUrl(loc, `/people/${slug}`),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
    robots: { index: true, follow: true },
  };
}

export default async function PersonProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;

  const profile = getLocalizedPersonProfile(slug, loc);
  if (!profile) notFound();

  const bundle = await loadCaseFile(loc);
  const ui = bundle.config.uiStrings || {};
  const chrome = getPeopleChrome(loc);
  const pageUrl = absoluteUrl(loc, `/people/${slug}`);

  // Other profiles, localized, for the "Where to next" cross-links.
  const other = PEOPLE_PROFILES.filter((p) => p.slug !== slug).map(
    (p) => getLocalizedPersonProfile(p.slug, loc) ?? p,
  );

  // Primary-source screenshots backing the profile, resolved from the shared
  // exhibit set and kept in the profile's declared order.
  const profileExhibits: ExhibitDTO[] = (profile.exhibitSlugs || [])
    .map((s) => exhibits.find((ex) => ex.slug === s))
    .filter((ex): ex is ExhibitDTO => Boolean(ex));

  const exhibitImageObjects = profileExhibits
    .filter((ex) => ex.mediaType === 'image' && ex.legacySrc)
    .map((ex) => ({
      '@type': 'ImageObject',
      contentUrl: absoluteUrl(loc, '') + ex.legacySrc,
      url: absoluteUrl(loc, '') + ex.legacySrc,
      name: ex.title,
      caption: ex.title,
      creditText: ex.source || undefined,
      ...(ex.legacyWidth && ex.legacyHeight
        ? { width: ex.legacyWidth, height: ex.legacyHeight }
        : {}),
      isAccessibleForFree: true,
    }));

  // ProfilePage wrapping the @id-anchored Person (matched to the homepage
  // @graph) so search engines reconcile both surfaces to the same entity and
  // treat this URL as the authoritative document about the person. Spribe is
  // included for David so the Organization @id resolves within this graph too.
  const graph: Record<string, unknown>[] = [profile.jsonLdPerson];
  if (slug === 'david-natroshvili') graph.push(SPRIBE_ORG);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...graph,
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profilepage`,
        url: pageUrl,
        inLanguage: loc,
        name: profile.metaTitle,
        description: profile.metaDescription,
        isPartOf: { '@type': 'WebSite', name: 'The NATRO File', url: absoluteUrl(loc, '') },
        mainEntity: { '@id': profile.schemaId },
        about: { '@id': profile.schemaId },
        image: exhibitImageObjects.length ? exhibitImageObjects : undefined,
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
        compact
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '760px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}
      >
        <Link href="/people" className="sans text-xs uppercase tracking-widest">
          ← {ui['people.pageTitle'] || chrome.namedParties}
        </Link>

        <div className="kicker mt-4 mb-2">{profile.role}</div>
        <h1 className="serif text-[26px] sm:text-3xl md:text-4xl leading-tight font-medium tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)]">
          {profile.tagline}
        </p>

        {/* Public handles */}
        {profile.handles.length > 0 && (
          <ul className="mt-5 flex flex-col gap-1.5">
            {profile.handles.map((h, i) => (
              <li key={i} className="sans text-sm">
                <span className="text-[var(--color-ink-faint)] uppercase tracking-widest text-[10px] mr-2">
                  {h.platform}
                </span>
                {h.url ? (
                  <a href={h.url} target="_blank" rel="noreferrer noopener" className="text-[var(--color-ink-soft)]">
                    {h.handle}
                  </a>
                ) : (
                  <span className="text-[var(--color-ink-soft)]">{h.handle}</span>
                )}
                {h.note && <span className="text-[var(--color-ink-faint)]"> · {h.note}</span>}
              </li>
            ))}
          </ul>
        )}

        <hr className="rule-divider-strong" />

        {/* Body sections */}
        {profile.sections.map((s, i) => (
          <section key={i} className={i === 0 ? '' : 'mt-10'}>
            <h2 className="kicker mb-3">{s.heading}</h2>
            <Prose text={s.body} className="text-base leading-relaxed" />
          </section>
        ))}

        {/* Primary-source screenshots — the exhibits backing the profile */}
        {profileExhibits.length > 0 && (
          <section className="mt-10">
            <h2 className="kicker mb-3">{chrome.storiesHeading}</h2>
            <p className="sans text-sm text-[var(--color-ink-faint)] mb-4">
              {chrome.storiesNote}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
              {profileExhibits.map((ex) => (
                <figure key={ex.slug} className="flex flex-col">
                  <a
                    href={ex.legacySrc || '#'}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block relative w-full aspect-[9/16] overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 cursor-zoom-in"
                    aria-label={`${ex.exhibitNumber || ''} — ${ex.title}`}
                  >
                    {ex.legacySrc && (
                      <Image
                        src={ex.legacySrc}
                        alt={ex.title}
                        fill
                        sizes="(max-width: 640px) 50vw, 240px"
                        className="object-cover object-top"
                        loading="lazy"
                      />
                    )}
                  </a>
                  <figcaption className="mt-2 flex flex-col gap-0.5">
                    {ex.exhibitNumber && (
                      <span className="label-strap text-[10px]">
                        {ex.exhibitNumber}
                      </span>
                    )}
                    <span className="sans text-[11px] leading-snug text-[var(--color-ink-faint)]">
                      {ex.source}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        {profile.sources.length > 0 && (
          <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
            <h2 className="kicker mb-3">{ui['faq.citations'] || chrome.sources}</h2>
            <ul className="space-y-2">
              {profile.sources.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sans text-sm"
                  >
                    {c.label}{' '}
                    <span className="text-[var(--color-ink-faint)] mono text-[10px] break-all">
                      ({c.url})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Internal linking — the other entity profile + the core documents */}
        <nav
          aria-label="Where to next"
          className="mt-12 pt-8 border-t-2 border-[var(--color-ink)]"
        >
          <div className="kicker mb-4">{chrome.whereToNext}</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sans text-sm">
            {slug === 'david-natroshvili' && (
              <li>
                <Link href="/david-natroshvili-scam" className="block">
                  {chrome.davidAwardTitle}
                  <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                    {chrome.davidAwardSub}
                  </span>
                </Link>
              </li>
            )}
            {other.map((p) => (
              <li key={p.slug}>
                <Link href={`/people/${p.slug}` as `/people/${string}`} className="block">
                  {p.name} →
                  <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                    {p.role}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="block">
                {chrome.fullFile}
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  {chrome.fullFileSub}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/on-chain" className="block">
                {chrome.onchain}
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  {chrome.onchainSub}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/press" className="block">
                {chrome.press}
                <span className="block sans text-xs text-[var(--color-ink-faint)] mt-1">
                  {chrome.pressSub}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
