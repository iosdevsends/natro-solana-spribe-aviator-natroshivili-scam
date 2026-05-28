'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Editorial reading-progress indicator.
 *
 * Two pieces:
 *   1. A 3px oxblood line fixed to the top of the viewport that fills
 *      left-to-right as the reader scrolls through the page body.
 *   2. A small dark chip pinned bottom-right that estimates remaining
 *      reading time — starts as "~N min read" and counts down to
 *      "~N min left" as the reader progresses. Hidden once the reader
 *      has crossed ~98% of the page (they're at the footer; the chip
 *      stops being useful).
 *
 * Word count comes from the `<main>` element's plain text. We pick
 * 220 wpm — the figure most news publishers use for adult informational
 * reading. That gives ~5 min for the main case file at the time of
 * writing; short pages (privacy, login) land under 2 min and the chip
 * is suppressed because the bar alone is enough.
 */
export function ReadingProgress() {
  const t = useTranslations('reading');
  const [progress, setProgress] = useState(0);
  const [totalMin, setTotalMin] = useState(0);

  useEffect(() => {
    const main =
      document.getElementById('main') || document.querySelector('main');
    if (!main) return;

    const words = (main.textContent || '').trim().split(/\s+/).filter(Boolean)
      .length;
    const total = Math.max(1, Math.round(words / 220));
    setTotalMin(total);

    let raf = 0;
    const measure = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
      setProgress(Math.max(0, Math.min(1, pct)));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const minutesLeft = Math.max(0, Math.round(totalMin * (1 - progress)));
  const showChip = totalMin >= 2 && progress < 0.98;
  const chipLabel =
    progress < 0.02
      ? t('minRead', { count: totalMin })
      : t('minLeft', { count: Math.max(1, minutesLeft) });

  return (
    <>
      {/* Top progress bar — sits above everything (z-50 beats the
          sticky masthead at z-40) so it remains visible during scroll. */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none print:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: 'var(--color-accent)',
            transition: 'width 80ms linear',
          }}
        />
      </div>

      {/* Bottom-right reading-time chip. role=status so a screen reader
          announces remaining time politely without stealing focus. */}
      {showChip && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 right-4 z-[60] sans text-[10px] uppercase tracking-widest font-medium px-3 py-1.5 print:hidden shadow-[0_8px_24px_-12px_rgba(10,10,8,0.5)]"
          style={{
            background: 'var(--color-ink)',
            color: 'var(--color-paper)',
          }}
        >
          {chipLabel}
        </div>
      )}
    </>
  );
}
