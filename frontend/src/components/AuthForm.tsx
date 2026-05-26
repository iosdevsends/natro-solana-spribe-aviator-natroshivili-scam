'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function AuthForm({ mode, nextUrl }: { mode: 'login' | 'register'; nextUrl: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(form: HTMLFormElement) {
    setError(null);
    setBusy(true);
    const fd = new FormData(form);
    const body =
      mode === 'login'
        ? {
            identifier: (fd.get('identifier') as string)?.trim(),
            password: fd.get('password') as string,
          }
        : {
            username: (fd.get('username') as string)?.trim(),
            email: (fd.get('email') as string)?.trim(),
            password: fd.get('password') as string,
            displayName: (fd.get('displayName') as string)?.trim() || undefined,
          };
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || `${mode} failed`);
      router.push(nextUrl || '/');
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      className="space-y-4 sans"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.currentTarget);
      }}
    >
      {mode === 'register' && (
        <>
          <Field name="username" label="Username" required minLength={3} maxLength={32} />
          <Field name="email" label="Email" type="email" required />
          <Field name="displayName" label="Display name (optional, shown on your stories)" />
        </>
      )}
      {mode === 'login' && (
        <Field name="identifier" label="Email or username" required />
      )}
      <Field name="password" label="Password" type="password" required minLength={6} />
      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="submit"
          disabled={busy}
          className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition disabled:opacity-50"
        >
          {busy ? '…' : mode === 'login' ? 'Sign in' : 'Create account'}
        </button>
        {error && <span className="text-xs text-[var(--color-damning)]">{error}</span>}
      </div>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="block label-strap mb-2">{label}</span>
      <input
        {...rest}
        className="w-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2 text-base focus:outline-none focus:border-[var(--color-ink)]"
      />
    </label>
  );
}
