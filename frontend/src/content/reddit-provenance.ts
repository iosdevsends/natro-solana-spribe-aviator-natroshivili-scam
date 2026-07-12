import type { Locale } from '@/i18n/routing';

/**
 * Localised copy for /reddit-anticasino.
 *
 * A single-subject page on one structural fact about how this story travels:
 * secondary coverage can corroborate the documented events without carrying a
 * link back to the primary record or naming who compiled it. The example is a
 * real r/anticasino thread (screenshot, Exhibit) that recounts the same
 * sequence this file documents — the $NATRO Solana launch, the ~98% collapse,
 * the "stfu" refusal, the takedowns — while crediting only "multiple posts" and
 * linking no source.
 *
 * The thesis is carried by the visible thread text and the subreddit's own
 * posted rules ("No casino links or referrals", "No spam"), not by editorial
 * accusation: no claim that any link was targeted for removal, no insult to the
 * poster (who is corroborating the record) or to the platform. The page's point
 * is provenance — a summary with no path back leaves the reader unable to
 * verify, so the file supplies the link the summary omitted.
 *
 * Verbatim thread quotes stay English across every locale — they are reproduced
 * as written. Body fields use inline markdown rendered by <Prose>.
 *
 * Authored in EN + RU (the languages the file's author can verify); the getter
 * falls back to EN for the other locales until a native review is commissioned.
 */
export interface RedditProvenanceContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  standfirst: string;
  pullQuote: string;
  imgAlt: string;
  imgCaption: string;
  threadKicker: string;
  threadBody: string;
  missingKicker: string;
  missingBody: string;
  whyKicker: string;
  whyBody: string;
  recordKicker: string;
  recordBody: string;
  methodKicker: string;
  methodBody: string;
  replyKicker: string;
  replyBefore: string;
  replyProfileLabel: string;
  replyMid: string;
  replyPressLabel: string;
  replyAfter: string;
}

/** The thread this page is about — one place so the page and JSON-LD agree. */
export const REDDIT_THREAD_URL =
  'https://www.reddit.com/r/anticasino/comments/1u06s0t/son_of_aviator_ceo_allegedly_ran_a_memecoin_scam/';
export const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/alexdavidnatroshviliscam';

/**
 * Screenshot of the r/anticasino thread, rendered as a standalone figure that
 * links out to the live thread. Deliberately NOT added to the primary exhibit
 * inventory (content/exhibits.ts): it is secondary coverage, not first-party
 * evidence, and should not appear in the case-file gallery or the lightbox set.
 * Drop the capture at public${REDDIT_SHOT.src} — the file renders once present.
 */
export const REDDIT_SHOT = {
  src: '/exhibits/ex28-reddit-anticasino-thread.png',
  width: 2042,
  height: 1078,
};

// Verbatim thread title — reproduced as written; "allegedly"/"scam" are the
// poster's words, quoted, not the file's characterisation.
export const THREAD_TITLE =
  'Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.';

