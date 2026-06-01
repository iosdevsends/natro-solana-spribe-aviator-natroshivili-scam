'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@/i18n/navigation';

type Item = { href: string; label: string };

/**
 * A menu pill that opens a dropdown of secondary links — used for the
 * "Summary" item in the masthead so the orphan pages (David pages, profiles,
 * fact sheet, privacy) live under it.
 *
 * Two things make the masthead a hostile host for a dropdown, and both are
 * handled here:
 *
 *   1. The nav row is `overflow-x-auto`, which (per CSS) also clips the
 *      vertical axis — an absolutely-positioned child would be cut off. AND
 *      the header has `backdrop-blur` (backdrop-filter), which makes the
 *      header the containing block for any `position: fixed` descendant, so
 *      even a fixed panel gets mispositioned. The fix for BOTH is to render
 *      the panel through a portal to `document.body`: there it is a child of
 *      the viewport, so fixed coordinates from getBoundingClientRect() are
 *      exact and nothing clips it.
 *
 *   2. Clicking the trigger can make the browser auto-scroll the focused
 *      button into view inside the overflow-x nav, firing a scroll event the
 *      instant the menu opens. So scroll/resize must REPOSITION the panel,
 *      not close it (closing on scroll made the menu vanish the moment it
 *      appeared). Closing is reserved for outside-click and Escape.
 */
export function NavMenuDropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Portals need the DOM; only render the panel after mount. Starts false on
  // both server and first client render, so there is no hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
      const t = e.target as Node;
      if (btnRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    // Reposition (do NOT close) so the panel tracks the trigger if the page
    // or the overflow-x nav scrolls right after opening.
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [open, place]);

  const panel =
    open && coords ? (
      <div
        ref={panelRef}
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
    ) : null;

  return (
    <div className="inline-flex">
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
      {mounted && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
