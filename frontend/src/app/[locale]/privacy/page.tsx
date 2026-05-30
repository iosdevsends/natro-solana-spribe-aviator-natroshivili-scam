import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return {
    title: clampTitle(`${t('title')} — The NATRO File`),
    description: clampDescription(t('lead')),
    alternates: buildAlternates(loc, '/privacy'),
    openGraph: {
      title: t('title'),
      description: t('lead'),
      images: [OG_IMAGE],
      type: 'website',
      url: absoluteUrl(loc, '/privacy'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('privacy');
  const bundle = await loadCaseFile(locale as Locale);

  return (
    <>
      <CeremonialMasthead
        locale={locale as Locale}
        tagline={bundle.config.tagline}
        uiStrings={bundle.config.uiStrings}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '780px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-3">§ Privacy</div>
        <h1 className="serif text-3xl md:text-4xl font-medium tracking-tight leading-tight">
          {t('title')}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)]">{t('lead')}</p>
        <hr className="rule-divider-strong" />

        <section className="space-y-3 mb-10">
          <h2 className="kicker">{t('section_what')}</h2>
          <p className="leading-relaxed">{t('what_p1')}</p>
          <p className="leading-relaxed">{t('what_p2')}</p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="kicker">{t('section_no')}</h2>
          <p className="leading-relaxed">{t('no_p1')}</p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="kicker">{t('section_user')}</h2>
          <p className="leading-relaxed">{t('user_p1')}</p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="kicker">{t('section_change')}</h2>
          <p className="leading-relaxed">{t('change_p1')}</p>
        </section>

        <section className="border-t border-[var(--color-rule)] pt-6">
          <h2 className="kicker mb-2">{t('contact')}</h2>
          <p className="leading-relaxed">
            Telegram:{' '}
            <a href="https://t.me/btc3050" target="_blank" rel="noreferrer noopener">
              @btc3050
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
