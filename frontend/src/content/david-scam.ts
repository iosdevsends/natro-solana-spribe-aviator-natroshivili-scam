import type { Locale } from '@/i18n/routing';

/**
 * Localised copy for /david-natroshvili-scam.
 *
 * The page sets the #1 "Most Influential in iGaming" accolade against the
 * documented $NATRO record. Editorial prose is translated per locale; verbatim
 * quotes (Spribe's caption, David's presale Stories, "Nothing to say", "stfu",
 * the natrocoin.net FAQ line) stay in English — they are sacred quotes, and
 * English is the original. The "Where to next" nav stays English, matching the
 * other localised long-form pages. Body fields use inline markdown rendered by
 * <Prose> (**bold**, *italic*).
 */
export interface DavidScamContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  standfirst: string;
  imgAlt: string;
  imgCaption: string;
  spribeKicker: string;
  peakKicker: string;
  peakBody: string;
  collateralKicker: string;
  collateralBody: string;
  lineKicker: string;
  lineIntro: string;
  lineAfter: string;
  replyKicker: string;
  replyBefore: string;
  replyProfileLabel: string;
  replyMid: string;
  replyPressLabel: string;
  replyAfter: string;
}

// Verbatim, English, identical across every locale.
export const SPRIBE_QUOTE =
  'SPRIBE CEO David Natroshvili takes the #1 spot on the Top 100 Most Influential People in iGaming 2026 \u{1F3C6} … David is redefining player engagement … turned SPRIBE into a global category leader.';
export const SPRIBE_QUOTE_CHEERS = 'Cheers to our leader! \u{1F64C}';
export const SPRIBE_ATTRIB =
  '— @spribe.co, Instagram, 30 May 2026 · #SPRIBE #iGaming #Aviator #TechLeadership';
export const FAQ_QUOTE =
  'The reputation hit lasts forever; the cash from a rug doesn’t.';

const en: DavidScamContent = {
  metaTitle:
    'David Natroshvili & the $NATRO scam — #1 Most Influential in iGaming',
  metaDescription:
    'David Natroshvili (Founder & CEO of Spribe) was named #1 of the Top 100 Most Influential People in iGaming, "Game Changers 2026." The same reputation was the collateral on the $NATRO Solana token, which collapsed ~98% — refunds refused, the evidence scrubbed. A documented case in reputation pricing.',
  kicker: 'Reputation pricing · the accolade',
  h1: 'How the most influential man in iGaming sold his reputation.',
  standfirst:
    'Ranked #1 of the “Top 100 Most Influential People in iGaming” — and the record of the $NATRO scam that reputation was spent on.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili, Founder & CEO of SPRIBE. "Top 100 Most Influential People in iGaming," iGamingExpress, posted by @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” Posted by the official @spribe.co Instagram account, 30 May 2026 (393 likes), while the $NATRO fallout was live.',
  spribeKicker: 'In Spribe’s own words',
  peakKicker: 'Reputation, at its quoted peak',
  peakBody:
    'The NATRO File describes itself, on every page, as *a documented case in reputation pricing.* This is the reputation being priced. Number one for influence in the industry — the single most valuable thing a launch can borrow.',
  collateralKicker: 'What it was collateral for',
  collateralBody:
    'In the same May 2026 window, that same name was the collateral on a Solana memecoin, **$NATRO**. From his **verified** Instagram account, David Natroshvili personally solicited presale investment — captioned over a Bentley interior: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — and, over a Ferrari on a Monaco street: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nWithin seventy-two hours of launch the token collapsed **~98%**. Refund requests from affected holders were refused — *“Nothing to say”* from the team admin, *“stfu”* from the founder’s personal Telegram. Within the same window the website was taken offline, the NATRO link was removed from the founder’s Instagram bio, and the paid promotional video was deleted. While that was happening, the *#1 most influential* ranking was being shared and celebrated — *“Cheers to our leader.”*',
  lineKicker: 'The line they wrote themselves',
  lineIntro:
    'The project’s own FAQ — archived in full before it was deleted — answered the rug-pull question in one sentence:',
  lineAfter:
    'Set that sentence beside a #1 “most influential” ranking, and the file’s title stops being a metaphor. The reputation was real. So is the record of what a slice of it was spent on. Readers draw their own conclusion.',
  replyKicker: 'Right of reply',
  replyBefore:
    'David Natroshvili and Spribe are invited to respond; a formal notice was sent to Spribe’s published legal and corporate addresses on 25 May 2026. Documented factual corrections will be published alongside the record. The full sourcing is on his ',
  replyProfileLabel: 'profile',
  replyMid: ' and the ',
  replyPressLabel: 'press page',
  replyAfter: '.',
};

