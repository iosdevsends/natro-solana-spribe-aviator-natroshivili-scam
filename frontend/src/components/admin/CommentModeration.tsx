'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CaseCommentDTO } from '@/lib/types';

type Status = 'pending' | 'approved' | 'rejected';
type Counts = Record<Status, number>;

const TABS: Status[] = ['pending', 'approved', 'rejected'];

export function CommentModeration() {
  const router = useRouter();
  const [tab, setTab] = useState<Status>('pending');
  const [items, setItems] = useState<CaseCommentDTO[]>([]);
  const [counts, setCounts] = useState<Counts>({ pending: 0, approved: 0, rejected: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);

  // First statement is `await`, so no setState runs synchronously — keeps this
  // legitimate data-fetch effect clear of react-hooks/set-state-in-effect.
  const load = useCallback(async (status: Status) => {
    try {
      const res = await fetch(`/bff/admin/comments?status=${status}&pageSize=100`, {
        cache: 'no-store',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to load queue');
      setItems(data.data || []);
      setError(null);
      if (data.meta?.counts) setCounts(data.meta.counts);
    } catch (err) {
      setError((err as Error).message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  function selectTab(s: Status) {
    if (s === tab) return;
    setLoading(true);
    setTab(s);
  }

  useEffect(() => {
    // Fetch the queue on mount and whenever the active tab changes. The setState
    // calls inside load() only run after an awaited fetch, never synchronously,
    // so the cascading-render concern this rule guards against does not apply.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load(tab);
  }, [tab, load]);

  async function decide(id: number, moderationStatus: Status, moderationNotes?: string) {
    setBusyId(id);
    try {
      const res = await fetch(`/bff/admin/comments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moderationStatus, moderationNotes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Action failed');
      // Reload current tab; counts shift.
      await load(tab);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusyId(null);
    }
  }

  async function logout() {
    await fetch('/bff/admin/login', { method: 'DELETE' });
    router.refresh();
  }

  return (
    <div className="sans">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
        <div className="flex gap-2 flex-wrap">
          {TABS.map((s) => (
            <button
              key={s}
              onClick={() => selectTab(s)}
              className={`px-4 py-2 uppercase tracking-widest text-xs border transition ${
                tab === s
                  ? 'border-[var(--color-accent)] text-[var(--color-paper)] bg-[var(--color-accent)]'
                  : 'border-[var(--color-rule)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)]'
              }`}
            >
              {s} ({counts[s] ?? 0})
            </button>
          ))}
        </div>
        <button
          onClick={logout}
          className="px-3 py-2 uppercase tracking-widest text-xs border border-[var(--color-rule)] text-[var(--color-ink-faint)] hover:border-[var(--color-ink)]"
        >
          Sign out
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-[var(--color-damning)]">{error}</p>}
      {loading ? (
        <p className="text-sm text-[var(--color-ink-faint)] py-8">Loading…</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-[var(--color-ink-faint)] py-8">No {tab} comments.</p>
      ) : (
        <ul className="space-y-5">
          {items.map((c) => (
            <li key={c.id} className="border border-[var(--color-rule)] bg-[var(--color-paper)] p-4">
              <p className="serif text-base leading-relaxed text-[var(--color-ink)] whitespace-pre-line">
                {c.body}
              </p>
              <div className="mt-2 text-xs text-[var(--color-ink-faint)] flex flex-wrap gap-x-3 gap-y-1">
                <span className="font-medium">
                  {c.isAnonymous || !c.authorDisplayName ? 'Anonymous' : c.authorDisplayName}
                </span>
                {c.country && <span>· {c.country}</span>}
                {c.localeSubmitted && <span>· {c.localeSubmitted.toUpperCase()}</span>}
                {c.submittedAt && <span>· {c.submittedAt.slice(0, 16).replace('T', ' ')}</span>}
                <span>· #{c.id}</span>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                {c.moderationStatus !== 'approved' && (
                  <button
                    disabled={busyId === c.id}
                    onClick={() => decide(c.id, 'approved')}
                    className="px-4 py-1.5 uppercase tracking-widest text-xs border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-paper)] transition disabled:opacity-40"
                  >
                    Approve
                  </button>
                )}
                {c.moderationStatus !== 'rejected' && (
                  <button
                    disabled={busyId === c.id}
                    onClick={() => decide(c.id, 'rejected')}
                    className="px-4 py-1.5 uppercase tracking-widest text-xs border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition disabled:opacity-40"
                  >
                    Reject
                  </button>
                )}
                {c.moderationStatus !== 'pending' && (
                  <button
                    disabled={busyId === c.id}
                    onClick={() => decide(c.id, 'pending')}
                    className="px-4 py-1.5 uppercase tracking-widest text-xs border border-[var(--color-rule)] text-[var(--color-ink-faint)] hover:border-[var(--color-ink)] transition disabled:opacity-40"
                  >
                    Reset to pending
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