const en: RedditProvenanceContent = {
  metaTitle: 'The $NATRO story on Reddit — corroborated, but with no link home',
  metaDescription:
    'An r/anticasino thread recounts the same $NATRO events this file documents — the Solana launch, the ~98% collapse, the “stfu” refusal, the takedowns — crediting only “multiple posts” and linking no source. A summary with no path back can’t be verified; this is the primary, sourced, archived record it draws on.',
  kicker: 'How the story travels · provenance',
  h1: 'Corroborated on Reddit — with no link home',
  standfirst:
    'A community thread tells the $NATRO story accurately, then leaves the reader nowhere to check it. The account is right; the citation is missing. This page is the source the summary didn’t link.',
  pullQuote:
    'A story can be repeated everywhere and sourced nowhere. Repetition is reach; provenance is proof — and only one of them survives a takedown.',
  imgAlt:
    'Screenshot of an r/anticasino Reddit thread titled “Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.”',
  imgCaption:
    'r/anticasino · “Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.” The post recounts the $NATRO sequence and credits “multiple posts”; no primary source is linked. Tap to open the live thread.',
  threadKicker: 'The same story, told secondhand',
  threadBody:
    'The thread gets the facts right. It names **Alex Natroshvili**, *“reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator),”* describes the token sold as a *“networking coin,”* records that *“$NATRO dropped roughly 98% within days of launch,”* that *“when holders asked for refunds, the owner reportedly replied ‘stfu,’”* and that *“three days in, the site and all marketing were taken down.”* Every one of those is in this file, sourced. The thread reaches an audience this file never will — and sends none of them anywhere they can verify it.',
  missingKicker: 'The link that isn’t there',
  missingBody:
    'Read the post for its evidence and there is none to follow. The sourcing is *“According to multiple posts”* — no archive, no on-chain address, no link to the primary record, and no name for whoever assembled the account in the first place. The reader is asked to trust a summary of a summary. That is not a failing of the person who wrote it; it is what a link-less repost is. A claim you cannot trace is a claim that disappears the moment the next page is deleted — which, for $NATRO, is exactly what already happened to the launch site, the promo video, and the founder’s bio link.',
  whyKicker: 'Why summaries travel without their source',
  whyBody:
    'This is structural, not personal. Large platforms moderate outbound links by default: r/anticasino’s own posted rules, visible on the same page, include *“No casino links or referrals”* and *“No spam,”* and automated filters on every major network treat unfamiliar outbound domains as suspect. Aggregation norms do the rest — a story gets retold in the platform’s own words, screenshots stand in for citations, and the trail back to the first-party record thins with each repost. The result is not that the truth is suppressed; it is that the **provenance** is. The account survives; the path to verify it does not.',
  recordKicker: 'The primary record',
  recordBody:
    'This file is the sourced version the summaries draw on. The **$NATRO Solana token** was solicited with a **$1,500 presale minimum** from verified family accounts, launched **21 May 2026**, and collapsed **~98%** within seventy-two hours; refunds were refused (*“Nothing to say”* from the team admin, *“stfu”* from the founder’s verified Telegram); within the same window the site was taken offline, the NATRO link was removed from the founder’s Instagram bio, and the paid promotional video was deleted. Each of those is backed here by a primary source — screenshots, the [archived launch site](https://web.archive.org/web/20260521213245/https://natrocoin.net/), and the [live token state on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). That is the link the thread was missing.',
  methodKicker: 'Method & sources',
  methodBody:
    'The quotations above are reproduced verbatim from the public r/anticasino thread linked at the top; the words *“allegedly”* and *“scam”* are the poster’s, quoted as written, and this page makes no claim that any specific link was removed by any specific party. The underlying record is archived and independently checkable: the launch site before takedown ([Wayback, 21 May 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) and the token state [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Right of reply',
  replyBefore:
    'Alex Natroshvili and Spribe are invited to respond; a formal notice was sent to Spribe’s published legal and corporate addresses on 25 May 2026. Documented factual corrections will be published alongside the record. The full sourcing is on his ',
  replyProfileLabel: 'profile',
  replyMid: ' and the ',
  replyPressLabel: 'press page',
  replyAfter: '.',
};

