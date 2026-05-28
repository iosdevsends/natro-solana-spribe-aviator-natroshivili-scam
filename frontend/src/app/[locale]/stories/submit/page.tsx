import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { loadCaseFile } from '@/lib/case-file';
import { getCurrentUser } from '@/lib/auth';
import { SubmitStoryForm } from '@/components/SubmitStoryForm';
import { buildAlternates, absoluteUrl, ogLocale } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'stories' });
  return {
    title: `${t('submitTitle')} — The NATRO File`,
    description: t('moderation'),
    alternates: buildAlternates(loc, '/stories/submit'),
    // Submission form is not for indexing — keep noindex
    robots: { index: false, follow: false },
    openGraph: {
      title: t('submitTitle'),
      type: 'website',
      url: absoluteUrl(loc, '/stories/submit'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
    },
  };
}

export default async function SubmitStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations('stories');
  const bundle = await loadCaseFile(locale as Locale);
  const user = await getCurrentUser();

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
      <main className="relative z-[2] mx-auto" style={{ maxWidth: '780px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}>
        <div className="kicker mb-3">§ Reader-submitted</div>
        <h1 className="serif text-3xl md:text-4xl font-medium tracking-tight leading-tight">{t('submitTitle')}</h1>
        <p className="mt-4 sans text-sm text-[var(--color-ink-faint)]">{t('moderation')}</p>
        <hr className="rule-divider-strong" />

        {user ? (
          <SubmitStoryForm locale={locale as Locale} />
        ) : (
          <div className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)] p-6">
            <p className="serif text-lg mb-4">{t('registerFirst')}</p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/auth/register?next=%2Fstories%2Fsubmit"
                className="sans border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition"
              >
                {t('registerCta')}
              </Link>
              <Link
                href="/auth/login?next=%2Fstories%2Fsubmit"
                className="sans border border-[var(--color-rule)] text-[var(--color-ink)] px-4 py-2 uppercase tracking-widest text-xs hover:border-[var(--color-ink)]"
              >
                {t('loginCta')}
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
