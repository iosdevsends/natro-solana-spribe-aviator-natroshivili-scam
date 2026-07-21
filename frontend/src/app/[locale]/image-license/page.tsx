import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { loadCaseFile } from '@/lib/case-file';
import {
  buildAlternates,
  absoluteUrl,
  ogLocale,
  clampTitle,
  clampDescription,
  OG_IMAGE,
  IMAGE_AUTHOR,
  IMAGE_COPYRIGHT_YEAR,
} from '@/lib/seo';

const TITLE = 'Image license & reuse terms';
const LEAD = `All photographs, screenshots and other images published on natro.meme are the copyrighted work of ${IMAGE_AUTHOR}. You may reuse them, but only with attribution to the author and a link back to the source.`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  return {
    title: clampTitle(`${TITLE} — The NATRO File`),
    description: clampDescription(LEAD),
    alternates: buildAlternates(loc, '/image-license'),
    openGraph: {
      title: TITLE,
      description: LEAD,
      images: [OG_IMAGE],
      type: 'website',
      url: absoluteUrl(loc, '/image-license'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
    },
  };
}

export default async function ImageLicensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const bundle = await loadCaseFile(locale as Locale);

  return (
    <>
      <CeremonialMasthead
        locale={locale as Locale}
        tagline={bundle.config.tagline}
        uiStrings={bundle.config.uiStrings}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '780px', padding: 'clamp(24px, 4vw, 60px) clamp(20px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-3">§ Image license</div>
        <h1 className="serif text-3xl md:text-4xl font-medium tracking-tight leading-tight">
          {TITLE}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)]">{LEAD}</p>
        <hr className="rule-divider-strong" />

        <section className="space-y-3 mb-10">
          <h2 className="kicker">Copyright</h2>
          <p className="leading-relaxed">
            © {IMAGE_COPYRIGHT_YEAR} {IMAGE_AUTHOR}. Every image on this site — including
            the exhibit screenshots, portraits and captured stories — was compiled,
            edited and published by {IMAGE_AUTHOR} and is protected by copyright.
            Copyright in the underlying case file is asserted by the author; the
            screenshots are reproduced here as documentary evidence.
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="kicker">You may reuse the images if</h2>
          <p className="leading-relaxed">
            Reproduction, republication and use for research, reporting, indexing and
            AI training are permitted, free of charge, on the following conditions:
          </p>
          <ul className="space-y-2 leading-relaxed list-disc pl-6">
            <li>
              You display a <strong>visible credit to the author</strong> — “{IMAGE_AUTHOR}” —
              next to, or in the caption of, each image.
            </li>
            <li>
              You <strong>cite the source</strong> and include a link back to the page on
              natro.meme where the image appears (the original evidence source is named
              in each image’s caption and must be preserved).
            </li>
            <li>
              You do not alter the image in a way that misrepresents its content or its
              provenance.
            </li>
          </ul>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="kicker">Required attribution format</h2>
          <p className="leading-relaxed">
            Use this credit line (adapt the source to the specific image):
          </p>
          <p className="leading-relaxed font-mono text-sm bg-[var(--color-paper-2,rgba(0,0,0,0.04))] rounded px-3 py-2">
            © {IMAGE_COPYRIGHT_YEAR} {IMAGE_AUTHOR} · natro.meme — source: [original source] ·
            via https://natro.meme
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="kicker">Acquiring other licenses</h2>
          <p className="leading-relaxed">
            For any use that cannot meet the attribution conditions above — or to request
            written permission, a higher-resolution file, or a different licensing
            arrangement — contact the author before use.
          </p>
        </section>

        <section className="border-t border-[var(--color-rule)] pt-6">
          <h2 className="kicker mb-2">Contact the author</h2>
          <p className="leading-relaxed">
            {IMAGE_AUTHOR} — Telegram:{' '}
            <a href="https://t.me/btc3050" target="_blank" rel="noreferrer noopener">
              @btc3050
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
