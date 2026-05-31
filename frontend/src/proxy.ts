import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match everything except Next internals, Strapi proxy, static files,
    // and root-level Metadata API routes (icon.tsx, apple-icon.tsx,
    // opengraph-image.tsx, manifest.ts, sitemap.ts, robots.ts) — those
    // live in app/ at root, not under [locale]/, and must not be rewritten.
    //
    // `bff` is excluded too: it holds Next route handlers (comment wall +
    // moderation) that must NOT be locale-rewritten. They live outside `/api`
    // on purpose — the host proxy forwards `/api/*` to Strapi, so the BFF
    // endpoints sit under `/bff/*` (served by the frontend like any page).
    '/((?!api|bff|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|favicon|sitemap|robots|manifest|.*\\..*).*)',
  ],
};
