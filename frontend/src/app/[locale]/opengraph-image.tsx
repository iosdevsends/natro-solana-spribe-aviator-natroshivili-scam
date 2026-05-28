import { ImageResponse } from 'next/og';
import { loadCaseFile } from '@/lib/case-file';
import { locales, defaultLocale, type Locale } from '@/i18n/routing';

export const alt = 'The NATRO File — A Case Study in Reputation Pricing';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata() {
  return locales.map((locale) => ({
    id: locale,
    alt,
    contentType,
    size,
  }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (
    locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale
  );
  const bundle = await loadCaseFile(resolvedLocale);

  const headline = bundle.config.headline || bundle.config.siteTitle;
  const kicker = bundle.config.kicker || bundle.config.tagline || '';
  // Localized straplines — use existing per-locale config strings so we don't
  // need a separate translation surface. mastheadMeta already reads e.g.
  // "Case study · Compiled from primary sources" / "Кейс · По первичным
  // источникам" / "Étude de cas · ..." in each locale.
  const topRightStrap = bundle.config.mastheadMeta || 'Case study · Primary sources';
  const bottomStrap = bundle.config.tagline || '$NATRO · Solana token launch · 21 May 2026';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          background: '#f5f1e8',
          color: '#0a0a08',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top strap */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6b6452',
            borderBottom: '2px solid #0a0a08',
            paddingBottom: 16,
          }}
        >
          <span style={{ color: '#8b2c1e', fontWeight: 600 }}>The NATRO File</span>
          <span>{topRightStrap}</span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#8b2c1e',
              fontWeight: 600,
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 500,
              color: '#0a0a08',
              maxWidth: 1000,
              letterSpacing: '-0.01em',
            }}
          >
            {headline}
          </div>
        </div>

        {/* Bottom strap */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            color: '#3a342a',
            borderTop: '1px solid #c4b896',
            paddingTop: 16,
          }}
        >
          <span>{bottomStrap}</span>
          <span style={{ color: '#6b6452' }}>{resolvedLocale.toUpperCase()}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
