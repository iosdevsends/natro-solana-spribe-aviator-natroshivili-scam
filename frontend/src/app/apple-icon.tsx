import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f1e8',
          color: '#0a0a08',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: '0.25em',
            color: '#8b2c1e',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          NATRO
        </div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: '0.18em',
            color: '#6b6452',
            textTransform: 'uppercase',
          }}
        >
          FILE
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            height: 3,
            background: '#0a0a08',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
