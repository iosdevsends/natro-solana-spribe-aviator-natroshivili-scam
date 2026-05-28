/**
 * One-page fact-sheet content. Scannable: big numbers, compact timeline,
 * primary sources block. Optimised for "Save as PDF" via browser print.
 */

export interface FactSheetContent {
  kicker: string;
  headline: string;
  filed: string;
  filedValue: string;
  numbersHeading: string;
  numbers: Array<{ value: string; label: string }>;
  timelineHeading: string;
  timeline: Array<{ date: string; event: string }>;
  partiesHeading: string;
  parties: Array<{ name: string; role: string; handles: string }>;
  sourcesHeading: string;
  sources: string[];
  contactLine: string;
  fileLine: string;
}

const enFact: FactSheetContent = {
  kicker: 'Case fact sheet · v1.0 · 28 May 2026',
  headline: '$NATRO — Solana memecoin · 21 May 2026 launch · 98% collapse',
  filed: 'Compiled by',
  filedValue: 'Evgeniy Moykin (@btc3050) · affected early holder',
  numbersHeading: 'In numbers',
  numbers: [
    { value: '~98%', label: 'Price collapse in 48h' },
    { value: '$36', label: 'Market cap (per Pump.fun API, at filing)' },
    { value: '$200K+', label: '"Committed at launch" (project\'s own claim)' },
    { value: '352', label: 'Wallets remaining' },
    { value: '$1,500', label: 'Min. presale entry (set by D. Natroshvili)' },
    { value: '15', label: 'Age of nominal founder Alex Natroshvili' },
    { value: '72 h', label: 'From refund refusal to website takedown' },
    { value: '25', label: 'Documented exhibits in case file' },
  ],
  timelineHeading: 'Timeline',
  timeline: [
    { date: '20–21 May', event: 'David Natroshvili publishes 5 Instagram Stories soliciting presale ($1.5k min entry, "with me & @natroalex", DM @natroalex1)' },
    { date: '21 May · 20:11 UTC', event: 'Token launches on Pump.fun (contract 9TmTw3B…tdiF)' },
    { date: '22–23 May', event: 'Price collapses; holders document losses in project Telegram' },
    { date: '23 May · 13:50', event: 'Team admin OC voluntarily leaves tier chats' },
    { date: '23 May', event: 'Structured refund proposal presented; team admin: "Nothing to say"' },
    { date: '24 May', event: 'NATRO link removed from founder\'s verified IG bio' },
    { date: '24 May', event: 'natrocoin.net taken offline; Wayback archive preserved' },
    { date: '24 May', event: 'KOL @jrcryptex (114K followers) deletes paid promo' },
    { date: '24 May', event: 'Official Telegram channel keeps recruiting new buyers' },
    { date: '25 May · 10:11', event: 'Founder\'s personal Telegram reply: "stfu."' },
    { date: '25 May · 12:24', event: 'Formal letter to Spribe legal (info@, legal@spribe.co + 2 named execs)' },
    { date: '25 May · 13:06', event: 'Founder initiates Instagram DM 42 min after Spribe email' },
    { date: '28 May · 12:24', event: 'Spribe legal-response window expires without reply; case file released publicly' },
  ],
  partiesHeading: 'Named parties',
  parties: [
    {
      name: 'Alex Natroshvili',
      role: 'Nominal founder; 15 yrs (DOB 14 Sep 2010)',
      handles: 'IG @natroalex (54.1K ✓) · TG @natroalex1 (✓) · Tapology fighter profile',
    },
    {
      name: 'David Natroshvili',
      role: 'Father; pre-launch presale solicitor; Founder & CEO, Spribe',
      handles: 'IG @davidnatro1 (✓) · IG @davi.natroshvili · Spribe LinkedIn · HandWiki biography',
    },
    {
      name: 'JR Cryptex',
      role: 'Paid KOL; deleted promo 24 May 2026',
      handles: 'IG @jrcryptex (114K)',
    },
    {
      name: '"A A" (Arif Azii)',
      role: 'Team admin; "Nothing to say" verbatim',
      handles: 'TG @arifazii',
    },
    {
      name: 'Eric Connola',
      role: 'Public defender of the launch (social media)',
      handles: 'IG @ericconnola (✓)',
    },
  ],
  sourcesHeading: 'Primary sources',
  sources: [
    'Wayback archive of natrocoin.net (21 May 2026 21:32 UTC capture) — the file\'s single strongest source',
    'Solscan: token mint 9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    'Solscan: creator wallet 76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx',
    'Solscan: compiler wallet GsCKRFsTYbU4CuTDYP9NLDDMvsVVWSnpdVDst3nKb6JJ (≈220M NATRO, verifiable position)',
    'Pump.fun mint state (complete: true) and pump_swap_pool 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS',
    'NATRO Foyer, Floor, Lounge Telegram channel screenshots (full archive available on request)',
    'Founder\'s personal Telegram DM (@natroalex1): "stfu" reply, 25 May 10:11',
    'Spribe legal email paper-trail, 25 May 12:24 UTC',
    'Kutztown University Foundation public announcement (David Natroshvili SBDC Suite, Sep 2025)',
  ],
  contactLine: 'Evgeniy Moykin · @btc3050 (Telegram) · moykin.e@gmail.com',
  fileLine: 'Full case file: natro.meme · Press release: natro.meme/press',
};

