import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a08',
          color: '#f5f1e8',
          fontSize: 22,
          fontFamily: 'Georgia, serif',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          borderBottom: '3px solid #8b2c1e',
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}