const ru: DavidScamContent = {
  metaTitle:
    'David Natroshvili и скам $NATRO — №1 среди влиятельных людей iGaming',
  metaDescription:
    'David Natroshvili (основатель и CEO Spribe) назван №1 в «Top 100 Most Influential People in iGaming», «Game Changers 2026». Та же репутация стала залогом под токеном $NATRO на Solana, который обвалился на ~98% — в возврате отказали, улики удалили. Документированный кейс по ценообразованию репутации.',
  kicker: 'Ценообразование репутации · награда',
  h1: 'Как самый влиятельный человек в iGaming продал свою репутацию.',
  standfirst:
    '№1 в рейтинге “Top 100 Most Influential People in iGaming” — и хроника скама $NATRO, на который была потрачена эта репутация.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili, основатель и CEO SPRIBE. «Top 100 Most Influential People in iGaming», iGamingExpress, пост @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” Опубликовано официальным аккаунтом @spribe.co в Instagram 30 мая 2026 (393 лайка) — пока шёл фоллаут $NATRO.',
  spribeKicker: 'Словами самого Spribe',
  peakKicker: 'Репутация на пике её цены',
  peakBody:
    'NATRO File на каждой странице называет себя *документированным кейсом по ценообразованию репутации.* Вот эта репутация и оценивается. Первое место по влиянию в индустрии — самое ценное, что может одолжить любой запуск.',
  collateralKicker: 'Залогом подо что она стала',
  collateralBody:
    'В то же майское окно 2026 года это же имя стало залогом под солана-мемкоином **$NATRO**. Со своего **верифицированного** аккаунта в Instagram David Natroshvili лично собирал инвестиции в пресейл — подпись поверх салона Bentley: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — и поверх Ferrari на улице Монако: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nЗа семьдесят два часа после запуска токен обвалился на **~98%**. В возврате средств пострадавшим держателям отказали — *“Nothing to say”* от админа команды, *“stfu”* из личного Telegram основателя. В то же окно сайт отключили, ссылку на NATRO убрали из биографии Instagram основателя, а оплаченное промо-видео удалили. И всё это время рейтинг *#1 most influential* расшаривали и праздновали — *“Cheers to our leader.”*',
  lineKicker: 'Строка, которую они написали сами',
  lineIntro:
    'FAQ самого проекта — полностью сохранённый в архиве до удаления — ответил на вопрос о rug-pull одной фразой:',
  lineAfter:
    'Поставьте эту фразу рядом с рейтингом №1 “most influential” — и название файла перестаёт быть метафорой. Репутация была настоящей. Настолько же реальна и хроника того, на что потратили её часть. Выводы читатель делает сам.',
  replyKicker: 'Право на ответ',
  replyBefore:
    'David Natroshvili и Spribe приглашаются ответить; формальное уведомление было направлено на публичные юридические и корпоративные адреса Spribe 25 мая 2026 года. Документированные фактические уточнения будут опубликованы рядом с записью. Полные источники — на его ',
  replyProfileLabel: 'странице',
  replyMid: ' и на ',
  replyPressLabel: 'странице для прессы',
  replyAfter: '.',
};

