import type { Locale } from '@/i18n/routing';

/**
 * Localised copy for /the-name-in-search.
 *
 * A single-subject page on one structural fact: a launch built on a borrowed
 * name wins the search result page by default, and the demand it manufactured
 * is visible in the file's own search consoles. The real queries reaching
 * natro.meme cluster around the name and around wealth — "net worth",
 * "billionaire", "how did he make his money", "real name", "his father" — which
 * is precisely the persona the pitch sold ("his family is well-known globally",
 * "Boxer / Car Collector / Watch Collector"). The page places the documented
 * record beside that name. The thesis is carried by sourced data (Google Search
 * Console + Bing Webmaster Tools, taken verbatim) and the project's own quotes,
 * not by editorial accusation — no "scam" in the file's voice, no insult to any
 * named party (CLAUDE.md §4, §5).
 *
 * Verbatim search strings stay English across every locale — they are real data,
 * reproduced as typed (misspellings and the German "natroalex echter name"
 * included). Body fields use inline markdown rendered by <Prose>.
 *
 * Authored in EN + RU (the languages the file's author can verify); the getter
 * falls back to EN for the other locales until a native review is commissioned,
 * matching the project's translation guard rails (CLAUDE.md §5.6).
 */
export interface SearchRecordContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  standfirst: string;
  pullQuote: string;
  dataKicker: string;
  dataIntro: string;
  colQuery: string;
  colImpr: string;
  colClicks: string;
  gscCaption: string;
  bingCaption: string;
  countriesNote: string;
  plantedKicker: string;
  plantedIntro: string;
  plantedAfter: string;
  answersKicker: string;
  answersBody: string;
  structureKicker: string;
  structureBody: string;
  methodKicker: string;
  methodBody: string;
  replyKicker: string;
  replyBefore: string;
  replyProfileLabel: string;
  replyMid: string;
  replyPressLabel: string;
  replyAfter: string;
}

/**
 * Verbatim search queries reaching natro.meme, taken from the file's own search
 * consoles. English across every locale — this is real data, reproduced exactly
 * as typed. `wealth: true` marks the "what is he worth" cluster the page argues
 * was manufactured by the pitch.
 */
export interface QueryRow {
  q: string;
  impressions: number;
  clicks: number;
  wealth?: boolean;
}

// Google Search Console · natro.meme · top queries by clicks, 28-day window.
export const GSC_QUERIES: QueryRow[] = [
  { q: 'alex natroshvili', impressions: 0, clicks: 35 },
  { q: 'alex natro', impressions: 0, clicks: 19 },
  { q: 'alex natro father', impressions: 0, clicks: 17 },
  { q: 'david natroshvili son', impressions: 0, clicks: 15 },
  { q: 'natroalex', impressions: 0, clicks: 13 },
];

// Bing Webmaster Tools · natro.meme · selected queries, three-month window.
// The low-volume rows are kept deliberately: they are the "what is he worth"
// questions, and they are real.
export const BING_QUERIES: QueryRow[] = [
  { q: 'alex natroshvili', impressions: 47, clicks: 10 },
  { q: 'natroalex', impressions: 64, clicks: 5 },
  { q: 'alex natro', impressions: 28, clicks: 5 },
  { q: 'david natroshvili son', impressions: 13, clicks: 0 },
  { q: 'natroalex net worth', impressions: 4, clicks: 1, wealth: true },
  { q: 'alex natroshvili is a billionaire or not', impressions: 2, clicks: 1, wealth: true },
  { q: 'why is natro alex rich', impressions: 2, clicks: 1, wealth: true },
  { q: 'how did natroalex make his money', impressions: 2, clicks: 1, wealth: true },
  { q: 'alex natro wiki', impressions: 2, clicks: 1, wealth: true },
  { q: 'natro alex family', impressions: 2, clicks: 1 },
  { q: 'natroalex echter name', impressions: 1, clicks: 0, wealth: true },
  { q: 'what does natroalex tiktok do', impressions: 1, clicks: 0 },
];

