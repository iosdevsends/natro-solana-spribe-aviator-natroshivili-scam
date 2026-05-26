import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';

import { locales, type Locale } from '@/i18n/routing';
import { Masthead } from '@/components/Masthead';
import { loadCaseFile } from '@/lib/case-file';
import { getCurrentUser } from '@/lib/auth';
import { SubmitStoryForm } from '@/components/SubmitStoryForm';

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
  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <>
      <Masthead
        locale={locale as Locale}
        title={bundle.config.siteTitle}
        meta={bundle.config.mastheadMeta}
        uiStrings={bundle.config.uiStrings}
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
                href={`${localePrefix}/auth/register?next=${encodeURIComponent(`${localePrefix}/stories/submit`)}`}
                className="sans border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition"
              >
                {t('registerCta')}
              </Link>
              <Link
                href={`${localePrefix}/auth/login?next=${encodeURIComponent(`${localePrefix}/stories/submit`)}`}
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