const uk: DavidScamContent = {
  metaTitle:
    'David Natroshvili і скам $NATRO — №1 серед впливових людей iGaming',
  metaDescription:
    'David Natroshvili (засновник і CEO Spribe) названий №1 у «Top 100 Most Influential People in iGaming», «Game Changers 2026». Та сама репутація стала заставою під токеном $NATRO на Solana, який обвалився на ~98% — у поверненні відмовили, докази видалили. Документований кейс із ціноутворення репутації.',
  kicker: 'Ціноутворення репутації · нагорода',
  h1: 'Як найвпливовіша людина в iGaming продала свою репутацію.',
  standfirst:
    '№1 у рейтингу “Top 100 Most Influential People in iGaming” — і хроніка скаму $NATRO, на який витратили цю репутацію.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili, засновник і CEO SPRIBE. «Top 100 Most Influential People in iGaming», iGamingExpress, допис @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” Опубліковано офіційним акаунтом @spribe.co в Instagram 30 травня 2026 (393 вподобайки) — поки тривав фоллаут $NATRO.',
  spribeKicker: 'Словами самого Spribe',
  peakKicker: 'Репутація на піку її ціни',
  peakBody:
    'NATRO File на кожній сторінці називає себе *документованим кейсом із ціноутворення репутації.* Ось ця репутація і оцінюється. Перше місце за впливом в індустрії — найцінніше, що може позичити будь-який запуск.',
  collateralKicker: 'Заставою під що вона стала',
  collateralBody:
    'У те саме травневе вікно 2026 року це ж ім’я стало заставою під солана-мемкоїном **$NATRO**. Зі свого **верифікованого** акаунта в Instagram David Natroshvili особисто збирав інвестиції в пресейл — підпис поверх салону Bentley: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — і поверх Ferrari на вулиці Монако: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nЗа сімдесят дві години після запуску токен обвалився на **~98%**. У поверненні коштів постраждалим тримачам відмовили — *“Nothing to say”* від адміна команди, *“stfu”* з особистого Telegram засновника. У те саме вікно сайт відключили, посилання на NATRO прибрали з біографії Instagram засновника, а оплачене промо-відео видалили. І весь цей час рейтинг *#1 most influential* розшарювали і святкували — *“Cheers to our leader.”*',
  lineKicker: 'Рядок, який вони написали самі',
  lineIntro:
    'FAQ самого проєкту — повністю збережений в архіві до видалення — відповів на питання про rug-pull однією фразою:',
  lineAfter:
    'Поставте цю фразу поряд із рейтингом №1 “most influential” — і назва файлу перестає бути метафорою. Репутація була справжньою. Так само реальна і хроніка того, на що витратили її частину. Висновки читач робить сам.',
  replyKicker: 'Право на відповідь',
  replyBefore:
    'David Natroshvili і Spribe запрошуються відповісти; формальне повідомлення було надіслано на публічні юридичні та корпоративні адреси Spribe 25 травня 2026 року. Документовані фактичні уточнення буде опубліковано поряд із записом. Повні джерела — на його ',
  replyProfileLabel: 'сторінці',
  replyMid: ' і на ',
  replyPressLabel: 'сторінці для преси',
  replyAfter: '.',
};

