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
  width: 828,
  height: 1031,
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
    'This is structural, not personal. Large platforms moderate outbound links by default: r/anticasino’s own posted community rules include *“No casino links or referrals”* and *“No spam,”* and automated filters on every major network treat unfamiliar outbound domains as suspect. Aggregation norms do the rest — a story gets retold in the platform’s own words, screenshots stand in for citations, and the trail back to the first-party record thins with each repost. The result is not that the truth is suppressed; it is that the **provenance** is. The account survives; the path to verify it does not.',
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
    'Это структурно, а не лично. Крупные платформы по умолчанию модерируют исходящие ссылки: собственные опубликованные правила r/anticasino включают *«No casino links or referrals»* и *«No spam»*, а автоматические фильтры в любой крупной сети относятся к незнакомым внешним доменам как к подозрительным. Остальное довершают нормы агрегации — историю пересказывают словами самой платформы, скриншоты заменяют ссылки, и след к первоисточнику истончается с каждым репостом. В итоге подавляется не правда — подавляется **происхождение**. Изложение выживает; путь его проверить — нет.',
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

const uk: RedditProvenanceContent = {
  metaTitle: 'Історія $NATRO на Reddit — підтверджена, але без джерела',
  metaDescription: 'Тред у r/anticasino переказує ті самі події $NATRO, що задокументовані тут — запуск на Solana, обвал ~98%, відмову «stfu», видалення сайту — посилаючись лише на «multiple posts» і не наводячи жодного джерела. Переказ без зворотного шляху неможливо перевірити; ось первинна, підтверджена, заархівована хроніка, з якої його взято.',
  kicker: 'Як подорожує історія · походження',
  h1: 'Підтверджено на Reddit — але без посилання на джерело',
  standfirst: 'Тред у спільноті точно викладає історію $NATRO — і не залишає читачеві жодного способу її перевірити. Виклад правильний; посилання немає. Ця сторінка — те саме джерело, яке переказ не навів.',
  pullQuote: 'Історію можна повторити всюди й не послатися ніде. Повтор — це охоплення; походження — це доказ — і лише одне з них переживає видалення.',
  imgAlt: 'Скриншот треду Reddit у r/anticasino під назвою «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.»',
  imgCaption: 'r/anticasino · «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.» Допис переказує послідовність подій $NATRO і посилається на «multiple posts»; жодного первинного джерела не наведено. Торкніться, щоб відкрити живий тред.',
  threadKicker: 'Та сама історія, переказана з чужих слів',
  threadBody: 'Тред викладає факти правильно. У ньому названо **Alex Natroshvili**, *«reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)»*, описано токен, проданий як *«networking coin»*, зафіксовано, що *«$NATRO dropped roughly 98% within days of launch»*, що *«when holders asked for refunds, the owner reportedly replied „stfu“»*, і що *«three days in, the site and all marketing were taken down»*. Усе це є в цьому файлі — з джерелами. Тред доходить до аудиторії, до якої цей файл не дійде ніколи, — і не відправляє нікого з неї туди, де це можна перевірити.',
  missingKicker: 'Посилання, якого немає',
  missingBody: 'Прочитайте допис у пошуках доказів — і простежити нема за чим. Джерело вказано як *«According to multiple posts»* — жодного архіву, жодної адреси в блокчейні, жодного посилання на первинний запис і жодного імені того, хто первісно уклав цю розповідь. Читача просять довіряти переказу переказу. Це не провина того, хто його написав; це і є те, чим є репост без посилання. Твердження, яке неможливо відстежити, — це твердження, що зникає тієї миті, коли видаляють наступну сторінку, — а для $NATRO саме це вже сталося із сайтом запуску, промо-відео та посиланням у біографії засновника.',
  whyKicker: 'Чому перекази подорожують без свого джерела',
  whyBody: 'Це структурне, а не особисте. Великі платформи за замовчуванням модерують зовнішні посилання: у самих опублікованих правилах спільноти r/anticasino є *«No casino links or referrals»* та *«No spam»*, а автоматичні фільтри в кожній великій мережі вважають незнайомі зовнішні домени підозрілими. Решту довершують норми агрегації — історію переказують власними словами платформи, скриншоти заміняють посилання на джерела, а слід до першоджерела тоншає з кожним репостом. Наслідок не в тому, що придушено правду; а в тому, що придушено **походження**. Розповідь виживає; шлях до її перевірки — ні.',
  recordKicker: 'Первинний запис',
  recordBody: 'Цей файл — та сама версія з джерелами, з якої беруть перекази. **Токен $NATRO на Solana** збирали з **мінімумом пресейлу $1 500** з верифікованих сімейних акаунтів, запустили **21 травня 2026**, і він обвалився на **~98%** протягом сімдесяти двох годин; у поверненні коштів відмовили (*«Nothing to say»* від адміністратора команди, *«stfu»* з верифікованого Telegram засновника); у той самий проміжок сайт вимкнули, посилання на NATRO прибрали з біографії засновника в Instagram, а платне рекламне відео видалили. Кожен із цих фактів тут підкріплений первинним джерелом — скриншотами, [заархівованим сайтом запуску](https://web.archive.org/web/20260521213245/https://natrocoin.net/) та [актуальним станом токена в блокчейні](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). Це і є те посилання, якого бракувало треду.',
  methodKicker: 'Метод і джерела',
  methodBody: 'Наведені вище цитати відтворено дослівно з публічного треду r/anticasino, посилання на який є вгорі; слова *«allegedly»* та *«scam»* належать авторові допису й цитуються так, як написано, і ця сторінка не стверджує, що якесь конкретне посилання було видалене якоюсь конкретною стороною. Первинний запис заархівовано, і його можна перевірити незалежно: сайт запуску до видалення ([Wayback, 21 травня 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) і стан токена [в блокчейні](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Право на відповідь',
  replyBefore: 'Alex Natroshvili і Spribe запрошені відповісти; офіційне повідомлення було надіслано на опубліковані юридичні та корпоративні адреси Spribe 25 травня 2026 року. Задокументовані фактичні виправлення буде опубліковано разом із записом. Повне обґрунтування джерелами — у його ',
  replyProfileLabel: 'профілі',
  replyMid: ' та на ',
  replyPressLabel: 'прес-сторінці',
  replyAfter: '.',
};

