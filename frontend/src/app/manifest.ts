import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The NATRO File',
    short_name: 'NATRO File',
    description:
      'A documented case file: the $NATRO Solana token launch, its 98% collapse, and the post-refund evidence-removal pattern. Primary sources only.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f1e8',
    theme_color: '#8b2c1e',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