const en: SearchRecordContent = {
  metaTitle: 'What the internet asks about Alex Natroshvili — the $NATRO search record',
  metaDescription:
    'The real search queries reaching this file — "net worth", "is a billionaire or not", "why is natro alex rich", "how did natroalex make his money" — are the persona the $NATRO launch sold. A launch built on a borrowed family name wins the search box by default; this file places the documented record beside it.',
  kicker: 'Reputation pricing · what search returns',
  h1: 'The name in the search box',
  standfirst:
    'A launch built on a borrowed name wins the search result page by default. The questions now reaching this file — net worth, billionaire, how he made his money — are the ones the marketing planted. The record answers them.',
  pullQuote:
    'Search returns who was promoted. It does not return what happened — unless someone keeps the record.',
  dataKicker: 'What people actually type',
  dataIntro:
    'These are real queries, taken from this file’s own Google Search Console and Bing Webmaster Tools. Almost nobody arrives searching for a complaint about a collapsed token. They arrive typing a name — and, increasingly, asking what that name is worth.',
  colQuery: 'Search query',
  colImpr: 'Impr.',
  colClicks: 'Clicks',
  gscCaption:
    'Google Search Console · natro.meme · top queries by clicks · 28-day window to 8 June 2026 (239 clicks, 7.01K impressions).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · selected queries · three-month window to 8 June 2026 (37 clicks, 287 impressions). Rows marked in red are the “what is he worth” cluster.',
  countriesNote:
    'By origin, the clicks come from France (13%), Germany (10%), the United States (8%), the United Arab Emirates and the United Kingdom (6% each) — a search audience built by the launch’s own promotion, not by the affected holders.',
  plantedKicker: 'The questions were planted',
  plantedIntro:
    'Read the queries together and a pattern appears. Beyond the bare name, people ask what he is worth — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (German: *“real name”*). That curiosity did not arrive from nowhere. It is the exact persona the launch sold. The $NATRO founder section, archived before the site was taken down, opened with this line:',
  plantedAfter:
    'The same section described the founder as *“Boxer / Car Collector / Watch Collector.”* A pitch that offers a name and a lifestyle — and *“his family is well-known globally”* as the asset — manufactures the demand for exactly these questions. The marketing planted the wealth narrative; the search box now repeats it back, word for word.',
  answersKicker: 'The record that answers them',
  answersBody:
    'This file keeps the documented answer to the same questions. The one launch that name fronted — the **$NATRO Solana token** — was solicited with a **$1,500 presale minimum** from verified family accounts, launched **21 May 2026**, and collapsed **~98%** within seventy-two hours. Refund requests were refused — *“Nothing to say”* from the team admin, *“stfu”* from the founder’s verified Telegram. Within the same window the website was taken offline, the NATRO link was removed from the founder’s Instagram bio, and the paid promotional video was deleted.\n\nSo: *net worth*, *how he made his money*, *is he a billionaire*. The record’s answer to those queries is on this site — sourced, archived, and on-chain.',
  structureKicker: 'Why the name owns the search box',
  structureBody:
    'A launch like this does not compete for attention on equal terms. On one side: a verified founder account (54.1K followers), a father who heads a company known worldwide, and a paid promotion to a 114K-follower audience — names and reach assembled to fill the result page. On the other: a dispersed set of retail holders, position verifiable on-chain, with no comparable footprint.\n\nA search engine indexes amplification, not adjudication. It returns who was promoted hardest, not who was made whole. Left to itself, the result page would show only the version the launch paid to place. This file is the counter-record — built so that when someone types the name, the documented account stands beside it.',
  methodKicker: 'Method & sources',
  methodBody:
    'The figures above are taken verbatim from natro.meme’s own Google Search Console and Bing Webmaster Tools — the 28-day and three-month windows ending 8 June 2026. Query strings are reproduced as typed, including misspellings and the German *natroalex echter name*. The underlying record is archived: the launch site before takedown ([Wayback, 21 May 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) and the live token state [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Right of reply',
  replyBefore:
    'Alex Natroshvili and Spribe are invited to respond; a formal notice was sent to Spribe’s published legal and corporate addresses on 25 May 2026. Documented factual corrections will be published alongside the record. The full sourcing is on his ',
  replyProfileLabel: 'profile',
  replyMid: ' and the ',
  replyPressLabel: 'press page',
  replyAfter: '.',
};

