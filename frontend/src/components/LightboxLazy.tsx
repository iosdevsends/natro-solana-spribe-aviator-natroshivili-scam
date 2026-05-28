'use client';

import dynamic from 'next/dynamic';
import type { ExhibitDTO } from '@/lib/types';

/**
 * Code-split wrapper around the Lightbox client component.
 *
 * The actual Lightbox brings ~10–15 KiB of client JS for the modal,
 * the keyboard handlers and the per-exhibit resolver. It only does
 * anything once the reader clicks a `[data-exhibit]` thumb — so on
 * first paint of the landing page it's pure dead weight in the
 * initial bundle (PageSpeed counted it as unused JS).
 *
 * `next/dynamic` only splits chunks when invoked from a client
 * component, so this wrapper exists for that single reason: the main
 * page is a Server Component, and routing the import through here
 * pushes Lightbox into its own on-demand chunk.
 *
 * `ssr: false` is safe because Lightbox renders `null` until a click
 * event fires — there is no markup to hydrate either way.
 */
const LightboxImpl = dynamic(
  () => import('./Lightbox').then((m) => m.Lightbox),
  { ssr: false, loading: () => null },
);

export function LightboxLazy(props: {
  exhibits: ExhibitDTO[];
  publicStrapiUrl: string;
  uiStrings?: Record<string, string>;
}) {
  return <LightboxImpl {...props} />;
}