const ka: RedditProvenanceContent = {
  metaTitle: '$NATRO-ის ისტორია Reddit-ზე — დადასტურებული, ოღონდ პირველწყაროს ბმულის გარეშე',
  metaDescription: 'r/anticasino-ს თრედი Reddit-ზე იმავე $NATRO-ის მოვლენებს გადმოსცემს, რომლებიც აქ არის დოკუმენტირებული — Alex Natroshvili, David Natroshvili-ს ვაჟი, Solana-ზე გაშვება, ~98%-იანი ვარდნა, უარი „stfu“, საიტის წაშლა — და მხოლოდ „multiple posts“-ს იშველიებს, ერთი წყაროს მითითების გარეშე. ეს არის ის პირველადი, წყაროებიანი, დაარქივებული ჩანაწერი, საიდანაც ის იღება.',
  kicker: 'როგორ მოგზაურობს ამბავი · წარმომავლობა',
  h1: 'დადასტურებული Reddit-ზე — პირველწყაროს ბმულის გარეშე',
  standfirst: 'სათემო თრედი $NATRO-ის ამბავს ზუსტად ჰყვება — და შემდეგ მკითხველს არსად უტოვებს გზას მის შესამოწმებლად. გადმოცემა სწორია; წყარო კი — აკლია. ეს გვერდი სწორედ ის წყაროა, რომელზეც შეჯამებამ ბმული არ მიუთითა.',
  pullQuote: 'ამბის გამეორება ყველგან შეიძლება და წყაროს მითითება — არსად. გამეორება არის მოცვა; წარმომავლობა არის მტკიცებულება — და მათგან მხოლოდ ერთი გადაურჩება წაშლას.',
  imgAlt: 'r/anticasino-ს Reddit-თრედის ეკრანის სურათი სათაურით „Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.“.',
  imgCaption: 'r/anticasino · „Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.“ პოსტი $NATRO-ის მოვლენათა თანმიმდევრობას გადმოგვცემს და „multiple posts“-ს იშველიებს; პირველწყარო არსად არის მითითებული. შეეხე ცოცხალი თრედის გასახსნელად.',
  threadKicker: 'იგივე ამბავი — მეორადად გადმოცემული',
  threadBody: 'თრედში ფაქტები სწორადაა გადმოცემული. მასში დასახელებულია **Alex Natroshvili**, *„reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator),“* აღწერილია ტოკენი, გაყიდული როგორც *„networking coin,“* დაფიქსირებულია, რომ *„$NATRO dropped roughly 98% within days of launch,“* რომ *„when holders asked for refunds, the owner reportedly replied ‘stfu,’“* და რომ *„three days in, the site and all marketing were taken down.“* ყოველი მათგანი ამ ფაილშია — წყაროებით. თრედი აღწევს აუდიტორიამდე, რომელამდეც ეს ფაილი ვერასოდეს მიაღწევს — და მათგან არავის აგზავნის იქ, სადაც ამის შემოწმებაა შესაძლებელი.',
  missingKicker: 'ბმული, რომელიც აქ არ არის',
  missingBody: 'წაიკითხე პოსტი მისი მტკიცებულების საძებნელად და გასაყოლი არაფერია. წყაროდ მითითებულია *„According to multiple posts“* — არც არქივი, არც ონ-ჩეინ მისამართი, არც ბმული პირველად ჩანაწერზე და არც სახელი იმისა, ვინც ეს გადმოცემა თავიდანვე შეადგინა. მკითხველს სთხოვენ, ენდოს შეჯამების შეჯამებას. ეს არ არის იმ ადამიანის ბრალი, ვინც ის დაწერა; ეს ის არის, რაც ბმულის გარეშე რეპოსტია. მტკიცება, რომლის კვალის დადგენაც შეუძლებელია, არის მტკიცება, რომელიც ქრება მაშინვე, როგორც კი შემდეგი გვერდი წაიშლება — რაც, $NATRO-ის შემთხვევაში, ზუსტად ის არის, რაც უკვე დაემართა გაშვების საიტს, სარეკლამო ვიდეოსა და დამფუძნებლის ბიოს ბმულს.',
  whyKicker: 'რატომ მოგზაურობს შეჯამებები წყაროს გარეშე',
  whyBody: 'ეს სტრუქტურულია, არა პირადი. მსხვილი პლატფორმები ნაგულისხმევად ზღუდავენ გარე ბმულებს: r/anticasino-ს გამოქვეყნებული სათემო წესები თავად შეიცავს პუნქტებს *„No casino links or referrals“* და *„No spam,“* ხოლო ავტომატური ფილტრები ყველა მსხვილ ქსელში უცნობ გარე დომენებს საეჭვოდ აღიქვამს. დანარჩენს აგრეგაციის ნორმები აკეთებს — ამბავი გადმოიცემა თავად პლატფორმის სიტყვებით, ციტირების ნაცვლად ეკრანის სურათები დგება, ხოლო კვალი პირველწყარო ჩანაწერისკენ ყოველ რეპოსტთან ერთად თხელდება. შედეგი ის კი არ არის, რომ სიმართლე იფარება; არამედ ის, რომ იფარება **წარმომავლობა**. გადმოცემა რჩება; მისი შემოწმების გზა — არა.',
  recordKicker: 'პირველადი ჩანაწერი',
  recordBody: 'ეს ფაილი არის სწორედ ის წყაროებიანი ვერსია, საიდანაც შეჯამებები იღებენ. **$NATRO Solana ტოკენი** შეგროვდა **$1,500 პრესეილის მინიმუმით** ვერიფიცირებული საოჯახო ანგარიშებიდან, გაშვდა **2026 წლის 21 მაისს** და ჩამოიშალა **~98%-ით** სამოცდათორმეტ საათში; თანხის დაბრუნებაზე უარი თქვეს (*„Nothing to say“* გუნდის ადმინისგან, *„stfu“* დამფუძნებლის ვერიფიცირებული Telegram-იდან); იმავე ფანჯარაში საიტი გათიშეს, NATRO-ის ბმული ამოიღეს დამფუძნებლის Instagram-ის ბიოდან, ხოლო ფასიანი სარეკლამო ვიდეო წაშალეს. თითოეული მათგანი აქ პირველწყაროთია გამყარებული — ეკრანის სურათებით, [დაარქივებული გაშვების საიტით](https://web.archive.org/web/20260521213245/https://natrocoin.net/) და [ტოკენის ცოცხალი მდგომარეობით ონ-ჩეინში](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). ეს არის ის ბმული, რომელიც თრედს აკლდა.',
  methodKicker: 'მეთოდი და წყაროები',
  methodBody: 'ზემოთ მოცემული ციტატები სიტყვა-სიტყვით არის აღწარმოებული ზემოთ, სათაურთან, მითითებული საჯარო r/anticasino თრედიდან; სიტყვები *„allegedly“* და *„scam“* პოსტის ავტორისაა, ციტირებული ისე, როგორც დაიწერა, და ეს გვერდი არ ამტკიცებს, რომ რომელიმე კონკრეტული ბმული რომელიმე კონკრეტულმა მხარემ მოხსნა. საფუძვლად მდებარე ჩანაწერი დაარქივებულია და დამოუკიდებლად შესამოწმებელია: გაშვების საიტი წაშლამდე ([Wayback, 2026 წლის 21 მაისი](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) და ტოკენის მდგომარეობა [ონ-ჩეინში](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'პასუხის უფლება',
  replyBefore: 'Alex Natroshvili და Spribe მოწვეულნი არიან პასუხის გასაცემად; ფორმალური შეტყობინება გაიგზავნა Spribe-ის გამოქვეყნებულ იურიდიულ და კორპორაციულ მისამართებზე 2026 წლის 25 მაისს. დოკუმენტირებული ფაქტობრივი შესწორებები გამოქვეყნდება ჩანაწერის გვერდით. სრული დასაბუთება — მის ',
  replyProfileLabel: 'პროფილზე',
  replyMid: ' და ',
  replyPressLabel: 'პრესის გვერდზე',
  replyAfter: '.',
};

