import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { Masthead } from '@/components/Masthead';
import { strapiFetch, type StrapiCollection } from '@/lib/strapi';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates } from '@/lib/seo';
import type { UserStoryDTO } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'stories' });
  const title = `${t('pageTitle')} — The NATRO File`;
  const description = t('pageLead');
  return {
    title,
    description,
    alternates: buildAlternates(loc, '/stories'),
    openGraph: {
      title,
      description,
      type: 'website',
      url: absoluteUrl(loc, '/stories'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

async function listStories(locale: Locale): Promise<UserStoryDTO[]> {
  try {
    const res = await strapiFetch<StrapiCollection<UserStoryDTO>>('/user-stories', {
      locale,
      sort: 'approvedAt:desc',
      pagination: { pageSize: 50 },
      revalidate: 60,
      tags: ['stories', `stories:${locale}`],
    });
    return res.data || [];
  } catch (err) {
    console.warn('[stories] fetch failed', (err as Error).message);
    return [];
  }
}

export default async function StoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations('stories');
  const stories = await listStories(locale as Locale);
  const bundle = await loadCaseFile(locale as Locale);

  return (
    <>
      <Masthead
        locale={locale as Locale}
        title={bundle.config.siteTitle}
        meta={bundle.config.mastheadMeta}
        uiStrings={bundle.config.uiStrings}
      />
      <main className="relative z-[2] mx-auto" style={{ maxWidth: '900px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}>
        <div className="kicker mb-3">§ Reader-submitted</div>
        <h1 className="serif text-3xl md:text-5xl font-medium tracking-tight leading-tight">{t('pageTitle')}</h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)]">{t('pageLead')}</p>

        <div className="mt-8 mb-12">
          <Link
            href="/stories/submit"
            className="sans inline-block border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition"
          >
            {t('submitTitle')} →
          </Link>
        </div>

        <hr className="rule-divider-strong" />

        {stories.length === 0 ? (
          <p className="sans text-sm text-[var(--color-ink-faint)] py-8">{t('empty')}</p>
        ) : (
          <ul className="divide-y divide-[var(--color-rule)]">
            {stories.map((story) => (
              <li key={story.id} className="py-8">
                <h2 className="serif text-2xl font-medium">
                  <Link href={`/stories/${story.slug}`} className="text-[var(--color-ink)] no-underline hover:text-[var(--color-accent)]">
                    {story.title}
                  </Link>
                </h2>
                {story.summary && (
                  <p className="mt-2 text-[var(--color-ink-soft)] leading-relaxed">{story.summary}</p>
                )}
                <div className="mt-3 sans text-xs text-[var(--color-ink-faint)] flex flex-wrap gap-x-3">
                  {story.isAnonymous ? <span>Anonymous</span> : story.authorDisplayName ? <span>{story.authorDisplayName}</span> : null}
                  {story.tokenSymbol && <span>· ${story.tokenSymbol}</span>}
                  {story.tokenChain && <span>· {story.tokenChain}</span>}
                  {story.lossUsd != null && <span>· ${'~'}${Math.round(story.lossUsd).toLocaleString()} self-reported</span>}
                  {story.verificationStatus === 'verified' && <span>· Verified</span>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