const ruFact: FactSheetContent = {
  kicker: 'Кейс-сводка · v1.0 · 28 мая 2026',
  headline: '$NATRO — Solana-мемкоин · запуск 21 мая 2026 · обвал 98%',
  filed: 'Укладчик',
  filedValue: 'Евгений Мойкин (@btc3050) · пострадавший ранний держатель',
  numbersHeading: 'В цифрах',
  numbers: [
    { value: '~98%', label: 'Обвал цены за 48 часов' },
    { value: '$36', label: 'Рын. капитализация (API Pump.fun на момент)' },
    { value: '$200K+', label: '«Заявлено на старте» (заявление команды)' },
    { value: '352', label: 'Оставшихся кошельков' },
    { value: '$1 500', label: 'Мин. вход в пресейл (установлен Д. Натрошвили)' },
    { value: '15', label: 'Возраст номинального основателя А. Натрошвили' },
    { value: '72 ч', label: 'От отказа в возврате до отключения сайта' },
    { value: '25', label: 'Задокументированных экспонатов в файле' },
  ],
  timelineHeading: 'Хронология',
  timeline: [
    { date: '20–21 мая', event: 'Давид Натрошвили публикует 5 Instagram Stories, предлагая пресейл ($1.5k мин., «with me & @natroalex», DM @natroalex1)' },
    { date: '21 мая · 20:11 UTC', event: 'Токен запущен на Pump.fun (контракт 9TmTw3B…tdiF)' },
    { date: '22–23 мая', event: 'Цена обваливается; держатели документируют потери в Telegram проекта' },
    { date: '23 мая · 13:50', event: 'Админ команды OC добровольно покидает тиерные чаты' },
    { date: '23 мая', event: 'Структурированное предложение возврата; ответ админа: «Nothing to say»' },
    { date: '24 мая', event: 'Ссылка NATRO удалена из верифицированной IG-биографии основателя' },
    { date: '24 мая', event: 'natrocoin.net отключён; архив Wayback сохранён' },
    { date: '24 мая', event: 'KOL @jrcryptex (114K подписчиков) удаляет оплаченное промо' },
    { date: '24 мая', event: 'Официальный Telegram-канал продолжает вербовать новых покупателей' },
    { date: '25 мая · 10:11', event: 'Личный ответ основателя в Telegram: «stfu».' },
    { date: '25 мая · 12:24', event: 'Официальное письмо в юр. отдел Spribe (info@, legal@spribe.co + 2 названных executive)' },
    { date: '25 мая · 13:06', event: 'Основатель инициирует Instagram DM через 42 мин после письма в Spribe' },
    { date: '28 мая · 12:24', event: 'Окно для юр. ответа Spribe истекло без реакции; кейс-файл публикован' },
  ],
  partiesHeading: 'Названные стороны',
  parties: [
    {
      name: 'Алекс Натрошвили',
      role: 'Номинальный основатель; 15 лет (дата рожд. 14 сент. 2010)',
      handles: 'IG @natroalex (54.1K ✓) · TG @natroalex1 (✓) · профиль Tapology',
    },
    {
      name: 'Давид Натрошвили',
      role: 'Отец; соискатель пресейл-инвестиций до запуска; основатель и CEO Spribe',
      handles: 'IG @davidnatro1 (✓) · IG @davi.natroshvili · LinkedIn Spribe · биография HandWiki',
    },
    {
      name: 'JR Cryptex',
      role: 'Оплаченный KOL; удалил промо 24 мая 2026',
      handles: 'IG @jrcryptex (114K)',
    },
    {
      name: '"A A" (Arif Azii)',
      role: 'Админ команды; "Nothing to say" дословно',
      handles: 'TG @arifazii',
    },
    {
      name: 'Eric Connola',
      role: 'Публичный защитник запуска (соцсети)',
      handles: 'IG @ericconnola (✓)',
    },
  ],
  sourcesHeading: 'Первичные источники',
  sources: [
    'Архив Wayback сайта natrocoin.net (захват 21 мая 2026, 21:32 UTC) — сильнейший источник в файле',
    'Solscan: токен 9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF',
    'Solscan: кошелёк-создатель 76qavBCaqDzn6KP6q5Qzu5sXVUXSqXWQpCTTF6Tye7xx',
    'Solscan: кошелёк укладчика GsCKRFsTYbU4CuTDYP9NLDDMvsVVWSnpdVDst3nKb6JJ (≈220M NATRO, верифицируемая позиция)',
    'Pump.fun mint state (complete: true) и pump_swap_pool 7HkXPkKFJhiY9fqUNWbZ5YufKRVNAcWdisKR8FtTijaS',
    'Скриншоты NATRO Foyer / Floor / Lounge в Telegram (полный архив по запросу)',
    'Личный Telegram DM основателя (@natroalex1): «stfu», 25 мая 10:11',
    'Email-цепочка с юр. отделом Spribe, 25 мая 12:24 UTC',
    'Публичное объявление Kutztown University Foundation (David Natroshvili SBDC Suite, сент. 2025)',
  ],
  contactLine: 'Евгений Мойкин · @btc3050 (Telegram) · moykin.e@gmail.com',
  fileLine: 'Полный кейс-файл: natro.meme · Пресс-релиз: natro.meme/press',
};

const factSheets: Record<string, FactSheetContent> = { en: enFact, ru: ruFact };

export function getFactSheet(locale: string): FactSheetContent {
  return factSheets[locale] || factSheets.en;
}
