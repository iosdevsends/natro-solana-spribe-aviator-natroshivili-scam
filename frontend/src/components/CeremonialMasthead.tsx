import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NavMenuDropdown } from './NavMenuDropdown';
import { PublicationTimer } from './PublicationTimer';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
  tagline?: string;
  uiStrings?: Record<string, string>;
  exhibitCount: number;
  languageCount: number;
  /**
   * Deprecated. The masthead is now always compact + sticky on every
   * route. Kept as an accepted prop so existing callers compile without
   * churn; the value is ignored.
   */
  compact?: boolean;
};

/**
 * Newspaper-ceremonial masthead.
 *
 * Always-sticky compact bar used at the top of every route (landing
 * included). Layout from top down:
 *   1. Thin top strap — file ID + language switcher
 *   2. Brand "The NATRO File" + italic tagline on one centred line
 *      (wraps to two lines on narrow viewports — tagline never hides)
 *   3. Centred nav row, edge-faded when it overflows horizontally
 *   4. Black status strap — since-publication timer + counts
 *
 * Sticks to top with backdrop-blur so the nav stays available as the
 * reader scrolls through long sections.
 */
function shortLabel(raw: string | undefined, fallback: string): string {
  if (!raw) return fallback;
  const sepIdx = raw.indexOf('·');
  if (sepIdx === -1) return raw.trim();
  return raw.slice(sepIdx + 1).trim() || raw;
}

