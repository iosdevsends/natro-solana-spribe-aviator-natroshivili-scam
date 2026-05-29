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
} from '@/lib/seo';
import { PEOPLE_PROFILES, getPersonProfile, SPRIBE_ORG } from '@/content/people';

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
  const profile = getPersonProfile(slug);
  if (!profile) return {};

  const title = profile.metaTitle;
  const description = profile.metaDescription;
  return {
    title,
    description,
    alternates: buildAlternates(loc, `/people/${slug}`),
    openGraph: {
      title,
      description,
      type: 'profile',
      url: absoluteUrl(loc, `/people/${slug}`),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description },
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

  const profile = getPersonProfile(slug);
  if (!profile) notFound();

  const bundle = await loadCaseFile(loc);
  const ui = bundle.config.uiStrings || {};
  const pageUrl = absoluteUrl(loc, `/people/${slug}`);

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
      },
    ],
  };

  const other = PEOPLE_PROFILES.filter((p) => p.slug !== slug);

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
          ← {ui['people.pageTitle'] || 'Named parties'}
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

        {/* Sources */}
        {profile.sources.length > 0 && (
          <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
            <h2 className="kicker mb-3">{ui['faq.citations'] || 'Sources'}</h2>
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
          <div className="kicker mb-4">Where to next</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sans text-sm">
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
                Press kit & right of reply →
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
