import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { loadCaseFile } from '@/lib/case-file';
import { AuthForm } from '@/components/AuthForm';

export default async function RegisterPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ next?: string }>;
}) {
  const { locale } = await params;
  const { next } = await searchParams;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
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
      <main className="relative z-[2] mx-auto" style={{ maxWidth: '480px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}>
        <h1 className="serif text-3xl font-medium">Create account</h1>
        <p className="mt-2 sans text-sm text-[var(--color-ink-faint)]">Required only for submitting your own reader story.</p>
        <hr className="rule-divider-strong" />
        <AuthForm mode="register" nextUrl={next || '/'} />
      </main>
    </>
  );
}
