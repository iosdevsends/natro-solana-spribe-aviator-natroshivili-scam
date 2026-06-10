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

const uk: SearchRecordContent = {
  metaTitle: 'Що інтернет питає про Alex Natroshvili — пошукова хроніка $NATRO',
  metaDescription:
    'Реальні пошукові запити, що ведуть на цей сайт — «net worth», «is a billionaire or not», «why is natro alex rich», «how did natroalex make his money» — це та сама легенда, яку продавав запуск $NATRO. Запуск на позиченому прізвищі за замовчуванням виграє видачу; цей файл ставить поряд з іменем задокументовану хроніку.',
  kicker: 'Ціноутворення репутації · що видає пошук',
  h1: 'Ім’я в рядку пошуку',
  standfirst:
    'Запуск на позиченому імені за замовчуванням виграє сторінку видачі. Питання, що зараз ведуть сюди — net worth, мільярдер, звідки гроші — це ті самі питання, які посіяв маркетинг. Хроніка на них відповідає.',
  pullQuote:
    'Пошук видає того, кого просували. Він не видає того, що сталося, — поки хтось не веде запис.',
  dataKicker: 'Що люди насправді набирають',
  dataIntro:
    'Це реальні запити, узяті з власних Google Search Console та Bing Webmaster Tools цього сайту. Майже ніхто не приходить сюди в пошуках скарги на токен, що обвалився. Приходять, набираючи ім’я — і дедалі частіше питаючи, скільки це ім’я коштує.',
  colQuery: 'Пошуковий запит',
  colImpr: 'Покази',
  colClicks: 'Кліки',
  gscCaption:
    'Google Search Console · natro.meme · топ запитів за кліками · вікно 28 днів до 8 червня 2026 (239 кліків, 7,01 тис. показів).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · вибрані запити · вікно три місяці до 8 червня 2026 (37 кліків, 287 показів). Рядки, позначені червоним, — кластер «скільки він коштує».',
  countriesNote:
    'За походженням кліки йдуть із Франції (13%), Німеччини (10%), США (8%), ОАЕ та Великої Британії (по 6%) — пошукова аудиторія, зібрана власним просуванням запуску, а не постраждалими тримачами.',
  plantedKicker: 'Ці питання були посіяні',
  plantedIntro:
    'Якщо читати запити разом, проступає закономірність. Окрім самого імені, люди питають, скільки він коштує — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (нім.: *«справжнє ім’я»*). Ця цікавість виникла не на порожньому місці. Це саме той образ, який продавав запуск. Розділ про засновника $NATRO, збережений в архіві до видалення сайту, відкривався цим рядком:',
  plantedAfter:
    'Той самий розділ описував засновника як *«Boxer / Car Collector / Watch Collector.»* Пітч, що пропонує ім’я та спосіб життя — і *«his family is well-known globally»* як актив, — сам створює попит саме на ці питання. Маркетинг посіяв наратив про багатство; рядок пошуку тепер повторює його слово в слово.',
  answersKicker: 'Хроніка, що на них відповідає',
  answersBody:
    'Цей файл зберігає задокументовану відповідь на ті самі питання. Єдиний запуск під цим іменем — **токен $NATRO на Solana** — збирали з **мінімумом пресейлу $1 500** з верифікованих сімейних акаунтів, запустили **21 травня 2026**, і він обвалився на **~98%** за сімдесят дві години. У поверненні коштів відмовили — *«Nothing to say»* від адміна команди, *«stfu»* з верифікованого Telegram засновника. У те саме вікно сайт вимкнули, посилання на NATRO прибрали з біографії Instagram засновника, а оплачене промо-відео видалили.\n\nОтже: *net worth*, *звідки гроші*, *чи мільярдер він*. Відповідь хроніки на ці запити — на цьому сайті: з джерелами, в архіві та в он-чейні.',
  structureKicker: 'Чому ім’я володіє рядком пошуку',
  structureBody:
    'Такий запуск конкурує за увагу на нерівних умовах. З одного боку: верифікований акаунт засновника (54,1 тис. підписників), батько, що очолює компанію зі світовою відомістю, та оплачене промо на аудиторію в 114 тис. — імена й охоплення, зібрані, щоб заповнити сторінку видачі. З іншого — розрізнені роздрібні тримачі, чия позиція перевіряється в он-чейні, без зіставного сліду.\n\nПошукова система індексує підсилення, а не винесення вироку. Вона видає того, кого просували найсильніше, а не того, кому відшкодували. Полишена сама на себе, сторінка видачі показала б лише ту версію, яку запуск оплатив. Цей файл — контр-хроніка, побудована так, щоб, коли хтось набирає ім’я, поряд стояла задокументована історія.',
  methodKicker: 'Метод і джерела',
  methodBody:
    'Цифри вище взяті дослівно з власних Google Search Console та Bing Webmaster Tools сайту natro.meme — вікна у 28 днів і три місяці, що завершуються 8 червня 2026. Рядки запитів відтворені як набрані, включно з помилками та німецьким *natroalex echter name*. Хроніка, що лежить в основі, заархівована: сайт запуску до видалення ([Wayback, 21 травня 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) та поточний стан токена [в он-чейні](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Право на відповідь',
  replyBefore:
    'Alex Natroshvili і Spribe запрошені відповісти; формальне повідомлення було надіслане на опубліковані юридичні та корпоративні адреси Spribe 25 травня 2026. Задокументовані фактичні спростування будуть опубліковані поряд із хронікою. Повне обґрунтування — у його ',
  replyProfileLabel: 'профілі',
  replyMid: ' та на ',
  replyPressLabel: 'прес-сторінці',
  replyAfter: '.',
};