const fr: RedditProvenanceContent = {
  metaTitle: 'Reddit corrobore l’histoire de $NATRO, sans lien vers la source',
  metaDescription: 'Un thread Reddit (r/anticasino) relate les mêmes faits $NATRO que ce dossier documente — Alex Natroshvili, fils de David Natroshvili, le lancement sur Solana, l’effondrement de ~98 %, le refus « stfu », les retraits — en ne créditant que « multiple posts », sans aucun lien. Un résumé sans chemin de retour ne peut être vérifié ; voici la chronique primaire, sourcée et archivée dont il s’inspire.',
  kicker: 'Comment l’histoire circule · provenance',
  h1: 'Corroborée sur Reddit — sans lien vers la source',
  standfirst: 'Un thread communautaire raconte l’histoire de $NATRO avec exactitude, puis ne laisse au lecteur aucun moyen de la vérifier. Le récit est juste ; la citation manque. Cette page est la source que le résumé n’a pas liée.',
  pullQuote: 'Une histoire peut être répétée partout et sourcée nulle part. La répétition, c’est la portée ; la provenance, c’est la preuve — et une seule des deux survit à une suppression.',
  imgAlt: 'Capture d’écran d’un thread Reddit r/anticasino intitulé « Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days. »',
  imgCaption: 'r/anticasino · « Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days. » Le post relate la séquence $NATRO et crédite « multiple posts » ; aucune source primaire n’est liée. Touchez pour ouvrir le thread en direct.',
  threadKicker: 'La même histoire, racontée de seconde main',
  threadBody: 'Le thread rapporte les faits avec exactitude. Il nomme **Alex Natroshvili**, *« reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator) »*, décrit le token vendu comme un *« networking coin »*, consigne que *« $NATRO dropped roughly 98% within days of launch »*, que *« when holders asked for refunds, the owner reportedly replied “stfu” »*, et que *« three days in, the site and all marketing were taken down »*. Chacun de ces éléments figure dans ce dossier, avec sa source. Le thread touche un public que ce dossier n’atteindra jamais — et n’en envoie aucun là où il serait possible de le vérifier.',
  missingKicker: 'Le lien qui n’y est pas',
  missingBody: 'Lisez le post pour ses preuves : il n’y a rien à suivre. La source, c’est *« According to multiple posts »* — pas d’archive, pas d’adresse on-chain, pas de lien vers la chronique primaire, et aucun nom pour celui qui a assemblé le récit au départ. On demande au lecteur de faire confiance à un résumé de résumé. Ce n’est pas un défaut de la personne qui l’a écrit ; c’est la nature même d’un repost sans lien. Une affirmation que l’on ne peut retracer est une affirmation qui disparaît à l’instant où la page suivante est supprimée — ce qui, pour $NATRO, est exactement ce qui est déjà arrivé au site de lancement, à la vidéo promotionnelle et au lien de bio du fondateur.',
  whyKicker: 'Pourquoi les résumés circulent sans leur source',
  whyBody: 'C’est structurel, pas personnel. Les grandes plateformes modèrent par défaut les liens sortants : les règles publiées de la communauté r/anticasino elles-mêmes incluent *« No casino links or referrals »* et *« No spam »*, et les filtres automatiques de tous les grands réseaux considèrent les domaines sortants inconnus comme suspects. Les normes d’agrégation font le reste — une histoire est reprise dans les propres mots de la plateforme, les captures d’écran tiennent lieu de citations, et la piste qui remonte à la source de première main s’amincit à chaque repost. Le résultat n’est pas que la vérité soit étouffée ; c’est la **provenance** qui l’est. Le récit survit ; le chemin pour le vérifier, non.',
  recordKicker: 'La chronique primaire',
  recordBody: 'Ce dossier est la version sourcée dont s’inspirent les résumés. Le **token $NATRO sur Solana** a été sollicité avec un **minimum de prévente de 1 500 $** depuis des comptes familiaux vérifiés, lancé le **21 mai 2026**, et s’est effondré de **~98 %** en soixante-douze heures ; les remboursements ont été refusés (*« Nothing to say »* de l’administrateur de l’équipe, *« stfu »* depuis le Telegram vérifié du fondateur) ; dans le même laps de temps, le site a été mis hors ligne, le lien NATRO a été retiré de la bio Instagram du fondateur, et la vidéo promotionnelle payante a été supprimée. Chacun de ces éléments est étayé ici par une source primaire — captures d’écran, le [site de lancement archivé](https://web.archive.org/web/20260521213245/https://natrocoin.net/), et l’[état du token en direct on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). C’est le lien qui manquait au thread.',
  methodKicker: 'Méthode et sources',
  methodBody: 'Les citations ci-dessus sont reproduites mot pour mot depuis le thread public r/anticasino lié en haut de page ; les mots *« allegedly »* et *« scam »* sont ceux de l’auteur du post, cités tels quels, et cette page n’affirme pas qu’un lien précis ait été retiré par une partie précise. La chronique sous-jacente est archivée et vérifiable de façon indépendante : le site de lancement avant sa suppression ([Wayback, 21 mai 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) et l’état du token [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Droit de réponse',
  replyBefore: 'Alex Natroshvili et Spribe sont invités à répondre ; un avis formel a été envoyé aux adresses juridiques et administratives publiées de Spribe le 25 mai 2026. Les corrections factuelles documentées seront publiées aux côtés de la chronique. L’ensemble des sources figure sur son ',
  replyProfileLabel: 'profil',
  replyMid: ' et sur la ',
  replyPressLabel: 'page presse',
  replyAfter: '.',
};

