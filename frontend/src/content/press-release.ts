/**
 * Press-release content for the /press page.
 *
 * Two locales are first-class: EN (canonical) and RU (russian-press
 * distribution targets — Forklog, RBK Crypto, vc.ru, bits.media).
 *
 * Other locales fall through to EN — the press surface targets
 * English-speaking journalists primarily.
 */

import { uk } from './press-i18n/uk';
import { ka } from './press-i18n/ka';
import { fr } from './press-i18n/fr';
import { de } from './press-i18n/de';
import { es } from './press-i18n/es';
import { ar } from './press-i18n/ar';

/** A single external-coverage item shown in the "In the press" section. */
export interface PressCoverageItem {
  /** Outlet / author name. */
  source: string;
  /** One-line meta strap: outlet type · platform · date. */
  meta: string;
  /** The outlet's own headline (quoted — their characterization, not ours). */
  title: string;
  /** Factual summary of what they published (Prose markdown). */
  body: string;
  /** Optional link to the source and its label. */
  url?: string;
  urlLabel?: string;
  /** Screenshot preserved as evidence of the coverage. */
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface PressContent {
  /** "For immediate release" header */
  forImmediateRelease: string;
  /** Date strap shown under FIR */
  dateline: string;
  /** Main headline (h1) */
  headline: string;
  /** Sub-headline / dek paragraph */
  dek: string;
  /** Opening paragraph with city + first hit */
  lede: string;
  /** Section heading: Key facts */
  keyFactsHeading: string;
  /** Array of key-facts bullet items (markdown allowed via Prose) */
  keyFacts: string[];
  /** Section heading: Case file */
  caseFileHeading: string;
  caseFileBody: string;
  /** Section heading: Note on age */
  ageNoteHeading: string;
  ageNoteBody: string;
  /** Section heading: Right of reply */
  rorHeading: string;
  rorBody: string;
  /** Section heading: Contact */
  contactHeading: string;
  contactBody: string;
  /** "In the press" — external coverage */
  coverageHeading: string;
  coverageIntro: string;
  coverage: PressCoverageItem[];
  /** Downloads / quick links section */
  downloadsHeading: string;
  downloadsLabels: {
    txt: string;
    factSheet: string;
    waybackArchive: string;
    fullFile: string;
    exhibitArchive: string;
    factSheetSub: string;
  };
}

/**
 * Coverage items are shared across locales (the screenshots and source are
 * language-neutral); the heading/intro/body localize per first-class locale.
 */
const COVERAGE_IGAMING_INSIDES = {
  source: 'iGaming Insides',
  url: 'https://t.me/igaming_inside',
  image: '/exhibits/ex-coverage-igaming-insides-linkedin.png',
  imageWidth: 1156,
  imageHeight: 3108,
};

export const pressContent: Record<string, PressContent> = {
  en: {
    forImmediateRelease: 'For immediate release',
    dateline: '28 May 2026 · Kyiv / Monaco',
    headline:
      'A Solana memecoin, a family name, a 98% collapse: a documented case file on $NATRO',
    dek: 'Spribe founder and CEO David Natroshvili personally solicited presale investments in the $NATRO Solana memecoin launched 21 May 2026 by his 15-year-old son Alex Natroshvili. Token collapsed 98% within 48 hours; refunds refused; team evidence-removal pattern documented in primary sources.',
    lede: 'A documented case file released today at [natro.meme](https://natro.meme) presents primary-source evidence on the launch and 98% collapse of $NATRO, a Solana memecoin marketed on the basis of the Natroshvili family name and the Spribe / Aviator gambling-product association.',
    keyFactsHeading: 'Key facts (all primary-source verified)',
    keyFacts: [
      'On 21 May 2026, 20:11 UTC, the $NATRO Solana token launched on Pump.fun. Contract address: `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF`.',
      'In the 24 hours before the launch, David Natroshvili — founder and CEO of Spribe (the iGaming studio behind the global crash-style gambling product Aviator) — published a sequence of Instagram Stories from his verified account (@davidnatro1) personally soliciting paid presale investment, naming himself as a co-participant (*"with me & @natroalex"*), setting a $1,500 minimum entry threshold, and directing contact to his minor son\'s personal Telegram (@natroalex1). Five Stories preserved before expiry.',
      'The token\'s price collapsed approximately 98% within 48 hours. Market capitalization fell from a stated $200K+ at launch to approximately $36 (per Pump.fun API at filing).',
      'Refund requests from affected early holders were refused. The team admin\'s response to a structured proposal: *"Nothing to say."* The founder\'s personal Telegram reply when contacted directly: *"stfu."*',
      'Within 72 hours of the refund refusal: natrocoin.net was taken offline (Wayback Machine preserved the complete pre-takedown snapshot), the NATRO link was removed from the founder\'s Instagram bio, and the paid promotional video by KOL @jrcryptex (114K followers) was deleted from Instagram.',
      'A formal letter was delivered to Spribe legal channels (`info@spribe.co`, `legal@spribe.co`, and two named executive addresses) on 25 May 2026 at 12:24 UTC. As of release: no public response.',
    ],
    caseFileHeading: 'Case file',
    caseFileBody:
      'The full file — 25 documented exhibits (Telegram chat logs, on-chain trail, before/after screenshots, KOL deletion records, the complete Wayback-preserved website), §V Named Parties section, §VI Primary Sources index, §VIII FAQ — is at [natro.meme](https://natro.meme). Available in 8 languages: EN · RU · UK · KA · FR · DE · ES · AR.\n\nThe file is structured as an investigative document, not a personal grievance. Editorial framing follows third-person factual reporting; no scam / fraud conclusions are drawn in the file\'s voice — readers are presented primary sources and draw their own.',
    ageNoteHeading: 'Note on the founder\'s age',
    ageNoteBody:
      'Alex Natroshvili was 15 years old at the time of the launch (DOB 14 Sep 2010; corroborated via [Tapology amateur boxing profile](https://tapology.com/fightcenter/fighters/540307-alex-natroshvili)). David Natroshvili directed presale contact to his minor son\'s personal Telegram from his own verified Spribe-CEO account.',
    rorHeading: 'Right of reply',
    rorBody:
      'The case file maintains an open right of reply. Any party named in the document may submit a verbatim response to be appended to the record. None has been received as of release.',
    contactHeading: 'Contact',
    contactBody:
      '**Compiler:** [@btc3050](https://t.me/btc3050) (Telegram)\n\n**File:** [natro.meme](https://natro.meme)\n\n**Wayback archive (single strongest source):** [web.archive.org/web/20260521213245/https://natrocoin.net/](https://web.archive.org/web/20260521213245/https://natrocoin.net/)',
    coverageHeading: 'In the press',
    coverageIntro:
      'External coverage as the case circulates in the industry. Reproduced with attribution — characterizations are the outlets’ own, not the file’s. This section will grow.',
    coverage: [
      {
        ...COVERAGE_IGAMING_INSIDES,
        meta: 'iGaming trade publication · LinkedIn · 30 May 2026',
        title: '“Spribe founder David Natroshvili accused of crypto scam”',
        body:
          'An editor at the iGaming trade outlet **iGaming Insides** published a Russian-language summary of the case on LinkedIn. It recounts the family-name pitch (*"most coin founders are anonymous, Alex isn’t"*), David Natroshvili’s pre-launch presale Stories shot over a Bentley and a Ferrari with a $1,500 minimum and a direct line to his son, the near-empty tier rooms (Foyer 13, Floor 10, Lounge 2 holders + 3 admins, Inner Circle never created), the ~98% collapse, the *"Nothing to say"* and *"stfu"* refusals, and the 72-hour evidence scrub — noting the Wayback Machine preserved the site. The post closes: *"Very strange business, of course."*',
        urlLabel: 'iGaming Insides — Telegram channel',
        imageAlt: 'iGaming Insides LinkedIn post on the $NATRO case',
      },
    ],
    downloadsHeading: 'Downloads & quick links',
    downloadsLabels: {
      txt: 'Press release (plain text)',
      factSheet: 'One-page fact sheet',
      factSheetSub: 'Scannable numbers + timeline (print-ready)',
      waybackArchive: 'Wayback archive — natrocoin.net (pre-takedown)',
      fullFile: 'Full case file (interactive)',
      exhibitArchive: 'Exhibit archive — index of 25 primary-source documents',
    },
  },
  ru: {
    forImmediateRelease: 'Для немедленной публикации',
    dateline: '28 мая 2026 · Киев / Монако',
    headline:
      'Solana-мемкоин, фамилия, обвал на 98%: документированный кейс по $NATRO',
    dek: 'Основатель и CEO Spribe Давид Натрошвили лично собирал пресейл-инвестиции в Solana-мемкоин $NATRO, запущенный 21 мая 2026 года его 15-летним сыном Алексом Натрошвили. Токен обвалился на 98% за 48 часов; запросы на возврат отклонены; команда удалила следы — всё задокументировано в первичных источниках.',
    lede: 'Документированный кейс, опубликованный сегодня на [natro.meme](https://natro.meme), представляет первичные источники по запуску и 98%-ному обвалу $NATRO — Solana-мемкоина, маркетинг которого строился на фамилии Натрошвили и связи со Spribe / Aviator.',
    keyFactsHeading: 'Ключевые факты (все верифицированы первичными источниками)',
    keyFacts: [
      '21 мая 2026 года в 20:11 UTC токен $NATRO запущен на Pump.fun. Адрес контракта: `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF`.',
      'В 24 часа до запуска Давид Натрошвили — основатель и CEO Spribe (iGaming-студии, разработчика глобального crash-style гемблинг-продукта Aviator) — опубликовал серию Instagram Stories со своего верифицированного аккаунта (@davidnatro1), лично предлагая платный пресейл, называя себя соучастником (*«with me & @natroalex»*), устанавливая минимальный порог входа $1 500 и направляя контакт на личный Telegram своего несовершеннолетнего сына (@natroalex1). Пять Stories сохранены до истечения срока.',
      'Цена токена обвалилась приблизительно на 98% за 48 часов. Рыночная капитализация упала с заявленных при запуске $200K+ до ≈$36 (по данным API Pump.fun на момент публикации).',
      'Запросы на возврат от пострадавших ранних держателей отклонены. Ответ админа команды на структурированное предложение: *«Nothing to say».* Личный ответ основателя в Telegram при прямом обращении: *«stfu».*',
      'За 72 часа после отказа: сайт natrocoin.net отключён (Wayback Machine сохранил полный снимок до удаления), ссылка на NATRO удалена из биографии Instagram основателя, оплаченное промо-видео KOL @jrcryptex (114K подписчиков) удалено из Instagram.',
      'Официальное письмо направлено в юридические каналы Spribe (`info@spribe.co`, `legal@spribe.co`, плюс два именных executive-адреса) 25 мая 2026 года в 12:24 UTC. На момент публикации релиза: публичной реакции не было.',
    ],
    caseFileHeading: 'Кейс-файл',
    caseFileBody:
      'Полный файл — 25 задокументированных экспонатов (логи Telegram-каналов, on-chain-след, скриншоты до/после, удалённые KOL-материалы, полностью сохранённый сайт), §V «Названные стороны», §VI «Первичные источники», §VIII FAQ — доступен на [natro.meme](https://natro.meme). На 8 языках: EN · RU · UK · KA · FR · DE · ES · AR.\n\nФайл структурирован как investigative-документ, а не личная претензия. Редакционная рамка — third-person factual reporting; никаких выводов о scam / fraud в голосе файла не делается — читателю представлены первичные источники, выводы он делает сам.',
    ageNoteHeading: 'Заметка о возрасте основателя',
    ageNoteBody:
      'Алексу Натрошвили на момент запуска было 15 лет (дата рождения 14 сентября 2010 года; подтверждено [профилем на Tapology](https://tapology.com/fightcenter/fighters/540307-alex-natroshvili) в любительском боксе). Давид Натрошвили направлял контакт по пресейлу на личный Telegram своего несовершеннолетнего сына — со своего верифицированного аккаунта CEO Spribe.',
    rorHeading: 'Право на ответ',
    rorBody:
      'Кейс-файл сохраняет открытое право на ответ. Любая сторона, названная в документе, может прислать дословный ответ — он будет приложен к записи. На момент публикации релиза такого ответа не поступило.',
    contactHeading: 'Контакты',
    contactBody:
      '**Укладчик:** [@btc3050](https://t.me/btc3050) (Telegram)\n\n**Файл:** [natro.meme](https://natro.meme)\n\n**Wayback архив (сильнейший единичный источник):** [web.archive.org/web/20260521213245/https://natrocoin.net/](https://web.archive.org/web/20260521213245/https://natrocoin.net/)',
    coverageHeading: 'Об этом пишут',
    coverageIntro:
      'Внешнее освещение по мере распространения кейса в индустрии. Воспроизводится с атрибуцией — формулировки на совести изданий, а не файла. Раздел будет пополняться.',
    coverage: [
      {
        ...COVERAGE_IGAMING_INSIDES,
        meta: 'Отраслевое iGaming-издание · LinkedIn · 30 мая 2026',
        title: '«Основателя SPRIBE, Давида Натрошвили, обвинили в крипто-скаме»',
        body:
          'Редактор отраслевого iGaming-издания **iGaming Insides** опубликовал в LinkedIn разбор кейса на русском. В нём — ставка на фамилию (*«большинство основателей монет анонимны, а Алекс — нет»*), предзапусковые Stories Давида Натрошвили на фоне Bentley и Ferrari с порогом входа $1 500 и прямой отсылкой к сыну, почти пустые тир-чаты (Foyer — 13, Floor — 10, Lounge — 2 держателя + 3 админа, Inner Circle не создан вовсе), обвал ~98%, отказы *«Nothing to say»* и *«stfu»*, и зачистка следов за 72 часа — с упоминанием, что копию сайта сохранил веб-архив. Пост заканчивается словами: *«Очень странные дела конечно».*',
        urlLabel: 'iGaming Insides — Telegram-канал',
        imageAlt: 'Пост iGaming Insides в LinkedIn о кейсе $NATRO',
      },
    ],
    downloadsHeading: 'Скачать и быстрые ссылки',
    downloadsLabels: {
      txt: 'Пресс-релиз (plain text)',
      factSheet: 'Одностраничный fact-sheet',
      factSheetSub: 'Сканируемые цифры + хронология (print-ready)',
      waybackArchive: 'Wayback архив — natrocoin.net (до удаления)',
      fullFile: 'Полный кейс-файл (интерактивный)',
      exhibitArchive: 'Архив экспонатов — индекс 25 первичных источников',
    },
  },
};

// Non-first-class locales translated in ./press-i18n/*.ts (full press surface
// in every project language; falls back to EN only for unknown locales).
Object.assign(pressContent, { uk, ka, fr, de, es, ar });

export function getPressContent(locale: string): PressContent {
  return pressContent[locale] || pressContent.en;
}