const ka: SearchRecordContent = {
  metaTitle: 'რას ეძებს ინტერნეტი Alex Natroshvili-ზე — $NATRO-ის საძიებო ჩანაწერი',
  metaDescription:
    'რეალური საძიებო მოთხოვნები, რომლებიც ამ საიტამდე მოდის — „net worth“, „is a billionaire or not“, „why is natro alex rich“, „how did natroalex make his money“ — სწორედ ის პერსონაა, რომელსაც $NATRO-ის გაშვება ყიდდა. ნასესხებ გვარზე აგებული გაშვება ნაგულისხმევად იგებს ძიების შედეგებს; ეს ფაილი სახელის გვერდით აყენებს დოკუმენტირებულ ჩანაწერს.',
  kicker: 'რეპუტაციის ფასდადება · რას აბრუნებს ძიება',
  h1: 'სახელი საძიებო ველში',
  standfirst:
    'ნასესხებ სახელზე აგებული გაშვება ნაგულისხმევად იგებს შედეგების გვერდს. კითხვები, რომლებიც ახლა აქ მოჰყავთ — net worth, მილიარდერი, საიდან ფული — სწორედ ის კითხვებია, რომლებიც მარკეტინგმა დათესა. ჩანაწერი მათ პასუხობს.',
  pullQuote:
    'ძიება აბრუნებს იმას, ვინც დააწინაურეს. ის არ აბრუნებს იმას, რაც მოხდა — სანამ ვინმე არ აწარმოებს ჩანაწერს.',
  dataKicker: 'რას წერენ ადამიანები სინამდვილეში',
  dataIntro:
    'ეს რეალური მოთხოვნებია, აღებული ამ საიტის საკუთარი Google Search Console-დან და Bing Webmaster Tools-დან. თითქმის არავინ მოდის აქ ჩამოშლილ ტოკენზე საჩივრის საძებნელად. მოდიან სახელის აკრეფით — და სულ უფრო ხშირად კითხულობენ, რა ღირს ეს სახელი.',
  colQuery: 'საძიებო მოთხოვნა',
  colImpr: 'ჩვენებები',
  colClicks: 'კლიკები',
  gscCaption:
    'Google Search Console · natro.meme · ტოპ მოთხოვნები კლიკებით · 28-დღიანი ფანჯარა 2026 წლის 8 ივნისამდე (239 კლიკი, 7.01 ათ. ჩვენება).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · შერჩეული მოთხოვნები · სამთვიანი ფანჯარა 2026 წლის 8 ივნისამდე (37 კლიკი, 287 ჩვენება). წითლად მონიშნული სტრიქონები — „რა ღირს ის“ კლასტერია.',
  countriesNote:
    'წარმოშობის მიხედვით, კლიკები მოდის საფრანგეთიდან (13%), გერმანიიდან (10%), აშშ-დან (8%), არაბთა გაერთიანებული საამიროებიდან და გაერთიანებული სამეფოდან (თითო 6%) — საძიებო აუდიტორია, აგებული გაშვების საკუთარი პრომოუშენით და არა დაზარალებული მფლობელების მიერ.',
  plantedKicker: 'ეს კითხვები დათესილი იყო',
  plantedIntro:
    'თუ მოთხოვნებს ერთად წაიკითხავ, კანონზომიერება ჩნდება. თვით სახელის გარდა, ადამიანები კითხულობენ, რა ღირს ის — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (გერმ.: *„ნამდვილი სახელი“*). ეს ცნობისმოყვარეობა არსაიდან არ გაჩენილა. ეს ზუსტად ის პერსონაა, რომელსაც გაშვება ყიდდა. $NATRO-ის დამფუძნებლის სექცია, არქივში დაცული საიტის წაშლამდე, ამ სტრიქონით იხსნებოდა:',
  plantedAfter:
    'იგივე სექცია დამფუძნებელს აღწერდა, როგორც *„Boxer / Car Collector / Watch Collector.“* პიჩი, რომელიც გთავაზობს სახელსა და ცხოვრების სტილს — და *„his family is well-known globally“*-ს როგორც აქტივს — თავად ქმნის მოთხოვნას ზუსტად ამ კითხვებზე. მარკეტინგმა დათესა სიმდიდრის ნარატივი; საძიებო ველი ახლა მას სიტყვა-სიტყვით იმეორებს.',
  answersKicker: 'ჩანაწერი, რომელიც მათ პასუხობს',
  answersBody:
    'ეს ფაილი ინახავს დოკუმენტირებულ პასუხს იმავე კითხვებზე. ერთადერთი გაშვება ამ სახელით — **$NATRO Solana ტოკენი** — შეგროვდა **$1,500 პრესეილის მინიმუმით** ვერიფიცირებული საოჯახო ანგარიშებიდან, გაშვდა **2026 წლის 21 მაისს** და ჩამოიშალა **~98%-ით** სამოცდათორმეტ საათში. თანხის დაბრუნებაზე უარი თქვეს — *„Nothing to say“* გუნდის ადმინისგან, *„stfu“* დამფუძნებლის ვერიფიცირებული Telegram-იდან. იმავე ფანჯარაში საიტი გათიშეს, NATRO-ის ბმული ამოიღეს დამფუძნებლის Instagram-ის ბიოდან, ხოლო ფასიანი სარეკლამო ვიდეო წაშალეს.\n\nასე რომ: *net worth*, *საიდან ფული*, *მილიარდერია თუ არა*. ჩანაწერის პასუხი ამ მოთხოვნებზე — ამ საიტზეა: წყაროებით, არქივში და ონ-ჩეინში.',
  structureKicker: 'რატომ ფლობს სახელი საძიებო ველს',
  structureBody:
    'ასეთი გაშვება ყურადღებისთვის თანაბარ პირობებში არ იბრძვის. ერთი მხრივ: დამფუძნებლის ვერიფიცირებული ანგარიში (54.1 ათ. გამომწერი), მამა, რომელიც მსოფლიოში ცნობილ კომპანიას ხელმძღვანელობს, და ფასიანი პრომო 114 ათ. აუდიტორიაზე — სახელები და მოცვა, შეკრებილი შედეგების გვერდის შესავსებად. მეორე მხრივ — გაფანტული საცალო მფლობელები, რომელთა პოზიცია ონ-ჩეინში მოწმდება, შესადარებელი კვალის გარეშე.\n\nსაძიებო სისტემა ინდექსავს გაძლიერებას და არა განაჩენს. ის აბრუნებს იმას, ვინც ყველაზე ძლიერ დააწინაურეს და არა იმას, ვისაც აუნაზღაურეს. თავის ნებაზე მიშვებული, შედეგების გვერდი მხოლოდ იმ ვერსიას აჩვენებდა, რომელშიც გაშვებამ გადაიხადა. ეს ფაილი კონტრ-ჩანაწერია — აგებული ისე, რომ როცა ვინმე სახელს კრეფს, გვერდით დოკუმენტირებული ისტორია იდგეს.',
  methodKicker: 'მეთოდი და წყაროები',
  methodBody:
    'ზემოთ მოცემული ციფრები აღებულია სიტყვა-სიტყვით natro.meme-ის საკუთარი Google Search Console-დან და Bing Webmaster Tools-დან — 28-დღიანი და სამთვიანი ფანჯრები, რომლებიც 2026 წლის 8 ივნისს სრულდება. მოთხოვნების სტრიქონები აღწარმოებულია ისე, როგორც აკრიფეს, შეცდომებისა და გერმანული *natroalex echter name*-ის ჩათვლით. საფუძვლად მდებარე ჩანაწერი დაარქივებულია: გაშვების საიტი წაშლამდე ([Wayback, 2026 წლის 21 მაისი](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) და ტოკენის მიმდინარე მდგომარეობა [ონ-ჩეინში](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'პასუხის უფლება',
  replyBefore:
    'Alex Natroshvili და Spribe მოწვეულნი არიან პასუხის გასაცემად; ფორმალური შეტყობინება გაიგზავნა Spribe-ის გამოქვეყნებულ იურიდიულ და კორპორაციულ მისამართებზე 2026 წლის 25 მაისს. დოკუმენტირებული ფაქტობრივი შესწორებები გამოქვეყნდება ჩანაწერის გვერდით. სრული დასაბუთება — მის ',
  replyProfileLabel: 'პროფილზე',
  replyMid: ' და ',
  replyPressLabel: 'პრესის გვერდზე',
  replyAfter: '.',
};

