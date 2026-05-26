import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/routing';
import { siteUrl, absoluteUrl } from '@/lib/seo';
import { strapiFetch, type StrapiCollection } from '@/lib/strapi';
import type { UserStoryDTO } from '@/lib/types';

const STATIC_PATHS = ['', '/stories'];

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages × locales
  for (const path of STATIC_PATHS) {
    entries.push({
      url: absoluteUrl(defaultLocale, path),
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'daily',
      priority: path === '' ? 1.0 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, absoluteUrl(l, path)]),
        ),
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
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            l === defaultLocale
              ? `${siteUrl}/stories/${story.slug}`
              : `${siteUrl}/${l}/stories/${story.slug}`,
          ]),
        ),
      },
    });
  }

  return entries;
}
