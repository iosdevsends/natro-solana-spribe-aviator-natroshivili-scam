/**
 * Strapi content seeder.
 *
 * Pulls the canonical bundle from `frontend/src/content/locales/*` and
 * writes it into Strapi via the Strapi SDK. Idempotent: it uses each
 * record's `slug` as the unique key.
 *
 * Usage (inside the backend container):
 *   npm run seed
 *
 * The script is plain Node (no ts-node) to avoid dragging the TS toolchain
 * into the container; it walks the JSON output produced by the helper
 * script `scripts/export-seed.mjs` run from the frontend.
 *
 * For the v0 boot — running it is optional. The frontend falls back to the
 * same seed automatically when Strapi has no published rows.
 */

const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'ru', 'ka', 'fr', 'de', 'es'];
const SEED_DIR = path.join(__dirname, '..', 'seed-export');

async function main() {
  // Late-import strapi so this file can run via the strapi CLI runtime
  const Strapi = require('@strapi/strapi');
  const app = await Strapi.compileApp({ appDir: path.join(__dirname, '..') });
  const strapi = await Strapi.createStrapi({ appDir: path.join(__dirname, '..'), distDir: app.distDir }).load();

  if (!fs.existsSync(SEED_DIR)) {
    console.error('Seed directory not found:', SEED_DIR);
    console.error('Run `node scripts/export-seed.mjs` from the frontend first.');
    await strapi.destroy();
    process.exitCode = 1;
    return;
  }

  for (const locale of LOCALES) {
    const file = path.join(SEED_DIR, `${locale}.json`);
    if (!fs.existsSync(file)) {
      strapi.log.warn(`[seed] missing ${file} — skipping ${locale}`);
      continue;
    }
    const bundle = JSON.parse(fs.readFileSync(file, 'utf-8'));
    strapi.log.info(`[seed] applying ${locale}`);
    await applyBundle(strapi, locale, bundle);
  }

  await strapi.destroy();
  strapi.log.info('[seed] done');
}

async function upsertBySlug(strapi, uid, locale, items) {
  for (const item of items) {
    const existing = await strapi.documents(uid).findFirst({
      filters: { slug: item.slug },
      locale,
    });
    if (existing) {
      await strapi.documents(uid).update({
        documentId: existing.documentId,
        data: item,
        locale,
      });
    } else {
      await strapi.documents(uid).create({
        data: item,
        locale,
      });
    }
  }
}

async function applyBundle(strapi, locale, bundle) {
  // Site config is a single type
  await strapi.documents('api::site-config.site-config').update({
    documentId: undefined,
    data: bundle.config,
    locale,
  }).catch(async () => {
    // Fall back: create first version
    await strapi.documents('api::site-config.site-config').create({
      data: bundle.config,
      locale,
    });
  });

  await upsertBySlug(strapi, 'api::case-section.case-section', locale, bundle.sections);
  await upsertBySlug(strapi, 'api::timeline-event.timeline-event', locale, bundle.timeline);
  await upsertBySlug(strapi, 'api::quote.quote', locale, bundle.quotes);
  await upsertBySlug(strapi, 'api::person.person', locale, bundle.people);
  await upsertBySlug(strapi, 'api::promise-reality-row.promise-reality-row', locale, bundle.promiseRealityRows);
  await upsertBySlug(strapi, 'api::tier-row.tier-row', locale, bundle.tierRows);
  await upsertBySlug(strapi, 'api::snapshot-cell.snapshot-cell', locale, bundle.snapshotCells);
  await upsertBySlug(strapi, 'api::evidence-row.evidence-row', locale, bundle.evidenceRows);
  await upsertBySlug(strapi, 'api::exhibit.exhibit', locale, bundle.exhibits);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
