'use client';

import { useEffect, useState } from 'react';

/**
 * Fixed publication anchor — 28 May 2026, 12:24:00 UTC.
 * That moment is the editorial threshold encoded in CLAUDE.md:
 * the Spribe legal-response deadline (12:24 UTC + 72h from the
 * 25 May 12:24 UTC email). After it passed the case file went
 * fully public. Editing this constant resets the timer for everyone.
 */
const PUBLICATION_AT_MS = Date.UTC(2026, 4, 28, 12, 24, 0);

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function format(ms: number): string | null {
  if (ms < 0) return null;
  const totalSec = Math.floor(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (d > 0) return `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
  return `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

export function PublicationTimer({ label }: { label: string }) {
  // Render nothing on the server / before mount, then tick every second
  // client-side. Avoids a hydration mismatch and keeps the initial HTML
  // payload static (good for SEO and cache).
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;
  const text = format(now - PUBLICATION_AT_MS);
  if (!text) return null;

  return (
    <span
      className="inline-flex items-baseline gap-1.5 whitespace-nowrap"
      aria-live="off"
      aria-label={`${label}: ${text}`}
    >
      <span>{label}</span>
      <span
        className="mono text-[var(--color-ink)] tabular-nums"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {text}
      </span>
    </span>
  );
}
