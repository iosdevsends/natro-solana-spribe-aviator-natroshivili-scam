import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { buildAlternates, absoluteUrl, ogLocale, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';
import { getFactSheet } from '@/content/fact-sheet';
import { getPeopleChrome } from '@/content/people';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const fact = getFactSheet(loc);

  return {
    title: clampTitle(`${fact.headline} — Fact sheet`),
    description: clampDescription(`Press fact sheet: ${fact.headline}. Scannable numbers, timeline, named parties, sources.`),
    alternates: buildAlternates(loc, '/press/fact-sheet'),
    openGraph: {
      title: fact.headline,
      description: `Press fact sheet for journalists. Numbers, timeline, named parties, sources.`,
      images: [OG_IMAGE],
      type: 'article',
      url: absoluteUrl(loc, '/press/fact-sheet'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
    },
    robots: { index: true, follow: true },
  };
}

export default async function FactSheetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;
  const f = getFactSheet(loc);
  const chrome = getPeopleChrome(loc);

  return (
    <main
      className="fact-sheet relative z-[2] mx-auto print-narrow"
      style={{
        maxWidth: '880px',
        padding: 'clamp(20px, 3vw, 40px) clamp(16px, 4vw, 48px) 80px',
      }}
    >
      {/* Header strap */}
      <div className="flex items-baseline justify-between flex-wrap gap-2 pb-2 border-b-2 border-[var(--color-ink)]">
        <span className="kicker text-[var(--color-accent)]">{f.kicker}</span>
        <span className="label-strap text-[10px]">
          {f.filed}: {f.filedValue}
        </span>
      </div>

      {/* Headline */}
      <h1 className="serif text-2xl md:text-[28px] leading-tight font-medium mt-4 tracking-tight">
        {f.headline}
      </h1>

      {/* Numbers grid */}
      <section className="mt-6">
        <h2 className="kicker mb-3">{f.numbersHeading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {f.numbers.map((n, i) => (
            <div
              key={i}
              className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/40 p-3"
            >
              <div className="serif text-2xl md:text-[26px] font-medium leading-none">
                {n.value}
              </div>
              <div className="mt-1 sans text-[10px] text-[var(--color-ink-faint)] uppercase tracking-widest leading-tight">
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline + Parties side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-8">
        {/* Timeline */}
        <section>
          <h2 className="kicker mb-3">{f.timelineHeading}</h2>
          <ol className="space-y-1.5 text-[12px] leading-snug">
            {f.timeline.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[100px_1fr] gap-2 border-b border-dashed border-[var(--color-rule)] pb-1.5"
              >
                <span className="mono text-[10px] text-[var(--color-ink-faint)] uppercase pt-px">
                  {t.date}
                </span>
                <span>{t.event}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Parties */}
        <section>
          <h2 className="kicker mb-3">{f.partiesHeading}</h2>
          <ul className="space-y-3 text-[12px] leading-snug">
            {f.parties.map((p, i) => (
              <li
                key={i}
                className="border-l-2 border-[var(--color-accent)] pl-3"
              >
                <div className="serif font-medium text-[13px]">{p.name}</div>
                <div className="text-[var(--color-ink-soft)]">{p.role}</div>
                <div className="mono text-[10px] text-[var(--color-ink-faint)] mt-0.5">
                  {p.handles}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Sources */}
      <section className="mt-8 border-t border-[var(--color-rule)] pt-4">
        <h2 className="kicker mb-3">{f.sourcesHeading}</h2>
        <ul className="space-y-1 text-[12px] leading-snug list-disc pl-5">
          {f.sources.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      {/* Navigation — keeps the one-pager from being a crawl dead-end and
          gives readers a way back into the file. Hidden in print. */}
      <nav
        aria-label={chrome.whereToNext}
        className="mt-8 border-t border-[var(--color-rule)] pt-4 flex flex-wrap gap-x-5 gap-y-2 sans text-[11px] uppercase tracking-widest print:hidden"
      >
        <Link href="/">{chrome.fullFile}</Link>
        <Link href="/people">{chrome.namedParties} →</Link>
        <Link href="/on-chain">{chrome.onchain}</Link>
        <Link href="/press">{chrome.press}</Link>
      </nav>

      {/* Footer strap */}
      <footer className="mt-8 border-t-2 border-[var(--color-ink)] pt-3 text-[11px] flex flex-col gap-1">
        <div className="serif font-medium">{f.contactLine}</div>
        <div className="text-[var(--color-ink-faint)]">{f.fileLine}</div>
      </footer>
    </main>
  );
}
