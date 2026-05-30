import { ImageResponse } from 'next/og';

/**
 * Default Open Graph / social card, inherited by every route that does not
 * define its own. Adding it sitewide completes the OG tag set (image + width
 * + height + type) that the audit flagged as missing. Brand: cream paper,
 * oxblood rule, Fraunces-style serif (Georgia fallback, matching icon.tsx).
 */
export const alt = 'The NATRO File — a documented case in reputation pricing';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f5f1e8',
          color: '#0a0a08',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
          borderTop: '14px solid #8b2c1e',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: '0.3em',
            color: '#6b6452',
          }}
        >
          CASE FILE · NATRO.MEME
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 88,
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            The NATRO File
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              color: '#3a342a',
              maxWidth: 940,
              lineHeight: 1.25,
            }}
          >
            A token sold on a family name. A 98% collapse in 72 hours. The
            documented record.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 23,
            color: '#6b6452',
          }}
        >
          <span style={{ display: 'flex' }}>
            Promise · Reality · Scrub · Voices · People · Sources
          </span>
          <span style={{ display: 'flex', color: '#8b2c1e', fontWeight: 600 }}>
            natro.meme
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
