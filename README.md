# The NATRO File — Case file platform

**Production:** [natro.meme](https://natro.meme) · **Compiler:** [@btc3050](https://t.me/btc3050) · **Channel:** [@natroscam](https://t.me/natroscam) · **Wayback archive:** [natrocoin.net (21 May 2026 capture)](https://web.archive.org/web/20260521213245/https://natrocoin.net/)

A multilingual, document-led case file investigating the launch and collapse of the `$NATRO` Solana memecoin (21 May 2026). Designed to read like an editorial investigation, not a personal grievance site. Public-record artefact for journalists, regulators, and affected holders.

---

## 🇬🇧 English

A documented case file: the `$NATRO` Solana token launch on 21 May 2026, its 98% price collapse, the team's refusal to refund affected early holders, and the post-refund evidence-removal pattern (website taken offline, founder's Instagram bio link removed, paid promotional video deleted from KOL feed) — all preserved on the Wayback Machine, on-chain, and in timestamped screenshots. Primary sources only.

## 🇷🇺 Русский

Документированный кейс: запуск токена `$NATRO` на Solana 21 мая 2026 года, обвал цены на 98%, отказ команды возвращать средства ранним держателям и последующее удаление улик (сайт отключён, ссылка из Instagram-биографии основателя убрана, оплаченное промо-видео KOL удалено) — всё сохранено в Wayback Machine, on-chain и на датированных скриншотах. Только первичные источники.

## 🇺🇦 Українська

Документований кейс: запуск токена `$NATRO` на Solana 21 травня 2026 року, обвал ціни на 98%, відмова команди повертати кошти раннім тримачам і подальше видалення доказів (сайт відключений, посилання з Instagram-біографії засновника прибране, оплачене промо-відео KOL видалене) — все збережено в Wayback Machine, on-chain і на датованих скріншотах. Лише первинні джерела.

## 🇬🇪 ქართული

დოკუმენტირებული საქმე: `$NATRO` Solana ტოკენის გაშვება 2026 წლის 21 მაისს, 98% ფასის ვარდნა, გუნდის უარი ადრეული მფლობელებისთვის თანხის დაბრუნებაზე და მტკიცებულებების შემდგომი წაშლა (საიტი გათიშული, დამფუძნებლის Instagram-ის ბმული მოშორებული, ფასიანი რეკლამა წაშლილი) — ყველაფერი შენახული Wayback Machine-ში, on-chain-ში და დროით აღნიშნულ სქრინშოტებში. მხოლოდ პირველადი წყაროები.

## 🇫🇷 Français

Un dossier documenté : le lancement du token `$NATRO` sur Solana le 21 mai 2026, sa chute de 98 %, le refus de l'équipe de rembourser les premiers détenteurs affectés, et l'effacement systématique des preuves qui a suivi (site mis hors ligne, lien dans la bio Instagram du fondateur supprimé, vidéo promotionnelle payante effacée du compte KOL) — tout conservé sur Wayback Machine, on-chain et dans des captures d'écran horodatées. Sources primaires uniquement.

## 🇩🇪 Deutsch

Eine dokumentierte Fallakte: der Launch des `$NATRO`-Solana-Tokens am 21. Mai 2026, sein 98-prozentiger Kursabsturz, die Weigerung des Teams, frühe betroffene Inhaber zu entschädigen, und das anschließende Löschmuster der Beweise (Website offline genommen, Link in der Instagram-Bio des Gründers entfernt, bezahltes Werbevideo aus dem KOL-Feed gelöscht) — alles auf der Wayback Machine, on-chain und in mit Zeitstempeln versehenen Screenshots erhalten. Nur Primärquellen.

## 🇪🇸 Español

Un expediente documentado: el lanzamiento del token `$NATRO` en Solana el 21 de mayo de 2026, su caída del 98 % en el precio, la negativa del equipo a reembolsar a los holders tempranos afectados y el patrón posterior de borrado de pruebas (sitio web retirado, enlace de la biografía de Instagram del fundador eliminado, vídeo promocional pagado borrado de la cuenta del KOL) — todo preservado en Wayback Machine, on-chain y en capturas con marca de tiempo. Solo fuentes primarias.

---

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
├── .github/workflows/        # CI/CD pipelines
└── docker-compose.yml        # Local dev stack (Postgres + Strapi + Next.js)
```

---

## Commit & contribute

This repository is _local-only_ until 28 May 2026 12:24 UTC (Spribe legal response deadline). After that, the maintainer decides whether to push public, push private, or hold further. Until then, do not push or open PRs.
