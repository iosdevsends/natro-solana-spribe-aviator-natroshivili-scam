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

/** Returns the FAQ for a locale, falling back to EN. */
export function getFaq(locale: string): FaqEntryDTO[] {
  if (locale === 'ru') return faqRu;
  return faqEn;
}
