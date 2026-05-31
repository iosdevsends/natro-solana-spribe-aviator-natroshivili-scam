import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { isModerator, moderationConfigured } from '@/lib/moderation';
import { ModeratorLogin } from '@/components/admin/ModeratorLogin';
import { CommentModeration } from '@/components/admin/CommentModeration';

// Reads the editor cookie — always dynamic, never prerendered or indexed.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Comment moderation — The NATRO File',
  robots: { index: false, follow: false },
};

export default async function CommentAdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const configured = moderationConfigured();
  const authed = configured && (await isModerator());

  return (
    <main
      className="relative z-[2] mx-auto"
      style={{ maxWidth: '900px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}
    >
      <div className="kicker mb-3">§ Editor</div>
      <h1 className="serif text-3xl md:text-4xl font-medium tracking-tight leading-tight">
        Comment moderation
      </h1>
      <p className="mt-3 sans text-sm text-[var(--color-ink-faint)]">
        Reader comments for the reputation wall. Nothing appears publicly until approved here.
      </p>
      <hr className="rule-divider-strong" />

      {!configured ? (
        <div className="border border-[var(--color-rule)] bg-[var(--color-paper-warm)] p-6 sans text-sm leading-relaxed">
          <p className="serif text-lg mb-2">Moderation is not configured.</p>
          <p className="text-[var(--color-ink-soft)]">
            Set <code className="mono">MODERATION_SECRET</code> in the frontend environment to enable
            the editor passphrase, then reload this page.
          </p>
        </div>
      ) : authed ? (
        <CommentModeration />
      ) : (
        <ModeratorLogin />
      )}
    </main>
  );
}
