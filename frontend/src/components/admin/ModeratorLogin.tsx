'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ModeratorLogin() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/bff/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase: fd.get('passphrase') }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Login failed');
      router.refresh();
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="sans max-w-sm space-y-4">
      <label className="block">
        <span className="block label-strap mb-2">Editor passphrase</span>
        <input
          name="passphrase"
          type="password"
          autoComplete="current-password"
          required
          className="w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)]"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition disabled:opacity-50"
      >
        {status === 'submitting' ? '…' : 'Sign in'}
      </button>
      {error && <p className="text-xs text-[var(--color-damning)]">{error}</p>}
    </form>
  );
}
