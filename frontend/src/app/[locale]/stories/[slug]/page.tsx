import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import DOMPurify from 'isomorphic-dompurify';

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
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const story = await findStoryBySlug(loc, slug);
  if (!story) return {};
  const title = `${story.title} — Reader account`;
  const description = (story.summary || '').slice(0, 200);
  return {
    title,
    description,
    alternates: buildAlternates(loc, `/stories/${slug}`),
    openGraph: {
      title,
      description,
      type: 'article',
      url: absoluteUrl(loc, `/stories/${slug}`),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
      publishedTime: story.approvedAt,
      modifiedTime: story.approvedAt,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

async function findStoryBySlug(locale: Locale, slug: string): Promise<UserStoryDTO | null> {
  try {
    const res = await strapiFetch<StrapiCollection<UserStoryDTO>>('/user-stories', {
      locale,
      filters: { slug: { $eq: slug } },
      pagination: { pageSize: 1 },
      revalidate: 60,
      tags: ['stories', `stories:${locale}`],
    });
    return res.data?.[0] || null;
  } catch {
    return null;
  }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const story = await findStoryBySlug(locale as Locale, slug);
  if (!story) notFound();

  const bundle = await loadCaseFile(locale as Locale);

  return (
    <>
      <Masthead locale={locale as Locale} title={bundle.config.siteTitle} meta={bundle.config.mastheadMeta} uiStrings={bundle.config.uiStrings} />
      <main className="relative z-[2] mx-auto" style={{ maxWidth: '760px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}>
        <Link href="/stories" className="sans text-xs uppercase tracking-widest">← Reader stories</Link>
        <h1 className="serif text-3xl md:text-4xl mt-4 font-medium">{story.title}</h1>
        <div className="mt-3 sans text-xs text-[var(--color-ink-faint)] flex flex-wrap gap-x-3">
          {story.isAnonymous ? <span>Anonymous</span> : story.authorDisplayName ? <span>{story.authorDisplayName}</span> : null}
          {story.tokenSymbol && <span>· ${story.tokenSymbol}</span>}
          {story.tokenChain && <span>· {story.tokenChain}</span>}
          {story.lossUsd != null && <span>· ${Math.round(story.lossUsd).toLocaleString()} self-reported</span>}
          {story.verificationStatus === 'verified' && <span>· Verified</span>}
        </div>
        <hr className="rule-divider-strong" />
        {story.summary && <p className="serif italic text-lg text-[var(--color-ink-soft)] mb-6">{story.summary}</p>}
        {/* Render the editor-approved body. Sanitization happened at submit time. */}
        <article
          className="prose-like leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(story.body, {
              ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'blockquote', 'h2', 'h3', 'code'],
              ALLOWED_ATTR: ['href', 'rel', 'target'],
              ADD_ATTR: ['rel'],
            }),
          }}
        />
        {story.evidenceLinks && story.evidenceLinks.length > 0 && (
          <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
            <div className="kicker mb-3">Evidence links</div>
            <ul className="space-y-1">
              {story.evidenceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noreferrer noopener" className="sans text-sm">
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
