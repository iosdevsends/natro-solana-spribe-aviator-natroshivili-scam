'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { ExhibitDTO } from '@/lib/types';

type Props = {
  exhibits: ExhibitDTO[];
  publicStrapiUrl: string;
  uiStrings?: Record<string, string>;
};

function resolveSrc(ex: ExhibitDTO, publicStrapiUrl: string) {
  if (ex.media?.url) {
    return ex.media.url.startsWith('http')
      ? ex.media.url
      : `${publicStrapiUrl}${ex.media.url}`;
  }
  return ex.legacySrc ?? '';
}

export function Lightbox({ exhibits, publicStrapiUrl, uiStrings }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % exhibits.length));
  }, [exhibits.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + exhibits.length) % exhibits.length,
    );
  }, [exhibits.length]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>('[data-exhibit]');
      if (!trigger) return;
      const slug = trigger.getAttribute('data-exhibit');
      if (!slug) return;
      const idx = exhibits.findIndex((ex) => ex.slug === slug);
      if (idx >= 0) {
        e.preventDefault();
        open(idx);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [exhibits, open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openIndex, close, next, prev]);

  if (openIndex === null) return null;
  const ex = exhibits[openIndex];
  const src = resolveSrc(ex, publicStrapiUrl);

  // Adaptive modal width: narrow phone screenshots get a narrow frame
  // (no wasted paper on either side); landscape / desktop captures get
  // up to 1200px. Threshold: aspect ratio > 1.3 (tall portrait).
  const isTallPortrait =
    !!ex.legacyWidth &&
    !!ex.legacyHeight &&
    ex.legacyHeight / ex.legacyWidth > 1.3;
  const modalMaxW = isTallPortrait ? 'max-w-[min(560px,92vw)]' : 'max-w-[min(1200px,96vw)]';

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-2 sm:p-4"
    >
      {/* Outside-modal nav arrows — placed on the dark backdrop so they're
          always reachable regardless of the inner modal's width. */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label={uiStrings?.['ui.prev'] || 'Previous'}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl sans z-[1]"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label={uiStrings?.['ui.next'] || 'Next'}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl sans z-[1]"
      >
        ›
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-h-[96vh] ${modalMaxW} w-full bg-[var(--color-paper)] border border-[var(--color-rule)] overflow-hidden flex flex-col`}
      >
        <header className="flex items-center justify-between gap-2 border-b border-[var(--color-rule)] px-3 sm:px-4 py-2 shrink-0">
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="kicker shrink-0">{ex.exhibitNumber || `#${openIndex + 1}`}</span>
            <span className="sans text-[10px] tracking-widest uppercase text-[var(--color-ink-faint)] shrink-0">
              {openIndex + 1} / {exhibits.length}
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <a
              href={src}
              target="_blank"
              rel="noreferrer noopener"
              title="Open original in a new tab"
              aria-label="Open original in a new tab"
              className="sans text-xs text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] px-2 py-1 border border-[var(--color-rule)] no-underline whitespace-nowrap"
              onClick={(e) => e.stopPropagation()}
            >
              ↗ Original
            </a>
            <button
              type="button"
              onClick={close}
              aria-label={uiStrings?.['ui.close'] || 'Close'}
              className="sans text-sm text-[var(--color-ink)] hover:text-[var(--color-accent)] w-8 h-8 grid place-items-center border border-[var(--color-rule)]"
            >
              ✕
            </button>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center bg-black/5 min-h-[200px] overflow-auto">
          {ex.mediaType === 'video' ? (
            <video
              key={src}
              src={src}
              controls
              autoPlay
              className="max-h-[82vh] max-w-full"
            />
          ) : (
            <Image
              src={src}
              alt={[ex.title, ex.source].filter(Boolean).join(' — ')}
              width={ex.legacyWidth ?? 1600}
              height={ex.legacyHeight ?? 1200}
              sizes={isTallPortrait
                ? '(max-width: 640px) 92vw, 560px'
                : '(max-width: 1024px) 96vw, 1200px'}
              priority
              className="max-h-[82vh] max-w-full w-auto h-auto object-contain"
            />
          )}
        </div>

        {(ex.title || ex.caption || ex.source) && (
          <footer className="border-t border-[var(--color-rule)] px-3 sm:px-4 py-3 space-y-1 shrink-0">
            <div className="serif text-sm sm:text-base font-medium leading-snug">{ex.title}</div>
            {ex.caption && (
              <div className="sans text-xs sm:text-sm text-[var(--color-ink-soft)]">{ex.caption}</div>
            )}
            {ex.source && (
              <div className="sans text-[11px] sm:text-xs text-[var(--color-ink-faint)]">{ex.source}</div>
            )}
          </footer>
        )}

        {/* On mobile (where outside arrows are hidden) — show inline
            prev/next under the footer so touch users still navigate. */}
        <div className="sm:hidden flex border-t border-[var(--color-rule)] shrink-0">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={uiStrings?.['ui.prev'] || 'Previous'}
            className="flex-1 sans text-sm py-3 text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
          >
            ‹ {uiStrings?.['ui.prev'] || 'Previous'}
          </button>
          <span className="w-px bg-[var(--color-rule)]" />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={uiStrings?.['ui.next'] || 'Next'}
            className="flex-1 sans text-sm py-3 text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
          >
            {uiStrings?.['ui.next'] || 'Next'} ›
          </button>
        </div>
      </div>
    </div>
  );
}