const ru: RedditProvenanceContent = {
  metaTitle: 'История $NATRO на Reddit — подтверждена, но без ссылки на первоисточник',
  metaDescription:
    'Тред в r/anticasino пересказывает те же события $NATRO, что задокументированы здесь — запуск на Solana, обвал ~98%, отказ «stfu», удаление сайта — ссылаясь лишь на «multiple posts» и не давая ни одного источника. Пересказ без обратного пути нельзя проверить; вот первичная, подтверждённая, заархивированная хроника, из которой он взят.',
  kicker: 'Как путешествует история · происхождение',
  h1: 'Подтверждено на Reddit — но без ссылки на источник',
  standfirst:
    'Тред в сообществе излагает историю $NATRO точно — и не оставляет читателю ни одного способа её проверить. Изложение верное; ссылки нет. Эта страница — тот самый источник, который пересказ не привёл.',
  pullQuote:
    'Историю можно повторить везде и не сослаться нигде. Повтор — это охват; происхождение — это доказательство. И только одно из них переживает удаление.',
  imgAlt:
    'Скриншот треда r/anticasino на Reddit с заголовком «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.»',
  imgCaption:
    'r/anticasino · «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.» Пост пересказывает последовательность $NATRO и ссылается на «multiple posts»; ни один первоисточник не приведён. Нажмите, чтобы открыть живой тред.',
  threadKicker: 'Та же история, но из вторых рук',
  threadBody:
    'Факты в треде изложены верно. В нём назван **Alex Natroshvili**, *«reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)»*, описан токен, проданный как *«networking coin»*, зафиксировано, что *«$NATRO dropped roughly 98% within days of launch»*, что *«when holders asked for refunds, the owner reportedly replied “stfu”»*, и что *«three days in, the site and all marketing were taken down»*. Всё это есть в этом файле — с источниками. Тред доходит до аудитории, до которой этот файл не дойдёт никогда, — и не отправляет никого из неё туда, где это можно проверить.',
  missingKicker: 'Ссылки, которой нет',
  missingBody:
    'Ищешь в посте доказательства — идти не за чем. Всё обоснование — это *«According to multiple posts»*: ни архива, ни он-чейн-адреса, ни ссылки на первичную хронику, ни имени того, кто вообще собрал это изложение. Читателя просят поверить пересказу пересказа. Это не вина того, кто его написал; таков любой репост без ссылки. Утверждение, которое нельзя проследить, исчезает в тот момент, когда удаляют следующую страницу, — а для $NATRO именно это уже произошло с сайтом запуска, промо-видео и ссылкой в биографии основателя.',
  whyKicker: 'Почему пересказы путешествуют без источника',
  whyBody:
    'Это структурно, а не лично. Крупные платформы по умолчанию модерируют исходящие ссылки: собственные правила r/anticasino, видимые на той же странице, включают *«No casino links or referrals»* и *«No spam»*, а автоматические фильтры в любой крупной сети относятся к незнакомым внешним доменам как к подозрительным. Остальное довершают нормы агрегации — историю пересказывают словами самой платформы, скриншоты заменяют ссылки, и след к первоисточнику истончается с каждым репостом. В итоге подавляется не правда — подавляется **происхождение**. Изложение выживает; путь его проверить — нет.',
  recordKicker: 'Первичная хроника',
  recordBody:
    'Этот файл — та самая версия с источниками, из которой берут пересказы. **Токен $NATRO на Solana** собирали с **минимумом пресейла $1 500** с верифицированных семейных аккаунтов, запустили **21 мая 2026** и он обвалился на **~98%** за семьдесят два часа; в возврате отказали (*«Nothing to say»* от админа команды, *«stfu»* из верифицированного Telegram основателя); в то же окно сайт отключили, ссылку на NATRO убрали из биографии Instagram основателя, а оплаченное промо-видео удалили. Каждый из этих фактов подкреплён здесь первоисточником — скриншотами, [заархивированным сайтом запуска](https://web.archive.org/web/20260521213245/https://natrocoin.net/) и [текущим состоянием токена в он-чейне](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). Это и есть та ссылка, которой треду не хватало.',
  methodKicker: 'Метод и источники',
  methodBody:
    'Цитаты выше воспроизведены дословно из публичного треда r/anticasino, ссылка на который дана вверху; слова *«allegedly»* и *«scam»* принадлежат автору поста и приведены как написано, и эта страница не утверждает, что какая-либо конкретная ссылка была удалена какой-либо конкретной стороной. Лежащая в основе хроника заархивирована и проверяема независимо: сайт запуска до удаления ([Wayback, 21 мая 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) и состояние токена [в он-чейне](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Право на ответ',
  replyBefore:
    'Alex Natroshvili и Spribe приглашены ответить; формальное уведомление было направлено на опубликованные юридические и корпоративные адреса Spribe 25 мая 2026. Документированные фактические опровержения будут опубликованы рядом с хроникой. Полное обоснование — в его ',
  replyProfileLabel: 'профиле',
  replyMid: ' и на ',
  replyPressLabel: 'пресс-странице',
  replyAfter: '.',
};

const BY_LOCALE: Record<Locale, RedditProvenanceContent> = {
  en,
  ru,
  uk: en,
  ka: en,
  fr: en,
  de: en,
  es: en,
  ar: en,
  ur: en,
  hi: en,
};

export function getRedditProvenance(locale: Locale): RedditProvenanceContent {
  return BY_LOCALE[locale] || en;
}
