import type { ExhibitDTO } from '@/lib/types';

/**
 * Canonical exhibit inventory. Files live under public/exhibits/ (mirrored
 * from /legacy/images/exhibits/). When uploaded to Strapi, `legacySrc` is
 * replaced by `media.url`; otherwise the legacySrc path keeps the site
 * renderable on first boot.
 */

export const exhibits: ExhibitDTO[] = [
  // §I narrative order (jrcryptex promo)
  { id: 1, slug: 'jrcryptex-promo', exhibitNumber: 'Exhibit 1', fileNumber: 17, displayOrder: 1, title: 'KOL promotional video (deleted)', mediaType: 'video', legacySrc: '/exhibits/ex-video-03-jrcryptex-promo.mp4', source: 'Instagram @jrcryptex (114K followers) — deleted 24 May 2026', highlighted: false },
  { id: 2, slug: 'david-reshare', exhibitNumber: 'Exhibit 2', fileNumber: 1, displayOrder: 2, title: 'David Natroshvili reshares the launch promo', mediaType: 'image', legacySrc: '/exhibits/ex01-jrcryptex-promo-reshared-by-david.jpg', source: 'Instagram Stories, @davidnatro1 (verified)', highlighted: false },
  { id: 3, slug: 'natroalex-bio-before', exhibitNumber: 'Exhibit 3', fileNumber: 14, displayOrder: 3, title: '@natroalex profile — before scrub', mediaType: 'image', legacySrc: '/exhibits/ex14-natroalex-instagram-bio.png', source: 'instagram.com/natroalex', highlighted: false },
  { id: 5, slug: 'tagline-promo', exhibitNumber: 'Exhibit 5', fileNumber: 18, displayOrder: 5, title: 'NATRO tagline promo', mediaType: 'video', legacySrc: '/exhibits/ex-video-01-natro-tagline.mp4', source: 'natrocoin.net hero video (archived)', highlighted: false },
  { id: 6, slug: 'price-collapse-reactions', exhibitNumber: 'Exhibit 6', fileNumber: 12, displayOrder: 6, title: 'Holder reactions during price collapse', mediaType: 'image', legacySrc: '/exhibits/ex12-foyer-price-collapse-reactions.png', source: 'NATRO Foyer Telegram', highlighted: false },
  { id: 7, slug: 'telegram-fix-it', exhibitNumber: 'Exhibit 7', fileNumber: 8, displayOrder: 7, title: 'Holders demand a plan', mediaType: 'image', legacySrc: '/exhibits/ex08-telegram-foyer-discussion.png', source: 'NATRO Foyer Telegram', highlighted: false },
  { id: 8, slug: 'foyer-early', exhibitNumber: 'Exhibit 8', fileNumber: 5, displayOrder: 8, title: 'Foyer chat — "Natro scam" / "Fucking scam"', mediaType: 'image', legacySrc: '/exhibits/ex05-foyer-chat-early.png', source: 'NATRO Foyer Telegram, 23 May 2026 13:53', highlighted: false },
  { id: 9, slug: 'nothing-to-say', exhibitNumber: 'Exhibit 9', fileNumber: 9, displayOrder: 9, title: '"Nothing to say." — team admin', mediaType: 'image', legacySrc: '/exhibits/ex09-telegram-nothing-to-say.png', source: 'Telegram DM — A A (team admin)', highlighted: false },
  { id: 10, slug: 'aa-admin', exhibitNumber: 'Exhibit 10', fileNumber: 10, displayOrder: 10, title: 'A A — admin profile in Floor chat', mediaType: 'image', legacySrc: '/exhibits/ex10-telegram-aa-admin.png', source: 'NATRO Floor Telegram', highlighted: false },
  { id: 11, slug: 'lounge-dm', exhibitNumber: 'Exhibit 11', fileNumber: 11, displayOrder: 11, title: 'Lounge admin private DM', mediaType: 'image', legacySrc: '/exhibits/ex11-telegram-lounge-private-dm.png', source: 'NATRO Lounge Telegram (private DM)', highlighted: false },
  { id: 12, slug: 'admin-left', exhibitNumber: 'Exhibit 12', fileNumber: 7, displayOrder: 12, title: 'Admin leaves the Foyer (23 May 13:50)', mediaType: 'image', legacySrc: '/exhibits/ex07-admin-left-chat.png', source: 'NATRO Foyer Telegram', highlighted: false },
  { id: 13, slug: 'natroalex-profile-after', exhibitNumber: 'Exhibit 14', fileNumber: 2, displayOrder: 13, title: '@natroalex profile — link removed', mediaType: 'image', legacySrc: '/exhibits/ex02-natroalex-instagram-profile.png', source: 'instagram.com/natroalex (25 May)', highlighted: false },
  { id: 14, slug: 'natrocoin-source-html', exhibitNumber: 'Exhibit 15', fileNumber: 3, displayOrder: 14, title: 'natrocoin.net source HTML (pre-takedown)', mediaType: 'image', legacySrc: '/exhibits/ex03-natrocoin-source-view.png', source: 'view-source:https://natrocoin.net/ — 23 May 19:59', highlighted: false },
  { id: 15, slug: 'maison-promo', exhibitNumber: 'Exhibit 18', fileNumber: 19, displayOrder: 15, title: '"The Maison. The Measure." promo', mediaType: 'video', legacySrc: '/exhibits/ex-video-02-natro-maison.mp4', source: 'natrocoin.net (archived)', highlighted: false },
  { id: 16, slug: 'foyer-pre-deletion', exhibitNumber: 'Exhibit 19', fileNumber: 6, displayOrder: 16, title: 'Foyer chat preserved before deletion', mediaType: 'image', legacySrc: '/exhibits/ex06-foyer-chat-before-delete.png', source: 'NATRO Foyer Telegram (backup capture)', highlighted: false },
  { id: 17, slug: 'stfu-from-alex', exhibitNumber: 'Exhibit 20', fileNumber: 13, displayOrder: 17, title: '"stfu." — Alex Natroshvili, 25 May 10:11', mediaType: 'image', legacySrc: '/exhibits/ex13-stfu-from-alex.png', source: 'Telegram DM — @natroalex1 (verified)', highlighted: true },
];

export const exhibitBySlug = Object.fromEntries(
  exhibits.map((e) => [e.slug, e]),
) as Record<string, ExhibitDTO>;