const fr: SearchRecordContent = {
  metaTitle: 'Ce que l’internet demande sur Alex Natroshvili — l’archive de recherche $NATRO',
  metaDescription:
    'Les vraies requêtes qui mènent à ce dossier — « net worth », « is a billionaire or not », « why is natro alex rich », « how did natroalex make his money » — sont le personnage que le lancement $NATRO a vendu. Un lancement bâti sur un nom emprunté gagne la page de résultats par défaut ; ce dossier place le compte rendu documenté à côté du nom.',
  kicker: 'Tarification de la réputation · ce que la recherche renvoie',
  h1: 'Le nom dans la barre de recherche',
  standfirst:
    'Un lancement bâti sur un nom emprunté gagne la page de résultats par défaut. Les questions qui mènent désormais à ce dossier — fortune, milliardaire, comment il a fait son argent — sont celles que le marketing a semées. L’archive y répond.',
  pullQuote:
    'La recherche renvoie qui a été promu. Elle ne renvoie pas ce qui s’est passé — sauf si quelqu’un en tient le compte rendu.',
  dataKicker: 'Ce que les gens tapent réellement',
  dataIntro:
    'Ce sont de vraies requêtes, tirées des propres Google Search Console et Bing Webmaster Tools de ce dossier. Presque personne n’arrive en cherchant une plainte sur un token effondré. On arrive en tapant un nom — et, de plus en plus, en demandant ce que ce nom vaut.',
  colQuery: 'Requête de recherche',
  colImpr: 'Impr.',
  colClicks: 'Clics',
  gscCaption:
    'Google Search Console · natro.meme · principales requêtes par clics · fenêtre de 28 jours au 8 juin 2026 (239 clics, 7,01 k impressions).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · requêtes sélectionnées · fenêtre de trois mois au 8 juin 2026 (37 clics, 287 impressions). Les lignes en rouge forment le groupe « combien vaut-il ».',
  countriesNote:
    'Par origine, les clics viennent de France (13 %), d’Allemagne (10 %), des États-Unis (8 %), des Émirats arabes unis et du Royaume-Uni (6 % chacun) — une audience de recherche construite par la promotion du lancement, et non par les détenteurs lésés.',
  plantedKicker: 'Les questions ont été semées',
  plantedIntro:
    'Lues ensemble, les requêtes révèlent un schéma. Au-delà du simple nom, les gens demandent ce qu’il vaut — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (allemand : *« vrai nom »*). Cette curiosité n’est pas venue de nulle part. C’est exactement le personnage que le lancement a vendu. La section fondateur de $NATRO, archivée avant le retrait du site, s’ouvrait sur cette ligne :',
  plantedAfter:
    'La même section décrivait le fondateur comme *« Boxer / Car Collector / Watch Collector. »* Un argumentaire qui offre un nom et un mode de vie — et *« his family is well-known globally »* comme actif — fabrique la demande pour précisément ces questions. Le marketing a semé le récit de la richesse ; la barre de recherche le répète maintenant mot pour mot.',
  answersKicker: 'Le compte rendu qui y répond',
  answersBody:
    'Ce dossier conserve la réponse documentée aux mêmes questions. Le seul lancement que ce nom a porté — le **token $NATRO sur Solana** — a été sollicité avec un **minimum de prévente de 1 500 $** depuis des comptes familiaux vérifiés, lancé le **21 mai 2026**, et s’est effondré de **~98 %** en soixante-douze heures. Les demandes de remboursement ont été refusées — *« Nothing to say »* de l’administrateur de l’équipe, *« stfu »* depuis le Telegram vérifié du fondateur. Dans la même fenêtre, le site a été mis hors ligne, le lien NATRO retiré de la bio Instagram du fondateur, et la vidéo promotionnelle payante supprimée.\n\nAlors : *net worth*, *comment il a fait son argent*, *est-il milliardaire*. La réponse du compte rendu à ces requêtes est sur ce site — sourcée, archivée et on-chain.',
  structureKicker: 'Pourquoi le nom possède la barre de recherche',
  structureBody:
    'Un tel lancement ne se bat pas à armes égales pour l’attention. D’un côté : un compte fondateur vérifié (54,1 k abonnés), un père à la tête d’une entreprise connue dans le monde entier, et une promotion payante auprès d’une audience de 114 k — des noms et une portée assemblés pour remplir la page de résultats. De l’autre : un ensemble dispersé de détenteurs particuliers, position vérifiable on-chain, sans empreinte comparable.\n\nUn moteur de recherche indexe l’amplification, pas le jugement. Il renvoie qui a été le plus promu, pas qui a été indemnisé. Livrée à elle-même, la page de résultats ne montrerait que la version que le lancement a payée pour s’y placer. Ce dossier est le contre-compte rendu — bâti pour que, lorsqu’on tape le nom, le récit documenté se tienne à côté.',
  methodKicker: 'Méthode et sources',
  methodBody:
    'Les chiffres ci-dessus sont repris verbatim des propres Google Search Console et Bing Webmaster Tools de natro.meme — les fenêtres de 28 jours et de trois mois se terminant le 8 juin 2026. Les chaînes de requête sont reproduites telles que tapées, fautes comprises et l’allemand *natroalex echter name*. Le compte rendu sous-jacent est archivé : le site du lancement avant retrait ([Wayback, 21 mai 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) et l’état du token en direct [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Droit de réponse',
  replyBefore:
    'Alex Natroshvili et Spribe sont invités à répondre ; une notification formelle a été envoyée aux adresses juridiques et corporatives publiées de Spribe le 25 mai 2026. Les corrections factuelles documentées seront publiées à côté du compte rendu. Les sources complètes figurent sur son ',
  replyProfileLabel: 'profil',
  replyMid: ' et la ',
  replyPressLabel: 'page presse',
  replyAfter: '.',
};

