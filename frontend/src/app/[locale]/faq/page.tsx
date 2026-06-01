import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { Prose } from '@/components/Prose';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const bundle = await loadCaseFile(loc);
  const title = clampTitle(`FAQ — ${bundle.config.siteTitle}`);
  const description = clampDescription(bundle.config.tagline || bundle.config.seoDescription || '');
  return {
    title,
    description,
    alternates: buildAlternates(loc, '/faq'),
    openGraph: {
      title,
      description,
      images: [OG_IMAGE],
      type: 'website',
      url: absoluteUrl(loc, '/faq'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
  };
}

export default async function FaqIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;

  const bundle = await loadCaseFile(loc);
  const faq = bundle.faq;
  const ui = bundle.config.uiStrings || {};
  const tNav = await getTranslations('nav');

  // Secondary pages not in the main nav, surfaced here as a collapsible list
  // (reader stories omitted — superseded by the reputation wall).
  const morePages: Array<{ href: string; label: string }> = [
    { href: '/david-natroshvili-scam', label: tNav('davidCase') },
    { href: '/david-natroshvili-principles', label: tNav('davidPrinciples') },
    { href: '/people/alex-natroshvili', label: tNav('profileAlex') },
    { href: '/people/david-natroshvili', label: tNav('profileDavid') },
    { href: '/press/fact-sheet', label: tNav('factSheet') },
    { href: '/privacy', label: tNav('privacy') },
  ];

  const pageUrl = absoluteUrl(loc, '/faq');
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
    inLanguage: loc,
    url: pageUrl,
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
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '900px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-3">§ FAQ</div>
        <h1 className="serif text-[28px] sm:text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight">
          {ui['faq.pageTitle'] || 'Frequently asked questions'}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)] max-w-[680px]">
          {ui['faq.pageLead'] ||
            'Short, sourced answers to the questions readers most often ask about $NATRO. Each entry links to a longer article with the full citation chain.'}
        </p>
        <hr className="rule-divider-strong" />

        <ol className="divide-y-2 divide-[var(--color-rule)]">
          {faq.map((entry) => (
            <li key={entry.slug} className="py-8">
              <Link
                href={`/faq/${entry.slug}` as `/faq/${string}`}
                className="block group no-underline"
              >
                <h2 className="serif text-xl md:text-2xl font-medium leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                  {entry.question}
                </h2>
              </Link>
              <Prose text={entry.shortAnswer} className="mt-3 text-base" />
              <Link
                href={`/faq/${entry.slug}` as `/faq/${string}`}
                className="inline-block mt-3 sans text-xs uppercase tracking-widest"
              >
                {ui['faq.readMore'] || 'Read the full answer'} →
              </Link>
            </li>
          ))}
        </ol>

        {/* Secondary pages, collapsible. CSS-only <details> (no JS). */}
        <section className="mt-12 border-t-2 border-[var(--color-ink)] pt-6">
          <details className="group">
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer select-none sans uppercase tracking-[0.16em] text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-soft)] transition-colors">
              {tNav('more')}{' '}
              <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 sans text-sm">
              {morePages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[var(--color-accent)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </section>
      </main>
    </>
  );
}