const de: RedditProvenanceContent = {
  metaTitle: 'Die $NATRO-Story auf Reddit — bestätigt, aber ohne Quelle',
  metaDescription: 'Ein Reddit-Thread in r/anticasino schildert dieselben $NATRO-Ereignisse um Alex Natroshvili und David Natroshvili — Solana-Start, Einbruch um ~98 %, die „stfu“-Weigerung, die Löschungen — nennt als Beleg aber nur „multiple posts“ und verlinkt keine Quelle. Eine Zusammenfassung ohne Rückweg ist nicht überprüfbar; hier ist die primäre, belegte, archivierte Chronik dahinter.',
  kicker: 'Wie die Geschichte wandert · Herkunft',
  h1: 'Auf Reddit bestätigt — ohne Link zur Quelle',
  standfirst: 'Ein Community-Thread erzählt die $NATRO-Geschichte korrekt und lässt dem Leser dann keinerlei Möglichkeit, sie zu überprüfen. Die Darstellung stimmt; der Beleg fehlt. Diese Seite ist die Quelle, die die Zusammenfassung nicht verlinkt hat.',
  pullQuote: 'Eine Geschichte kann überall wiederholt und nirgends belegt werden. Wiederholung ist Reichweite; Herkunft ist Beweis — und nur eines von beiden überlebt eine Löschung.',
  imgAlt: 'Screenshot eines Reddit-Threads in r/anticasino mit dem Titel „Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.“',
  imgCaption: 'r/anticasino · „Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.“ Der Beitrag gibt den $NATRO-Ablauf wieder und verweist auf „multiple posts“; es ist keine primäre Quelle verlinkt. Zum Öffnen des Live-Threads tippen.',
  threadKicker: 'Dieselbe Geschichte, aus zweiter Hand',
  threadBody: 'Die Fakten im Thread stimmen. Genannt wird **Alex Natroshvili**, *„reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)“*, beschrieben wird der Token, verkauft als *„networking coin“*, festgehalten wird, dass *„$NATRO dropped roughly 98% within days of launch“*, dass *„when holders asked for refunds, the owner reportedly replied ‚stfu‘“* und dass *„three days in, the site and all marketing were taken down“*. All das steht in dieser Datei — mit Quellen. Der Thread erreicht ein Publikum, das diese Datei nie erreichen wird — und schickt niemanden dorthin, wo es sich überprüfen ließe.',
  missingKicker: 'Der Link, der fehlt',
  missingBody: 'Liest man den Beitrag auf Belege hin, gibt es keinen, dem man folgen könnte. Die Quellenangabe lautet *„According to multiple posts“* — kein Archiv, keine On-Chain-Adresse, kein Link zur primären Aufzeichnung und kein Name dessen, der die Darstellung überhaupt zusammengetragen hat. Vom Leser wird verlangt, der Zusammenfassung einer Zusammenfassung zu vertrauen. Das ist kein Versäumnis der Person, die ihn geschrieben hat; es ist schlicht, was ein Repost ohne Link ist. Eine Behauptung, die sich nicht zurückverfolgen lässt, ist eine Behauptung, die in dem Moment verschwindet, in dem die nächste Seite gelöscht wird — was für $NATRO genau das ist, was mit der Launch-Website, dem Werbevideo und dem Bio-Link des Gründers bereits geschehen ist.',
  whyKicker: 'Warum Zusammenfassungen ohne ihre Quelle reisen',
  whyBody: 'Das ist strukturell, nicht persönlich. Große Plattformen moderieren ausgehende Links standardmäßig: Zu den öffentlich geposteten Community-Regeln von r/anticasino gehören *„No casino links or referrals“* und *„No spam“*, und automatische Filter in jedem großen Netzwerk behandeln unbekannte ausgehende Domains als verdächtig. Den Rest erledigen die Normen der Aggregation — eine Geschichte wird in den eigenen Worten der Plattform nacherzählt, Screenshots treten an die Stelle von Quellenangaben, und die Spur zurück zur Aufzeichnung aus erster Hand wird mit jedem Repost dünner. Das Ergebnis ist nicht, dass die Wahrheit unterdrückt wird; es ist, dass die **Herkunft** unterdrückt wird. Die Darstellung überlebt; der Weg, sie zu überprüfen, nicht.',
  recordKicker: 'Die primäre Aufzeichnung',
  recordBody: 'Diese Datei ist die belegte Fassung, aus der die Zusammenfassungen schöpfen. Der **$NATRO-Token auf Solana** wurde mit einem **Presale-Minimum von 1.500 $** von verifizierten Familienkonten eingeworben, ging am **21. Mai 2026** an den Start und brach binnen zweiundsiebzig Stunden um **~98 %** ein; Rückerstattungen wurden verweigert (*„Nothing to say“* vom Team-Admin, *„stfu“* vom verifizierten Telegram des Gründers); im selben Zeitraum wurde die Website offline genommen, der NATRO-Link aus der Instagram-Bio des Gründers entfernt und das bezahlte Werbevideo gelöscht. Jeder dieser Punkte ist hier durch eine primäre Quelle belegt — Screenshots, die [archivierte Launch-Website](https://web.archive.org/web/20260521213245/https://natrocoin.net/) und der [Live-Zustand des Tokens on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). Das ist der Link, der dem Thread fehlte.',
  methodKicker: 'Methode & Quellen',
  methodBody: 'Die obigen Zitate sind wortgetreu aus dem oben verlinkten öffentlichen r/anticasino-Thread übernommen; die Wörter *„allegedly“* und *„scam“* stammen vom Verfasser und sind so zitiert, wie sie geschrieben wurden, und diese Seite erhebt keinerlei Behauptung, dass ein bestimmter Link von einer bestimmten Partei entfernt worden sei. Die zugrunde liegende Aufzeichnung ist archiviert und unabhängig überprüfbar: die Launch-Website vor der Löschung ([Wayback, 21. Mai 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) und der Token-Zustand [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Recht auf Gegendarstellung',
  replyBefore: 'Alex Natroshvili und Spribe sind eingeladen, Stellung zu nehmen; eine formelle Mitteilung wurde am 25. Mai 2026 an die veröffentlichten rechtlichen und geschäftlichen Adressen von Spribe gesendet. Dokumentierte sachliche Korrekturen werden gemeinsam mit der Aufzeichnung veröffentlicht. Die vollständige Quellenlage findet sich in seinem ',
  replyProfileLabel: 'Profil',
  replyMid: ' und auf der ',
  replyPressLabel: 'Presseseite',
  replyAfter: '.',
};