const de: SearchRecordContent = {
  metaTitle: 'Was das Internet über Alex Natroshvili fragt — das $NATRO-Suchprotokoll',
  metaDescription:
    'Die echten Suchanfragen, die zu dieser Akte führen — „net worth“, „is a billionaire or not“, „why is natro alex rich“, „how did natroalex make his money“ — sind die Persona, die der $NATRO-Launch verkauft hat. Ein auf einem geliehenen Namen gebauter Launch gewinnt die Trefferseite standardmäßig; diese Akte stellt das dokumentierte Protokoll neben den Namen.',
  kicker: 'Reputationspreisbildung · was die Suche zurückgibt',
  h1: 'Der Name im Suchfeld',
  standfirst:
    'Ein auf einem geliehenen Namen gebauter Launch gewinnt die Trefferseite standardmäßig. Die Fragen, die jetzt hierher führen — Vermögen, Milliardär, woher das Geld — sind die, die das Marketing gesät hat. Das Protokoll beantwortet sie.',
  pullQuote:
    'Die Suche gibt zurück, wer beworben wurde. Sie gibt nicht zurück, was geschah — es sei denn, jemand führt das Protokoll.',
  dataKicker: 'Was die Leute tatsächlich eintippen',
  dataIntro:
    'Das sind echte Anfragen, entnommen aus der eigenen Google Search Console und den Bing Webmaster Tools dieser Akte. Fast niemand kommt auf der Suche nach einer Beschwerde über einen eingestürzten Token. Man kommt, indem man einen Namen eintippt — und zunehmend fragt, was dieser Name wert ist.',
  colQuery: 'Suchanfrage',
  colImpr: 'Impr.',
  colClicks: 'Klicks',
  gscCaption:
    'Google Search Console · natro.meme · Top-Anfragen nach Klicks · 28-Tage-Fenster bis 8. Juni 2026 (239 Klicks, 7,01 Tsd. Impressionen).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · ausgewählte Anfragen · Dreimonatsfenster bis 8. Juni 2026 (37 Klicks, 287 Impressionen). Rot markierte Zeilen sind das „Was ist er wert“-Cluster.',
  countriesNote:
    'Nach Herkunft stammen die Klicks aus Frankreich (13 %), Deutschland (10 %), den USA (8 %), den Vereinigten Arabischen Emiraten und dem Vereinigten Königreich (je 6 %) — ein Suchpublikum, das durch die eigene Bewerbung des Launches aufgebaut wurde, nicht durch die geschädigten Halter.',
  plantedKicker: 'Die Fragen wurden gesät',
  plantedIntro:
    'Liest man die Anfragen zusammen, zeigt sich ein Muster. Über den bloßen Namen hinaus fragen die Leute, was er wert ist — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name`. Diese Neugier kam nicht aus dem Nichts. Es ist genau die Persona, die der Launch verkauft hat. Der Gründerabschnitt von $NATRO, vollständig archiviert, bevor die Seite abgeschaltet wurde, begann mit dieser Zeile:',
  plantedAfter:
    'Derselbe Abschnitt beschrieb den Gründer als *„Boxer / Car Collector / Watch Collector.“* Ein Pitch, der einen Namen und einen Lebensstil anbietet — und *„his family is well-known globally“* als das Asset — erzeugt die Nachfrage nach genau diesen Fragen. Das Marketing säte das Reichtums-Narrativ; das Suchfeld gibt es nun Wort für Wort zurück.',
  answersKicker: 'Das Protokoll, das sie beantwortet',
  answersBody:
    'Diese Akte führt die dokumentierte Antwort auf dieselben Fragen. Der eine Launch, den dieser Name anführte — der **$NATRO-Solana-Token** — wurde mit einem **Presale-Minimum von 1.500 $** von verifizierten Familienkonten eingeworben, am **21. Mai 2026** gestartet und brach innerhalb von zweiundsiebzig Stunden um **~98 %** ein. Rückerstattungsanfragen wurden abgelehnt — *„Nothing to say“* vom Team-Admin, *„stfu“* vom verifizierten Telegram des Gründers. Im selben Zeitfenster wurde die Website offline genommen, der NATRO-Link aus der Instagram-Bio des Gründers entfernt und das bezahlte Werbevideo gelöscht.\n\nAlso: *net worth*, *woher das Geld*, *ist er Milliardär*. Die Antwort des Protokolls auf diese Anfragen steht auf dieser Seite — belegt, archiviert und on-chain.',
  structureKicker: 'Warum der Name das Suchfeld besitzt',
  structureBody:
    'Ein solcher Launch kämpft nicht zu gleichen Bedingungen um Aufmerksamkeit. Auf der einen Seite: ein verifiziertes Gründerkonto (54,1 Tsd. Follower), ein Vater, der ein weltweit bekanntes Unternehmen leitet, und eine bezahlte Bewerbung an ein Publikum von 114 Tsd. — Namen und Reichweite, zusammengestellt, um die Trefferseite zu füllen. Auf der anderen Seite: eine verstreute Gruppe von Privathaltern, Position on-chain überprüfbar, ohne vergleichbaren Fußabdruck.\n\nEine Suchmaschine indexiert Verstärkung, nicht Urteil. Sie gibt zurück, wer am stärksten beworben wurde, nicht, wer entschädigt wurde. Sich selbst überlassen, zeigte die Trefferseite nur die Version, für deren Platzierung der Launch bezahlt hat. Diese Akte ist das Gegenprotokoll — gebaut, damit, wenn jemand den Namen eintippt, der dokumentierte Bericht daneben steht.',
  methodKicker: 'Methode & Quellen',
  methodBody:
    'Die obigen Zahlen sind wörtlich aus der eigenen Google Search Console und den Bing Webmaster Tools von natro.meme entnommen — die 28-Tage- und Dreimonatsfenster bis zum 8. Juni 2026. Die Anfragezeichenfolgen sind wie eingetippt wiedergegeben, einschließlich Tippfehlern und dem deutschen *natroalex echter name*. Das zugrunde liegende Protokoll ist archiviert: die Launch-Seite vor der Abschaltung ([Wayback, 21. Mai 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) und der Live-Token-Status [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Recht auf Gegendarstellung',
  replyBefore:
    'Alex Natroshvili und Spribe sind eingeladen zu antworten; eine formelle Mitteilung wurde am 25. Mai 2026 an die veröffentlichten juristischen und Unternehmensadressen von Spribe gesendet. Dokumentierte sachliche Korrekturen werden neben dem Protokoll veröffentlicht. Die vollständigen Quellen finden sich in seinem ',
  replyProfileLabel: 'Profil',
  replyMid: ' und auf der ',
  replyPressLabel: 'Presseseite',
  replyAfter: '.',
};

