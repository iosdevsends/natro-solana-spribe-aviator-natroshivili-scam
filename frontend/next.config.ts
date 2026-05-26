import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const strapiInternal = process.env.STRAPI_INTERNAL_URL || strapiUrl;

function extractHost(url: string): { protocol: 'http' | 'https'; hostname: string; port?: string } {
  try {
    const parsed = new URL(url);
    return {
      protocol: parsed.protocol === 'https:' ? 'https' : 'http',
      hostname: parsed.hostname,
      port: parsed.port || undefined,
    };
  } catch {
    return { protocol: 'http', hostname: 'localhost', port: '1337' };
  }
}

const externalHosts = [strapiUrl, strapiInternal].map(extractHost);

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: externalHosts.map((h) => ({
      protocol: h.protocol,
      hostname: h.hostname,
      port: h.port,
      pathname: '/uploads/**',
    })),
  },
  typedRoutes: true,
};

export default withNextIntl(nextConfig);
