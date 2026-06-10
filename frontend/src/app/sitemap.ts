import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/routing';
import { siteUrl, absoluteUrl } from '@/lib/seo';
import { strapiFetch, type StrapiCollection } from '@/lib/strapi';
import type { UserStoryDTO } from '@/lib/types';
import { exhibits } from '@/content/exhibits';
import { getFaq } from '@/content/faq';

const STATIC_PATHS = [
  '',
  '/scam-one-pager',
  '/reputation',
  '/stories',
  '/press',
  '/press/fact-sheet',
  '/faq',
  '/on-chain',
  '/david-natroshvili-scam',
  '/david-natroshvili-principles',
  '/how-did-natroalex-make-his-money',
  '/the-name-in-search',
  '/people',
  '/people/alex-natroshvili',
  '/people/david-natroshvili',
  '/privacy',
];

async function listApprovedStories(): Promise<UserStoryDTO[]> {
  try {
    const res = await strapiFetch<StrapiCollection<UserStoryDTO>>(
      '/user-stories',
      {
        locale: defaultLocale,
        sort: 'approvedAt:desc',
        pagination: { pageSize: 200 },
        revalidate: 3600,
      },
    );
    return res.data || [];
  } catch {
    return [];
  }
}

function exhibitImageUrls(): string[] {
  return exhibits
    .filter((ex) => ex.mediaType === 'image' && ex.legacySrc)
    .map((ex) => `${siteUrl}${ex.legacySrc}`);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const images = exhibitImageUrls();

  for (const path of STATIC_PATHS) {
    entries.push({
      url: absoluteUrl(defaultLocale, path),
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'daily',
      priority: path === '' ? 1.0 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [l, absoluteUrl(l, path)]),
          ),
          'x-default': absoluteUrl(defaultLocale, path),
        },
      },
      // Image sitemap entries — attached to the homepage so Google Image Search
      // discovers every exhibit. Mirrored to all locale variants via hreflang.
      images: path === '' ? images : undefined,
    });
  }

  // FAQ entry pages — one URL per slug, with hreflang alternates per locale.
  for (const entry of getFaq(defaultLocale)) {
    entries.push({
      url: `${siteUrl}/faq/${entry.slug}`,
      lastModified: entry.lastReviewedAt ? new Date(entry.lastReviewedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [
              l,
              l === defaultLocale
                ? `${siteUrl}/faq/${entry.slug}`
                : `${siteUrl}/${l}/faq/${entry.slug}`,
            ]),
          ),
          'x-default': `${siteUrl}/faq/${entry.slug}`,
        },
      },
    });
  }

  // Reader stories (only approved, fetched via the public API)
  const stories = await listApprovedStories();
  for (const story of stories) {
    entries.push({
      url: `${siteUrl}/stories/${story.slug}`,
      lastModified: story.approvedAt ? new Date(story.approvedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [
              l,
              l === defaultLocale
                ? `${siteUrl}/stories/${story.slug}`
                : `${siteUrl}/${l}/stories/${story.slug}`,
            ]),
          ),
          'x-default': `${siteUrl}/stories/${story.slug}`,
        },
      },
    });
  }

  return entries;
}