const es: SearchRecordContent = {
  metaTitle: 'Lo que internet pregunta sobre Alex Natroshvili — el registro de búsqueda de $NATRO',
  metaDescription:
    'Las consultas reales que llegan a este expediente — «net worth», «is a billionaire or not», «why is natro alex rich», «how did natroalex make his money» — son el personaje que vendió el lanzamiento de $NATRO. Un lanzamiento construido sobre un apellido prestado gana la página de resultados por defecto; este expediente coloca el registro documentado junto al nombre.',
  kicker: 'Tarificación de la reputación · lo que devuelve la búsqueda',
  h1: 'El nombre en la barra de búsqueda',
  standfirst:
    'Un lanzamiento construido sobre un nombre prestado gana la página de resultados por defecto. Las preguntas que ahora llegan aquí — patrimonio, multimillonario, cómo hizo su dinero — son las que sembró el marketing. El registro las responde.',
  pullQuote:
    'La búsqueda devuelve a quién se promocionó. No devuelve lo que ocurrió — a menos que alguien lleve el registro.',
  dataKicker: 'Lo que la gente teclea de verdad',
  dataIntro:
    'Estas son consultas reales, tomadas de las propias Google Search Console y Bing Webmaster Tools de este expediente. Casi nadie llega buscando una queja sobre un token desplomado. Llegan tecleando un nombre — y, cada vez más, preguntando cuánto vale ese nombre.',
  colQuery: 'Consulta de búsqueda',
  colImpr: 'Impr.',
  colClicks: 'Clics',
  gscCaption:
    'Google Search Console · natro.meme · principales consultas por clics · ventana de 28 días hasta el 8 de junio de 2026 (239 clics, 7,01 mil impresiones).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · consultas seleccionadas · ventana de tres meses hasta el 8 de junio de 2026 (37 clics, 287 impresiones). Las filas en rojo son el grupo «cuánto vale».',
  countriesNote:
    'Por origen, los clics vienen de Francia (13 %), Alemania (10 %), Estados Unidos (8 %), los Emiratos Árabes Unidos y el Reino Unido (6 % cada uno) — una audiencia de búsqueda construida por la propia promoción del lanzamiento, no por los tenedores afectados.',
  plantedKicker: 'Las preguntas fueron sembradas',
  plantedIntro:
    'Leídas en conjunto, las consultas revelan un patrón. Más allá del nombre a secas, la gente pregunta cuánto vale — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (alemán: *«nombre real»*). Esa curiosidad no surgió de la nada. Es exactamente el personaje que vendió el lanzamiento. La sección del fundador de $NATRO, archivada antes de que retiraran el sitio, abría con esta línea:',
  plantedAfter:
    'La misma sección describía al fundador como *«Boxer / Car Collector / Watch Collector.»* Un discurso que ofrece un nombre y un estilo de vida — y *«his family is well-known globally»* como el activo — fabrica la demanda de exactamente estas preguntas. El marketing sembró la narrativa de la riqueza; la barra de búsqueda ahora la repite palabra por palabra.',
  answersKicker: 'El registro que las responde',
  answersBody:
    'Este expediente guarda la respuesta documentada a las mismas preguntas. El único lanzamiento que ese nombre encabezó — el **token $NATRO en Solana** — se solicitó con un **mínimo de preventa de 1.500 $** desde cuentas familiares verificadas, se lanzó el **21 de mayo de 2026** y se desplomó **~98 %** en setenta y dos horas. Las solicitudes de reembolso fueron rechazadas — *«Nothing to say»* del administrador del equipo, *«stfu»* desde el Telegram verificado del fundador. En la misma ventana se desconectó el sitio web, se quitó el enlace de NATRO de la bio de Instagram del fundador y se eliminó el vídeo promocional pagado.\n\nAsí que: *net worth*, *cómo hizo su dinero*, *si es multimillonario*. La respuesta del registro a esas consultas está en este sitio — con fuentes, archivada y on-chain.',
  structureKicker: 'Por qué el nombre posee la barra de búsqueda',
  structureBody:
    'Un lanzamiento así no compite por la atención en igualdad de condiciones. De un lado: una cuenta de fundador verificada (54,1 mil seguidores), un padre que dirige una empresa conocida mundialmente y una promoción pagada a una audiencia de 114 mil — nombres y alcance reunidos para llenar la página de resultados. Del otro: un conjunto disperso de tenedores minoristas, posición verificable on-chain, sin una huella comparable.\n\nUn motor de búsqueda indexa la amplificación, no el veredicto. Devuelve a quién se promocionó con más fuerza, no a quién se resarció. Librada a sí misma, la página de resultados solo mostraría la versión que el lanzamiento pagó por colocar. Este expediente es el contra-registro — construido para que, cuando alguien teclee el nombre, el relato documentado esté a su lado.',
  methodKicker: 'Método y fuentes',
  methodBody:
    'Las cifras anteriores se toman textualmente de las propias Google Search Console y Bing Webmaster Tools de natro.meme — las ventanas de 28 días y tres meses que terminan el 8 de junio de 2026. Las cadenas de consulta se reproducen tal como se teclearon, incluidas las erratas y el alemán *natroalex echter name*. El registro subyacente está archivado: el sitio del lanzamiento antes de su retirada ([Wayback, 21 de mayo de 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) y el estado del token en vivo [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Derecho de réplica',
  replyBefore:
    'Se invita a Alex Natroshvili y a Spribe a responder; se envió una notificación formal a las direcciones legales y corporativas publicadas de Spribe el 25 de mayo de 2026. Las correcciones fácticas documentadas se publicarán junto al registro. Las fuentes completas están en su ',
  replyProfileLabel: 'perfil',
  replyMid: ' y en la ',
  replyPressLabel: 'página de prensa',
  replyAfter: '.',
};