const es: RedditProvenanceContent = {
  metaTitle: 'La historia de $NATRO en Reddit — corroborada, pero sin fuente',
  metaDescription: 'Un hilo de r/anticasino relata los mismos hechos de $NATRO que documenta este archivo —el lanzamiento en Solana, el desplome del ~98 %, la negativa «stfu», las retiradas— atribuyéndolo solo a «multiple posts» y sin enlazar ninguna fuente. Un resumen sin camino de vuelta no puede verificarse; este es el registro primario, con fuentes y archivado, del que bebe.',
  kicker: 'Cómo viaja la historia · procedencia',
  h1: 'Corroborada en Reddit — sin enlace a la fuente',
  standfirst: 'Un hilo de la comunidad cuenta la historia de $NATRO con precisión y luego no deja al lector ningún sitio donde comprobarla. El relato es correcto; falta la cita. Esta página es la fuente que el resumen no enlazó.',
  pullQuote: 'Una historia puede repetirse en todas partes y no citarse en ninguna. La repetición es alcance; la procedencia es prueba —y solo una de las dos sobrevive a una retirada.',
  imgAlt: 'Captura de pantalla de un hilo de Reddit de r/anticasino titulado «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.»',
  imgCaption: 'r/anticasino · «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.» La publicación relata la secuencia de $NATRO y solo cita «multiple posts»; no se enlaza ninguna fuente primaria. Toca para abrir el hilo en directo.',
  threadKicker: 'La misma historia, contada de segunda mano',
  threadBody: 'El hilo cuenta bien los hechos. Nombra a **Alex Natroshvili**, *«reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)»*, describe el token vendido como una *«networking coin»*, registra que *«$NATRO dropped roughly 98% within days of launch»*, que *«when holders asked for refunds, the owner reportedly replied “stfu”»*, y que *«three days in, the site and all marketing were taken down»*. Cada uno de esos datos está en este archivo, con su fuente. El hilo llega a un público al que este archivo nunca llegará —y no manda a ninguno de ellos a ningún sitio donde puedan verificarlo.',
  missingKicker: 'El enlace que no está',
  missingBody: 'Lee la publicación en busca de sus pruebas y no hay ninguna que seguir. La fuente es *«According to multiple posts»* —ningún archivo, ninguna dirección on-chain, ningún enlace al registro primario y ningún nombre de quien elaboró el relato en primer lugar. Se le pide al lector que confíe en un resumen de un resumen. Eso no es un fallo de quien lo escribió; es lo que es una republicación sin enlaces. Una afirmación que no se puede rastrear es una afirmación que desaparece en el momento en que se elimina la página siguiente —lo cual, en el caso de $NATRO, es exactamente lo que ya les ocurrió al sitio de lanzamiento, al vídeo promocional y al enlace de la biografía del fundador.',
  whyKicker: 'Por qué los resúmenes viajan sin su fuente',
  whyBody: 'Esto es estructural, no personal. Las grandes plataformas moderan los enlaces salientes por defecto: las propias reglas de la comunidad publicadas en r/anticasino incluyen *«No casino links or referrals»* y *«No spam»*, y los filtros automáticos de cada gran red tratan como sospechosos los dominios salientes desconocidos. Las normas de agregación hacen el resto: una historia se vuelve a contar con las palabras de la propia plataforma, las capturas de pantalla hacen las veces de citas y el rastro de vuelta al registro de primera mano se adelgaza con cada republicación. El resultado no es que se suprima la verdad; es que se suprime la **procedencia**. El relato sobrevive; el camino para verificarlo, no.',
  recordKicker: 'El registro primario',
  recordBody: 'Este archivo es la versión con fuentes de la que beben los resúmenes. El **token $NATRO en Solana** se solicitó con un **mínimo de preventa de 1500 $** desde cuentas familiares verificadas, se lanzó el **21 de mayo de 2026** y se desplomó un **~98 %** en setenta y dos horas; se rechazaron los reembolsos (*«Nothing to say»* del administrador del equipo, *«stfu»* desde el Telegram verificado del fundador); en ese mismo intervalo se retiró el sitio, se eliminó el enlace de NATRO de la biografía de Instagram del fundador y se borró el vídeo promocional de pago. Cada uno de esos hechos está respaldado aquí por una fuente primaria: capturas de pantalla, el [sitio de lanzamiento archivado](https://web.archive.org/web/20260521213245/https://natrocoin.net/) y el [estado del token on-chain en directo](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). Ese es el enlace que le faltaba al hilo.',
  methodKicker: 'Método y fuentes',
  methodBody: 'Las citas anteriores se reproducen textualmente del hilo público de r/anticasino enlazado arriba; las palabras *«allegedly»* y *«scam»* son del autor de la publicación, citadas tal cual, y esta página no afirma que ningún enlace concreto haya sido retirado por ninguna parte concreta. El registro subyacente está archivado y se puede comprobar de forma independiente: el sitio de lanzamiento antes de su retirada ([Wayback, 21 de mayo de 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) y el estado del token [on-chain](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'Derecho de réplica',
  replyBefore: 'Se invita a Alex Natroshvili y a Spribe a responder; el 25 de mayo de 2026 se envió una notificación formal a las direcciones legales y corporativas publicadas de Spribe. Las correcciones fácticas documentadas se publicarán junto al registro. Toda la documentación con fuentes está en su ',
  replyProfileLabel: 'perfil',
  replyMid: ' y en la ',
  replyPressLabel: 'página de prensa',
  replyAfter: '.',
};