const ka: DavidScamContent = {
  metaTitle:
    'David Natroshvili და $NATRO scam — №1 iGaming-ის გავლენიან ადამიანებში',
  metaDescription:
    'David Natroshvili (Spribe-ის დამფუძნებელი და CEO) დასახელდა №1-ად „Top 100 Most Influential People in iGaming“-ში, „Game Changers 2026“. იგივე რეპუტაცია გახდა გირაო Solana-ს ტოკენ $NATRO-ზე, რომელიც ~98%-ით დაეცა — დაბრუნებაზე უარი თქვეს, მტკიცებულებები წაშალეს.',
  kicker: 'რეპუტაციის ფასდადება · ჯილდო',
  h1: 'როგორ გაყიდა iGaming-ის ყველაზე გავლენიანმა ადამიანმა თავისი რეპუტაცია.',
  standfirst:
    '№1 “Top 100 Most Influential People in iGaming”-ში — და $NATRO scam-ის ჩანაწერი, რომელზეც დაიხარჯა ეს რეპუტაცია.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili, SPRIBE-ის დამფუძნებელი და CEO. „Top 100 Most Influential People in iGaming“, iGamingExpress, @spribe.co-ს პოსტი.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” გამოქვეყნდა ოფიციალური @spribe.co Instagram-ანგარიშიდან, 30 მაისი 2026 (393 მოწონება) — სანამ $NATRO-ს ფოლაუტი მიმდინარეობდა.',
  spribeKicker: 'თავად Spribe-ის სიტყვებით',
  peakKicker: 'რეპუტაცია მისი ფასის პიკზე',
  peakBody:
    'NATRO File ყველა გვერდზე საკუთარ თავს უწოდებს *რეპუტაციის ფასდადების დოკუმენტირებულ ქეისს.* სწორედ ეს რეპუტაცია ფასდება. პირველი ადგილი გავლენით ინდუსტრიაში — ყველაზე ღირებული, რისი სესხებაც შეუძლია ნებისმიერ გაშვებას.',
  collateralKicker: 'რის გირაოდ იქცა ის',
  collateralBody:
    '2026 წლის იმავე მაისის ფანჯარაში ეს იგივე სახელი გახდა გირაო Solana-მემკოინ **$NATRO**-ზე. თავისი **ვერიფიცირებული** Instagram-ანგარიშიდან David Natroshvili პირადად აგროვებდა პრესეილ-ინვესტიციას — წარწერა Bentley-ის სალონზე: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — და Ferrari-ზე მონაკოს ქუჩაში: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nგაშვებიდან სამოცდათორმეტ საათში ტოკენი დაეცა **~98%**-ით. დაზარალებული მფლობელების დაბრუნების მოთხოვნებზე უარი ეთქვა — *“Nothing to say”* გუნდის ადმინისგან, *“stfu”* დამფუძნებლის პირადი Telegram-იდან. იმავე ფანჯარაში საიტი გაითიშა, NATRO-ს ბმული მოშორდა დამფუძნებლის Instagram-ბიოს, ფასიანი რეკლამა წაიშალა. და ამ დროს რეიტინგი *#1 most influential* ზიარდებოდა და აღინიშნებოდა — *“Cheers to our leader.”*',
  lineKicker: 'სტრიქონი, რომელიც მათ თავად დაწერეს',
  lineIntro:
    'პროექტის საკუთარი FAQ — სრულად დაარქივებული წაშლამდე — rug-pull-ის კითხვას ერთი წინადადებით უპასუხა:',
  lineAfter:
    'დააყენეთ ეს წინადადება №1 “most influential” რეიტინგის გვერდით — და ფაილის სათაური აღარ არის მეტაფორა. რეპუტაცია ნამდვილი იყო. ისეთივე ნამდვილია ჩანაწერი იმისა, რაზეც დაიხარჯა მისი ნაწილი. დასკვნას მკითხველი თავად აკეთებს.',
  replyKicker: 'პასუხის უფლება',
  replyBefore:
    'David Natroshvili და Spribe მოწვეულნი არიან პასუხის გასაცემად; ფორმალური შეტყობინება გაიგზავნა Spribe-ის გამოქვეყნებულ იურიდიულ და კორპორაციულ მისამართებზე 2026 წლის 25 მაისს. დოკუმენტირებული ფაქტობრივი შესწორებები გამოქვეყნდება ჩანაწერის გვერდით. სრული წყაროები მის ',
  replyProfileLabel: 'პროფილზე',
  replyMid: ' და ',
  replyPressLabel: 'პრესის გვერდზეა',
  replyAfter: '.',
};

const fr: DavidScamContent = {
  metaTitle:
    'David Natroshvili et le scam $NATRO — n°1 des plus influents de l’iGaming',
  metaDescription:
    'David Natroshvili (fondateur et CEO de Spribe) a été classé n°1 du « Top 100 Most Influential People in iGaming », « Game Changers 2026 ». Cette même réputation a servi de garantie au token Solana $NATRO, qui s’est effondré d’environ 98 % — remboursements refusés, preuves effacées.',
  kicker: 'Tarification de la réputation · la distinction',
  h1: 'Comment l’homme le plus influent de l’iGaming a vendu sa réputation.',
  standfirst:
    'Classé n°1 du “Top 100 Most Influential People in iGaming” — et le récit du scam $NATRO sur lequel cette réputation a été dépensée.',
  imgAlt:
    'Game Changers 2026 — #1 Place : David Natroshvili, fondateur et CEO de SPRIBE. « Top 100 Most Influential People in iGaming », iGamingExpress, publié par @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” Publié par le compte Instagram officiel @spribe.co, le 30 mai 2026 (393 likes), alors que les retombées de $NATRO étaient en cours.',
  spribeKicker: 'Dans les propres mots de Spribe',
  peakKicker: 'La réputation, à son prix maximal',
  peakBody:
    'Le NATRO File se décrit, sur chaque page, comme *un cas documenté de tarification de la réputation.* C’est cette réputation que l’on évalue ici. Numéro un de l’influence dans le secteur — la chose la plus précieuse qu’un lancement puisse emprunter.',
  collateralKicker: 'Ce dont elle a été la garantie',
  collateralBody:
    'Dans la même fenêtre de mai 2026, ce même nom a servi de garantie à un memecoin Solana, **$NATRO**. Depuis son compte Instagram **vérifié**, David Natroshvili a personnellement sollicité l’investissement en prévente — en légende sur l’intérieur d’une Bentley : *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — et, sur une Ferrari dans une rue de Monaco : *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nEn soixante-douze heures après le lancement, le token s’est effondré de **~98 %**. Les demandes de remboursement des détenteurs affectés ont été refusées — *“Nothing to say”* de l’administrateur, *“stfu”* depuis le Telegram personnel du fondateur. Dans la même fenêtre, le site a été mis hors ligne, le lien NATRO retiré de la bio Instagram du fondateur, et la vidéo promotionnelle payante supprimée. Pendant ce temps, le classement *#1 most influential* était partagé et célébré — *“Cheers to our leader.”*',
  lineKicker: 'La phrase qu’ils ont écrite eux-mêmes',
  lineIntro:
    'La FAQ même du projet — archivée intégralement avant sa suppression — répondait à la question du rug-pull en une phrase :',
  lineAfter:
    'Mettez cette phrase à côté d’un classement n°1 “most influential”, et le titre du dossier cesse d’être une métaphore. La réputation était réelle. Le récit de ce sur quoi une partie a été dépensée l’est tout autant. Le lecteur tire ses propres conclusions.',
  replyKicker: 'Droit de réponse',
  replyBefore:
    'David Natroshvili et Spribe sont invités à répondre ; un avis formel a été envoyé aux adresses juridiques et corporatives publiées de Spribe le 25 mai 2026. Les corrections factuelles documentées seront publiées à côté du dossier. Les sources complètes figurent sur son ',
  replyProfileLabel: 'profil',
  replyMid: ' et sur la ',
  replyPressLabel: 'page presse',
  replyAfter: '.',
};