const ar: SearchRecordContent = {
  metaTitle: 'ما الذي يسأله الإنترنت عن Alex Natroshvili — سجلّ بحث $NATRO',
  metaDescription:
    'استعلامات البحث الحقيقية التي تصل إلى هذا الملف — «net worth» و«is a billionaire or not» و«why is natro alex rich» و«how did natroalex make his money» — هي الشخصية التي باعها إطلاق $NATRO. الإطلاق المبني على اسم عائلة مُستعار يربح صفحة النتائج افتراضيًا؛ وهذا الملف يضع السجلّ الموثَّق بجانب الاسم.',
  kicker: 'تسعير السمعة · ما الذي يعيده البحث',
  h1: 'الاسم في صندوق البحث',
  standfirst:
    'الإطلاق المبني على اسم مُستعار يربح صفحة النتائج افتراضيًا. الأسئلة التي تقود إلى هنا الآن — الثروة، الملياردير، من أين المال — هي الأسئلة التي زرعها التسويق. والسجلّ يجيب عنها.',
  pullQuote:
    'البحث يعيد مَن جرى الترويج له. لا يعيد ما حدث — ما لم يحتفظ أحدٌ بالسجلّ.',
  dataKicker: 'ما الذي يكتبه الناس فعلًا',
  dataIntro:
    'هذه استعلامات حقيقية، مأخوذة من Google Search Console وBing Webmaster Tools الخاصَّين بهذا الملف. لا أحد تقريبًا يصل بحثًا عن شكوى حول عملة منهارة. يصلون وهم يكتبون اسمًا — وبشكل متزايد، يسألون كم يساوي هذا الاسم.',
  colQuery: 'استعلام البحث',
  colImpr: 'ظهور',
  colClicks: 'نقرات',
  gscCaption:
    'Google Search Console · natro.meme · أهم الاستعلامات حسب النقرات · نافذة 28 يومًا حتى 8 يونيو 2026 (239 نقرة، 7.01 ألف ظهور).',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · استعلامات مختارة · نافذة ثلاثة أشهر حتى 8 يونيو 2026 (37 نقرة، 287 ظهورًا). الصفوف المميَّزة بالأحمر هي مجموعة «كم يساوي».',
  countriesNote:
    'بحسب المصدر، تأتي النقرات من فرنسا (13%) وألمانيا (10%) والولايات المتحدة (8%) والإمارات العربية المتحدة والمملكة المتحدة (6% لكلٍّ منهما) — جمهور بحثٍ بناه ترويج الإطلاق نفسه، لا حاملو العملة المتضرِّرون.',
  plantedKicker: 'الأسئلة كانت مزروعة',
  plantedIntro:
    'إذا قرأتَ الاستعلامات معًا يظهر نمط. إلى جانب الاسم المجرَّد، يسأل الناس كم يساوي — `natroalex net worth` و`why is natro alex rich` و`alex natroshvili is a billionaire or not` و`how did natroalex make his money` و`alex natro wiki` و`natroalex echter name` (بالألمانية: *«الاسم الحقيقي»*). هذا الفضول لم يأتِ من العدم. إنه الشخصية ذاتها التي باعها الإطلاق. قسم المؤسِّس في $NATRO، المحفوظ في الأرشيف قبل إزالة الموقع، كان يُستهَلّ بهذا السطر:',
  plantedAfter:
    'القسم نفسه وصف المؤسِّس بأنه *«Boxer / Car Collector / Watch Collector.»* عرضٌ يقدِّم اسمًا ونمط حياة — و*«his family is well-known globally»* بوصفه الأصل — يصنع الطلب على هذه الأسئلة بالذات. زرع التسويق سردية الثروة؛ وصندوق البحث الآن يكرِّرها كلمةً بكلمة.',
  answersKicker: 'السجلّ الذي يجيب عنها',
  answersBody:
    'يحتفظ هذا الملف بالإجابة الموثَّقة عن الأسئلة نفسها. الإطلاق الوحيد الذي تصدَّره هذا الاسم — **عملة $NATRO على Solana** — جُمع بـ**حدٍّ أدنى للبيع المسبق قدره 1,500 دولار** من حسابات عائلية موثَّقة، وأُطلق في **21 مايو 2026**، وانهار بنسبة **~98%** خلال اثنتين وسبعين ساعة. رُفضت طلبات الاسترداد — *«Nothing to say»* من مشرف الفريق، و*«stfu»* من Telegram المؤسِّس الموثَّق. وفي النافذة الزمنية نفسها أُوقف الموقع، وأُزيل رابط NATRO من نبذة إنستغرام المؤسِّس، وحُذف الفيديو الترويجي المدفوع.\n\nإذن: *net worth*، *من أين المال*، *هل هو ملياردير*. إجابة السجلّ عن هذه الاستعلامات موجودة على هذا الموقع — بمصادر، ومؤرشَفة، وعلى السلسلة.',
  structureKicker: 'لماذا يملك الاسم صندوق البحث',
  structureBody:
    'إطلاقٌ كهذا لا ينافس على الانتباه بشروط متكافئة. في جانب: حساب مؤسِّس موثَّق (54.1 ألف متابع)، وأبٌ يرأس شركة معروفة عالميًا، وترويج مدفوع لجمهور قوامه 114 ألفًا — أسماء ووصول جُمعت لملء صفحة النتائج. وفي الجانب الآخر: حاملون أفراد متفرِّقون، مركزهم قابل للتحقق على السلسلة، بلا أثرٍ مماثل.\n\nمحرك البحث يفهرس التضخيم، لا إصدار الحكم. يعيد مَن جرى الترويج له أكثر، لا مَن جرى تعويضه. لو تُرِكت لنفسها، لما أظهرت صفحة النتائج إلا النسخة التي دفع الإطلاق لوضعها. هذا الملف هو السجلّ المضادّ — مبنيٌّ ليقف الروايةُ الموثَّقة بجانب الاسم حين يكتبه أحد.',
  methodKicker: 'المنهج والمصادر',
  methodBody:
    'الأرقام أعلاه مأخوذة حرفيًا من Google Search Console وBing Webmaster Tools الخاصَّين بـ natro.meme — نافذتا 28 يومًا وثلاثة أشهر المنتهيتان في 8 يونيو 2026. سلاسل الاستعلام مُعاد إنتاجها كما كُتبت، بما في ذلك الأخطاء الإملائية والعبارة الألمانية *natroalex echter name*. السجلّ الأساسي مؤرشَف: موقع الإطلاق قبل إزالته ([Wayback، 21 مايو 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) وحالة العملة الحيّة [على السلسلة](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'حق الردّ',
  replyBefore:
    'إنّ Alex Natroshvili وSpribe مدعوّان للردّ؛ وقد أُرسل إشعار رسمي إلى عناوين Spribe القانونية والمؤسسية المنشورة في 25 مايو 2026. وستُنشر التصحيحات الوقائعية الموثَّقة بجانب السجلّ. التوثيق الكامل موجود في ',
  replyProfileLabel: 'ملفّه',
  replyMid: ' وفي ',
  replyPressLabel: 'صفحة الصحافة',
  replyAfter: '.',
};