const ar: RedditProvenanceContent = {
  metaTitle: 'قصة $NATRO على Reddit — مؤكَّدة لكن بلا رابط إلى المصدر الأصلي',
  metaDescription: 'يروي نقاشٌ في r/anticasino الأحداثَ نفسها التي يوثّقها هذا الملف عن $NATRO — الإطلاق على Solana، والانهيار بنحو 98%، ورفض «stfu»، وعمليات الحذف — مكتفيًا بنسبة الرواية إلى «multiple posts» دون أن يورد أيّ مصدر. ملخّصٌ لا يترك طريقًا للعودة لا يمكن التحقق منه؛ وهذا هو السجلّ الأوّلي الموثّق المؤرشف الذي يستقي منه.',
  kicker: 'كيف تنتقل القصة · المَنشأ',
  h1: 'مؤكَّدة على Reddit — بلا رابطٍ يعود إلى المصدر',
  standfirst: 'يروي نقاشٌ مجتمعي قصة $NATRO بدقّة، ثم لا يترك للقارئ أيَّ سبيلٍ للتحقق منها. الرواية صحيحة؛ والإحالة غائبة. هذه الصفحة هي المصدر ذاته الذي لم يُورِده الملخّص.',
  pullQuote: 'يمكن أن تُكرَّر القصة في كل مكان دون أن يُذكر لها مصدر في أيّ مكان. التكرار انتشار؛ والمَنشأ دليل — وواحدٌ فقط منهما ينجو من الحذف.',
  imgAlt: 'لقطة شاشة لنقاشٍ على Reddit في r/anticasino بعنوان «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.»',
  imgCaption: 'r/anticasino · «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.» يعيد المنشور سردَ تسلسل أحداث $NATRO ويَنسبها إلى «multiple posts»؛ دون رابطٍ إلى أيّ مصدر أوّلي. انقر لفتح النقاش المباشر.',
  threadKicker: 'القصة نفسها، مرويّةً من مصدرٍ ثانٍ',
  threadBody: 'الوقائع في النقاش صحيحة. فهو يُسمّي **Alex Natroshvili**، *«reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)»*، ويصف التوكن الذي بِيع بوصفه *«networking coin»*، ويُثبت أنّ *«$NATRO dropped roughly 98% within days of launch»*، وأنّ *«when holders asked for refunds, the owner reportedly replied ‘stfu’»*، وأنّ *«three days in, the site and all marketing were taken down»*. كلُّ ذلك موجودٌ في هذا الملف، بمصادره. يصل النقاش إلى جمهورٍ لن يبلغه هذا الملف أبدًا — ولا يوجّه أحدًا منهم إلى حيث يمكنه التحقق.',
  missingKicker: 'الرابط الغائب',
  missingBody: 'اقرأِ المنشور بحثًا عن أدلّته فلن تجد ما تتتبّعه. الإسناد هو *«According to multiple posts»* — لا أرشيف، ولا عنوان على السلسلة، ولا رابط إلى السجلّ الأوّلي، ولا اسم لمن جمّع الرواية أصلًا. يُطلَب من القارئ أن يثق بملخّصٍ لملخّص. وهذا ليس تقصيرًا من كاتبه؛ بل هو ما تكونه إعادةُ نشرٍ بلا رابط. والادّعاء الذي لا يمكن تتبّعه ادّعاءٌ يختفي لحظةَ حذفِ الصفحة التالية — وهو، في حالة $NATRO، ما حدث فعلًا لموقع الإطلاق، وفيديو الدعاية، ورابط السيرة في حساب المؤسّس.',
  whyKicker: 'لماذا تنتقل الملخّصات دون مصدرها',
  whyBody: 'الأمر بنيويٌّ لا شخصي. فالمنصّات الكبرى تُقيّد الروابط الخارجية افتراضيًّا: قواعد مجتمع r/anticasino المنشورة نفسها تتضمّن *«No casino links or referrals»* و*«No spam»*، والمرشّحات الآلية على كل شبكةٍ كبرى تُعامل النطاقات الخارجية غير المألوفة بوصفها مريبة. وتتكفّل أعراف التجميع بالبقيّة — إذ يُعاد سرد القصة بكلمات المنصّة نفسها، وتحلّ لقطاتُ الشاشة محلّ الإحالات، ويَخفُت الأثر المؤدّي إلى السجلّ الأصلي مع كل إعادة نشر. والنتيجة ليست أنّ الحقيقة تُكتَم؛ بل أنّ **المَنشأ** هو ما يُكتَم. الرواية تبقى؛ أمّا سبيل التحقق منها فلا.',
  recordKicker: 'السجلّ الأوّلي',
  recordBody: 'هذا الملف هو النسخة الموثّقة بمصادرها التي تستقي منها الملخّصات. التُمس الاكتتاب في **توكن $NATRO على Solana** بـ**حدٍّ أدنى للبيع المسبق قدره 1,500 دولار** من حسابات العائلة الموثَّقة، وأُطلق في **21 مايو 2026**، وانهار بنسبة **~98%** خلال اثنتين وسبعين ساعة؛ ورُفض ردّ الأموال (*«Nothing to say»* من مشرف الفريق، و*«stfu»* من حساب Telegram الموثَّق للمؤسّس)؛ وخلال المدة نفسها أُوقف الموقع، وأُزيل رابط NATRO من سيرة المؤسّس على Instagram، وحُذف الفيديو الترويجي المدفوع. وكلُّ ذلك مدعومٌ هنا بمصدرٍ أوّلي — لقطات شاشة، و[موقع الإطلاق المؤرشف](https://web.archive.org/web/20260521213245/https://natrocoin.net/)، و[حالة التوكن المباشرة على السلسلة](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF). هذا هو الرابط الذي كان ينقص النقاش.',
  methodKicker: 'المنهج والمصادر',
  methodBody: 'الاقتباسات أعلاه منقولةٌ حرفيًّا من نقاش r/anticasino العلني المرتبط في الأعلى؛ وكلمتا *«allegedly»* و*«scam»* من صاحب المنشور، مقتبستان كما وردتا، ولا تدّعي هذه الصفحة أنّ أيّ رابطٍ بعينه قد أُزيل على يد أيّ طرفٍ بعينه. والسجلّ الأساس مؤرشفٌ وقابلٌ للتحقق منه على نحوٍ مستقل: موقع الإطلاق قبل حذفه ([Wayback، 21 مايو 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) وحالة التوكن [على السلسلة](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF).',
  replyKicker: 'حقّ الردّ',
  replyBefore: 'Alex Natroshvili وSpribe مدعوّان للردّ؛ وقد أُرسل إشعارٌ رسمي إلى عناوين Spribe القانونية والمؤسسية المنشورة في 25 مايو 2026. وستُنشر التصويبات الوقائعية الموثّقة إلى جانب السجلّ. والإسناد الكامل موجودٌ في ',
  replyProfileLabel: 'ملفّه التعريفي',
  replyMid: ' و',
  replyPressLabel: 'الصفحة الصحفية',
  replyAfter: '.',
};

