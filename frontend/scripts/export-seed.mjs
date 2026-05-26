#!/usr/bin/env node
/**
 * Exports each locale's case-file bundle to JSON files under
 * `backend/seed-export/` so the Strapi seeder can ingest them.
 *
 * Run from the frontend dir:
 *   node scripts/export-seed.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const out = path.resolve(root, '..', 'backend', 'seed-export');
fs.mkdirSync(out, { recursive: true });

const localesEntry = await import(
  pathToFileURL(path.join(root, 'src/i18n/routing.ts')).href
).catch(() => null);

const locales = ['en', 'ru', 'ka', 'fr', 'de', 'es'];

for (const locale of locales) {
  const mod = await import(
    pathToFileURL(path.join(root, `src/content/locales/${locale}.ts`)).href
  );
  const bundle = mod[locale]();
  fs.writeFileSync(
    path.join(out, `${locale}.json`),
    JSON.stringify(bundle, null, 2),
  );
  console.log('wrote', path.join(out, `${locale}.json`));
}

if (!localesEntry) {
  console.log('Note: ran without TS runtime — relying on direct import of locale modules.');
}