const ur: SearchRecordContent = {
  metaTitle: 'انٹرنیٹ Alex Natroshvili کے بارے میں کیا پوچھتا ہے — $NATRO کا سرچ ریکارڈ',
  metaDescription:
    'اس فائل تک پہنچنے والی اصل سرچ کوئریز — «net worth»، «is a billionaire or not»، «why is natro alex rich»، «how did natroalex make his money» — وہی شخصیت ہیں جو $NATRO کے لانچ نے بیچی۔ ادھار لیے گئے نام پر بنا لانچ بطورِ ڈیفالٹ نتائج کا صفحہ جیت لیتا ہے؛ یہ فائل نام کے ساتھ دستاویزی ریکارڈ رکھ دیتی ہے۔',
  kicker: 'ساکھ کی قیمت کاری · سرچ کیا لوٹاتی ہے',
  h1: 'سرچ باکس میں نام',
  standfirst:
    'ادھار لیے گئے نام پر بنا لانچ بطورِ ڈیفالٹ نتائج کا صفحہ جیت لیتا ہے۔ جو سوالات اب یہاں لا رہے ہیں — دولت، ارب پتی، پیسہ کہاں سے — وہی ہیں جو مارکیٹنگ نے بوئے۔ ریکارڈ اُن کا جواب دیتا ہے۔',
  pullQuote:
    'سرچ یہ لوٹاتی ہے کہ کس کی تشہیر ہوئی۔ یہ نہیں لوٹاتی کہ کیا ہوا — جب تک کوئی ریکارڈ نہ رکھے۔',
  dataKicker: 'لوگ دراصل کیا ٹائپ کرتے ہیں',
  dataIntro:
    'یہ اصل کوئریز ہیں، جو اس فائل کے اپنے Google Search Console اور Bing Webmaster Tools سے لی گئی ہیں۔ تقریباً کوئی بھی کسی منہدم ٹوکن کی شکایت ڈھونڈتے ہوئے یہاں نہیں آتا۔ لوگ ایک نام ٹائپ کرتے ہوئے آتے ہیں — اور بڑھتے ہوئے، یہ پوچھتے ہوئے کہ یہ نام کتنے کا ہے۔',
  colQuery: 'سرچ کوئری',
  colImpr: 'امپریشن',
  colClicks: 'کلکس',
  gscCaption:
    'Google Search Console · natro.meme · کلکس کے لحاظ سے سرِفہرست کوئریز · 8 جون 2026 تک 28 دن کی ونڈو (239 کلکس، 7.01 ہزار امپریشنز)۔',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · منتخب کوئریز · 8 جون 2026 تک تین ماہ کی ونڈو (37 کلکس، 287 امپریشنز)۔ سرخ نشان زدہ سطریں «وہ کتنے کا ہے» کلسٹر ہیں۔',
  countriesNote:
    'ماخذ کے لحاظ سے، کلکس فرانس (13%)، جرمنی (10%)، امریکہ (8%)، متحدہ عرب امارات اور برطانیہ (ہر ایک 6%) سے آتے ہیں — ایک سرچ سامعین جو لانچ کی اپنی تشہیر نے بنایا، نہ کہ متاثرہ ہولڈرز نے۔',
  plantedKicker: 'یہ سوالات بوئے گئے تھے',
  plantedIntro:
    'کوئریز کو ایک ساتھ پڑھیں تو ایک طرز نمایاں ہوتا ہے۔ محض نام کے علاوہ، لوگ پوچھتے ہیں کہ وہ کتنے کا ہے — `natroalex net worth`، `why is natro alex rich`، `alex natroshvili is a billionaire or not`، `how did natroalex make his money`، `alex natro wiki`، `natroalex echter name` (جرمن: *«اصل نام»*)۔ یہ تجسس کہیں سے یونہی نہیں آیا۔ یہ بالکل وہی شخصیت ہے جو لانچ نے بیچی۔ $NATRO کے بانی کا سیکشن، سائٹ ہٹائے جانے سے پہلے محفوظ شدہ، اِس سطر سے شروع ہوتا تھا:',
  plantedAfter:
    'اسی سیکشن نے بانی کو *«Boxer / Car Collector / Watch Collector.»* کے طور پر بیان کیا۔ ایک پچ جو نام اور طرزِ زندگی پیش کرے — اور *«his family is well-known globally»* کو اثاثے کے طور پر — وہ بعینہٖ اِنہی سوالات کی طلب پیدا کرتا ہے۔ مارکیٹنگ نے دولت کا بیانیہ بویا؛ اب سرچ باکس اسے لفظ بہ لفظ دہراتا ہے۔',
  answersKicker: 'ریکارڈ جو اُن کا جواب دیتا ہے',
  answersBody:
    'یہ فائل اُنہی سوالات کا دستاویزی جواب رکھتی ہے۔ وہ واحد لانچ جس کی قیادت اِس نام نے کی — **Solana پر $NATRO ٹوکن** — تصدیق شدہ خاندانی اکاؤنٹس سے **1,500 ڈالر کی پری سیل کم از کم حد** کے ساتھ اکٹھا کیا گیا، **21 مئی 2026** کو لانچ ہوا، اور بہتّر گھنٹوں میں **~98%** گر گیا۔ رقم کی واپسی کی درخواستیں مسترد کر دی گئیں — ٹیم ایڈمن کی طرف سے *«Nothing to say»*، بانی کے تصدیق شدہ Telegram سے *«stfu»*۔ اسی ونڈو میں ویب سائٹ آف لائن کر دی گئی، NATRO کا لنک بانی کے Instagram بائیو سے ہٹا دیا گیا، اور ادائیگی شدہ پروموشنل ویڈیو ڈیلیٹ کر دی گئی۔\n\nتو: *net worth*، *پیسہ کہاں سے کمایا*، *کیا وہ ارب پتی ہے*۔ اِن کوئریز کا ریکارڈ کا جواب اِسی سائٹ پر ہے — حوالہ جات کے ساتھ، محفوظ شدہ، اور آن چین۔',
  structureKicker: 'نام سرچ باکس کا مالک کیوں ہے',
  structureBody:
    'ایسا لانچ توجہ کے لیے برابری کی شرائط پر مقابلہ نہیں کرتا۔ ایک طرف: ایک تصدیق شدہ بانی اکاؤنٹ (54.1 ہزار فالوورز)، ایک باپ جو دنیا بھر میں معروف کمپنی کا سربراہ ہے، اور 114 ہزار کے سامعین تک ادائیگی شدہ پروموشن — نام اور رسائی، نتائج کا صفحہ بھرنے کے لیے جمع کیے گئے۔ دوسری طرف: منتشر خوردہ ہولڈرز، جن کی پوزیشن آن چین قابلِ تصدیق ہے، بغیر کسی قابلِ موازنہ نقشِ پا کے۔\n\nسرچ انجن تقویت کو انڈیکس کرتا ہے، فیصلہ کو نہیں۔ یہ اُسے لوٹاتا ہے جس کی سب سے زیادہ تشہیر ہوئی، نہ کہ اُسے جسے ازالہ ملا۔ اپنے حال پر چھوڑ دیا جائے تو نتائج کا صفحہ صرف وہی نسخہ دکھاتا جسے لانچ نے جگہ دلانے کے لیے ادائیگی کی۔ یہ فائل جوابی ریکارڈ ہے — اِس طرح بنائی گئی کہ جب کوئی نام ٹائپ کرے تو دستاویزی بیان اُس کے ساتھ کھڑا ہو۔',
  methodKicker: 'طریقہ کار اور ذرائع',
  methodBody:
    'اوپر دیے گئے اعداد natro.meme کے اپنے Google Search Console اور Bing Webmaster Tools سے بعینہٖ لیے گئے ہیں — 8 جون 2026 پر ختم ہونے والی 28 دن اور تین ماہ کی ونڈوز۔ کوئری کی سطریں جیسے ٹائپ کی گئیں ویسے ہی پیش کی گئی ہیں، بشمول املا کی غلطیاں اور جرمن *natroalex echter name*۔ بنیادی ریکارڈ محفوظ ہے: ہٹائے جانے سے پہلے کی لانچ سائٹ ([Wayback، 21 مئی 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) اور ٹوکن کی موجودہ حالت [آن چین](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF)۔',
  replyKicker: 'جواب کا حق',
  replyBefore:
    'Alex Natroshvili اور Spribe کو جواب دینے کی دعوت ہے؛ 25 مئی 2026 کو Spribe کے شائع شدہ قانونی اور کارپوریٹ پتوں پر ایک رسمی نوٹس بھیجا گیا۔ دستاویزی حقائق پر مبنی تصحیحات ریکارڈ کے ساتھ شائع کی جائیں گی۔ مکمل حوالہ جات اُن کے ',
  replyProfileLabel: 'پروفائل',
  replyMid: ' اور ',
  replyPressLabel: 'پریس پیج',
  replyAfter: ' پر موجود ہیں۔',
};