const ur: RedditProvenanceContent = {
  metaTitle: 'Reddit پر $NATRO کی کہانی — تصدیق شدہ، مگر مآخذ تک کوئی کڑی نہیں',
  metaDescription: 'r/anticasino کا ایک تھریڈ انہی $NATRO واقعات کو بیان کرتا ہے جو اِس فائل میں درج ہیں — Solana پر اجرا، ~98% کا زوال، «stfu» والا انکار، اور سب کچھ ہٹا دیا جانا — مگر حوالہ صرف «multiple posts» کا دیتا ہے اور کوئی مآخذ نہیں جوڑتا۔ واپسی کے راستے کے بغیر کسی خلاصے کی تصدیق ممکن نہیں؛ یہ وہی بنیادی، بامآخذ اور محفوظ شدہ ریکارڈ ہے جس سے وہ اخذ کیا گیا ہے۔',
  kicker: 'کہانی کیسے سفر کرتی ہے · منبع',
  h1: 'Reddit پر تصدیق شدہ — مگر مآخذ تک کوئی کڑی نہیں',
  standfirst: 'کمیونٹی کا ایک تھریڈ $NATRO کی کہانی درست بیان کرتا ہے، پھر قاری کو اُسے پرکھنے کی کوئی جگہ نہیں دیتا۔ بیان درست ہے؛ حوالہ غائب ہے۔ یہ صفحہ وہی مآخذ ہے جسے خلاصے نے نہیں جوڑا۔',
  pullQuote: 'ایک کہانی ہر جگہ دہرائی جا سکتی ہے اور کہیں بھی اُس کا مآخذ نہ ہو۔ تکرار رسائی ہے؛ منبع ثبوت ہے — اور اِن میں سے صرف ایک ہی حذف کیے جانے کے بعد باقی رہتا ہے۔',
  imgAlt: 'r/anticasino کے ایک Reddit تھریڈ کا اسکرین شاٹ جس کا عنوان ہے «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.»',
  imgCaption: 'r/anticasino · «Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.» یہ پوسٹ $NATRO کے سلسلۂ واقعات کو بیان کرتی ہے اور «multiple posts» کا حوالہ دیتی ہے؛ کوئی بنیادی مآخذ نہیں جوڑا گیا۔ براہِ راست تھریڈ کھولنے کے لیے ٹیپ کریں۔',
  threadKicker: 'وہی کہانی، دوسروں کی زبانی',
  threadBody: 'تھریڈ حقائق درست بیان کرتا ہے۔ اِس میں **Alex Natroshvili** کا نام آتا ہے، *«reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)»*، اُس ٹوکن کو *«networking coin»* کے طور پر بیچے جانے کا ذکر ہے، اور درج ہے کہ *«$NATRO dropped roughly 98% within days of launch»*، کہ *«when holders asked for refunds, the owner reportedly replied “stfu”»*، اور کہ *«three days in, the site and all marketing were taken down»*۔ اِن میں سے ہر بات اِس فائل میں موجود ہے — مآخذ کے ساتھ۔ تھریڈ اُس سامعین تک پہنچتا ہے جہاں یہ فائل کبھی نہیں پہنچے گی — اور اُن میں سے کسی کو بھی وہاں نہیں بھیجتا جہاں وہ اِس کی تصدیق کر سکیں۔',
  missingKicker: 'وہ کڑی جو موجود ہی نہیں',
  missingBody: 'پوسٹ کو اُس کے ثبوت کے لیے پڑھیں تو پیچھا کرنے کے لیے کچھ نہیں ملتا۔ مآخذ صرف *«According to multiple posts»* ہے — نہ کوئی آرکائیو، نہ کوئی آن-چین پتہ، نہ بنیادی ریکارڈ تک کوئی کڑی، اور نہ ہی اُس شخص کا نام جس نے سب سے پہلے یہ بیان مرتب کیا۔ قاری سے کہا جا رہا ہے کہ وہ ایک خلاصے کے خلاصے پر بھروسا کرے۔ یہ اُس شخص کی کوتاہی نہیں جس نے یہ لکھا؛ یہ تو ہر بے-کڑی ری-پوسٹ کی فطرت ہے۔ جس دعوے کا سراغ نہ لگایا جا سکے، وہ دعویٰ اُسی لمحے غائب ہو جاتا ہے جب اگلا صفحہ حذف ہو — اور $NATRO کے معاملے میں بالکل یہی اجرا والی سائٹ، پروموشنل ویڈیو اور بانی کے بائیو لنک کے ساتھ پہلے ہی ہو چکا ہے۔',
  whyKicker: 'خلاصے اپنے مآخذ کے بغیر کیوں سفر کرتے ہیں',
  whyBody: 'یہ ساختیاتی مسئلہ ہے، ذاتی نہیں۔ بڑے پلیٹ فارم بطورِ ضابطہ باہر جانے والے لنکس کو محدود رکھتے ہیں: r/anticasino کے اپنے شائع کردہ کمیونٹی قواعد میں *«No casino links or referrals»* اور *«No spam»* شامل ہیں، اور ہر بڑے نیٹ ورک پر خودکار فلٹر اجنبی بیرونی ڈومینز کو مشکوک سمجھتے ہیں۔ باقی کام جمع بندی کے دستور کر دیتے ہیں — کہانی پلیٹ فارم کے اپنے الفاظ میں دوبارہ سنائی جاتی ہے، اسکرین شاٹ حوالوں کی جگہ لے لیتے ہیں، اور بنیادی ریکارڈ تک واپسی کا سراغ ہر ری-پوسٹ کے ساتھ باریک ہوتا جاتا ہے۔ نتیجہ یہ نہیں کہ سچائی دبا دی جاتی ہے؛ بلکہ یہ کہ **منبع** دبا دیا جاتا ہے۔ بیان باقی رہتا ہے؛ اُس کی تصدیق کا راستہ نہیں۔',
  recordKicker: 'بنیادی ریکارڈ',
  recordBody: 'یہ فائل وہی بامآخذ نسخہ ہے جس سے خلاصے اخذ کیے جاتے ہیں۔ **$NATRO Solana ٹوکن** تصدیق شدہ خاندانی اکاؤنٹس سے **$1,500 کی کم از کم پری سیل** کے ساتھ طلب کیا گیا، **21 مئی 2026** کو جاری ہوا، اور بہتّر گھنٹوں کے اندر **~98%** گر گیا؛ رقم کی واپسی سے انکار کر دیا گیا (ٹیم ایڈمن کی طرف سے *«Nothing to say»*، بانی کے تصدیق شدہ Telegram سے *«stfu»*)؛ اِسی دورانیے میں سائٹ آف لائن کر دی گئی، بانی کے Instagram بائیو سے NATRO لنک ہٹا دیا گیا، اور ادائیگی شدہ پروموشنل ویڈیو حذف کر دی گئی۔ اِن میں سے ہر ایک کی یہاں ایک بنیادی مآخذ سے تصدیق ہوتی ہے — اسکرین شاٹس، [محفوظ شدہ اجرا والی سائٹ](https://web.archive.org/web/20260521213245/https://natrocoin.net/)، اور [آن-چین ٹوکن کی موجودہ حالت](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF)۔ یہی وہ کڑی ہے جو تھریڈ میں غائب تھی۔',
  methodKicker: 'طریقہ کار اور مآخذ',
  methodBody: 'اوپر دیے گئے اقتباسات سرِ فہرست منسلک عوامی r/anticasino تھریڈ سے لفظ بہ لفظ نقل کیے گئے ہیں؛ الفاظ *«allegedly»* اور *«scam»* پوسٹ کرنے والے کے اپنے ہیں، جیسے لکھے گئے ویسے ہی نقل کیے گئے، اور یہ صفحہ یہ دعویٰ نہیں کرتا کہ کوئی مخصوص لنک کسی مخصوص فریق نے ہٹایا۔ بنیادی ریکارڈ محفوظ شدہ اور آزادانہ طور پر قابلِ جانچ ہے: ہٹائے جانے سے پہلے کی اجرا والی سائٹ ([Wayback، 21 مئی 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) اور ٹوکن کی حالت [آن-چین](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF)۔',
  replyKicker: 'جواب کا حق',
  replyBefore: 'Alex Natroshvili اور Spribe کو جواب دینے کی دعوت دی جاتی ہے؛ 25 مئی 2026 کو Spribe کے شائع کردہ قانونی اور کارپوریٹ پتوں پر ایک باضابطہ نوٹس بھیجا گیا۔ دستاویزی حقائق پر مبنی تصحیحات ریکارڈ کے ساتھ شائع کی جائیں گی۔ مکمل مآخذ اُس کے ',
  replyProfileLabel: 'پروفائل',
  replyMid: ' اور ',
  replyPressLabel: 'پریس صفحہ',
  replyAfter: ' پر موجود ہیں۔',
};