const ru: SearchRecordContent = {
  metaTitle: 'Что интернет спрашивает про Alex Natroshvili — поисковая хроника $NATRO',
  metaDescription:
    'Реальные поисковые запросы, приводящие на этот сайт — «net worth», «is a billionaire or not», «why is natro alex rich», «how did natroalex make his money» — это та самая легенда, которую продавал запуск $NATRO. Запуск на одолженной фамилии по умолчанию выигрывает выдачу; этот файл ставит рядом с именем документированную хронику.',
  kicker: 'Ценообразование репутации · что выдаёт поиск',
  h1: 'Имя в строке поиска',
  standfirst:
    'Запуск на одолженном имени по умолчанию выигрывает страницу выдачи. Вопросы, которые сейчас приводят сюда — net worth, миллиардер, откуда деньги — это те самые вопросы, которые посеял маркетинг. Хроника на них отвечает.',
  pullQuote:
    'Поиск выдаёт того, кого продвигали. Он не выдаёт того, что произошло, — пока кто-то не ведёт запись.',
  dataKicker: 'Что люди на самом деле набирают',
  dataIntro:
    'Это реальные запросы, взятые из собственных Google Search Console и Bing Webmaster Tools этого сайта. Почти никто не приходит сюда в поисках жалобы на обвалившийся токен. Приходят, набирая имя — и всё чаще спрашивая, сколько это имя стоит.',
  colQuery: 'Поисковый запрос',
  colImpr: 'Показы',
  colClicks: 'Клики',
  gscCaption:
    'Google Search Console · natro.meme · топ запросов по кликам · окно 28 дней до 8 июня 2026 (239 кликов, 7,01 тыс. показов).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · избранные запросы · окно три месяца до 8 июня 2026 (37 кликов, 287 показов). Строки, отмеченные красным, — кластер «сколько он стоит».',
  countriesNote:
    'По происхождению клики идут из Франции (13%), Германии (10%), США (8%), ОАЭ и Великобритании (по 6%) — поисковая аудитория, собранная собственным продвижением запуска, а не пострадавшими держателями.',
  plantedKicker: 'Эти вопросы были посеяны',
  plantedIntro:
    'Если читать запросы вместе, проступает закономерность. Помимо самого имени, люди спрашивают, сколько он стоит — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (нем.: *«настоящее имя»*). Это любопытство возникло не на пустом месте. Это ровно тот образ, который продавал запуск. Раздел об основателе $NATRO, сохранённый в архиве до удаления сайта, открывался этой строкой:',
  plantedAfter:
    'Тот же раздел описывал основателя как *«Boxer / Car Collector / Watch Collector.»* Питч, предлагающий имя и стиль жизни — и *«his family is well-known globally»* в качестве актива, — сам создаёт спрос ровно на эти вопросы. Маркетинг посеял нарратив о богатстве; строка поиска теперь повторяет его слово в слово.',
  answersKicker: 'Хроника, которая на них отвечает',
  answersBody:
    'Этот файл хранит документированный ответ на те же вопросы. Единственный запуск под этим именем — **токен $NATRO на Solana** — собирали с **минимумом пресейла $1 500** с верифицированных семейных аккаунтов, запустили **21 мая 2026** и он обвалился на **~98%** за семьдесят два часа. В возврате средств отказали — *«Nothing to say»* от админа команды, *«stfu»* из верифицированного Telegram основателя. В то же окно сайт отключили, ссылку на NATRO убрали из биографии Instagram основателя, а оплаченное промо-видео удалили.\n\nИтак: *net worth*, *откуда деньги*, *миллиардер ли он*. Ответ хроники на эти запросы — на этом сайте: с источниками, в архиве и в он-чейне.',
  structureKicker: 'Почему имя владеет строкой поиска',
  structureBody:
    'Такой запуск конкурирует за внимание на неравных условиях. С одной стороны: верифицированный аккаунт основателя (54,1 тыс. подписчиков), отец, возглавляющий компанию с мировой известностью, и оплаченное промо на аудиторию в 114 тыс. — имена и охват, собранные, чтобы заполнить страницу выдачи. С другой — разрозненные розничные держатели, чья позиция проверяема в он-чейне, без сопоставимого следа.\n\nПоисковая система индексирует усиление, а не вынесение приговора. Она выдаёт того, кого продвигали сильнее всех, а не того, кому возместили. Предоставленная сама себе, страница выдачи показала бы только ту версию, которую запуск оплатил. Этот файл — контр-хроника, построенная так, чтобы, когда кто-то набирает имя, рядом стояла документированная история.',
  methodKicker: 'Метод и источники',
  methodBody:
    'Цифры выше взяты дословно из собственных Google Search Console и Bing Webmaster Tools сайта natro.meme — окна в 28 дней и три месяца, заканчивающиеся 8 июня 2026. Строки запросов воспроизведены как набраны, включая опечатки и немецкое *natroalex echter name*. Лежащая в основе хроника заархивирована: сайт запуска до удаления ([Wayback, 21 мая 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) и текущее состояние токена [в он-чейне](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Право на ответ',
  replyBefore:
    'Alex Natroshvili и Spribe приглашены ответить; формальное уведомление было направлено на опубликованные юридические и корпоративные адреса Spribe 25 мая 2026. Документированные фактические опровержения будут опубликованы рядом с хроникой. Полное обоснование — в его ',
  replyProfileLabel: 'профиле',
  replyMid: ' и на ',
  replyPressLabel: 'пресс-странице',
  replyAfter: '.',
};

const BY_LOCALE: Partial<Record<Locale, SearchRecordContent>> = { en, ru };

export function getSearchRecord(locale: Locale): SearchRecordContent {
  return BY_LOCALE[locale] || en;
}

// Shared verbatim quote — the $NATRO founder line, English across every locale.
export const SELFDOXX_QUOTE =
  'Most coin founders are anonymous. Alex isn’t. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally.';