const de: DavidScamContent = {
  metaTitle:
    'David Natroshvili & der $NATRO-Scam — Nr. 1 der einflussreichsten im iGaming',
  metaDescription:
    'David Natroshvili (Gründer & CEO von Spribe) wurde zur Nr. 1 der „Top 100 Most Influential People in iGaming“ gekürt, „Game Changers 2026“. Dieselbe Reputation war die Sicherheit für den Solana-Token $NATRO, der um ~98 % abstürzte — Rückerstattungen verweigert, Beweise gelöscht.',
  kicker: 'Reputation-Pricing · die Auszeichnung',
  h1: 'Wie der einflussreichste Mann im iGaming seine Reputation verkaufte.',
  standfirst:
    'Platz 1 der “Top 100 Most Influential People in iGaming” — und das Protokoll des $NATRO-Scams, für den diese Reputation ausgegeben wurde.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili, Gründer & CEO von SPRIBE. „Top 100 Most Influential People in iGaming“, iGamingExpress, gepostet von @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” Gepostet vom offiziellen @spribe.co-Instagram-Konto am 30. Mai 2026 (393 Likes), während die $NATRO-Folgen liefen.',
  spribeKicker: 'In Spribes eigenen Worten',
  peakKicker: 'Reputation, zu ihrem Höchstpreis',
  peakBody:
    'Die NATRO-Akte bezeichnet sich auf jeder Seite als *eine dokumentierte Fallstudie zum Reputation-Pricing.* Genau diese Reputation wird hier bepreist. Nummer eins beim Einfluss in der Branche — das Wertvollste, was sich ein Launch leihen kann.',
  collateralKicker: 'Wofür sie als Sicherheit diente',
  collateralBody:
    'Im selben Zeitfenster im Mai 2026 war derselbe Name die Sicherheit für einen Solana-Memecoin, **$NATRO**. Von seinem **verifizierten** Instagram-Konto warb David Natroshvili persönlich um Presale-Investitionen — betitelt über einem Bentley-Innenraum: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — und über einem Ferrari in einer Straße von Monaco: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nInnerhalb von zweiundsiebzig Stunden nach dem Launch stürzte der Token um **~98 %** ab. Rückerstattungsanfragen betroffener Inhaber wurden abgelehnt — *“Nothing to say”* vom Team-Admin, *“stfu”* vom persönlichen Telegram des Gründers. Im selben Zeitfenster wurde die Website offline genommen, der NATRO-Link aus der Instagram-Bio des Gründers entfernt und das bezahlte Werbevideo gelöscht. Währenddessen wurde das Ranking *#1 most influential* geteilt und gefeiert — *“Cheers to our leader.”*',
  lineKicker: 'Der Satz, den sie selbst geschrieben haben',
  lineIntro:
    'Die FAQ des Projekts — vor der Löschung vollständig archiviert — beantwortete die Rug-Pull-Frage in einem Satz:',
  lineAfter:
    'Stellt man diesen Satz neben ein Nr.-1-Ranking “most influential”, ist der Titel der Akte keine Metapher mehr. Die Reputation war real. Ebenso real ist das Protokoll dessen, wofür ein Teil davon ausgegeben wurde. Die Leser ziehen ihre eigenen Schlüsse.',
  replyKicker: 'Recht auf Gegendarstellung',
  replyBefore:
    'David Natroshvili und Spribe sind eingeladen zu antworten; eine formelle Mitteilung wurde am 25. Mai 2026 an die veröffentlichten rechtlichen und Unternehmensadressen von Spribe gesendet. Dokumentierte sachliche Korrekturen werden neben der Akte veröffentlicht. Die vollständigen Quellen stehen auf seinem ',
  replyProfileLabel: 'Profil',
  replyMid: ' und auf der ',
  replyPressLabel: 'Presseseite',
  replyAfter: '.',
};