const hi: SearchRecordContent = {
  metaTitle: 'इंटरनेट Alex Natroshvili के बारे में क्या पूछता है — $NATRO का सर्च रिकॉर्ड',
  metaDescription:
    'इस फ़ाइल तक पहुँचने वाली असली सर्च क्वेरीज़ — «net worth», «is a billionaire or not», «why is natro alex rich», «how did natroalex make his money» — वही छवि हैं जो $NATRO लॉन्च ने बेची। उधार लिए गए नाम पर बना लॉन्च डिफ़ॉल्ट रूप से परिणाम पृष्ठ जीत लेता है; यह फ़ाइल नाम के बगल में प्रलेखित रिकॉर्ड रखती है।',
  kicker: 'प्रतिष्ठा का मूल्य-निर्धारण · सर्च क्या लौटाती है',
  h1: 'सर्च बॉक्स में नाम',
  standfirst:
    'उधार लिए गए नाम पर बना लॉन्च डिफ़ॉल्ट रूप से परिणाम पृष्ठ जीत लेता है। जो सवाल अब यहाँ ला रहे हैं — संपत्ति, अरबपति, पैसा कहाँ से — वही हैं जो मार्केटिंग ने बोए। रिकॉर्ड उनका जवाब देता है।',
  pullQuote:
    'सर्च यह लौटाती है कि किसका प्रचार हुआ। यह नहीं लौटाती कि क्या हुआ — जब तक कोई रिकॉर्ड न रखे।',
  dataKicker: 'लोग असल में क्या टाइप करते हैं',
  dataIntro:
    'ये असली क्वेरीज़ हैं, जो इस फ़ाइल के अपने Google Search Console और Bing Webmaster Tools से ली गई हैं। लगभग कोई भी किसी ढह चुके टोकन की शिकायत खोजते हुए यहाँ नहीं आता। लोग एक नाम टाइप करते हुए आते हैं — और बढ़ते हुए, यह पूछते हुए कि वह नाम कितने का है।',
  colQuery: 'सर्च क्वेरी',
  colImpr: 'इंप्रेशन',
  colClicks: 'क्लिक',
  gscCaption:
    'Google Search Console · natro.meme · क्लिक के अनुसार शीर्ष क्वेरीज़ · 8 जून 2026 तक 28-दिन की विंडो (239 क्लिक, 7.01 हज़ार इंप्रेशन)।',
  bingCaption:
    'Bing Webmaster Tools · natro.meme · चयनित क्वेरीज़ · 8 जून 2026 तक तीन-महीने की विंडो (37 क्लिक, 287 इंप्रेशन)। लाल रंग में चिह्नित पंक्तियाँ «वह कितने का है» समूह हैं।',
  countriesNote:
    'मूल के अनुसार, क्लिक फ़्रांस (13%), जर्मनी (10%), अमेरिका (8%), संयुक्त अरब अमीरात और यूनाइटेड किंगडम (प्रत्येक 6%) से आते हैं — एक सर्च दर्शक-वर्ग जो लॉन्च के अपने प्रचार ने बनाया, न कि प्रभावित धारकों ने।',
  plantedKicker: 'ये सवाल बोए गए थे',
  plantedIntro:
    'क्वेरीज़ को एक साथ पढ़ें तो एक पैटर्न उभरता है। केवल नाम से आगे, लोग पूछते हैं कि वह कितने का है — `natroalex net worth`, `why is natro alex rich`, `alex natroshvili is a billionaire or not`, `how did natroalex make his money`, `alex natro wiki`, `natroalex echter name` (जर्मन: *«असली नाम»*)। यह जिज्ञासा कहीं से यूँ ही नहीं आई। यह ठीक वही छवि है जो लॉन्च ने बेची। $NATRO के संस्थापक खंड, साइट हटाए जाने से पहले संग्रहीत, इस पंक्ति से शुरू होता था:',
  plantedAfter:
    'उसी खंड ने संस्थापक को *«Boxer / Car Collector / Watch Collector.»* के रूप में वर्णित किया। एक पिच जो नाम और जीवनशैली पेश करे — और *«his family is well-known globally»* को संपत्ति के रूप में — वह ठीक इन्हीं सवालों की माँग गढ़ती है। मार्केटिंग ने धन का आख्यान बोया; अब सर्च बॉक्स उसे शब्दशः दोहराता है।',
  answersKicker: 'रिकॉर्ड जो उनका जवाब देता है',
  answersBody:
    'यह फ़ाइल उन्हीं सवालों का प्रलेखित जवाब रखती है। वह एकमात्र लॉन्च जिसका नेतृत्व इस नाम ने किया — **Solana पर $NATRO टोकन** — सत्यापित पारिवारिक खातों से **1,500 डॉलर की प्रीसेल न्यूनतम सीमा** के साथ जुटाया गया, **21 मई 2026** को लॉन्च हुआ, और बहत्तर घंटों में **~98%** गिर गया। रिफ़ंड के अनुरोध अस्वीकार कर दिए गए — टीम एडमिन की ओर से *«Nothing to say»*, संस्थापक के सत्यापित Telegram से *«stfu»*। उसी विंडो में वेबसाइट ऑफ़लाइन कर दी गई, NATRO का लिंक संस्थापक के Instagram बायो से हटा दिया गया, और भुगतान किया गया प्रचार वीडियो डिलीट कर दिया गया।\n\nतो: *net worth*, *पैसा कहाँ से कमाया*, *क्या वह अरबपति है*। इन क्वेरीज़ का रिकॉर्ड का जवाब इसी साइट पर है — स्रोतों के साथ, संग्रहीत, और ऑन-चेन।',
  structureKicker: 'नाम सर्च बॉक्स का स्वामी क्यों है',
  structureBody:
    'ऐसा लॉन्च ध्यान के लिए बराबरी की शर्तों पर मुक़ाबला नहीं करता। एक ओर: एक सत्यापित संस्थापक खाता (54.1 हज़ार फ़ॉलोअर), एक पिता जो दुनिया भर में जानी-मानी कंपनी का प्रमुख है, और 114 हज़ार के दर्शकों तक भुगतान किया गया प्रचार — नाम और पहुँच, परिणाम पृष्ठ भरने के लिए जुटाए गए। दूसरी ओर: बिखरे हुए खुदरा धारक, जिनकी स्थिति ऑन-चेन सत्यापन योग्य है, बिना किसी तुलनीय छाप के।\n\nएक सर्च इंजन प्रवर्धन को अनुक्रमित करता है, निर्णय को नहीं। यह उसे लौटाता है जिसका सबसे ज़्यादा प्रचार हुआ, न कि उसे जिसकी भरपाई हुई। अपने हाल पर छोड़ दिया जाए तो परिणाम पृष्ठ केवल वही संस्करण दिखाता जिसे लॉन्च ने रखवाने के लिए भुगतान किया। यह फ़ाइल प्रति-रिकॉर्ड है — इस तरह बनाई गई कि जब कोई नाम टाइप करे, तो प्रलेखित विवरण उसके बगल में खड़ा हो।',
  methodKicker: 'विधि और स्रोत',
  methodBody:
    'ऊपर दिए गए आँकड़े natro.meme के अपने Google Search Console और Bing Webmaster Tools से शब्दशः लिए गए हैं — 8 जून 2026 को समाप्त होने वाली 28-दिन और तीन-महीने की विंडो। क्वेरी स्ट्रिंग्स जैसी टाइप की गईं वैसी ही प्रस्तुत की गई हैं, वर्तनी की त्रुटियों और जर्मन *natroalex echter name* सहित। अंतर्निहित रिकॉर्ड संग्रहीत है: हटाए जाने से पहले की लॉन्च साइट ([Wayback, 21 मई 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) और टोकन की मौजूदा स्थिति [ऑन-चेन](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF)।',
  replyKicker: 'उत्तर का अधिकार',
  replyBefore:
    'Alex Natroshvili और Spribe को उत्तर देने के लिए आमंत्रित किया जाता है; 25 मई 2026 को Spribe के प्रकाशित कानूनी और कॉर्पोरेट पतों पर एक औपचारिक सूचना भेजी गई। प्रलेखित तथ्यात्मक सुधार रिकॉर्ड के साथ प्रकाशित किए जाएँगे। पूरा स्रोत-संदर्भ उनके ',
  replyProfileLabel: 'प्रोफ़ाइल',
  replyMid: ' और ',
  replyPressLabel: 'प्रेस पेज',
  replyAfter: ' पर है।',
};

const BY_LOCALE: Record<Locale, SearchRecordContent> = {
  en,
  ru,
  uk,
  ka,
  fr,
  de,
  es,
  ar,
  ur,
  hi,
};

export function getSearchRecord(locale: Locale): SearchRecordContent {
  return BY_LOCALE[locale] || en;
}

// Shared verbatim quote — the $NATRO founder line, English across every locale.
export const SELFDOXX_QUOTE =
  'Most coin founders are anonymous. Alex isn’t. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally.';
