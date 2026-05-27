import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match everything except Next internals, Strapi proxy, static files,
    // and root-level Metadata API routes (icon.tsx, apple-icon.tsx,
    // opengraph-image.tsx, manifest.ts, sitemap.ts, robots.ts) — those
    // live in app/ at root, not under [locale]/, and must not be rewritten.
    '/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|favicon|sitemap|robots|manifest|.*\\..*).*)',
  ],
};
