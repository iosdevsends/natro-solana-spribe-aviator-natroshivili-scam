import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates } from '@/lib/seo';
import { getFaq } from '@/content/faq';
import { OnChainStateBlock } from '@/components/OnChainStateBlock';

export function generateStaticParams() {
  // Pre-render every (locale, slug) combination so each FAQ entry ships as a
  // static HTML page that Google can index without hitting Next.js dynamically.
  return locales.flatMap((locale) =>
    getFaq(locale).map((entry) => ({ locale, slug: entry.slug })),
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
  const entry = getFaq(loc).find((e) => e.slug === slug);
  if (!entry) return {};

  const title = `${entry.question} — The NATRO File`;
  const description = entry.shortAnswer;
  return {
    title,
    description,
    alternates: buildAlternates(loc, `/faq/${slug}`),
    openGraph: {
      title: entry.question,
      description,
      type: 'article',
      url: absoluteUrl(loc, `/faq/${slug}`),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
      publishedTime: entry.lastReviewedAt,
      modifiedTime: entry.lastReviewedAt,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function FaqEntryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;

  const entry = getFaq(loc).find((e) => e.slug === slug);
  if (!entry) notFound();

  const bundle = await loadCaseFile(loc);
  const ui = bundle.config.uiStrings || {};
  const pageUrl = absoluteUrl(loc, `/faq/${slug}`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Question',
    name: entry.question,
    text: entry.question,
    inLanguage: loc,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    dateCreated: entry.lastReviewedAt,
    dateModified: entry.lastReviewedAt,
    acceptedAnswer: {
      '@type': 'Answer',
      text: entry.shortAnswer,
      inLanguage: loc,
      url: pageUrl,
      author: {
        '@type': 'Person',
        name: 'An affected early holder',
        alternateName: '@btc3050',
        url: 'https://t.me/btc3050',
      },
    },
    author: {
      '@type': 'Person',
      name: 'An affected early holder',
      alternateName: '@btc3050',
      url: 'https://t.me/btc3050',
    },
    isPartOf: {
      '@type': 'FAQPage',
      url: absoluteUrl(loc, '/faq'),
    },
    citation: entry.citations?.map((c) => c.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Masthead
        locale={loc}
        title={bundle.config.siteTitle}
        meta={bundle.config.mastheadMeta}
        uiStrings={ui}
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '760px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}
      >
        <Link href="/faq" className="sans text-xs uppercase tracking-widest">
          ← {ui['faq.pageTitle'] || 'FAQ'}
        </Link>
        <div className="kicker mt-4 mb-2">§ FAQ · Q&amp;A</div>
        <h1 className="serif text-[24px] sm:text-3xl md:text-4xl leading-snug font-medium">
          {entry.question}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)]">
          {entry.shortAnswer}
        </p>
        <hr className="rule-divider-strong" />

        <Prose text={entry.extendedBody} className="text-base leading-relaxed" />

        {/* For the "still trading" entry, embed the live on-chain state block so
            readers can verify the market-cap / graduation claims right here. */}
        {slug === 'is-natro-token-still-trading' && (
          <div className="mt-8">
            <OnChainStateBlock />
          </div>
        )}

        {entry.citations && entry.citations.length > 0 && (
          <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
            <div className="kicker mb-3">{ui['faq.citations'] || 'Citations'}</div>
            <ul className="space-y-2">
              {entry.citations.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sans text-sm"
                  >
                    {c.label}{' '}
                    <span className="opacity-60 mono text-[10px] break-all">
                      ({c.url})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
          <div className="kicker mb-3">{ui['faq.other'] || 'Other questions'}</div>
          <ul className="space-y-2">
            {getFaq(loc)
              .filter((e) => e.slug !== slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/faq/${other.slug}` as `/faq/${string}`}
                    className="sans text-sm"
                  >
                    → {other.question}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}