const es: DavidScamContent = {
  metaTitle:
    'David Natroshvili y el scam de $NATRO — n.º 1 más influyente del iGaming',
  metaDescription:
    'David Natroshvili (fundador y CEO de Spribe) fue nombrado n.º 1 del «Top 100 Most Influential People in iGaming», «Game Changers 2026». Esa misma reputación fue la garantía del token de Solana $NATRO, que se desplomó ~98 % — reembolsos negados, pruebas borradas.',
  kicker: 'Tarificación de la reputación · el galardón',
  h1: 'Cómo el hombre más influyente del iGaming vendió su reputación.',
  standfirst:
    'N.º 1 del “Top 100 Most Influential People in iGaming” — y el registro del scam de $NATRO en el que se gastó esa reputación.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili, fundador y CEO de SPRIBE. «Top 100 Most Influential People in iGaming», iGamingExpress, publicado por @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” Publicado por la cuenta oficial @spribe.co de Instagram el 30 de mayo de 2026 (393 me gusta), mientras las secuelas de $NATRO estaban en curso.',
  spribeKicker: 'En las propias palabras de Spribe',
  peakKicker: 'La reputación, en su precio máximo',
  peakBody:
    'El NATRO File se describe, en cada página, como *un caso documentado de tarificación de la reputación.* Es esa reputación la que se está valorando. Número uno en influencia del sector — lo más valioso que un lanzamiento puede tomar prestado.',
  collateralKicker: 'De qué fue garantía',
  collateralBody:
    'En la misma ventana de mayo de 2026, ese mismo nombre fue la garantía de un memecoin de Solana, **$NATRO**. Desde su cuenta de Instagram **verificada**, David Natroshvili solicitó personalmente inversión en la preventa — con un texto sobre el interior de un Bentley: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — y, sobre un Ferrari en una calle de Mónaco: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nEn setenta y dos horas tras el lanzamiento, el token se desplomó un **~98 %**. Las solicitudes de reembolso de los holders afectados fueron rechazadas — *“Nothing to say”* del admin del equipo, *“stfu”* desde el Telegram personal del fundador. En la misma ventana, el sitio fue retirado, el enlace de NATRO eliminado de la bio de Instagram del fundador y el vídeo promocional pagado borrado. Mientras tanto, el ranking *#1 most influential* se compartía y se celebraba — *“Cheers to our leader.”*',
  lineKicker: 'La frase que escribieron ellos mismos',
  lineIntro:
    'El propio FAQ del proyecto — archivado íntegramente antes de su eliminación — respondía a la pregunta del rug-pull en una frase:',
  lineAfter:
    'Ponga esa frase junto a un ranking n.º 1 “most influential”, y el título del expediente deja de ser una metáfora. La reputación era real. También lo es el registro de aquello en lo que se gastó una parte. El lector saca sus propias conclusiones.',
  replyKicker: 'Derecho de réplica',
  replyBefore:
    'David Natroshvili y Spribe están invitados a responder; se envió un aviso formal a las direcciones legales y corporativas publicadas de Spribe el 25 de mayo de 2026. Las correcciones factuales documentadas se publicarán junto al registro. Las fuentes completas están en su ',
  replyProfileLabel: 'perfil',
  replyMid: ' y en la ',
  replyPressLabel: 'página de prensa',
  replyAfter: '.',
};

