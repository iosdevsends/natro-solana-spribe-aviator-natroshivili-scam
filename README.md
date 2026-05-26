# The NATRO File — Case file platform

A multilingual, document-led case file investigating the launch and collapse of the `$NATRO` Solana memecoin (21 May 2026). Designed to read like an editorial investigation, not a personal grievance site. Public-record artefact for journalists, regulators, and affected holders.

This repository is the **platform** that powers the file:

| Layer | Tech | Purpose |
|---|---|---|
| `backend/` | [Strapi 5](https://strapi.io/) + PostgreSQL | Headless CMS — every section, timeline event, quote, exhibit, person and reader-submitted story is editable here. Built-in i18n plugin handles the six locales. |
| `frontend/` | [Next.js 16](https://nextjs.org/) (App Router) + [next-intl](https://next-intl.dev/) | Server-rendered, statically-cached presentation. Local seed fallback so the site renders even when the CMS is empty. |
| `legacy/` | Single-file HTML v2 (archived) | The original artefact (`natro-file-v2.html`) preserved verbatim for reference. |
| `docs/EVIDENCE.md` | Markdown | Authoritative inventory of every exhibit (image / video) with capture provenance. |

## Languages

EN · RU · KA · FR · DE · ES

EN and RU are the source-of-truth tones; KA, FR, DE and ES ship with a clearly-marked _translation pending native review_ overlay that falls through to the EN baseline. Translation work happens in the Strapi admin UI per content type once the system is running.

---

## Run it locally

Requires Docker Desktop (or Docker Engine + Compose plugin).

```sh
cp .env.example .env
# .env already includes dev secrets that are safe for local; rotate for prod.
docker compose up --build
```

Then:

- **Frontend** → http://localhost:3000
- **Strapi admin** → http://localhost:1337/admin (create your editor account on first visit)
- **PostgreSQL** → `localhost:5433` (mapped from container `5432`, so it won't fight a local Postgres)

Hot reload works in both containers — `backend/src` and `frontend/src` are mounted from the host.

### Seed the CMS

The frontend already renders without CMS data — it falls back to `frontend/src/content/locales/*.ts`. To push that same content into Strapi (once you've created an admin account):

```sh
# from the host
docker compose exec frontend node scripts/export-seed.mjs
docker compose exec backend npm run seed
```

---

## Deploying alongside an existing Strapi project on the same AWS host

The compose file uses an isolated network and project name (`natro`). On the same EC2 instance running another Strapi project (`photovideo.ae`):

1. Run **this** stack with the bundled compose file. It binds:
   - host `1337` → backend (change in `docker-compose.yml` if `photovideo.ae` already owns that port)
   - host `3000` → frontend
   - host `5433` → its own Postgres
2. Front-side reverse proxy (Nginx) terminates SSL and routes `<your-natro-host>` → `127.0.0.1:3000` and (optionally) `<your-natro-host>/admin` → `127.0.0.1:1337`.
3. Production overrides: see `docker-compose.prod.yml` (build the `prod` Dockerfile targets, drop the source-mount volumes, pin a real `STRAPI_API_TOKEN`).

A starter Nginx vhost is in `deploy/nginx/natro.conf`.

---

## Reader-submitted stories

`/<locale>/stories` lists approved accounts. `/<locale>/stories/submit` accepts new accounts from signed-in readers; submissions land in Strapi with `moderationStatus = pending` and are invisible until an editor approves them in the Strapi admin.

The editorial review explicitly screens for:
- defamation risk (per-jurisdiction)
- factual accuracy and on-chain verifiability
- whether the submission belongs in the published record vs. the private archive

Authors retain edit access while a story is `pending` or `needs-edits`; once `approved` it is locked.

---

## What this repository is **not**

- It is not a personal account. The file uses third-person framing throughout.
- It is not affiliated with `$NATRO`, the Natroshvili family, or Spribe.
- It is not a comment on Aviator, Spribe's licensed gambling product, which is out of scope.

See [`docs/EDITORIAL.md`](docs/EDITORIAL.md) for the tone rules that the file follows.

---

## Tree

```
natro-platform/
├── backend/                  # Strapi 5 (TypeScript)
│   ├── src/api/              # Content types: exhibit, case-section, timeline-event,
│   │                         #                quote, person, evidence-row, …
│   ├── src/extensions/users-permissions/   # User model extension (stories relation)
│   ├── src/index.ts          # Bootstrap: locales + role permissions
│   └── scripts/seed.js       # Idempotent content seeder
├── frontend/                 # Next.js 16 App Router
│   ├── src/app/[locale]/     # All public routes (case file, stories, auth)
│   ├── src/components/       # Masthead, Lightbox, Prose, SubmitStoryForm, …
│   ├── src/content/locales/  # Source-of-truth seed for each language
│   ├── src/i18n/             # next-intl routing + request config
│   └── src/lib/              # Strapi client, types, auth, case-file loader
├── legacy/                   # Original natro-file-v2.html + exhibits
├── docs/                     # EVIDENCE.md, EDITORIAL.md
├── deploy/                   # nginx vhost, deploy scripts
├── .github/workflows/        # CI/CD pipelines
└── docker-compose.yml        # Local dev stack (Postgres + Strapi + Next.js)
```

---

## Commit & contribute

This repository is _local-only_ until 28 May 2026 12:24 UTC (Spribe legal response deadline). After that, the maintainer decides whether to push public, push private, or hold further. Until then, do not push or open PRs.
