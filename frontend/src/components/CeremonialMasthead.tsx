import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PublicationTimer } from './PublicationTimer';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
  tagline?: string;
  uiStrings?: Record<string, string>;
  exhibitCount: number;
  languageCount: number;
};

/**
 * Newspaper-ceremonial masthead used at the top of the landing page.
 *
 * Layout (from top down):
 *   1. Thin top strap with file ID + language switcher
 *   2. Big serif brand "The NATRO File" centred, accent colour
 *   3. Localised tagline subtitle — same accent so the subtitle reads
 *      as part of the brand mark (the user explicitly asked for it
 *      to be more brightly highlighted than a muted grey would be)
 *   4. Centred nav row in accent uppercase tracking
 *   5. Black status bar — live since-publication timer left, primary
 *      source count + language count right
 *
 * Not sticky by design — the hero is meant to be a landing moment, the
 * reader scrolls past it into the content. Other routes (privacy, faq,
 * stories, on-chain, press) keep the compact <Masthead /> sticky bar.
 */
function shortLabel(raw: string | undefined, fallback: string): string {
  if (!raw) return fallback;
  const sepIdx = raw.indexOf('·');
  if (sepIdx === -1) return raw.trim();
  return raw.slice(sepIdx + 1).trim() || raw;
}

export function CeremonialMasthead({
  locale,
  tagline,
  uiStrings,
  exhibitCount,
  languageCount,
}: Props) {
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
      className="ceremonial border-b-2 border-[var(--color-ink)] bg-[var(--color-paper-warm)]/35 print:hidden"
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

      {/* 2 + 3 — Brand + tagline */}
      <div className="text-center px-4 py-8 sm:py-10 md:py-14">
        <Link
          href="/"
          className="no-underline inline-block"
          aria-label="The NATRO File — home"
        >
          <h1 className="serif text-[40px] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium tracking-tight text-[var(--color-accent)]">
            The NATRO File
          </h1>
        </Link>
        {tagline && (
          <p className="mt-4 md:mt-5 serif italic text-lg sm:text-xl md:text-[26px] leading-snug text-[var(--color-accent)]">
            {tagline}
          </p>
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
            <Link
              href="/on-chain"
              className="hover:text-[var(--color-accent-soft)] transition-colors no-underline px-1 py-1"
            >
              {(uiStrings?.['nav.onchain'] || 'On-chain').toUpperCase()}
            </Link>
          </li>
          <li>
            <Link
              href="/press"
              className="hover:text-[var(--color-accent-soft)] transition-colors no-underline px-1 py-1"
            >
              {(uiStrings?.['nav.press'] || 'Press').toUpperCase()}
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
