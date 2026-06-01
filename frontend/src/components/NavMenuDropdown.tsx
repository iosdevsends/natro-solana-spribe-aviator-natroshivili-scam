'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';

type Item = { href: string; label: string };

/**
 * A menu pill that opens a dropdown of secondary links — used for the
 * "Summary" item in the masthead so the orphan pages (David pages, profiles,
 * fact sheet, privacy) live under it.
 *
 * The panel is rendered with position:fixed and positioned from the trigger's
 * bounding rect on open. This is deliberate: the nav row above is an
 * overflow-x-auto scroll container, which clips any absolutely-positioned
 * child. A fixed panel escapes that clipping entirely (the masthead is sticky,
 * so the trigger stays at a stable viewport position). Closes on outside
 * click, Escape, scroll, or resize to avoid a stale position.
 */
export function NavMenuDropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const place = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setCoords({ top: Math.round(r.bottom + 6), left: Math.round(r.left) });
  }, []);

  useEffect(() => {
    if (!open) return;
    place();
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const close = () => setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', close);
    window.addEventListener('scroll', close, true);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', close);
      window.removeEventListener('scroll', close, true);
    };
  }, [open, place]);

  return (
    <div ref={wrapRef} className="inline-flex">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="sans inline-flex items-center gap-1 cursor-pointer no-underline border border-[var(--color-accent)] text-[var(--color-accent)] px-2.5 py-1 rounded-[3px] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors uppercase tracking-[0.16em] text-[11px] sm:text-xs"
      >
        {label}
        <span
          aria-hidden="true"
          className={`inline-block transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>
      {open && coords && (
        <div
          role="menu"
          style={{ position: 'fixed', top: coords.top, left: coords.left, zIndex: 60 }}
          className="min-w-[230px] max-w-[80vw] border-2 border-[var(--color-ink)] bg-[var(--color-paper)] shadow-[0_14px_34px_rgba(10,10,8,0.20)] py-1"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 sans text-[11px] uppercase tracking-[0.12em] no-underline hover:bg-[var(--color-paper-warm)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
