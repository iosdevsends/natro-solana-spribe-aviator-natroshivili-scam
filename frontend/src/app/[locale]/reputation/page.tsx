import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { PostCommentForm } from '@/components/PostCommentForm';
import { strapiFetch, type StrapiCollection } from '@/lib/strapi';
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
import type { CaseCommentDTO } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'wall' });
  const title = clampTitle(`${t('pageTitle')} — The NATRO File`);
  const description = clampDescription(t('lead1'));
  return {
    title,
    description,
    alternates: buildAlternates(loc, '/reputation'),
    openGraph: {
      title,
      description,
      images: [OG_IMAGE],
      type: 'website',
      url: absoluteUrl(loc, '/reputation'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
  };
}

async function listComments(): Promise<CaseCommentDTO[]> {
  try {
    const res = await strapiFetch<StrapiCollection<CaseCommentDTO>>('/case-comments', {
      sort: 'approvedAt:desc',
      pagination: { pageSize: 200 },
      revalidate: 60,
      tags: ['comments'],
    });
    return res.data || [];
  } catch (err) {
    console.warn('[reputation] comment fetch failed', (err as Error).message);
    return [];
  }
}

function formatDate(iso: string | undefined, locale: string): string {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

export default async function ReputationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations('wall');
  const [comments, bundle] = await Promise.all([listComments(), loadCaseFile(locale as Locale)]);

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
        style={{ maxWidth: '820px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-3">§ {t('kicker')}</div>
        <h1 className="serif text-3xl md:text-5xl font-medium tracking-tight leading-tight">
          {t('pageTitle')}
        </h1>

        <div className="mt-6 space-y-4 serif text-lg leading-relaxed text-[var(--color-ink-soft)]">
          <p>{t('lead1')}</p>
          <p>{t('lead2')}</p>
        </div>

        <blockquote className="my-10 border-l-4 border-[var(--color-accent)] pl-5 serif italic text-xl text-[var(--color-ink)]">
          {t('pullquote')}
        </blockquote>

        {/* ── Invitation + form ─────────────────────────────────────────── */}
        <section className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)]/50 p-6 md:p-8">
          <h2 className="serif text-2xl font-medium">{t('inviteTitle')}</h2>
          <p className="mt-2 sans text-sm text-[var(--color-ink-soft)] leading-relaxed">
            {t('inviteLead')}
          </p>
          <div className="mt-6">
            <PostCommentForm locale={locale as Locale} />
          </div>
        </section>

        {/* ── Comment feed ──────────────────────────────────────────────── */}
        <div className="mt-14">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <h2 className="serif text-2xl font-medium">{t('feedTitle')}</h2>
            <span className="sans text-xs text-[var(--color-ink-faint)] uppercase tracking-widest">
              {t('feedCount', { count: comments.length })}
            </span>
          </div>
          <hr className="rule-divider-strong" />

          {comments.length === 0 ? (
            <p className="sans text-sm text-[var(--color-ink-faint)] py-10">{t('empty')}</p>
          ) : (
            <ul className="divide-y divide-[var(--color-rule)]">
              {comments.map((c) => (
                <li key={c.id} className="py-7">
                  <p className="serif text-lg leading-relaxed text-[var(--color-ink)] whitespace-pre-line">
                    {c.body}
                  </p>
                  <div className="mt-3 sans text-xs text-[var(--color-ink-faint)] flex flex-wrap gap-x-3 gap-y-1">
                    <span className="font-medium text-[var(--color-ink-soft)]">
                      {c.isAnonymous || !c.authorDisplayName ? t('anonymous') : c.authorDisplayName}
                    </span>
                    {c.country && <span>· {c.country}</span>}
                    {(c.approvedAt || c.submittedAt) && (
                      <span>· {formatDate(c.approvedAt || c.submittedAt, locale)}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