const hi: RedditProvenanceContent = {
  metaTitle: 'Reddit पर $NATRO की कहानी — पुष्ट, पर स्रोत तक कोई लिंक नहीं',
  metaDescription: 'Reddit के r/anticasino का एक थ्रेड Alex Natroshvili और David Natroshvili से जुड़ी $NATRO की उन्हीं घटनाओं को दोहराता है जो यहाँ दर्ज हैं — Solana पर लॉन्च, ~98% गिरावट, “stfu” इनकार, साइट का हटाया जाना — पर सिर्फ़ “multiple posts” का हवाला देता है, कोई स्रोत नहीं। बिना वापसी-पथ वाला सारांश जाँचा नहीं जा सकता; यह वही प्राथमिक, स्रोत-सहित, संग्रहित रिकॉर्ड है जिससे वह लिया गया है।',
  kicker: 'कहानी कैसे सफ़र करती है · उद्गम',
  h1: 'Reddit पर पुष्ट — पर स्रोत तक कोई लिंक नहीं',
  standfirst: 'एक कम्युनिटी थ्रेड $NATRO की कहानी सटीक ढंग से बताता है, और फिर पाठक को उसे जाँचने का कोई रास्ता नहीं देता। विवरण सही है; हवाला गायब है। यह पृष्ठ वही स्रोत है जिसे उस सारांश ने लिंक नहीं किया।',
  pullQuote: 'किसी कहानी को हर जगह दोहराया जा सकता है और कहीं भी उसका स्रोत न दिया जाए। दोहराव है पहुँच; उद्गम है प्रमाण — और इनमें से सिर्फ़ एक ही हटाए जाने से बच पाता है।',
  imgAlt: 'r/anticasino के एक Reddit थ्रेड का स्क्रीनशॉट, जिसका शीर्षक है “Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.”',
  imgCaption: 'r/anticasino · “Son of Aviator CEO allegedly ran a memecoin scam on Solana. Token dropped 98% in days.” यह पोस्ट $NATRO के घटनाक्रम को दोहराती है और “multiple posts” का श्रेय देती है; कोई प्राथमिक स्रोत लिंक नहीं है। लाइव थ्रेड खोलने के लिए टैप करें।',
  threadKicker: 'वही कहानी, दूसरे के हवाले से सुनाई गई',
  threadBody: 'थ्रेड में तथ्य सही ढंग से दर्ज हैं। इसमें **Alex Natroshvili** का नाम है, *“reportedly the son of David Natroshvili (CEO of Spribe, the studio behind Aviator)”*, टोकन को *“networking coin”* के रूप में बेचे जाने का ज़िक्र है, और यह दर्ज है कि *“$NATRO dropped roughly 98% within days of launch”*, कि *“when holders asked for refunds, the owner reportedly replied ‘stfu’”*, और कि *“three days in, the site and all marketing were taken down”*। इनमें से हर एक बात इस फ़ाइल में है — स्रोत के साथ। यह थ्रेड उस दर्शक-वर्ग तक पहुँचता है जहाँ यह फ़ाइल कभी नहीं पहुँचेगी — और उनमें से किसी को भी वहाँ नहीं भेजता जहाँ इसे जाँचा जा सके।',
  missingKicker: 'वह लिंक जो मौजूद ही नहीं',
  missingBody: 'सबूत के लिए पोस्ट पढ़िए तो अनुसरण करने को कुछ नहीं मिलता। स्रोत बस इतना है — *“According to multiple posts”* — न कोई संग्रह, न कोई on-chain पता, न प्राथमिक रिकॉर्ड तक कोई लिंक, और न ही उस व्यक्ति का नाम जिसने सबसे पहले यह विवरण जुटाया। पाठक से कहा जा रहा है कि वह एक सारांश के सारांश पर भरोसा करे। यह उस व्यक्ति की कमी नहीं है जिसने इसे लिखा; यह तो बस यही है कि बिना-लिंक वाला रीपोस्ट होता क्या है। जिस दावे का सूत्र आप खोज नहीं सकते, वह दावा उसी क्षण गायब हो जाता है जब अगला पृष्ठ हटा दिया जाता है — और $NATRO के मामले में, लॉन्च साइट, प्रोमो वीडियो और संस्थापक के बायो लिंक के साथ ठीक यही पहले ही हो चुका है।',
  whyKicker: 'सारांश अपने स्रोत के बिना क्यों सफ़र करते हैं',
  whyBody: 'यह संरचनात्मक बात है, व्यक्तिगत नहीं। बड़े प्लेटफ़ॉर्म बाहर जाने वाले लिंक को डिफ़ॉल्ट रूप से नियंत्रित करते हैं: r/anticasino के अपने प्रकाशित कम्युनिटी नियमों में *“No casino links or referrals”* और *“No spam”* शामिल हैं, और हर बड़े नेटवर्क के स्वचालित फ़िल्टर अपरिचित बाहरी डोमेन को संदिग्ध मानते हैं। बाकी काम एग्रीगेशन के रिवाज़ पूरा कर देते हैं — कहानी प्लेटफ़ॉर्म के अपने शब्दों में फिर से सुनाई जाती है, हवालों की जगह स्क्रीनशॉट ले लेते हैं, और हर रीपोस्ट के साथ प्रथम-पक्ष रिकॉर्ड तक वापसी का रास्ता पतला होता जाता है। नतीजा यह नहीं होता कि सच को दबा दिया गया; नतीजा यह होता है कि **उद्गम** को दबा दिया गया। विवरण बचा रहता है; उसे जाँचने का रास्ता नहीं बचता।',
  recordKicker: 'प्राथमिक रिकॉर्ड',
  recordBody: 'यह फ़ाइल वही स्रोत-सहित संस्करण है जिससे ये सारांश लिए जाते हैं। **$NATRO Solana टोकन** के लिए सत्यापित पारिवारिक खातों से **$1,500 के न्यूनतम प्रीसेल** के साथ चंदा माँगा गया, इसे **21 मई 2026** को लॉन्च किया गया, और यह बहत्तर घंटों के भीतर **~98%** गिर गया; रिफंड देने से इनकार किया गया (टीम एडमिन की ओर से *“Nothing to say”*, संस्थापक के सत्यापित Telegram से *“stfu”*); इसी अवधि में साइट को ऑफ़लाइन कर दिया गया, संस्थापक के Instagram बायो से NATRO लिंक हटा दिया गया, और भुगतान किया गया प्रचार वीडियो मिटा दिया गया। इनमें से हर एक बात यहाँ एक प्राथमिक स्रोत से समर्थित है — स्क्रीनशॉट, [संग्रहित लॉन्च साइट](https://web.archive.org/web/20260521213245/https://natrocoin.net/), और [ऑन-चेन लाइव टोकन स्थिति](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF)। यही वह लिंक है जो थ्रेड में नहीं था।',
  methodKicker: 'पद्धति और स्रोत',
  methodBody: 'ऊपर दिए गए उद्धरण शीर्ष पर लिंक किए गए सार्वजनिक r/anticasino थ्रेड से हूबहू लिए गए हैं; *“allegedly”* और *“scam”* शब्द पोस्ट करने वाले के अपने हैं, जैसे लिखे गए वैसे ही उद्धृत, और यह पृष्ठ यह दावा नहीं करता कि कोई विशेष लिंक किसी विशेष पक्ष द्वारा हटाया गया। अंतर्निहित रिकॉर्ड संग्रहित है और स्वतंत्र रूप से जाँचा जा सकता है: हटाए जाने से पहले की लॉन्च साइट ([Wayback, 21 मई 2026](https://web.archive.org/web/20260521213245/https://natrocoin.net/)) और टोकन की स्थिति [ऑन-चेन](https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF)।',
  replyKicker: 'जवाब का अधिकार',
  replyBefore: 'Alex Natroshvili और Spribe को जवाब देने के लिए आमंत्रित किया गया है; एक औपचारिक सूचना 25 मई 2026 को Spribe के प्रकाशित कानूनी और कॉर्पोरेट पतों पर भेजी गई थी। प्रलेखित तथ्यात्मक सुधार इस रिकॉर्ड के साथ प्रकाशित किए जाएँगे। पूरा स्रोत-विवरण उनके ',
  replyProfileLabel: 'प्रोफ़ाइल',
  replyMid: ' और ',
  replyPressLabel: 'प्रेस पेज',
  replyAfter: ' पर उपलब्ध है।',
};

const BY_LOCALE: Record<Locale, RedditProvenanceContent> = {
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

export function getRedditProvenance(locale: Locale): RedditProvenanceContent {
  return BY_LOCALE[locale] || en;
}