export async function CeremonialMasthead({
  locale,
  tagline,
  uiStrings,
  exhibitCount,
  languageCount,
}: Props) {
  // Localized label for the comment-wall link. Lives in the next-intl message
  // files (nav.reputation, all 8 locales) rather than Strapi uiStrings, so the
  // link reads correctly in every language without a CMS edit.
  const tNav = await getTranslations('nav');
  const reputationLabel = tNav('reputation');

  // The "Summary" nav pill is a dropdown: the one-pager itself plus every
  // secondary page that isn't otherwise in the menu (the David pages, the
  // profiles, the fact sheet, privacy). Labels resolved server-side here and
  // passed to the client dropdown component.
  const summaryLabel = uiStrings?.['nav.summary'] || 'Summary';
  const summaryMenuItems = [
    { href: '/scam-one-pager', label: summaryLabel },
    { href: '/david-natroshvili-scam', label: tNav('davidCase') },
    { href: '/david-natroshvili-principles', label: tNav('davidPrinciples') },
    { href: '/how-did-natroalex-make-his-money', label: tNav('natroMoney') },
    { href: '/people/alex-natroshvili', label: tNav('profileAlex') },
    { href: '/people/david-natroshvili', label: tNav('profileDavid') },
    { href: '/press/fact-sheet', label: tNav('factSheet') },
    { href: '/privacy', label: tNav('privacy') },
  ];

  const nav: Array<{ key: string; hash: string; label: string }> = [
    { key: 'promise', hash: 'promise', label: shortLabel(uiStrings?.['nav.promise'], 'Promise') },
    { key: 'reality', hash: 'reality', label: shortLabel(uiStrings?.['nav.reality'], 'Reality') },
    { key: 'scrub', hash: 'coverup', label: shortLabel(uiStrings?.['nav.scrub'], 'Scrub') },
    { key: 'voices', hash: 'voices', label: shortLabel(uiStrings?.['nav.voices'], 'Voices') },
    { key: 'people', hash: 'people', label: shortLabel(uiStrings?.['nav.people'], 'People') },
    { key: 'evidence', hash: 'evidence', label: shortLabel(uiStrings?.['nav.evidence'], 'Sources') },
    { key: 'gallery', hash: 'gallery', label: shortLabel(uiStrings?.['nav.gallery'], 'Gallery') },
    { key: 'faq', hash: 'faq', label: shortLabel(uiStrings?.['nav.faq'], 'FAQ') },
  ];

  const liveLabel = (uiStrings?.['masthead.sincePublication'] || 'LIVE SINCE PUBLICATION ·')
    .replace(/·$/, '·')
    .toUpperCase();
  const sourcesLabel = (uiStrings?.['masthead.compiledFrom'] || 'Compiled from primary sources').toUpperCase();
  const exhibitsLabel = (uiStrings?.['masthead.exhibits'] || 'Exhibits').toUpperCase();
  const languagesLabel = (uiStrings?.['masthead.languages'] || 'Languages').toUpperCase();

  return (
    <header
      className="ceremonial sticky top-0 z-40 border-b-2 border-[var(--color-ink)] bg-[var(--color-paper-warm)]/85 backdrop-blur print:hidden"
      role="banner"
    >
      {/* 1 — Top strap: file ID + language switcher */}
      <div
        className="border-b border-[var(--color-rule)] px-4 sm:px-6 py-2 flex items-center justify-between gap-3 mono text-[10px] tracking-widest uppercase text-[var(--color-ink-faint)]"
      >
        <span className="hidden sm:inline whitespace-nowrap">
          File · NTR-001 &nbsp;&nbsp;Vol. I, No. 1
        </span>
        <span className="sm:hidden">NTR-001</span>
        <LanguageSwitcher current={locale} />
      </div>

      {/* 2 + 3 — Brand + tagline on one centred line. flex-wrap means
          on narrow viewports the tagline wraps below the title rather
          than being clipped — the tagline never hides. */}
      <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-0.5 text-center">
        <Link
          href="/"
          className="no-underline"
          aria-label="The NATRO File — home"
        >
          <span className="serif text-xl sm:text-2xl md:text-[26px] leading-tight font-medium tracking-tight text-[var(--color-accent)]">
            The NATRO File
          </span>
        </Link>
        {tagline && (
          <>
            <span aria-hidden="true" className="hidden sm:inline text-[var(--color-rule)]">·</span>
            <span className="basis-full sm:basis-auto serif italic text-[13px] sm:text-base md:text-lg leading-snug text-[var(--color-accent)]">
              {tagline}
            </span>
          </>
        )}
      </div>

      {/* 4 — Nav row. `ceremonial-nav` adds an edge-fade mask so on mobile
          where the row scrolls horizontally, the cut-off edges fade
          gradually, signalling "there's more content beyond the viewport". */}
      <nav
        aria-label="Sections"
        className="ceremonial-nav border-t border-[var(--color-rule)] py-2.5 overflow-x-auto whitespace-nowrap"
      >
        <ul className="flex items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 sans uppercase tracking-[0.16em] text-[11px] sm:text-xs text-[var(--color-accent)] min-w-max mx-auto px-3 sm:px-4">
          {nav.map((item) => (
            <li key={item.key}>
              <Link
                href={{ pathname: '/', hash: item.hash }}
                className="hover:text-[var(--color-accent-soft)] transition-colors no-underline px-1 py-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="opacity-50 select-none px-1" aria-hidden="true">|</li>
          <li>
            <NavMenuDropdown label={summaryLabel.toUpperCase()} items={summaryMenuItems} />
          </li>
          <li>
            <Link
              href="/on-chain"
              className="no-underline border border-[var(--color-accent)] px-2.5 py-1 rounded-[3px] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
            >
              {(uiStrings?.['nav.onchain'] || 'On-chain').toUpperCase()}
            </Link>
          </li>
          <li>
            <Link
              href="/press"
              className="no-underline border border-[var(--color-accent)] px-2.5 py-1 rounded-[3px] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
            >
              {(uiStrings?.['nav.press'] || 'Press').toUpperCase()}
            </Link>
          </li>
          <li>
            <Link
              href="/reputation"
              className="no-underline bg-[var(--color-accent)] px-2.5 py-1 rounded-[3px] font-medium hover:bg-[var(--color-accent-soft)] transition-colors"
              // Inline color: the global `a { color: var(--color-accent) }` rule in
              // globals.css is unlayered and overrides Tailwind's text-[…] utility on
              // anchors, which made this filled pill render oxblood-on-oxblood (invisible).
              style={{ color: 'var(--color-paper)' }}
            >
              {reputationLabel.toUpperCase()}
            </Link>
          </li>
        </ul>
      </nav>

      {/* 5 — Black status strap */}
      <div className="bg-[var(--color-ink)] text-[var(--color-paper)] px-4 sm:px-6 py-2 flex items-center justify-between gap-3 mono text-[10px] tracking-widest uppercase">
        <span className="flex items-center gap-2 min-w-0">
          <span
            className="inline-block w-1.5 h-1.5 bg-[var(--color-accent-soft)] rounded-full shrink-0"
            style={{ animation: 'natro-pulse 1.8s ease-in-out infinite' }}
            aria-hidden="true"
          />
          <span className="truncate">
            <PublicationTimer label={liveLabel} />
          </span>
        </span>
        <span className="hidden sm:inline-flex items-center gap-3 shrink-0 text-[var(--color-paper)]/85">
          <span>{sourcesLabel}</span>
          <span aria-hidden="true">·</span>
          <span>
            <b className="text-[var(--color-paper)]">{exhibitCount}</b>{' '}
            {exhibitsLabel}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <b className="text-[var(--color-paper)]">{languageCount}</b>{' '}
            {languagesLabel}
          </span>
        </span>
      </div>
    </header>
  );
}
