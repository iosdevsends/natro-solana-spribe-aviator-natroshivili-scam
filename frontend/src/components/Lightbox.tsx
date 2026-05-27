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

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] max-w-[1100px] w-full bg-[var(--color-paper)] border border-[var(--color-rule)] overflow-hidden flex flex-col"
      >
        <header className="flex items-center justify-between gap-3 border-b border-[var(--color-rule)] px-4 py-2">
          <div className="kicker">{ex.exhibitNumber || `#${openIndex + 1}`}</div>
          <div className="sans text-xs text-[var(--color-ink-faint)]">
            {openIndex + 1} / {exhibits.length}
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={uiStrings?.['ui.close'] || 'Close'}
            className="sans text-sm text-[var(--color-ink)] hover:text-[var(--color-accent)] px-2 py-1 border border-[var(--color-rule)]"
          >
            ✕
          </button>
        </header>
        <div className="flex-1 flex items-center justify-center bg-black/5 min-h-[280px] overflow-auto">
          {ex.mediaType === 'video' ? (
            <video
              key={src}
              src={src}
              controls
              autoPlay
              className="max-h-[70vh] max-w-full"
            />
          ) : (
            <Image
              src={src}
              alt={[ex.title, ex.source].filter(Boolean).join(' — ')}
              width={ex.legacyWidth ?? 1600}
              height={ex.legacyHeight ?? 1200}
              sizes="(max-width: 768px) 100vw, 1100px"
              priority
              className="max-h-[70vh] max-w-full w-auto h-auto object-contain"
            />
          )}
        </div>
        {(ex.title || ex.caption || ex.source) && (
          <footer className="border-t border-[var(--color-rule)] px-4 py-3 space-y-1">
            <div className="serif text-base font-medium">{ex.title}</div>
            {ex.caption && (
              <div className="sans text-sm text-[var(--color-ink-soft)]">{ex.caption}</div>
            )}
            {ex.source && (
              <div className="sans text-xs text-[var(--color-ink-faint)]">{ex.source}</div>
            )}
          </footer>
        )}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={uiStrings?.['ui.prev'] || 'Previous'}
            className="sans text-2xl text-white/80 hover:text-white px-3 py-2"
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={uiStrings?.['ui.next'] || 'Next'}
            className="sans text-2xl text-white/80 hover:text-white px-3 py-2"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
