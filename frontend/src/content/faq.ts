import type { FaqEntryDTO } from '@/lib/types';

/**
 * FAQ entries for the case file. Each entry surfaces on the homepage as a
 * Q+A snippet (with FAQPage schema for Google rich snippets) AND has a
 * dedicated extended page at /<locale>/faq/<slug>.
 *
 * EN is the canonical baseline; other locales overlay via `getFaq(locale)`.
 * Keep `shortAnswer` ≤ 300 chars (Google snippet limit).
 */

export const faqEn: FaqEntryDTO[] = [
  {
    id: 1,
    slug: 'is-natro-a-scam',
    order: 1,
    question: 'Is $NATRO a scam?',
    shortAnswer:
      'The Pump.fun bonding curve graduated, meaning at the protocol level there was no contract-level rug — the team cannot drain the migrated AMM pool. What did happen: refunds to affected early holders were refused, the website and promo links were scrubbed, and the founder replied "stfu" to a structured proposal. The case file documents this conduct against the marketing record. Readers draw their own conclusion.',
    extendedBody:
      'The honest answer requires distinguishing two questions.\n\n**Was there a contract-level rug-pull?** No. On 21 May 2026 the $NATRO Solana token launched on Pump.fun and reached the bonding-curve graduation threshold (≈85 SOL accumulated inflow, ≈$65–85K at the SOL price on launch day). On reaching the threshold, Pump.fun automatically migrated liquidity into an open AMM pool (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) and **burned the LP tokens of that pool**. At that point the team no longer has the technical ability to drain the pool itself. The Pump.fun mint state for the contract publicly records `complete: true`.\n\n**Did the team behave consistently with their own marketing?** No, and this is what the case file documents. The marketing pitch leaned explicitly on the Natroshvili family name and the Spribe / Aviator association. The FAQ on natrocoin.net (archived on Wayback Machine before takedown) addressed the rug-pull question directly: *"The reputation hit lasts forever; the cash from a rug doesn\'t."* When the price collapsed and affected early holders requested refunds, the team admin replied **"Nothing to say"** and the founder personally replied **"stfu"** via verified Telegram. The website was taken offline, the founder\'s Instagram bio link was removed, and the paid promotional video by KOL @jrcryptex was deleted — all within 72 hours of refunds being refused.\n\nWhether that conduct meets the legal threshold of fraud in any specific jurisdiction is a question for regulators and courts, not for this file. The file presents primary sources and lets readers form their own view.',
    citations: [
      { label: 'Wayback archive of natrocoin.net (pre-takedown)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Pump.fun mint state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan: token contract', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 2,
    slug: 'who-is-alex-natroshvili',
    order: 2,
    question: 'Who is Alex Natroshvili?',
    shortAnswer:
      'Founder of the $NATRO Solana memecoin (launched 21 May 2026) and son of David Natroshvili, founder and CEO of Spribe — the studio behind the global crash-style gambling product Aviator. Verified Instagram @natroalex (54.1K followers), Telegram @natroalex1. The launch marketing leaned explicitly on his family name.',
    extendedBody:
      'Alex Natroshvili was publicly identified by the $NATRO project\'s own website as the founder. The website\'s founder section opened with the line: *"Most coin founders are anonymous. Alex isn\'t. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally."* His personal profile was described as *"Boxer / Car Collector / Watch Collector."*\n\nHis verifiable public accounts at the time of the launch:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (verified, 54.1K followers)\n- Telegram: [@natroalex1](https://t.me/natroalex1) (verified)\n\nHe is the son of **David Natroshvili**, founder and CEO of Spribe — the iGaming studio behind the global crash-style gambling product Aviator. The marketing of $NATRO referenced this family standing as the central trust signal.\n\nOn 25 May 2026 at 10:11 UTC, in response to a structured refund-or-publication proposal from an affected early holder sent to his verified Telegram account, he replied with two letters: *"stfu."* That message is preserved as part of the file\'s exhibit set.',
    citations: [
      { label: 'Wayback archive — founder section', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — context on the Natroshvili family', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 3,
    slug: 'what-happened-to-natrocoin-net',
    order: 3,
    question: 'What happened to the natrocoin.net website?',
    shortAnswer:
      'The site was taken offline on 24 May 2026, within 72 hours of refunds being refused. The complete pre-takedown version was captured by the Wayback Machine — the hero pitch, the four-tier ladder, the founder section, tokenomics, and the full FAQ (including the answer to "What stops you from rugging?") are all preserved there.',
    extendedBody:
      'On 24 May 2026, the website at natrocoin.net began returning a Netlify "Site not found" page. The marketing copy, the tier descriptions, the founder section, and the FAQ — including the now-significant *"What stops you from rugging?"* answer — were no longer publicly accessible at the canonical URL.\n\nBefore the takedown, the Wayback Machine captured a **complete snapshot** of the site on 21 May 2026 at 21:32 UTC. The snapshot includes:\n\n- The hero pitch ("It\'s not about what you make. It\'s who picks up when you call.")\n- The four-tier access ladder (Foyer / Floor / Lounge / Salon · Inner Circle)\n- The founder section identifying Alex Natroshvili and the family connection\n- The tokenomics page (with the publicly-committed 30M founder bag)\n- The full FAQ — including the answer to *"What stops you from rugging?"* (*"The reputation hit lasts forever; the cash from a rug doesn\'t."*)\n\nThe Wayback URL is permanent and citable. The case file relies on it as the single strongest piece of evidence for what was actually promised at launch.\n\nThe takedown occurred in the same 72-hour window as: removal of the natrocoin.net link from the founder\'s verified Instagram bio, and deletion of the paid promotional video by KOL @jrcryptex (114K followers).',
    citations: [
      { label: 'Wayback archive — natrocoin.net (21 May 2026 capture)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 4,
    slug: 'did-spribe-endorse-natro',
    order: 4,
    question: 'Did Spribe (the gambling studio) endorse $NATRO?',
    shortAnswer:
      'Spribe corporate has not commented publicly. The founder and CEO of Spribe, David Natroshvili (father of the $NATRO founder Alex), amplified the launch from his own verified Instagram account — including a reshare of the paid promotional video. A formal letter was sent to Spribe legal channels on 25 May 2026. As of the time of filing, no public response.',
    extendedBody:
      'Spribe is a separately licensed iGaming studio with operations in multiple jurisdictions. **Spribe corporate has not commented publicly** on the $NATRO launch. The case file does not allege endorsement by Spribe as an entity.\n\nWhat is documented as fact:\n\n- **David Natroshvili**, founder and CEO of Spribe and father of Alex Natroshvili, **personally amplified the launch** from his verified Instagram account ([@davidnatro1](https://instagram.com/davidnatro1)), including a reshare of the paid promotional video produced by KOL @jrcryptex.\n- The $NATRO marketing materials referenced the Spribe / Aviator association as a trust signal — for example, the website\'s founder section identified the family connection explicitly.\n- On 25 May 2026 at 12:24 UTC, an affected holder sent a formal letter to Spribe\'s corporate and legal email channels (`info@spribe.co`, `legal@spribe.co`, plus two named executive addresses) outlining the facts and offering a clean private resolution path. **As of the time of this filing, no public response** has been received via those channels.\n\nThis FAQ entry will be updated if Spribe corporate publishes a public statement. The "Right of reply" section in the footer of the case file documents the editorial commitment to publish any such response verbatim.',
    citations: [
      { label: 'David Natroshvili — Spribe LinkedIn / SPRIBE official channel', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 5,
    slug: 'is-natro-token-still-trading',
    order: 5,
    question: 'Is the $NATRO token still trading?',
    shortAnswer:
      'Technically yes — the SPL token on Solana exists (mint authority is None, freeze authority is None) and the pump_swap AMM pool is live. In practice the market is effectively dead: market cap is ≈$36 as of the case-file filing, DexScreener shows zero active pairs (auto-hidden under their liquidity threshold), and the last trade was ~25 May 2026.',
    extendedBody:
      'Three different concepts get conflated here. Separating them:\n\n**1. Does the token still exist on Solana?**\n\nYes. Blockchain state is immutable — a token, once minted, cannot be deleted by anyone. The $NATRO mint at `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` is initialized, has total supply of 1,000,000,000, and is **not banned** by Pump.fun (`is_banned: false`). Critically:\n\n- **Mint authority: None** — no new tokens can be issued.\n- **Freeze authority: None** — holders cannot be frozen.\n\nThese settings are typical for fair-launched memecoins and were not modified post-launch.\n\n**2. Is there a market to buy/sell on?**\n\nFunctionally no. The Pump.fun bonding curve graduated, meaning liquidity migrated to the AMM pool `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. After graduation:\n\n- **Real SOL reserves: 0**\n- **Real token reserves: 0**\n- **Market cap: ≈$36** (per Pump.fun API at the time of this filing — down from a peak above $200K at launch)\n- **Last trade**: ≈25 May 2026 — followed by several days of zero volume.\n\nDexScreener\'s API returns zero pairs for the token because their public feed auto-hides pools below a liquidity threshold. The pool still technically exists; aggregators have stopped listing it because there is essentially no active market.\n\n**3. Did the team withdraw liquidity?**\n\nNo — they cannot. At Pump.fun graduation, LP tokens of the migrated pool are automatically burned by the protocol, removing the team\'s technical ability to drain the pool. The collapse from a peak above $200K to ≈$36 was driven by **holders selling in an open AMM**, not by a contract-level rug-pull.\n\nThis distinction matters editorially: the team did not commit the specific act their own FAQ ("What stops you from rugging?") was answering. Instead, after the launch reached the protocol-enforced threshold of legitimacy, the team chose not to engage with the holders who had taken them at their word.',
    citations: [
      { label: 'Solscan — $NATRO token', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — coin state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
];

export const faqRu: FaqEntryDTO[] = [
  {
    id: 1,
    slug: 'is-natro-a-scam',
    order: 1,
    question: '$NATRO — это scam?',
    shortAnswer:
      'Bonding curve Pump.fun прошла graduation — это значит, что на уровне протокола контрактного rug не было: команда не может опустошить мигрировавший AMM-пул. Что было: отказ возвращать средства пострадавшим, удаление сайта и промо-ссылок, ответ основателя «stfu» на структурированное предложение. Файл документирует это поведение в сравнении с маркетинговым обещанием. Читатель делает вывод сам.',
    extendedBody:
      'Честный ответ требует разделения двух вопросов.\n\n**Был ли контрактный rug-pull?** Нет. 21 мая 2026 года токен $NATRO был запущен на Pump.fun и достиг порога graduation (≈85 SOL накопленного притока, ≈$65–85K по курсу SOL на день запуска). При достижении порога Pump.fun автоматически мигрирует ликвидность в открытый AMM-пул (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) и **сжигает LP-tokens этого пула**. После этого у команды нет технической возможности дёрнуть ликвидность самого пула. Public mint state Pump.fun публично фиксирует `complete: true`.\n\n**Соответствовало ли поведение команды их собственному маркетингу?** Нет, и именно это документирует файл. Маркетинг прямо опирался на фамилию Натрошвили и связь со Spribe / Aviator. FAQ на natrocoin.net (сохранён в Wayback Machine до удаления) отвечал на вопрос о rug-pull напрямую: *«Удар по репутации остаётся навсегда; деньги от rug — нет»*. Когда цена обвалилась и пострадавшие держатели запросили возврат, админ команды ответил **«Nothing to say»**, а основатель лично ответил **«stfu»** через верифицированный Telegram. За 72 часа после отказа в возврате сайт был отключён, ссылка на NATRO удалена из Instagram-биографии основателя, а оплаченное промо-видео KOL @jrcryptex удалено.\n\nДостигает ли это поведение порога мошенничества в конкретной юрисдикции — вопрос для регуляторов и судов, а не для этого файла. Файл представляет первичные источники; вывод делает читатель.',
    citations: [
      { label: 'Wayback архив natrocoin.net (до удаления)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Pump.fun mint state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan: контракт токена', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 2,
    slug: 'who-is-alex-natroshvili',
    order: 2,
    question: 'Кто такой Алекс Натрошвили?',
    shortAnswer:
      'Основатель solana-мемкоина $NATRO (запущен 21 мая 2026) и сын Давида Натрошвили — основателя и CEO Spribe, студии за глобальным crash-style гемблинг-продуктом Aviator. Верифицированный Instagram @natroalex (54,1K подписчиков), Telegram @natroalex1. Маркетинг запуска прямо опирался на его фамилию.',
    extendedBody:
      'Алекс Натрошвили публично идентифицирован сайтом проекта $NATRO как основатель. Раздел про основателя на сайте открывался строкой: *«Большинство основателей монет — анонимны. Алекс — нет. Его имя на проекте, его лицо в TikTok и Instagram, и его семья известна глобально»*. Личный профиль описан как *«Боксёр / Коллекционер автомобилей / Коллекционер часов»*.\n\nЕго верифицируемые публичные аккаунты на момент запуска:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (верифицированный, 54,1K подписчиков)\n- Telegram: [@natroalex1](https://t.me/natroalex1) (верифицированный)\n\nОн сын **Давида Натрошвили**, основателя и CEO Spribe — iGaming-студии за глобальным crash-style гемблинг-продуктом Aviator. Маркетинг $NATRO ссылался на этот семейный статус как на ключевой сигнал доверия.\n\n25 мая 2026 года в 10:11 UTC, в ответ на структурированное предложение «возврат или публикация» от пострадавшего держателя, отправленное на его верифицированный Telegram, он ответил двумя буквами: *«stfu»*. Это сообщение сохранено в наборе экспонатов файла.',
    citations: [
      { label: 'Wayback архив — раздел основателя', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — контекст по семье Натрошвили', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 3,
    slug: 'what-happened-to-natrocoin-net',
    order: 3,
    question: 'Что случилось с сайтом natrocoin.net?',
    shortAnswer:
      'Сайт был отключён 24 мая 2026, в течение 72 часов после отказа в возврате средств. Полная версия до удаления сохранена Wayback Machine — хедер, четырёхуровневая лестница доступа, секция основателя, токеномика и весь FAQ (включая ответ на «Что мешает вам сделать rug?») доступны там.',
    extendedBody:
      '24 мая 2026 года сайт natrocoin.net начал отдавать страницу Netlify «Site not found». Маркетинговый текст, описание уровней, секция основателя и FAQ — включая теперь значимый ответ на *«Что мешает вам сделать rug?»* — стали недоступны по каноническому URL.\n\nДо отключения Wayback Machine захватил **полный снимок** сайта 21 мая 2026 в 21:32 UTC. Снимок содержит:\n\n- Хедер-питч («Дело не в том, сколько ты зарабатываешь. Дело в том, кто берёт трубку, когда ты звонишь»)\n- Четырёхуровневую лестницу доступа (Foyer / Floor / Lounge / Salon · Inner Circle)\n- Секцию основателя с идентификацией Алекса Натрошвили и семейной связи\n- Страницу токеномики (с публично заявленным «не двигающимся» 30M founder bag)\n- Полный FAQ — включая ответ на *«Что мешает вам сделать rug?»* (*«Удар по репутации остаётся навсегда; деньги от rug — нет»*)\n\nWayback URL постоянный и цитируемый. Файл опирается на него как на сильнейшую отдельную улику того, что было обещано на старте.\n\nОтключение произошло в те же 72 часа, что и: удаление ссылки natrocoin.net из верифицированной Instagram-биографии основателя и удаление оплаченного промо-видео KOL @jrcryptex (114K подписчиков).',
    citations: [
      { label: 'Wayback архив — natrocoin.net (захват 21 мая 2026)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 4,
    slug: 'did-spribe-endorse-natro',
    order: 4,
    question: 'Поддержала ли Spribe (гемблинг-студия) запуск $NATRO?',
    shortAnswer:
      'Spribe corporate публично не комментировала. Основатель и CEO Spribe Давид Натрошвили (отец основателя $NATRO Алекса) усилил запуск со своего верифицированного Instagram — в том числе репостнул оплаченное промо. Формальное письмо в legal-канал Spribe отправлено 25 мая 2026. На момент составления файла публичной реакции не было.',
    extendedBody:
      'Spribe — отдельно лицензированная iGaming-студия с операциями в нескольких юрисдикциях. **Spribe corporate публично не комментировала** запуск $NATRO. Файл не утверждает, что Spribe как организация поддержала запуск.\n\nЧто документировано как факт:\n\n- **Давид Натрошвили**, основатель и CEO Spribe и отец Алекса Натрошвили, **лично усилил запуск** со своего верифицированного Instagram-аккаунта ([@davidnatro1](https://instagram.com/davidnatro1)), в том числе репостнул оплаченное промо-видео, произведённое KOL @jrcryptex.\n- Маркетинговые материалы $NATRO ссылались на связь со Spribe / Aviator как на сигнал доверия — например, секция основателя сайта прямо идентифицировала семейную связь.\n- 25 мая 2026 в 12:24 UTC пострадавший держатель отправил формальное письмо на корпоративные и legal-адреса Spribe (`info@spribe.co`, `legal@spribe.co`, плюс два названных адреса исполнительного уровня) с изложением фактов и предложением чистого приватного пути разрешения. **На момент составления файла публичная реакция** по этим каналам отсутствует.\n\nЭта запись будет обновлена, если Spribe corporate опубликует публичное заявление. Раздел «Right of reply» в подвале файла фиксирует редакционное обязательство публиковать такой ответ дословно.',
    citations: [
      { label: 'Давид Натрошвили — LinkedIn / официальный канал SPRIBE', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
  {
    id: 5,
    slug: 'is-natro-token-still-trading',
    order: 5,
    question: 'Торгуется ли $NATRO сейчас?',
    shortAnswer:
      'Технически да — SPL-токен на Solana существует (mint authority = None, freeze authority = None), pump_swap AMM-пул жив. На практике рынок фактически мёртв: рыночная капитализация ≈$36 на момент составления файла, DexScreener показывает ноль активных пар (auto-hidden по их порогу ликвидности), последняя сделка ~25 мая 2026.',
    extendedBody:
      'Здесь смешиваются три разных понятия. Разделяю:\n\n**1. Существует ли токен на Solana?**\n\nДа. Состояние блокчейна неизменяемо — однажды выпущенный токен никем не может быть удалён. Mint $NATRO `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` инициализирован, имеет общий supply 1 000 000 000 и **не забанен** Pump.fun (`is_banned: false`). Важно:\n\n- **Mint authority: None** — новые токены выпустить нельзя.\n- **Freeze authority: None** — холдеров заморозить нельзя.\n\nЭти настройки типичны для fair-launch мемкоинов и не менялись после запуска.\n\n**2. Есть ли рынок для покупки/продажи?**\n\nФункционально нет. Bonding curve Pump.fun graduated — ликвидность мигрировала в AMM-пул `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. После graduation:\n\n- **Real SOL reserves: 0**\n- **Real token reserves: 0**\n- **Рыночная капитализация: ≈$36** (по данным API Pump.fun на момент составления — с пика выше $200K на старте)\n- **Последняя сделка**: ≈25 мая 2026 — затем несколько дней нулевого оборота.\n\nDexScreener API возвращает ноль пар по токену, потому что их публичный фид автоматически скрывает пулы ниже порога ликвидности. Пул технически ещё существует; агрегаторы перестали его листить, потому что активного рынка фактически нет.\n\n**3. Команда выдернула ликвидность?**\n\nНет — не могут. При graduation на Pump.fun LP-tokens мигрировавшего пула автоматически сжигаются протоколом, что снимает у команды техническую возможность дёрнуть ликвидность пула. Обвал с пика выше $200K до ≈$36 был вызван **продажами держателями в открытом AMM**, а не контрактным rug-pull.\n\nЭто различие важно редакционно: команда не совершила тот конкретный акт, на который отвечал их собственный FAQ («Что мешает вам сделать rug?»). Вместо этого, когда запуск достиг порога легитимности, заложенного протоколом, команда выбрала не вступать в диалог с держателями, которые поверили им на слово.',
    citations: [
      { label: 'Solscan — токен $NATRO', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — coin state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-27T00:00:00Z',
  },
];

export const faqUk: FaqEntryDTO[] = [
  {
    id: 1, slug: 'is-natro-a-scam', order: 1,
    question: '$NATRO — це scam?',
    shortAnswer: 'Bonding curve Pump.fun пройшла graduation — на рівні протоколу контрактного rug не було: команда не може спустошити мігрований AMM-пул. Що було: відмова повертати кошти постраждалим, видалення сайту і промо-посилань, відповідь засновника «stfu» на структуроване пропонування. Файл документує цю поведінку. Висновок робить читач.',
    extendedBody: 'Чесна відповідь вимагає розділення двох питань.\n\n**Чи був контрактний rug-pull?** Ні. 21 травня 2026 року токен $NATRO був запущений на Pump.fun і досяг порогу graduation (≈85 SOL накопиченого притоку). При досягненні порогу Pump.fun автоматично мігрує ліквідність у відкритий AMM-пул (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) і **спалює LP-tokens цього пулу**. Після цього у команди немає технічної можливості дістати ліквідність самого пулу. Mint state Pump.fun фіксує `complete: true`.\n\n**Чи відповідала поведінка команди їхньому власному маркетингу?** Ні, і саме це документує файл. Маркетинг прямо спирався на прізвище Натрошвілі і зв\'язок зі Spribe / Aviator. FAQ на natrocoin.net (збережений у Wayback Machine до видалення) відповідав на питання про rug прямо: *«Удар по репутації залишається назавжди; гроші від rug — ні»*. Коли ціна обвалилася і постраждалі тримачі попросили повернення, адмін команди відповів **«Nothing to say»**, а засновник особисто — **«stfu»** через верифікований Telegram. За 72 години після відмови у поверненні сайт відключено, посилання на NATRO видалено з Instagram-біографії засновника, а оплачене промо-відео KOL @jrcryptex видалене.\n\nЧи досягає така поведінка порогу шахрайства у конкретній юрисдикції — питання для регуляторів і судів, не для цього файлу. Файл представляє первинні джерела; висновок робить читач.',
    citations: [
      { label: 'Wayback архів natrocoin.net (до видалення)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Pump.fun mint state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan: контракт токена', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 2, slug: 'who-is-alex-natroshvili', order: 2,
    question: 'Хто такий Алекс Натрошвілі?',
    shortAnswer: 'Засновник solana-мемкоїна $NATRO (запущений 21 травня 2026) і син Давида Натрошвілі — засновника і CEO Spribe, студії за глобальним crash-style гемблінг-продуктом Aviator. Верифікований Instagram @natroalex (54,1K підписників), Telegram @natroalex1. Маркетинг запуску прямо спирався на його прізвище.',
    extendedBody: 'Алекс Натрошвілі публічно ідентифікований сайтом проєкту $NATRO як засновник. Розділ про засновника на сайті відкривався рядком: *«Більшість засновників монет — анонімні. Алекс — ні. Його ім\'я на проекті, його обличчя у TikTok та Instagram, і його родина відома глобально»*. Особистий профіль описаний як *«Боксер / Колекціонер автомобілів / Колекціонер годинників»*.\n\nЙого верифіковані публічні акаунти на момент запуску:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (верифікований, 54,1K підписників)\n- Telegram: [@natroalex1](https://t.me/natroalex1) (верифікований)\n\nВін син **Давида Натрошвілі**, засновника і CEO Spribe — iGaming-студії за глобальним crash-style гемблінг-продуктом Aviator. Маркетинг $NATRO посилався на цей сімейний статус як на ключовий сигнал довіри.\n\n25 травня 2026 року о 10:11 UTC, у відповідь на структуроване пропонування «повернення або публікація» від постраждалого тримача, надіслане на його верифікований Telegram, він відповів двома буквами: *«stfu»*. Це повідомлення збережене в наборі експонатів файлу.',
    citations: [
      { label: 'Wayback архів — секція засновника', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — контекст по родині Натрошвілі', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 3, slug: 'what-happened-to-natrocoin-net', order: 3,
    question: 'Що сталося з сайтом natrocoin.net?',
    shortAnswer: 'Сайт був відключений 24 травня 2026, протягом 72 годин після відмови у поверненні коштів. Повна версія до видалення збережена Wayback Machine — хедер, чотирирівнева драбина доступу, секція засновника, токеноміка і весь FAQ (включно з відповіддю на «Що заважає вам зробити rug?») доступні там.',
    extendedBody: '24 травня 2026 року сайт natrocoin.net почав віддавати сторінку Netlify «Site not found». Маркетинговий текст, опис рівнів, секція засновника і FAQ — включно з тепер значущою відповіддю на *«Що заважає вам зробити rug?»* — стали недоступні за канонічним URL.\n\nДо відключення Wayback Machine захопив **повний знімок** сайту 21 травня 2026 о 21:32 UTC. Знімок містить:\n\n- Хедер-пітч («Справа не в тому, скільки ти заробляєш. Справа в тому, хто бере слухавку, коли ти телефонуєш»)\n- Чотирирівневу драбину доступу (Foyer / Floor / Lounge / Salon · Inner Circle)\n- Секцію засновника з ідентифікацією Алекса Натрошвілі і сімейного зв\'язку\n- Сторінку токеноміки (з публічно заявленим «таким, що не рухається» 30M founder bag)\n- Повний FAQ — включно з відповіддю на *«Що заважає вам зробити rug?»* (*«Удар по репутації залишається назавжди; гроші від rug — ні»*)\n\nWayback URL постійний і цитований. Файл спирається на нього як на найсильнішу окрему доказову основу того, що було обіцяно на старті.\n\nВідключення сталося в ті ж 72 години, що й: видалення посилання natrocoin.net з верифікованої Instagram-біографії засновника і видалення оплаченого промо-відео KOL @jrcryptex (114K підписників).',
    citations: [
      { label: 'Wayback архів — natrocoin.net (захоплення 21 травня 2026)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 4, slug: 'did-spribe-endorse-natro', order: 4,
    question: 'Чи підтримала Spribe (гемблінг-студія) запуск $NATRO?',
    shortAnswer: 'Spribe corporate публічно не коментувала. Засновник і CEO Spribe Давид Натрошвілі (батько засновника $NATRO Алекса) посилив запуск зі свого верифікованого Instagram — у тому числі репостнув оплачене промо. Формальний лист до legal-каналу Spribe відправлений 25 травня 2026. На момент укладання файлу публічної реакції не було.',
    extendedBody: 'Spribe — окремо ліцензована iGaming-студія з операціями в кількох юрисдикціях. **Spribe corporate публічно не коментувала** запуск $NATRO. Файл не стверджує, що Spribe як організація підтримала запуск.\n\nЩо документовано як факт:\n\n- **Давид Натрошвілі**, засновник і CEO Spribe і батько Алекса Натрошвілі, **особисто посилив запуск** зі свого верифікованого Instagram-акаунту ([@davidnatro1](https://instagram.com/davidnatro1)), у тому числі репостнув оплачене промо-відео, вироблене KOL @jrcryptex.\n- Маркетингові матеріали $NATRO посилалися на зв\'язок зі Spribe / Aviator як на сигнал довіри — наприклад, секція засновника сайту прямо ідентифікувала сімейний зв\'язок.\n- 25 травня 2026 о 12:24 UTC постраждалий тримач надіслав формальний лист на корпоративні і legal-адреси Spribe (`info@spribe.co`, `legal@spribe.co`, плюс два названі адреси виконавчого рівня) з викладенням фактів і пропозицією чистого приватного шляху розв\'язання. **На момент укладання файлу публічна реакція** по цих каналах відсутня.\n\nЦей запис буде оновлено, якщо Spribe corporate опублікує публічну заяву. Розділ «Right of reply» у підвалі файлу фіксує редакційне зобов\'язання публікувати таку відповідь дослівно.',
    citations: [
      { label: 'Давид Натрошвілі — LinkedIn / офіційний канал SPRIBE', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 5, slug: 'is-natro-token-still-trading', order: 5,
    question: 'Чи торгується $NATRO зараз?',
    shortAnswer: 'Технічно так — SPL-токен на Solana існує (mint authority = None, freeze authority = None), pump_swap AMM-пул живий. На практиці ринок фактично мертвий: ринкова капіталізація ≈$36 на момент укладання, DexScreener показує нуль активних пар (auto-hidden за їх порогом ліквідності), остання угода ~25 травня 2026.',
    extendedBody: 'Тут змішуються три різні поняття. Розділяю:\n\n**1. Чи існує токен на Solana?**\n\nТак. Стан блокчейну незмінний — раз випущений токен ніким не може бути видалений. Mint $NATRO `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` ініціалізований, має загальний supply 1 000 000 000 і **не забанений** Pump.fun. Важливо:\n\n- **Mint authority: None** — нові токени випустити не можна.\n- **Freeze authority: None** — холдерів заморозити не можна.\n\nЦі налаштування типові для fair-launch мемкоїнів і не змінювалися після запуску.\n\n**2. Чи є ринок для купівлі/продажу?**\n\nФункціонально ні. Bonding curve Pump.fun graduated — ліквідність мігрувала в AMM-пул `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. Після graduation: Real SOL reserves: 0; Real token reserves: 0; ринкова капіталізація ≈$36; остання угода ≈25 травня 2026 — далі дні нульового обороту. DexScreener API повертає нуль пар по токену, бо їх публічний фід автоматично приховує пули нижче порога ліквідності.\n\n**3. Команда дістала ліквідність?**\n\nНі — не можуть. При graduation на Pump.fun LP-tokens мігрованого пулу автоматично спалюються протоколом. Обвал з піка вище $200K до ≈$36 був викликаний **продажами тримачами у відкритому AMM**, а не контрактним rug-pull. Команда не зробила саме той акт, на який відповідав їх власний FAQ. Замість цього, коли запуск досяг порога легітимності, заданого протоколом, команда вибрала не вступати в діалог з тримачами, які повірили їм на слово.',
    citations: [
      { label: 'Solscan — токен $NATRO', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — coin state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
];

export const faqKa: FaqEntryDTO[] = [
  {
    id: 1, slug: 'is-natro-a-scam', order: 1,
    question: '$NATRO — ეს არის scam?',
    shortAnswer: 'Pump.fun-ის bonding curve-მა graduation გაიარა — პროტოკოლის დონეზე კონტრაქტული rug არ ყოფილა: გუნდი ვერ ცლის მიგრირებულ AMM-პულს. რა მოხდა: დაბრუნებებზე უარი, საიტისა და პრომო-ბმულების წაშლა, დამფუძნებლის პასუხი „stfu". ფაილი ადასტურებს ამ ქცევას.',
    extendedBody: 'პატიოსანი პასუხი ორ კითხვას ანაწევრებს.\n\n**კონტრაქტული rug-pull იყო?** არა. 2026 წლის 21 მაისს $NATRO გაშვებულია Pump.fun-ზე და მიაღწია graduation ზღვარს. ამ მომენტში Pump.fun ავტომატურად მიგრიერებს ლიკვიდურობას ღია AMM-პულში (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) და **წვავს ამ პულის LP-tokens-ებს**. ამის შემდეგ გუნდს არ აქვს ტექნიკური საშუალება პულის ლიკვიდურობის ამოღებისთვის. Pump.fun mint state ფიქსირებს `complete: true`.\n\n**გუნდის ქცევა შეესაბამებოდა მათ მარკეტინგს?** არა, და სწორედ ეს არის დოკუმენტირებული. მარკეტინგი ეყრდნობოდა ნატროშვილების სახელს და Spribe / Aviator-თან კავშირს. natrocoin.net-ის FAQ პირდაპირ პასუხობდა rug-pull-ის შესახებ კითხვას: *„რეპუტაციული დარტყმა სამუდამოდ რჩება; rug-pull-დან ფული — არა"*. როდესაც ფასი დაეცა, ადმინმა უპასუხა **„Nothing to say"**, ხოლო დამფუძნებელმა — **„stfu"**. 72 საათში: საიტი გათიშულია, Instagram-ის ბმული მოშორებულია, KOL @jrcryptex-ის რეკლამა წაშლილია.',
    citations: [
      { label: 'Wayback არქივი natrocoin.net (წაშლამდე)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Pump.fun mint state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 2, slug: 'who-is-alex-natroshvili', order: 2,
    question: 'ვინ არის ალექს ნატროშვილი?',
    shortAnswer: '$NATRO solana-მემკოინის (გაშვებული 2026 წლის 21 მაისს) დამფუძნებელი და დავით ნატროშვილის შვილი — Spribe-ის (Aviator-ის სტუდიის) დამფუძნებლისა და CEO-ს. ვერიფიცირებული Instagram @natroalex (54,1K გამომწერი), Telegram @natroalex1. გაშვების მარკეტინგი პირდაპირ ეყრდნობოდა მის გვარს.',
    extendedBody: 'ალექს ნატროშვილი საჯაროდ იდენტიფიცირებულია $NATRO-ს პროექტის საიტით როგორც დამფუძნებელი. „Most coin founders are anonymous. Alex isn\'t. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally." პროფილი: „Boxer / Car Collector / Watch Collector".\n\nმისი ვერიფიცირებული საჯარო ანგარიშები გაშვებისას:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (54,1K გამომწერი)\n- Telegram: [@natroalex1](https://t.me/natroalex1)\n\nის არის **დავით ნატროშვილის** შვილი — Spribe-ის (Aviator-ის სტუდიის) დამფუძნებლისა და CEO-ს. $NATRO-ს მარკეტინგი ეყრდნობოდა ამ ოჯახურ სტატუსს როგორც ნდობის სიგნალს.\n\n2026 წლის 25 მაისს 10:11 UTC-ზე, დაზარალებული მფლობელის სტრუქტურირებულ შეთავაზებაზე ალექსმა უპასუხა ორი ასოთი: *„stfu"*.',
    citations: [
      { label: 'Wayback არქივი — დამფუძნებლის სექცია', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — ნატროშვილების ოჯახის კონტექსტი', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 3, slug: 'what-happened-to-natrocoin-net', order: 3,
    question: 'რა მოხდა natrocoin.net საიტთან?',
    shortAnswer: 'საიტი გათიშულია 2026 წლის 24 მაისს, დაბრუნებებზე უარის თქმიდან 72 საათში. წაშლამდე სრული ვერსია შენახულია Wayback Machine-ის მიერ — ჰედერი, ოთხდონიანი წვდომის კიბე, დამფუძნებლის სექცია, ტოკენომიკა და სრული FAQ („რა გიშლით rug-ის გაკეთებას?"-ის პასუხის ჩათვლით) იქ ხელმისაწვდომია.',
    extendedBody: '2026 წლის 24 მაისს natrocoin.net იწყებს Netlify-ის „Site not found" გვერდის დაბრუნებას. მარკეტინგული ტექსტი, ტიერების აღწერა, დამფუძნებლის სექცია და FAQ — *„რა გიშლით rug-ის გაკეთებას?"*-ის პასუხის ჩათვლით — აღარაა ხელმისაწვდომი კანონიკურ URL-ზე.\n\nგათიშვამდე Wayback Machine-მა გააკეთო **სრული სნეპშოტი** 2026 წლის 21 მაისს 21:32 UTC-ზე. სნეპშოტი შეიცავს ჰედერ-პიჩს, ოთხდონიან წვდომის კიბეს (Foyer / Floor / Lounge / Salon · Inner Circle), დამფუძნებლის სექციას ალექს ნატროშვილისა და ოჯახური კავშირის იდენტიფიკაციით, ტოკენომიკის გვერდს და სრულ FAQ-ს — *„რეპუტაციული დარტყმა სამუდამოდ რჩება; rug-pull-დან ფული — არა"*-ს ჩათვლით.\n\nWayback URL-ი მუდმივი და ციტირებადია. ფაილი მას ეყრდნობა, როგორც ერთ-ერთ ყველაზე ძლიერ მტკიცებულებას.',
    citations: [
      { label: 'Wayback არქივი — natrocoin.net', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 4, slug: 'did-spribe-endorse-natro', order: 4,
    question: 'მხარდაუჭერა Spribe-მა (გემბლინგ სტუდიამ) $NATRO-ს გაშვება?',
    shortAnswer: 'Spribe corporate-მა საჯაროდ არ უპასუხა. Spribe-ის დამფუძნებელმა და CEO-მ დავით ნატროშვილმა (ალექსის მამამ) გააძლიერა გაშვება საკუთარი ვერიფიცირებული Instagram-ით — ფასიანი რეკლამის რეპოსტის ჩათვლით. ფორმალური წერილი Spribe legal-ისთვის გაიგზავნა 2026 წლის 25 მაისს. ფაილის შედგენისას საჯარო რეაქცია არ ყოფილა.',
    extendedBody: 'Spribe — ცალკე ლიცენზირებული iGaming-სტუდია რამდენიმე იურისდიქციაში. **Spribe corporate-მა საჯაროდ არ უპასუხა** $NATRO-ს გაშვებას. ფაილი არ ამტკიცებს, რომ Spribe როგორც ორგანიზაცია მხარს უჭერდა გაშვებას.\n\nფაქტობრივად დოკუმენტირებულია:\n- **დავით ნატროშვილმა**, Spribe-ის დამფუძნებელმა და CEO-მ, ალექსის მამამ, **პირადად გააძლიერა გაშვება** საკუთარი ვერიფიცირებული Instagram-იდან ([@davidnatro1](https://instagram.com/davidnatro1)), ფასიანი რეკლამის რეპოსტის ჩათვლით.\n- $NATRO-ს მარკეტინგი ეყრდნობოდა Spribe / Aviator-თან კავშირს როგორც ნდობის სიგნალს.\n- 2026 წლის 25 მაისს 12:24 UTC-ზე დაზარალებულმა მფლობელმა გაუგზავნა ფორმალური წერილი Spribe-ის კორპორაციულ და legal მისამართებზე. **ფაილის შედგენისას საჯარო რეაქცია** ამ არხებიდან არ ყოფილა.',
    citations: [
      { label: 'დავით ნატროშვილი — LinkedIn / SPRIBE ოფიციალური არხი', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 5, slug: 'is-natro-token-still-trading', order: 5,
    question: 'ვაჭრობს თუ არა $NATRO ახლა?',
    shortAnswer: 'ტექნიკურად დიახ — SPL-ტოკენი Solana-ზე არსებობს (mint authority = None, freeze authority = None), pump_swap AMM-პული ცოცხალია. პრაქტიკულად ბაზარი ფაქტობრივად მკვდარია: საბაზრო კაპიტალიზაცია ≈$36, DexScreener უჩვენებს ნულ აქტიურ წყვილს, ბოლო გარიგება ~2026 წლის 25 მაისი.',
    extendedBody: 'სამი სხვადასხვა ცნება ერევა. ვანაწევრებ:\n\n**1. ტოკენი არსებობს Solana-ზე?** დიახ. ბლოკჩეინის მდგომარეობა უცვლელია. Mint $NATRO `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` ინიციალიზებული, supply 1,000,000,000, არ არის დაბანული. Mint authority: None. Freeze authority: None.\n\n**2. ბაზარი არსებობს ყიდვა/გაყიდვისთვის?** ფუნქციონალურად არა. Bonding curve graduated, ლიკვიდურობა მიგრირდა AMM-პულში `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. Real SOL reserves: 0; Real token reserves: 0; საბაზრო კაპიტალიზაცია ≈$36; ბოლო გარიგება ≈2026 წლის 25 მაისი.\n\n**3. გუნდმა ამოიღო ლიკვიდურობა?** არა — ვერ შეძლებდა. Graduation-ისას LP-tokens ავტომატურად იწვება პროტოკოლის მიერ. დაცემა $200K-ის პიკიდან ≈$36-მდე გამოწვეული იყო **მფლობელების მიერ გაყიდვებით ღია AMM-ში**, არა კონტრაქტული rug-pull-ით.',
    citations: [
      { label: 'Solscan — $NATRO ტოკენი', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — coin state', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
];

export const faqFr: FaqEntryDTO[] = [
  {
    id: 1, slug: 'is-natro-a-scam', order: 1,
    question: '$NATRO est-il une arnaque ?',
    shortAnswer: 'La bonding curve Pump.fun a fait sa graduation, ce qui signifie qu\'au niveau du protocole il n\'y a pas eu de rug au niveau du contrat — l\'équipe ne peut pas vider le pool AMM migré. Ce qui s\'est passé : les remboursements aux détenteurs précoces ont été refusés, le site et les liens promo ont été effacés, le fondateur a répondu « stfu » à une proposition structurée. Le dossier documente cette conduite. Le lecteur juge.',
    extendedBody: 'La réponse honnête exige de distinguer deux questions.\n\n**Y a-t-il eu un rug-pull au niveau du contrat ?** Non. Le 21 mai 2026, le token $NATRO Solana a été lancé sur Pump.fun et a atteint le seuil de graduation (≈85 SOL d\'afflux accumulé). En atteignant ce seuil, Pump.fun migre automatiquement la liquidité vers un pool AMM ouvert (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) et **brûle les tokens LP de ce pool**. L\'équipe n\'a alors plus la capacité technique de vider la liquidité du pool. L\'état du mint Pump.fun enregistre publiquement `complete: true`.\n\n**La conduite de l\'équipe a-t-elle correspondu à son propre marketing ?** Non, et c\'est ce que le dossier documente. L\'argumentaire reposait explicitement sur le nom de famille Natroshvili et sur l\'association Spribe / Aviator. La FAQ de natrocoin.net (archivée sur Wayback Machine avant suppression) répondait à la question du rug : *« Le coup porté à la réputation dure pour toujours ; pas l\'argent issu d\'un rug. »* Quand le prix s\'est effondré et que les détenteurs ont demandé un remboursement, l\'admin a répondu **« Rien à dire »** et le fondateur personnellement **« stfu »** via Telegram vérifié. Dans les 72 heures suivant le refus des remboursements, le site a été retiré, le lien NATRO supprimé de la bio Instagram du fondateur, et la vidéo promo payante du KOL @jrcryptex effacée.\n\nSi cette conduite atteint le seuil légal de fraude dans une juridiction donnée est une question pour les régulateurs et les tribunaux, pas pour ce dossier. Le dossier présente les sources primaires et laisse le lecteur juger.',
    citations: [
      { label: 'Archive Wayback de natrocoin.net (avant suppression)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'État du mint Pump.fun', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan : contrat du token', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 2, slug: 'who-is-alex-natroshvili', order: 2,
    question: 'Qui est Alex Natroshvili ?',
    shortAnswer: 'Fondateur du memecoin $NATRO Solana (lancé le 21 mai 2026) et fils de David Natroshvili, fondateur et CEO de Spribe — le studio derrière le produit de jeu d\'argent crash-style mondial Aviator. Instagram vérifié @natroalex (54,1K abonnés), Telegram @natroalex1. Le marketing du lancement reposait explicitement sur son nom de famille.',
    extendedBody: 'Alex Natroshvili a été publiquement identifié par le site même du projet $NATRO comme le fondateur. La section fondateur s\'ouvrait avec : *« La plupart des fondateurs de coins sont anonymes. Pas Alex. Son nom est sur le projet, son visage est sur TikTok et Instagram, et sa famille est connue mondialement. »* Son profil personnel est décrit comme *« Boxeur / Collectionneur de voitures / Collectionneur de montres »*.\n\nSes comptes publics vérifiables au moment du lancement :\n- Instagram : [@natroalex](https://instagram.com/natroalex) (vérifié, 54,1K abonnés)\n- Telegram : [@natroalex1](https://t.me/natroalex1) (vérifié)\n\nIl est le fils de **David Natroshvili**, fondateur et CEO de Spribe — le studio iGaming derrière le produit mondial de jeu d\'argent crash-style Aviator. Le marketing de $NATRO a fait référence à ce statut familial comme signal de confiance central.\n\nLe 25 mai 2026 à 10:11 UTC, en réponse à une proposition structurée de remboursement ou publication d\'un détenteur précoce affecté envoyée à son compte Telegram vérifié, il a répondu en deux lettres : *« stfu »*. Ce message est préservé comme pièce du dossier.',
    citations: [
      { label: 'Archive Wayback — section fondateur', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — contexte sur la famille Natroshvili', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 3, slug: 'what-happened-to-natrocoin-net', order: 3,
    question: 'Qu\'est-il arrivé au site natrocoin.net ?',
    shortAnswer: 'Le site a été mis hors ligne le 24 mai 2026, dans les 72 heures suivant le refus des remboursements. La version complète pré-suppression a été capturée par la Wayback Machine — le pitch principal, l\'échelle à quatre paliers, la section fondateur, la tokenomics et la FAQ complète (y compris la réponse à « Qu\'est-ce qui vous empêche de rug ? ») y sont préservés.',
    extendedBody: 'Le 24 mai 2026, le site natrocoin.net a commencé à renvoyer une page Netlify « Site not found ». Le texte marketing, les descriptions des paliers, la section fondateur et la FAQ — y compris la réponse maintenant significative à *« Qu\'est-ce qui vous empêche de rug ? »* — n\'étaient plus accessibles publiquement à l\'URL canonique.\n\nAvant la suppression, la Wayback Machine a capturé un **snapshot complet** du site le 21 mai 2026 à 21:32 UTC. Le snapshot comprend :\n\n- Le pitch d\'accueil (« Il ne s\'agit pas de ce que vous gagnez. Il s\'agit de qui décroche quand vous appelez. »)\n- L\'échelle d\'accès à quatre paliers (Foyer / Floor / Lounge / Salon · Inner Circle)\n- La section fondateur identifiant Alex Natroshvili et le lien familial\n- La page tokenomics (avec le bag fondateur de 30M publiquement engagé)\n- La FAQ complète — y compris la réponse à *« Qu\'est-ce qui vous empêche de rug ? »* (*« Le coup porté à la réputation dure pour toujours ; pas l\'argent issu d\'un rug »*)\n\nL\'URL Wayback est permanente et citable. Le dossier s\'appuie dessus comme preuve la plus solide de ce qui était réellement promis au lancement.\n\nLa mise hors ligne a eu lieu dans la même fenêtre de 72 heures que : la suppression du lien natrocoin.net de la bio Instagram vérifiée du fondateur, et la suppression de la vidéo promotionnelle payante du KOL @jrcryptex (114K abonnés).',
    citations: [
      { label: 'Archive Wayback — natrocoin.net (capture du 21 mai 2026)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 4, slug: 'did-spribe-endorse-natro', order: 4,
    question: 'Spribe (le studio de jeu d\'argent) a-t-il soutenu $NATRO ?',
    shortAnswer: 'Spribe corporate n\'a pas commenté publiquement. Le fondateur et CEO de Spribe, David Natroshvili (père du fondateur de $NATRO Alex), a amplifié le lancement depuis son propre compte Instagram vérifié — y compris en repartageant la vidéo promo payante. Une lettre formelle a été envoyée aux canaux juridiques de Spribe le 25 mai 2026. À ce jour, aucune réponse publique.',
    extendedBody: 'Spribe est un studio iGaming séparément licencié avec des opérations dans plusieurs juridictions. **Spribe corporate n\'a pas commenté publiquement** le lancement de $NATRO. Le dossier n\'allègue pas un soutien par Spribe en tant qu\'entité.\n\nCe qui est documenté comme fait :\n\n- **David Natroshvili**, fondateur et CEO de Spribe et père d\'Alex Natroshvili, **a personnellement amplifié le lancement** depuis son compte Instagram vérifié ([@davidnatro1](https://instagram.com/davidnatro1)), y compris en repartageant la vidéo promotionnelle payante produite par le KOL @jrcryptex.\n- Les matériaux marketing de $NATRO ont fait référence à l\'association Spribe / Aviator comme signal de confiance — par exemple, la section fondateur du site identifiait explicitement le lien familial.\n- Le 25 mai 2026 à 12:24 UTC, un détenteur affecté a envoyé une lettre formelle aux canaux corporate et juridiques de Spribe (`info@spribe.co`, `legal@spribe.co`, plus deux adresses exécutives nommées) exposant les faits et offrant une voie de résolution privée propre. **À ce jour, aucune réponse publique** n\'a été reçue via ces canaux.\n\nCette entrée FAQ sera mise à jour si Spribe corporate publie une déclaration publique. La section « Droit de réponse » dans le pied de page du dossier documente l\'engagement éditorial de publier toute réponse verbatim.',
    citations: [
      { label: 'David Natroshvili — LinkedIn / canal officiel SPRIBE', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 5, slug: 'is-natro-token-still-trading', order: 5,
    question: 'Le token $NATRO est-il encore en cours d\'échange ?',
    shortAnswer: 'Techniquement oui — le token SPL sur Solana existe (mint authority = None, freeze authority = None) et le pool AMM pump_swap est actif. En pratique, le marché est effectivement mort : capitalisation ≈36 $ au moment du dossier, DexScreener affiche zéro paires actives (auto-masquées sous leur seuil de liquidité), dernière transaction ~25 mai 2026.',
    extendedBody: 'Trois concepts différents sont confondus ici. Je les sépare :\n\n**1. Le token existe-t-il encore sur Solana ?**\n\nOui. L\'état de la blockchain est immuable — un token, une fois minté, ne peut être supprimé par personne. Le mint $NATRO `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` est initialisé, a un supply total de 1 000 000 000, et n\'est **pas banni** par Pump.fun (`is_banned: false`). De manière critique : Mint authority: None — aucun nouveau token ne peut être émis. Freeze authority: None — les détenteurs ne peuvent être gelés.\n\n**2. Y a-t-il un marché pour acheter/vendre ?**\n\nFonctionnellement non. La bonding curve Pump.fun a fait sa graduation, la liquidité a migré vers le pool AMM `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. Après graduation : Real SOL reserves: 0 ; Real token reserves: 0 ; Capitalisation : ≈36 $ ; Dernière transaction : ≈25 mai 2026. DexScreener masque automatiquement les pools sous un seuil de liquidité.\n\n**3. L\'équipe a-t-elle retiré la liquidité ?**\n\nNon — elle ne peut pas. À la graduation de Pump.fun, les tokens LP du pool migré sont automatiquement brûlés par le protocole. La chute d\'un pic au-dessus de 200K $ à ≈36 $ a été causée par **des ventes de détenteurs dans un AMM ouvert**, pas par un rug-pull au niveau du contrat. L\'équipe n\'a pas commis l\'acte spécifique auquel sa propre FAQ répondait. Au lieu de cela, après que le lancement ait atteint le seuil de légitimité imposé par le protocole, l\'équipe a choisi de ne pas dialoguer avec les détenteurs qui l\'avaient cru sur parole.',
    citations: [
      { label: 'Solscan — token $NATRO', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — état du coin', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
];

export const faqDe: FaqEntryDTO[] = [
  {
    id: 1, slug: 'is-natro-a-scam', order: 1,
    question: 'Ist $NATRO ein Scam?',
    shortAnswer: 'Die Pump.fun-Bonding-Curve hat graduiert, was bedeutet, dass es auf Protokollebene keinen Rug auf Vertragsebene gab — das Team kann den migrierten AMM-Pool nicht entleeren. Was passiert ist: Rückerstattungen wurden verweigert, die Website und Promo-Links wurden gelöscht, der Gründer antwortete „stfu" auf einen strukturierten Vorschlag. Die Akte dokumentiert dieses Verhalten.',
    extendedBody: 'Die ehrliche Antwort erfordert die Trennung zweier Fragen.\n\n**Gab es einen Rug-Pull auf Vertragsebene?** Nein. Am 21. Mai 2026 wurde der $NATRO-Solana-Token auf Pump.fun gelaunched und erreichte die Bonding-Curve-Graduation-Schwelle (≈85 SOL kumulierter Zufluss). Beim Erreichen der Schwelle migriert Pump.fun die Liquidität automatisch in einen offenen AMM-Pool (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) und **brennt die LP-Tokens dieses Pools**. Danach hat das Team nicht mehr die technische Möglichkeit, die Liquidität des Pools selbst zu entleeren. Der Pump.fun-Mint-Zustand zeigt öffentlich `complete: true`.\n\n**Hat sich das Team konsistent mit seinem eigenen Marketing verhalten?** Nein, und das dokumentiert die Akte. Das Marketing stützte sich explizit auf den Familiennamen Natroshvili und auf die Spribe / Aviator-Verbindung. Die FAQ auf natrocoin.net (vor der Löschung auf Wayback Machine archiviert) adressierte die Rug-Pull-Frage direkt: *„Der Reputationsschaden hält ewig; das Geld aus einem Rug nicht."* Als der Preis abstürzte und betroffene frühe Inhaber Rückerstattungen anforderten, antwortete der Team-Admin **„Nichts zu sagen"** und der Gründer persönlich **„stfu"** via verifiziertes Telegram. Innerhalb von 72 Stunden nach der Ablehnung der Rückerstattungen wurde die Website offline genommen, der NATRO-Link aus der Instagram-Bio des Gründers entfernt und das bezahlte Werbevideo des KOL @jrcryptex gelöscht.\n\nOb dieses Verhalten die juristische Schwelle für Betrug in einer bestimmten Jurisdiktion erreicht, ist eine Frage für Regulierungsbehörden und Gerichte, nicht für diese Akte. Die Akte präsentiert Primärquellen und überlässt dem Leser das Urteil.',
    citations: [
      { label: 'Wayback-Archiv von natrocoin.net (vor Löschung)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Pump.fun-Mint-Zustand', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan: Token-Vertrag', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 2, slug: 'who-is-alex-natroshvili', order: 2,
    question: 'Wer ist Alex Natroshvili?',
    shortAnswer: 'Gründer des $NATRO-Solana-Memecoins (gelaunched am 21. Mai 2026) und Sohn von David Natroshvili, Gründer und CEO von Spribe — dem Studio hinter dem globalen Crash-Style-Glücksspielprodukt Aviator. Verifiziertes Instagram @natroalex (54,1K Follower), Telegram @natroalex1. Das Launch-Marketing stützte sich explizit auf seinen Familiennamen.',
    extendedBody: 'Alex Natroshvili wurde von der Website des $NATRO-Projekts selbst öffentlich als Gründer identifiziert. Der Gründer-Abschnitt eröffnete mit: *„Die meisten Coin-Gründer sind anonym. Alex nicht. Sein Name steht auf dem Projekt, sein Gesicht ist auf TikTok und Instagram, und seine Familie ist weltweit bekannt."* Sein persönliches Profil wird beschrieben als *„Boxer / Auto-Sammler / Uhren-Sammler"*.\n\nSeine verifizierbaren öffentlichen Konten zum Zeitpunkt des Launches:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (verifiziert, 54,1K Follower)\n- Telegram: [@natroalex1](https://t.me/natroalex1) (verifiziert)\n\nEr ist der Sohn von **David Natroshvili**, Gründer und CEO von Spribe — dem iGaming-Studio hinter dem globalen Crash-Style-Glücksspielprodukt Aviator. Das Marketing von $NATRO bezog sich auf diese familiäre Stellung als zentrales Vertrauenssignal.\n\nAm 25. Mai 2026 um 10:11 UTC antwortete er auf einen strukturierten Rückerstattungs-oder-Veröffentlichungsvorschlag eines betroffenen frühen Inhabers, der an sein verifiziertes Telegram-Konto gesendet wurde, mit zwei Buchstaben: *„stfu"*. Diese Nachricht ist als Teil des Beweismaterials der Akte gesichert.',
    citations: [
      { label: 'Wayback-Archiv — Gründer-Abschnitt', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — Kontext zur Familie Natroshvili', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 3, slug: 'what-happened-to-natrocoin-net', order: 3,
    question: 'Was ist mit der Website natrocoin.net passiert?',
    shortAnswer: 'Die Website wurde am 24. Mai 2026 offline genommen, innerhalb von 72 Stunden nach der Ablehnung der Rückerstattungen. Die vollständige Pre-Takedown-Version wurde von der Wayback Machine erfasst — der Hero-Pitch, die vierstufige Tier-Leiter, der Gründer-Abschnitt, Tokenomics und die vollständige FAQ (einschließlich der Antwort auf „Was hindert Sie an einem Rug?") sind dort alle erhalten.',
    extendedBody: 'Am 24. Mai 2026 begann die Website natrocoin.net, eine Netlify-„Site not found"-Seite zurückzugeben. Der Marketing-Text, die Tier-Beschreibungen, der Gründer-Abschnitt und die FAQ — einschließlich der inzwischen bedeutsamen Antwort auf *„Was hindert Sie an einem Rug?"* — waren unter der kanonischen URL nicht mehr öffentlich zugänglich.\n\nVor der Löschung erfasste die Wayback Machine einen **vollständigen Snapshot** der Website am 21. Mai 2026 um 21:32 UTC. Der Snapshot umfasst:\n\n- Den Hero-Pitch („Es geht nicht darum, was du verdienst. Es geht darum, wer abhebt, wenn du anrufst.")\n- Die vierstufige Zugangsleiter (Foyer / Floor / Lounge / Salon · Inner Circle)\n- Den Gründer-Abschnitt mit der Identifikation von Alex Natroshvili und der Familienverbindung\n- Die Tokenomics-Seite (mit dem öffentlich verpflichteten 30M-Gründer-Bag)\n- Die vollständige FAQ — einschließlich der Antwort auf *„Was hindert Sie an einem Rug?"* (*„Der Reputationsschaden hält ewig; das Geld aus einem Rug nicht."*)\n\nDie Wayback-URL ist permanent und zitierfähig. Die Akte stützt sich darauf als die stärkste Einzelquelle für das, was beim Launch tatsächlich versprochen wurde.\n\nDie Offline-Nahme erfolgte im selben 72-Stunden-Fenster wie: die Entfernung des natrocoin.net-Links aus der verifizierten Instagram-Bio des Gründers und die Löschung des bezahlten Werbevideos des KOL @jrcryptex (114K Follower).',
    citations: [
      { label: 'Wayback-Archiv — natrocoin.net (Erfassung 21. Mai 2026)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 4, slug: 'did-spribe-endorse-natro', order: 4,
    question: 'Hat Spribe (das Glücksspielstudio) $NATRO unterstützt?',
    shortAnswer: 'Spribe Corporate hat sich öffentlich nicht geäußert. Der Gründer und CEO von Spribe, David Natroshvili (Vater des $NATRO-Gründers Alex), verstärkte den Launch von seinem eigenen verifizierten Instagram-Konto — einschließlich des Reshares des bezahlten Werbevideos. Ein formelles Schreiben wurde am 25. Mai 2026 an die juristischen Kanäle von Spribe gesendet. Bis zum Zeitpunkt der Erstellung dieser Akte gab es keine öffentliche Reaktion.',
    extendedBody: 'Spribe ist ein separat lizenziertes iGaming-Studio mit Operationen in mehreren Jurisdiktionen. **Spribe Corporate hat sich öffentlich nicht** zum $NATRO-Launch geäußert. Die Akte behauptet keine Unterstützung durch Spribe als Entität.\n\nWas als Fakt dokumentiert ist:\n\n- **David Natroshvili**, Gründer und CEO von Spribe und Vater von Alex Natroshvili, **verstärkte den Launch persönlich** von seinem verifizierten Instagram-Konto ([@davidnatro1](https://instagram.com/davidnatro1)), einschließlich des Reshares des bezahlten Werbevideos, das vom KOL @jrcryptex produziert wurde.\n- Die Marketing-Materialien von $NATRO bezogen sich auf die Spribe / Aviator-Verbindung als Vertrauenssignal — der Gründer-Abschnitt der Website identifizierte beispielsweise die familiäre Verbindung explizit.\n- Am 25. Mai 2026 um 12:24 UTC sandte ein betroffener Inhaber ein formelles Schreiben an die korporativen und juristischen E-Mail-Kanäle von Spribe (`info@spribe.co`, `legal@spribe.co`, plus zwei namentlich genannte Executive-Adressen), das die Fakten darlegte und einen sauberen privaten Lösungsweg anbot. **Bis zum Zeitpunkt der Erstellung dieser Akte ist keine öffentliche Reaktion** über diese Kanäle eingegangen.\n\nDieser FAQ-Eintrag wird aktualisiert, falls Spribe Corporate eine öffentliche Stellungnahme veröffentlicht. Der „Recht auf Erwiderung"-Abschnitt im Fußbereich der Akte dokumentiert die redaktionelle Verpflichtung, jede solche Antwort wortwörtlich zu veröffentlichen.',
    citations: [
      { label: 'David Natroshvili — LinkedIn / offizieller SPRIBE-Kanal', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 5, slug: 'is-natro-token-still-trading', order: 5,
    question: 'Wird der $NATRO-Token noch gehandelt?',
    shortAnswer: 'Technisch ja — der SPL-Token auf Solana existiert (Mint authority = None, Freeze authority = None) und der pump_swap-AMM-Pool ist live. In der Praxis ist der Markt effektiv tot: Marktkapitalisierung ≈36 $ zum Zeitpunkt der Akten-Erstellung, DexScreener zeigt null aktive Paare (auto-versteckt unter ihrer Liquiditätsschwelle), letzter Trade ~25. Mai 2026.',
    extendedBody: 'Drei verschiedene Konzepte werden hier vermengt. Trennung:\n\n**1. Existiert der Token noch auf Solana?**\n\nJa. Der Zustand der Blockchain ist unveränderlich — ein Token kann, einmal geminted, von niemandem gelöscht werden. Der $NATRO-Mint bei `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` ist initialisiert, hat ein Gesamtangebot von 1.000.000.000 und ist von Pump.fun **nicht gebannt** (`is_banned: false`). Wichtig: Mint authority: None — keine neuen Tokens können ausgegeben werden. Freeze authority: None — Inhaber können nicht eingefroren werden.\n\n**2. Gibt es einen Markt zum Kaufen/Verkaufen?**\n\nFunktional nein. Die Pump.fun-Bonding-Curve hat graduiert, die Liquidität migrierte in den AMM-Pool `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. Nach der Graduation: Real SOL reserves: 0; Real token reserves: 0; Marktkapitalisierung: ≈36 $; Letzter Trade: ≈25. Mai 2026. DexScreener versteckt automatisch Pools unterhalb einer Liquiditätsschwelle.\n\n**3. Hat das Team Liquidität abgezogen?**\n\nNein — es kann nicht. Bei der Pump.fun-Graduation werden die LP-Tokens des migrierten Pools automatisch vom Protokoll verbrannt. Der Absturz von einem Höchststand über 200K $ auf ≈36 $ wurde durch **Verkäufe von Inhabern in einem offenen AMM** verursacht, nicht durch einen Rug-Pull auf Vertragsebene. Das Team beging nicht den spezifischen Akt, auf den seine eigene FAQ antwortete. Stattdessen, nachdem der Launch die vom Protokoll erzwungene Legitimitätsschwelle erreicht hatte, entschied sich das Team, nicht mit den Inhabern in Dialog zu treten, die ihm beim Wort genommen hatten.',
    citations: [
      { label: 'Solscan — $NATRO-Token', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — Coin-Zustand', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
];

export const faqEs: FaqEntryDTO[] = [
  {
    id: 1, slug: 'is-natro-a-scam', order: 1,
    question: '¿Es $NATRO una estafa?',
    shortAnswer: 'La bonding curve de Pump.fun se graduó, lo que significa que a nivel de protocolo no hubo un rug a nivel de contrato — el equipo no puede vaciar el pool AMM migrado. Lo que sí ocurrió: se rechazaron los reembolsos a los holders tempranos afectados, se borraron el sitio y los enlaces promocionales, y el fundador respondió «stfu» a una propuesta estructurada. El expediente documenta esta conducta. El lector juzga.',
    extendedBody: 'La respuesta honesta requiere distinguir dos preguntas.\n\n**¿Hubo un rug-pull a nivel de contrato?** No. El 21 de mayo de 2026 se lanzó el token $NATRO en Solana en Pump.fun y alcanzó el umbral de graduación de la bonding curve (≈85 SOL de afluencia acumulada). Al alcanzar el umbral, Pump.fun migra automáticamente la liquidez a un pool AMM abierto (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) y **quema los tokens LP de ese pool**. Después, el equipo ya no tiene la capacidad técnica de drenar la liquidez del pool. El estado del mint de Pump.fun registra públicamente `complete: true`.\n\n**¿Actuó el equipo de manera coherente con su propio marketing?** No, y eso es lo que documenta el expediente. El pitch se apoyaba explícitamente en el apellido Natroshvili y en la asociación Spribe / Aviator. El FAQ de natrocoin.net (archivado en Wayback Machine antes de la eliminación) abordaba directamente la pregunta del rug: *«El golpe a la reputación dura para siempre; el dinero de un rug no.»* Cuando el precio se hundió y los holders pidieron reembolsos, el admin del equipo respondió **«Nada que decir»** y el fundador personalmente **«stfu»** vía Telegram verificado. En las 72 horas siguientes al rechazo de reembolsos, el sitio se retiró, el enlace de NATRO se eliminó de la bio de Instagram del fundador y se borró el vídeo promocional pagado del KOL @jrcryptex.\n\nSi esa conducta alcanza el umbral legal de fraude en una jurisdicción específica es una cuestión para reguladores y tribunales, no para este expediente. El expediente presenta fuentes primarias y deja que los lectores se formen su propia opinión.',
    citations: [
      { label: 'Archivo Wayback de natrocoin.net (antes de eliminación)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Estado del mint en Pump.fun', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan: contrato del token', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 2, slug: 'who-is-alex-natroshvili', order: 2,
    question: '¿Quién es Alex Natroshvili?',
    shortAnswer: 'Fundador del memecoin $NATRO en Solana (lanzado el 21 de mayo de 2026) e hijo de David Natroshvili, fundador y CEO de Spribe — el estudio detrás del producto global de apuestas crash-style Aviator. Instagram verificado @natroalex (54,1K seguidores), Telegram @natroalex1. El marketing del lanzamiento se apoyaba explícitamente en su apellido.',
    extendedBody: 'Alex Natroshvili fue identificado públicamente por el propio sitio del proyecto $NATRO como el fundador. La sección del fundador abría con: *«La mayoría de los fundadores de coins son anónimos. Alex no. Su nombre está en el proyecto, su cara en TikTok e Instagram, y su familia es conocida globalmente.»* Su perfil personal se describe como *«Boxeador / Coleccionista de coches / Coleccionista de relojes»*.\n\nSus cuentas públicas verificables en el momento del lanzamiento:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (verificado, 54,1K seguidores)\n- Telegram: [@natroalex1](https://t.me/natroalex1) (verificado)\n\nEs hijo de **David Natroshvili**, fundador y CEO de Spribe — el estudio iGaming detrás del producto global de apuestas crash-style Aviator. El marketing de $NATRO hacía referencia a este estatus familiar como la señal central de confianza.\n\nEl 25 de mayo de 2026 a las 10:11 UTC, en respuesta a una propuesta estructurada de reembolso-o-publicación de un holder afectado enviada a su cuenta verificada de Telegram, respondió con dos letras: *«stfu»*. Ese mensaje se conserva como parte del conjunto de pruebas del expediente.',
    citations: [
      { label: 'Archivo Wayback — sección del fundador', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — contexto sobre la familia Natroshvili', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 3, slug: 'what-happened-to-natrocoin-net', order: 3,
    question: '¿Qué pasó con el sitio natrocoin.net?',
    shortAnswer: 'El sitio se retiró el 24 de mayo de 2026, en las 72 horas siguientes al rechazo de los reembolsos. La versión completa previa a la retirada fue capturada por la Wayback Machine — el pitch principal, la escalera de cuatro niveles, la sección del fundador, la tokenomics y el FAQ completo (incluida la respuesta a «¿Qué les impide hacer un rug?») se conservan allí.',
    extendedBody: 'El 24 de mayo de 2026, el sitio natrocoin.net empezó a devolver una página de Netlify «Site not found». El texto de marketing, las descripciones de los niveles, la sección del fundador y el FAQ — incluyendo la ahora significativa respuesta a *«¿Qué les impide hacer un rug?»* — ya no eran accesibles públicamente en la URL canónica.\n\nAntes de la retirada, la Wayback Machine capturó una **instantánea completa** del sitio el 21 de mayo de 2026 a las 21:32 UTC. La instantánea incluye:\n\n- El pitch principal («No se trata de cuánto ganas. Se trata de quién contesta cuando llamas.»)\n- La escalera de acceso de cuatro niveles (Foyer / Floor / Lounge / Salon · Inner Circle)\n- La sección del fundador identificando a Alex Natroshvili y la conexión familiar\n- La página de tokenomics (con el bag del fundador de 30M comprometido públicamente)\n- El FAQ completo — incluyendo la respuesta a *«¿Qué les impide hacer un rug?»* (*«El golpe a la reputación dura para siempre; el dinero de un rug no.»*)\n\nLa URL de Wayback es permanente y citable. El expediente se apoya en ella como la prueba más sólida de lo que realmente se prometió en el lanzamiento.\n\nLa retirada se produjo en la misma ventana de 72 horas que: la eliminación del enlace natrocoin.net de la bio verificada de Instagram del fundador y la eliminación del vídeo promocional pagado del KOL @jrcryptex (114K seguidores).',
    citations: [
      { label: 'Archivo Wayback — natrocoin.net (captura 21 de mayo de 2026)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 4, slug: 'did-spribe-endorse-natro', order: 4,
    question: '¿Respaldó Spribe (el estudio de apuestas) a $NATRO?',
    shortAnswer: 'Spribe corporate no ha comentado públicamente. El fundador y CEO de Spribe, David Natroshvili (padre del fundador de $NATRO, Alex), amplificó el lanzamiento desde su propia cuenta verificada de Instagram — incluyendo un repost del vídeo promocional pagado. Se envió una carta formal a los canales legales de Spribe el 25 de mayo de 2026. Al momento de redacción, no hay respuesta pública.',
    extendedBody: 'Spribe es un estudio iGaming licenciado por separado, con operaciones en varias jurisdicciones. **Spribe corporate no ha comentado públicamente** sobre el lanzamiento de $NATRO. El expediente no alega un respaldo por parte de Spribe como entidad.\n\nLo que está documentado como hecho:\n\n- **David Natroshvili**, fundador y CEO de Spribe y padre de Alex Natroshvili, **amplificó personalmente el lanzamiento** desde su cuenta verificada de Instagram ([@davidnatro1](https://instagram.com/davidnatro1)), incluyendo un repost del vídeo promocional pagado producido por el KOL @jrcryptex.\n- Los materiales de marketing de $NATRO hacían referencia a la asociación Spribe / Aviator como señal de confianza — por ejemplo, la sección del fundador del sitio identificaba explícitamente la conexión familiar.\n- El 25 de mayo de 2026 a las 12:24 UTC, un holder afectado envió una carta formal a las direcciones corporativas y legales de Spribe (`info@spribe.co`, `legal@spribe.co`, más dos direcciones ejecutivas nombradas) exponiendo los hechos y ofreciendo una vía de resolución privada limpia. **Al momento de esta redacción, no se ha recibido respuesta pública** por esos canales.\n\nEsta entrada del FAQ se actualizará si Spribe corporate publica una declaración pública. La sección «Derecho de réplica» en el pie del expediente documenta el compromiso editorial de publicar tal respuesta de manera literal.',
    citations: [
      { label: 'David Natroshvili — LinkedIn / canal oficial SPRIBE', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 5, slug: 'is-natro-token-still-trading', order: 5,
    question: '¿Se sigue negociando el token $NATRO?',
    shortAnswer: 'Técnicamente sí — el token SPL en Solana existe (mint authority = None, freeze authority = None) y el pool AMM pump_swap está activo. En la práctica, el mercado está efectivamente muerto: capitalización de ≈36 $ en el momento de redactar el expediente, DexScreener muestra cero pares activos (auto-ocultos bajo su umbral de liquidez), última transacción ~25 de mayo de 2026.',
    extendedBody: 'Aquí se confunden tres conceptos distintos. Los separo:\n\n**1. ¿Sigue existiendo el token en Solana?**\n\nSí. El estado de la blockchain es inmutable — un token, una vez mintado, no puede ser eliminado por nadie. El mint de $NATRO en `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` está inicializado, tiene un suministro total de 1 000 000 000 y **no está baneado** por Pump.fun (`is_banned: false`). Críticamente: Mint authority: None — no se pueden emitir nuevos tokens. Freeze authority: None — los holders no pueden ser congelados.\n\n**2. ¿Hay un mercado para comprar/vender?**\n\nFuncionalmente no. La bonding curve de Pump.fun se graduó, la liquidez migró al pool AMM `7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. Tras la graduación: Real SOL reserves: 0; Real token reserves: 0; Capitalización: ≈36 $; Última transacción: ≈25 de mayo de 2026. DexScreener oculta automáticamente los pools por debajo de un umbral de liquidez.\n\n**3. ¿El equipo retiró la liquidez?**\n\nNo — no pueden. En la graduación de Pump.fun, los tokens LP del pool migrado son quemados automáticamente por el protocolo. El colapso desde un pico superior a 200K $ a ≈36 $ fue impulsado por **ventas de holders en un AMM abierto**, no por un rug-pull a nivel de contrato. El equipo no cometió el acto específico al que respondía su propio FAQ. En lugar de eso, tras alcanzar el lanzamiento el umbral de legitimidad impuesto por el protocolo, el equipo eligió no dialogar con los holders que le habían tomado la palabra.',
    citations: [
      { label: 'Solscan — token $NATRO', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — estado del coin', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
];

export const faqAr: FaqEntryDTO[] = [
  {
    id: 1, slug: 'is-natro-a-scam', order: 1,
    question: 'هل $NATRO عملية احتيال؟',
    shortAnswer: 'تخرّجت bonding curve في Pump.fun، ما يعني أنّه على مستوى البروتوكول لم يحدث rug على مستوى العقد — لا يستطيع الفريق تفريغ تجمّع AMM المُهاجَر. ما حدث: رُفِض ردّ الأموال للحاملين الأوائل المتضرّرين، أُزيل الموقع وروابط الترويج، وردّ المؤسّس «stfu» على عرض مُهيكَل. يوثّق الملفّ هذا السلوك.',
    extendedBody: 'الإجابة الصادقة تتطلّب التفريق بين سؤالين.\n\n**هل وُجد رَگ على مستوى العقد؟** لا. في 21 مايو 2026 أُطلق توكن $NATRO على Solana عبر Pump.fun، وبلغ عتبة التخرّج (graduation) — نحو 85 SOL من التدفّق المتراكم. عند بلوغ العتبة، تُهاجِر Pump.fun السيولة تلقائيًّا إلى تجمّع AMM مفتوح (`pump_swap_pool: 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`) و**يحرق البروتوكول توكنات LP الخاصّة بهذا التجمّع**. بعد ذلك، لا يملك الفريق القدرة التقنية على تفريغ سيولة التجمّع نفسه. تُسجِّل حالة mint في Pump.fun علنًا `complete: true`.\n\n**هل تَوافَق سلوك الفريق مع تسويقه؟** لا، وهذا ما يوثّقه الملفّ. ارتكز التسويق صراحةً على اسم عائلة ناتروشفيلي وعلى الارتباط بـ Spribe / Aviator. تناولت «الأسئلة الشائعة» على natrocoin.net — المحفوظة بالكامل في Wayback Machine قبل الحذف — سؤال الراگ مباشرة: *«الضربة على السمعة تدوم إلى الأبد؛ أمّا المال الناتج عن الراگ فلا يدوم»*. عندما انهار السعر وطلب الحاملون ردّ أموالهم، ردّ مشرف الفريق **«ليس لديّ ما أقوله»**، وردّ المؤسّس شخصيًّا **«stfu»** عبر Telegram الموثَّق. في غضون 72 ساعة من رفض ردّ الأموال، أُغلق الموقع، وأُزيل رابط NATRO من السيرة الذاتية للمؤسّس على Instagram، وحُذف الفيديو الترويجي المدفوع للـKOL ‏@jrcryptex.\n\nأمّا ما إذا كان هذا السلوك يبلغ الحدّ القانوني للاحتيال في ولاية قضائية محدّدة، فهو سؤال للهيئات التنظيمية والمحاكم، لا لهذا الملفّ. يقدّم الملفّ المصادر الأوّلية ويترك الحكم للقارئ.',
    citations: [
      { label: 'أرشيف Wayback لـ natrocoin.net (قبل الحذف)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'حالة mint في Pump.fun', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Solscan: عقد التوكن', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 2, slug: 'who-is-alex-natroshvili', order: 2,
    question: 'مَن هو أليكس ناتروشفيلي؟',
    shortAnswer: 'مؤسّس ميمكوين $NATRO على Solana (أُطلق في 21 مايو 2026) وابن ديفيد ناتروشفيلي — مؤسّس ومدير عام Spribe، الاستوديو وراء منتج المقامرة العالمي بأسلوب crash، Aviator. حساب Instagram الموثَّق ‏@natroalex (54.1 ألف متابع)، Telegram ‏@natroalex1. اعتمد تسويق الإطلاق صراحةً على اسم عائلته.',
    extendedBody: 'أليكس ناتروشفيلي مُعرَّفٌ علنًا من قِبَل موقع مشروع $NATRO نفسه باعتباره المؤسّس. افتُتح قسم المؤسّس في الموقع بالعبارة: *«معظم مؤسّسي العملات مجهولو الهوية. أليكس ليس كذلك. اسمه على المشروع، ووجهه على TikTok وInstagram، وعائلته معروفة عالميًّا»*. وُصِف ملفّه الشخصي بأنّه *«ملاكم / جامع سيّارات / جامع ساعات»*.\n\nحساباته العلنية القابلة للتحقّق عند الإطلاق:\n- Instagram: [@natroalex](https://instagram.com/natroalex) (موثَّق، 54.1 ألف متابع)\n- Telegram: [@natroalex1](https://t.me/natroalex1) (موثَّق)\n\nهو ابن **ديفيد ناتروشفيلي**، مؤسّس ومدير عام Spribe — استوديو iGaming وراء منتج المقامرة العالمي بأسلوب crash، Aviator. اعتمد تسويق $NATRO على هذه المكانة العائلية باعتبارها إشارة الثقة المحورية.\n\nفي 25 مايو 2026 الساعة 10:11 UTC، ردًّا على عرض مُهيكَل «ردّ أموال أو نشر» من حاملٍ مبكّر متضرّر أُرسل إلى حسابه الموثَّق على Telegram، أجاب بكلمة واحدة: *«stfu»*. هذه الرسالة محفوظة ضمن مستندات الملفّ.',
    citations: [
      { label: 'أرشيف Wayback — قسم المؤسّس', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
      { label: 'Kutztown University Foundation — سياق عن عائلة ناتروشفيلي', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 3, slug: 'what-happened-to-natrocoin-net', order: 3,
    question: 'ماذا حدث لموقع natrocoin.net؟',
    shortAnswer: 'أُغلق الموقع في 24 مايو 2026، في غضون 72 ساعة من رفض ردّ الأموال. التُقطت النسخة الكاملة قبل الإغلاق بواسطة Wayback Machine — العرض الرئيسي، سلّم الوصول رباعي الطبقات، قسم المؤسّس، التوكنوميكس و«الأسئلة الشائعة» بالكامل (بما في ذلك الإجابة على «ما الذي يمنعكم من الراگ؟») محفوظة هناك.',
    extendedBody: 'في 24 مايو 2026، بدأ موقع natrocoin.net يُعيد صفحة Netlify «Site not found». لم يَعُد النصّ التسويقي، وأوصاف الطبقات، وقسم المؤسّس، و«الأسئلة الشائعة» — بما في ذلك الإجابة ذات الأهمية الآن على *«ما الذي يمنعكم من الراگ؟»* — متاحًا علنًا على URL القانوني.\n\nقبل الإغلاق، التقطت Wayback Machine **لقطة كاملة** للموقع في 21 مايو 2026 الساعة 21:32 UTC. تشمل اللقطة:\n\n- العرض الرئيسي («المسألة ليست في كَمْ تكسب. المسألة في مَن يردّ هاتفه عندما تتّصل»)\n- سلّم الوصول رباعي الطبقات (Foyer / Floor / Lounge / Salon · Inner Circle)\n- قسم المؤسّس الذي يحدّد أليكس ناتروشفيلي والارتباط العائلي\n- صفحة التوكنوميكس (مع محفظة المؤسّس البالغة 30M المُلتزَم بها علنًا)\n- «الأسئلة الشائعة» بالكامل — بما فيها الإجابة على *«ما الذي يمنعكم من الراگ؟»* (*«الضربة على السمعة تدوم إلى الأبد؛ أمّا المال الناتج عن الراگ فلا يدوم»*)\n\nرابط Wayback دائم وقابل للاستشهاد. يعتمد الملفّ عليه باعتباره أقوى دليل منفرد على ما وُعد به فعلًا عند الإطلاق.\n\nحدث الإغلاق في النافذة الزمنية نفسها (72 ساعة) التي شهدت: إزالة رابط natrocoin.net من السيرة الموثَّقة للمؤسّس على Instagram، وحذف الفيديو الترويجي المدفوع للـKOL ‏@jrcryptex (114 ألف متابع).',
    citations: [
      { label: 'أرشيف Wayback — natrocoin.net (التقاط 21 مايو 2026)', url: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 4, slug: 'did-spribe-endorse-natro', order: 4,
    question: 'هل دعمت Spribe (استوديو المقامرة) $NATRO؟',
    shortAnswer: 'لم تعلّق Spribe corporate علنًا. مؤسّس Spribe ومديرها العام ديفيد ناتروشفيلي (والد مؤسّس $NATRO أليكس) ضخَّم الإطلاق من حسابه الموثَّق على Instagram — بما في ذلك إعادة نشر الفيديو الترويجي المدفوع. أُرسل خطاب رسمي إلى القنوات القانونية لـ Spribe في 25 مايو 2026. عند وقت إعداد هذا الملفّ، لا ردّ علنيًّا.',
    extendedBody: 'Spribe استوديو iGaming مُرَخَّص بشكل مستقلّ، له عمليات في عدّة ولايات قضائية. **لم تعلّق Spribe corporate علنًا** على إطلاق $NATRO. لا يدّعي الملفّ تأييدًا من Spribe بوصفها كيانًا.\n\nما هو موثَّق كحقيقة:\n\n- **ديفيد ناتروشفيلي**، مؤسّس Spribe ومديرها العام، ووالد أليكس ناتروشفيلي، **ضخَّم الإطلاق شخصيًّا** من حسابه الموثَّق على Instagram ([@davidnatro1](https://instagram.com/davidnatro1))، بما في ذلك إعادة نشر الفيديو الترويجي المدفوع الذي أنتجه الـKOL ‏@jrcryptex.\n- أشارت مواد $NATRO التسويقية إلى الارتباط بـ Spribe / Aviator باعتباره إشارة ثقة — على سبيل المثال، حدّد قسم المؤسّس في الموقع الارتباط العائلي صراحةً.\n- في 25 مايو 2026 الساعة 12:24 UTC، أرسل حاملٌ متضرّر خطابًا رسميًّا إلى عناوين Spribe المؤسّسية والقانونية (`info@spribe.co`، `legal@spribe.co`، وعنوانَين تنفيذيَين مُسمَّيَين)، يَعرض الوقائع ويقترح مسار حلّ خاصّ نظيف. **عند وقت إعداد هذا الملفّ، لم يَرِد ردّ علني** عبر هذه القنوات.\n\nسيُحدَّث هذا المُدخَل إذا نشرت Spribe corporate بيانًا علنيًّا. يوثّق قسم «حقّ الردّ» في تذييل الملفّ الالتزامَ التحريري بنشر أيّ ردّ من هذا القبيل حرفيًّا.',
    citations: [
      { label: 'ديفيد ناتروشفيلي — LinkedIn / قناة SPRIBE الرسمية', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
  {
    id: 5, slug: 'is-natro-token-still-trading', order: 5,
    question: 'هل لا يزال توكن $NATRO يُتداوَل؟',
    shortAnswer: 'تقنيًّا نعم — توكن SPL على Solana موجود (mint authority = None، freeze authority = None) وتجمّع pump_swap AMM نَشِط. عمليًّا، السوق ميّت فعلًا: قيمة سوقية ≈36 دولارًا وقت إعداد الملفّ، يُظهر DexScreener صفر أزواج نشطة (مُخفاة آليًّا تحت عتبة السيولة)، آخر صفقة ≈25 مايو 2026.',
    extendedBody: 'تختلط هنا ثلاثة مفاهيم مختلفة. أفصلها:\n\n**1. هل لا يزال التوكن موجودًا على Solana؟**\n\nنعم. حالة البلوكتشين غير قابلة للتغيير — أيّ توكن، بمجرّد إصداره، لا يمكن لأحد حذفه. mint $NATRO عند `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF` مُهيَّأ، وله إجمالي معروض 1,000,000,000، وليس **محظورًا** من Pump.fun (`is_banned: false`). الأهمّ: Mint authority: None — لا يمكن إصدار توكنات جديدة. Freeze authority: None — لا يمكن تجميد الحاملين.\n\n**2. هل يوجد سوق للشراء/البيع؟**\n\nوظيفيًّا لا. تخرّجت bonding curve في Pump.fun، وانتقلت السيولة إلى تجمّع AMM ‏`7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS`. بعد التخرّج: Real SOL reserves: 0؛ Real token reserves: 0؛ القيمة السوقية: ≈36 دولارًا؛ آخر صفقة: ≈25 مايو 2026. يُخفي DexScreener تلقائيًّا التجمّعات التي تقلّ عن عتبة سيولة معيّنة.\n\n**3. هل سحب الفريق السيولة؟**\n\nلا — لا يستطيع. عند تخرّج Pump.fun، يحرق البروتوكول تلقائيًّا توكنات LP للتجمّع المُهاجَر. الانهيار من قمّة تفوق 200 ألف دولار إلى ≈36 دولارًا كان مدفوعًا بـ**بيع الحاملين في AMM مفتوح**، لا برَگ على مستوى العقد. لم يَرتكب الفريق الفعل المحدّد الذي كانت «الأسئلة الشائعة» الخاصّة به تجيب عليه. بدلًا من ذلك، بعد أن بلغ الإطلاق عتبة المشروعية التي يفرضها البروتوكول، اختار الفريق ألّا يتحاور مع الحاملين الذين صدَّقوه على كلمته.',
    citations: [
      { label: 'Solscan — توكن $NATRO', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Pump.fun — حالة العملة', url: 'https://pump.fun/coin/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
    ],
    lastReviewedAt: '2026-05-28T00:00:00Z',
  },
];

/** Returns the FAQ for a locale, falling back to EN. */
export function getFaq(locale: string): FaqEntryDTO[] {
  if (locale === 'ru') return faqRu;
  if (locale === 'uk') return faqUk;
  if (locale === 'ka') return faqKa;
  if (locale === 'fr') return faqFr;
  if (locale === 'de') return faqDe;
  if (locale === 'es') return faqEs;
  if (locale === 'ar') return faqAr;
  return faqEn;
}