const ar: DavidScamContent = {
  metaTitle:
    'David Natroshvili و«سكام» $NATRO — الأول بين أكثر الشخصيات نفوذًا في iGaming',
  metaDescription:
    'اختير David Natroshvili (مؤسّس ومدير عام Spribe) في المركز الأول ضمن «Top 100 Most Influential People in iGaming»، «Game Changers 2026». السمعة نفسها كانت الضمانة وراء توكن $NATRO على Solana، الذي انهار بنحو 98% — رُفض ردّ الأموال، ومُحيت الأدلّة.',
  kicker: 'تسعير السمعة · الجائزة',
  h1: 'كيف باع أكثر شخص نفوذًا في صناعة iGaming سمعته.',
  standfirst:
    'المركز الأول في “Top 100 Most Influential People in iGaming” — وسجلّ «سكام» $NATRO الذي أُنفقت عليه تلك السمعة.',
  imgAlt:
    'Game Changers 2026 — #1 Place: David Natroshvili، مؤسّس ومدير عام SPRIBE. «Top 100 Most Influential People in iGaming»، iGamingExpress، منشور @spribe.co.',
  imgCaption:
    'iGamingExpress · “Game Changers 2026.” نُشر من حساب @spribe.co الرسمي على Instagram في 30 مايو 2026 (393 إعجابًا)، بينما كانت تداعيات $NATRO جارية.',
  spribeKicker: 'بكلمات Spribe نفسها',
  peakKicker: 'السمعة، في ذروة سعرها',
  peakBody:
    'يصف ملفّ NATRO نفسه، في كل صفحة، بأنه *حالة موثَّقة في تسعير السمعة.* وهذه هي السمعة التي يجري تسعيرها. الأول نفوذًا في الصناعة — أثمن ما يمكن لأي إطلاق أن يستعيره.',
  collateralKicker: 'ضمانةً لماذا كانت',
  collateralBody:
    'في النافذة نفسها من مايو 2026، كان الاسم ذاته ضمانةً وراء ميمكوين على Solana باسم **$NATRO**. من حسابه **الموثَّق** على Instagram، طلب David Natroshvili شخصيًا الاستثمار في البيع المسبق — بتعليق فوق صورة داخلية لسيارة Bentley: *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k”* — وفوق سيارة Ferrari في أحد شوارع موناكو: *“We’re opening private access to our crypto project presale with me & @natroalex…”*\n\nخلال اثنتين وسبعين ساعة من الإطلاق، انهار التوكن بنحو **~98%**. ورُفضت طلبات ردّ الأموال من الحاملين المتضرّرين — *“Nothing to say”* من مشرف الفريق، و*“stfu”* من حساب Telegram الشخصي للمؤسّس. في النافذة نفسها أُغلق الموقع، وأُزيل رابط NATRO من السيرة الذاتية للمؤسّس على Instagram، وحُذف الفيديو الترويجي المدفوع. وبينما كان ذلك يحدث، كان تصنيف *#1 most influential* يُشارَك ويُحتفى به — *“Cheers to our leader.”*',
  lineKicker: 'الجملة التي كتبوها بأنفسهم',
  lineIntro:
    'أجابت «الأسئلة الشائعة» في موقع المشروع — المحفوظة بالكامل قبل الحذف — عن سؤال «الراگ» بجملة واحدة:',
  lineAfter:
    'ضَع تلك الجملة بجوار تصنيف «الأول» “most influential”، ويتوقّف عنوان الملفّ عن كونه مجازًا. كانت السمعة حقيقية. ومثلها حقيقيٌّ سجلّ ما أُنفق عليه جزءٌ منها. والقارئ يستخلص استنتاجه بنفسه.',
  replyKicker: 'حق الردّ',
  replyBefore:
    'David Natroshvili وSpribe مدعوّان للردّ؛ وقد أُرسل إشعار رسمي إلى عناوين Spribe القانونية والمؤسسية المنشورة في 25 مايو 2026. ستُنشر التصحيحات الوقائعية الموثَّقة بجانب السجلّ. المصادر الكاملة على ',
  replyProfileLabel: 'صفحته التعريفية',
  replyMid: ' وعلى ',
  replyPressLabel: 'صفحة الصحافة',
  replyAfter: '.',
};

const CONTENT: Record<Locale, DavidScamContent> = {
  en,
  ru,
  uk,
  ka,
  fr,
  de,
  es,
  ar,
};

export function getDavidScam(locale: Locale): DavidScamContent {
  return CONTENT[locale] || en;
}
