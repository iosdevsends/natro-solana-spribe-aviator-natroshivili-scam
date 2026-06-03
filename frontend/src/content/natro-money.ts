import type { Locale } from '@/i18n/routing';

/**
 * Localised copy for /how-natroalex-made-his-money.
 *
 * A single-subject page answering one question — "How did NatroAlex make his
 * money?" — strictly from the documented record. The thesis (the credibility on
 * offer was the family name, not an independent track record; the one launch
 * that name fronted took retail money in and collapsed) is carried by sourced
 * facts and verbatim quotes, not by editorial accusation. Verbatim quotes (the
 * site's own founder line, the persona descriptor, David's presale Stories,
 * "Nothing to say", "stfu", the shifting loss figures, the natrocoin.net FAQ
 * line) stay in English — they are sacred quotes and English is the original.
 * The "Where to next" nav stays English, matching the other long-form pages.
 * Body fields use inline markdown rendered by <Prose> (**bold**, *italic*).
 */
export interface NatroMoneyContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  standfirst: string;
  imgAlt: string;
  imgCaption: string;
  selfDoxxKicker: string;
  selfDoxxIntro: string;
  selfDoxxAfter: string;
  assetKicker: string;
  assetBody: string;
  moneyKicker: string;
  moneyBody: string;
  figureKicker: string;
  figureBody: string;
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
export const SELFDOXX_QUOTE =
  'Most coin founders are anonymous. Alex isn’t. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally.';
export const PERSONA = 'Boxer / Car Collector / Watch Collector';
export const FAQ_QUOTE =
  'The reputation hit lasts forever; the cash from a rug doesn’t.';

const en: NatroMoneyContent = {
  metaTitle: 'How did NatroAlex make his money? — the $NATRO record',
  metaDescription:
    'Alex Natroshvili (@natroalex) presented no independent business or financial track record. The trust on offer was the family name — son of Spribe CEO David Natroshvili. The one launch that name fronted, the $NATRO Solana token, took retail presale money in and collapsed ~98% in 72 hours. Refunds refused, the evidence scrubbed. A documented case in reputation pricing.',
  kicker: 'Reputation pricing · the question',
  h1: 'How did NatroAlex make his money?',
  standfirst:
    'The documented answer is narrow: the asset on offer was a name he did not build, and the one launch that name fronted took retail money in and collapsed.',
  imgAlt:
    'The verified Instagram profile of Alex Natroshvili (@natroalex), 54.1K followers, founder of the $NATRO Solana token.',
  imgCaption:
    'Alex Natroshvili — verified Instagram @natroalex (54.1K followers), verified Telegram @natroalex1. Founder of the $NATRO token, launched 21 May 2026.',
  selfDoxxKicker: 'What the pitch said about him',
  selfDoxxIntro:
    'The $NATRO website never hid where the credibility came from. Its founder section opened with this line — archived in full before the site was taken down:',
  selfDoxxAfter:
    'Read closely, that is the pitch stating the asset itself: not a venture, not a product, not a record — *“his family is well-known globally.”* The thing being offered to buyers was the surname.',
  assetKicker: 'The asset, described',
  assetBody:
    'The persona attached to that name was a lifestyle, not a business. The same founder section described Alex Natroshvili as *“Boxer / Car Collector / Watch Collector.”* The file has found **no independent company, product, or audited venture** presented as the reason to invest. The reason given was whose son he is — David Natroshvili, founder and CEO of Spribe, the studio behind the global gambling product Aviator. The trust was borrowed, and the loan was the family name.',
  moneyKicker: 'The one documented money event',
  moneyBody:
    'The single documented occasion on which money moved toward the project is the **$NATRO presale and launch**. The presale was solicited in the first person, from verified family accounts — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — directing buyers to a **$1,500 minimum** and to Alex Natroshvili’s Telegram.\n\nThe token launched **21 May 2026** and collapsed **~98%** within seventy-two hours. Refund requests from affected holders were refused — *“Nothing to say”* from the team admin, *“stfu”* from Alex’s own verified Telegram. Within the same window the website was taken offline, the NATRO link was removed from the founder’s Instagram bio, and the paid promotional video was deleted.',
  figureKicker: 'His own figure',
  figureBody:
    'Asked about his own losses, Alex offered a number that shifted inside a single message thread — *“I lost 38k,”* then *“I swear to god i lost 30k plus.”* The project’s tokenomics had stated the founder allocation was *“publicly committed to never moving.”* An unmoved allocation’s paper loss is not the same thing as cash a retail buyer wired in. Recorded here as **his claim**, not as fact.',
  lineKicker: 'The line they wrote themselves',
  lineIntro:
    'The project’s own FAQ — archived in full before it was deleted — answered the rug-pull question in one sentence:',
  lineAfter:
    'So how did NatroAlex make his money? The record answers only what it can prove: the thing sold was a name he did not earn, and the one launch that name fronted took retail money in and then collapsed. What, if anything, was kept is a question for on-chain forensics — still in progress. Readers draw their own conclusion.',
  replyKicker: 'Right of reply',
  replyBefore:
    'Alex Natroshvili and Spribe are invited to respond; a formal notice was sent to Spribe’s published legal and corporate addresses on 25 May 2026. Documented factual corrections will be published alongside the record. The full sourcing is on his ',
  replyProfileLabel: 'profile',
  replyMid: ' and the ',
  replyPressLabel: 'press page',
  replyAfter: '.',
};

const ru: NatroMoneyContent = {
  metaTitle: 'Откуда у NatroAlex деньги? — хроника $NATRO',
  metaDescription:
    'Alex Natroshvili (@natroalex) не предъявил никакого собственного бизнеса или финансового послужного списка. На продажу выставлялось доверие к фамилии — сын CEO Spribe David Natroshvili. Единственный запуск, который эта фамилия прикрывала, токен $NATRO на Solana, собрал деньги розничного пресейла и обвалился на ~98% за 72 часа. В возврате отказали, улики удалили.',
  kicker: 'Ценообразование репутации · вопрос',
  h1: 'Откуда у NatroAlex деньги?',
  standfirst:
    'Документированный ответ узок: на продажу выставлялось имя, которое он не создавал, а единственный запуск под этим именем собрал деньги розницы и обвалился.',
  imgAlt:
    'Верифицированный профиль Alex Natroshvili в Instagram (@natroalex), 54,1 тыс. подписчиков, основатель токена $NATRO на Solana.',
  imgCaption:
    'Alex Natroshvili — верифицированный Instagram @natroalex (54,1 тыс. подписчиков), верифицированный Telegram @natroalex1. Основатель токена $NATRO, запуск 21 мая 2026.',
  selfDoxxKicker: 'Что о нём говорил сам питч',
  selfDoxxIntro:
    'Сайт $NATRO не скрывал, откуда берётся доверие. Раздел об основателе открывался этой строкой — полностью сохранённой в архиве до того, как сайт удалили:',
  selfDoxxAfter:
    'Если вчитаться, это сам питч называет свой актив: не предприятие, не продукт, не послужной список — *“his family is well-known globally.”* На продажу покупателям предлагалась фамилия.',
  assetKicker: 'Актив, как его описали',
  assetBody:
    'Образ, привязанный к этому имени, — это стиль жизни, а не бизнес. Тот же раздел описывал Alex Natroshvili как *“Boxer / Car Collector / Watch Collector.”* Файл **не нашёл ни одной самостоятельной компании, продукта или проверенного аудитом проекта**, который был бы предъявлен как повод вкладываться. Поводом было то, чей он сын — David Natroshvili, основателя и CEO Spribe, студии за глобальным игорным продуктом Aviator. Доверие было одолжено, и залогом стала фамилия.',
  moneyKicker: 'Единственное задокументированное движение денег',
  moneyBody:
    'Единственный задокументированный случай, когда деньги двигались в сторону проекта, — это **пресейл и запуск $NATRO**. Пресейл собирали от первого лица, с верифицированных семейных аккаунтов — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — направляя покупателей к **минимуму в $1 500** и к Telegram Alex Natroshvili.\n\nТокен запустили **21 мая 2026** и он обвалился на **~98%** за семьдесят два часа. В возврате средств пострадавшим держателям отказали — *“Nothing to say”* от админа команды, *“stfu”* из личного верифицированного Telegram Алекса. В то же окно сайт отключили, ссылку на NATRO убрали из биографии Instagram основателя, а оплаченное промо-видео удалили.',
  figureKicker: 'Его собственная цифра',
  figureBody:
    'На вопрос о собственных потерях Алекс назвал число, менявшееся внутри одной переписки — *“I lost 38k,”* затем *“I swear to god i lost 30k plus.”* В токеномике проекта было заявлено, что аллокация основателя *“publicly committed to never moving.”* Бумажный убыток несдвинутой аллокации — не то же самое, что наличные, которые перевёл розничный покупатель. Зафиксировано здесь как **его утверждение**, а не как факт.',
  lineKicker: 'Строка, которую они написали сами',
  lineIntro:
    'FAQ самого проекта — полностью сохранённый в архиве до удаления — ответил на вопрос о rug-pull одной фразой:',
  lineAfter:
    'Так откуда у NatroAlex деньги? Хроника отвечает только тем, что может доказать: продавали имя, которое он не заработал, а единственный запуск под этим именем собрал деньги розницы и затем обвалился. Что именно, если что-то, было удержано, — вопрос к on-chain-форензике, которая ещё идёт. Выводы читатель делает сам.',
  replyKicker: 'Право на ответ',
  replyBefore:
    'Alex Natroshvili и Spribe приглашаются ответить; формальное уведомление было направлено на публичные юридические и корпоративные адреса Spribe 25 мая 2026 года. Документированные фактические уточнения будут опубликованы рядом с записью. Полные источники — на его ',
  replyProfileLabel: 'странице',
  replyMid: ' и на ',
  replyPressLabel: 'странице для прессы',
  replyAfter: '.',
};

const uk: NatroMoneyContent = {
  metaTitle: 'Звідки в NatroAlex гроші? — хроніка $NATRO',
  metaDescription:
    'Alex Natroshvili (@natroalex) не пред’явив жодного власного бізнесу чи фінансового послужного списку. На продаж виставлялася довіра до прізвища — син CEO Spribe David Natroshvili. Єдиний запуск, який це прізвище прикривало, токен $NATRO на Solana, зібрав гроші роздрібного пресейлу й обвалився на ~98% за 72 години. У поверненні відмовили, докази видалили.',
  kicker: 'Ціноутворення репутації · питання',
  h1: 'Звідки в NatroAlex гроші?',
  standfirst:
    'Документований відповідь вузька: на продаж виставлялося ім’я, яке він не створював, а єдиний запуск під цим іменем зібрав гроші роздробу й обвалився.',
  imgAlt:
    'Верифікований профіль Alex Natroshvili в Instagram (@natroalex), 54,1 тис. підписників, засновник токена $NATRO на Solana.',
  imgCaption:
    'Alex Natroshvili — верифікований Instagram @natroalex (54,1 тис. підписників), верифікований Telegram @natroalex1. Засновник токена $NATRO, запуск 21 травня 2026.',
  selfDoxxKicker: 'Що про нього казав сам пітч',
  selfDoxxIntro:
    'Сайт $NATRO не приховував, звідки береться довіра. Розділ про засновника відкривався цим рядком — повністю збереженим в архіві до того, як сайт видалили:',
  selfDoxxAfter:
    'Якщо вчитатися, це сам пітч називає свій актив: не підприємство, не продукт, не послужний список — *“his family is well-known globally.”* На продаж покупцям пропонувалося прізвище.',
  assetKicker: 'Актив, як його описали',
  assetBody:
    'Образ, прив’язаний до цього імені, — це стиль життя, а не бізнес. Той самий розділ описував Alex Natroshvili як *“Boxer / Car Collector / Watch Collector.”* Файл **не знайшов жодної самостійної компанії, продукту чи перевіреного аудитом проєкту**, який був би пред’явлений як привід вкладатися. Приводом було те, чий він син — David Natroshvili, засновника і CEO Spribe, студії за глобальним гральним продуктом Aviator. Довіру позичили, і заставою стало прізвище.',
  moneyKicker: 'Єдиний задокументований рух грошей',
  moneyBody:
    'Єдиний задокументований випадок, коли гроші рухалися в бік проєкту, — це **пресейл і запуск $NATRO**. Пресейл збирали від першої особи, з верифікованих сімейних акаунтів — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — спрямовуючи покупців до **мінімуму в $1 500** і до Telegram Alex Natroshvili.\n\nТокен запустили **21 травня 2026** і він обвалився на **~98%** за сімдесят дві години. У поверненні коштів постраждалим тримачам відмовили — *“Nothing to say”* від адміна команди, *“stfu”* з особистого верифікованого Telegram Алекса. У те саме вікно сайт відключили, посилання на NATRO прибрали з біографії Instagram засновника, а оплачене промо-відео видалили.',
  figureKicker: 'Його власна цифра',
  figureBody:
    'На питання про власні втрати Алекс назвав число, що змінювалося в межах одного листування — *“I lost 38k,”* потім *“I swear to god i lost 30k plus.”* У токеноміці проєкту було заявлено, що алокація засновника *“publicly committed to never moving.”* Паперовий збиток несунутої алокації — не те саме, що готівка, яку переказав роздрібний покупець. Зафіксовано тут як **його твердження**, а не як факт.',
  lineKicker: 'Рядок, який вони написали самі',
  lineIntro:
    'FAQ самого проєкту — повністю збережений в архіві до видалення — відповів на питання про rug-pull однією фразою:',
  lineAfter:
    'То звідки в NatroAlex гроші? Хроніка відповідає лише тим, що може довести: продавали ім’я, яке він не заробив, а єдиний запуск під цим іменем зібрав гроші роздробу і потім обвалився. Що саме, якщо щось, було утримано, — питання до on-chain-форензики, яка ще триває. Висновки читач робить сам.',
  replyKicker: 'Право на відповідь',
  replyBefore:
    'Alex Natroshvili і Spribe запрошуються відповісти; формальне повідомлення було надіслано на публічні юридичні та корпоративні адреси Spribe 25 травня 2026 року. Документовані фактичні уточнення буде опубліковано поряд із записом. Повні джерела — на його ',
  replyProfileLabel: 'сторінці',
  replyMid: ' і на ',
  replyPressLabel: 'сторінці для преси',
  replyAfter: '.',
};

const ka: NatroMoneyContent = {
  metaTitle: 'როგორ გააკეთა NatroAlex-მა ფული? — $NATRO-ს ჩანაწერი',
  metaDescription:
    'Alex Natroshvili-მ (@natroalex) არ წარმოადგინა საკუთარი ბიზნესი ან ფინანსური გამოცდილება. გასაყიდი იყო ნდობა გვარისადმი — Spribe-ის CEO David Natroshvili-ს შვილი. ერთადერთი გაშვება, რომელსაც ეს გვარი ფარავდა, Solana-ს ტოკენი $NATRO, შეაგროვა საცალო პრესეილის ფული და დაეცა ~98%-ით 72 საათში. დაბრუნებაზე უარი თქვეს, მტკიცებულებები წაშალეს.',
  kicker: 'რეპუტაციის ფასდადება · კითხვა',
  h1: 'როგორ გააკეთა NatroAlex-მა ფული?',
  standfirst:
    'დოკუმენტირებული პასუხი ვიწროა: გასაყიდი იყო სახელი, რომელიც მან არ შექმნა, და ერთადერთმა გაშვებამ ამ სახელით შეაგროვა საცალო ფული და დაეცა.',
  imgAlt:
    'Alex Natroshvili-ს ვერიფიცირებული Instagram პროფილი (@natroalex), 54.1K გამომწერი, $NATRO Solana ტოკენის დამფუძნებელი.',
  imgCaption:
    'Alex Natroshvili — ვერიფიცირებული Instagram @natroalex (54.1K გამომწერი), ვერიფიცირებული Telegram @natroalex1. $NATRO ტოკენის დამფუძნებელი, გაშვება 21 მაისი 2026.',
  selfDoxxKicker: 'რას ამბობდა მასზე თავად პიჩი',
  selfDoxxIntro:
    '$NATRO-ს საიტი არ მალავდა, საიდან მოდიოდა ნდობა. დამფუძნებლის სექცია იხსნებოდა ამ სტრიქონით — სრულად დაარქივებული საიტის წაშლამდე:',
  selfDoxxAfter:
    'ყურადღებით თუ წაიკითხავ, ეს თავად პიჩი ასახელებს თავის აქტივს: არც საწარმო, არც პროდუქტი, არც გამოცდილება — *“his family is well-known globally.”* მყიდველებს სთავაზობდნენ გვარს.',
  assetKicker: 'აქტივი, აღწერილი',
  assetBody:
    'ამ სახელზე მიბმული იმიჯი ცხოვრების სტილი იყო, არა ბიზნესი. იგივე სექცია Alex Natroshvili-ს აღწერდა როგორც *“Boxer / Car Collector / Watch Collector.”* ფაილს **არ უპოვია არც ერთი დამოუკიდებელი კომპანია, პროდუქტი ან აუდიტ-შემოწმებული საქმე**, რომელიც წარდგენილი იქნებოდა ინვესტიციის მიზეზად. მიზეზი იყო ის, ვისი შვილიც არის — David Natroshvili, Spribe-ის დამფუძნებელი და CEO, სტუდიის, რომელიც დგას გლობალური სათამაშო პროდუქტ Aviator-ის უკან. ნდობა ნასესხები იყო, გირაო კი — გვარი.',
  moneyKicker: 'ერთადერთი დოკუმენტირებული ფულადი მოძრაობა',
  moneyBody:
    'ერთადერთი დოკუმენტირებული შემთხვევა, როცა ფული პროექტისკენ მოძრაობდა, არის **$NATRO-ს პრესეილი და გაშვება**. პრესეილს აგროვებდნენ პირველ პირში, ვერიფიცირებული ოჯახური ანგარიშებიდან — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — მყიდველებს მიმართავდნენ **$1,500 მინიმუმისკენ** და Alex Natroshvili-ს Telegram-ისკენ.\n\nტოკენი გაუშვეს **21 მაისს 2026** და დაეცა **~98%-ით** სამოცდათორმეტ საათში. დაზარალებული მფლობელების დაბრუნების მოთხოვნებზე უარი თქვეს — *“Nothing to say”* გუნდის ადმინისგან, *“stfu”* ალექსის პირადი ვერიფიცირებული Telegram-იდან. იმავე ფანჯარაში საიტი გათიშეს, NATRO-ს ბმული მოხსნეს დამფუძნებლის Instagram ბიოდან, ხოლო ფასიანი სარეკლამო ვიდეო წაშალეს.',
  figureKicker: 'მისი საკუთარი ციფრი',
  figureBody:
    'საკუთარ დანაკარგებზე კითხვაზე ალექსმა დაასახელა რიცხვი, რომელიც იცვლებოდა ერთი მიმოწერის ფარგლებში — *“I lost 38k,”* შემდეგ *“I swear to god i lost 30k plus.”* პროექტის ტოკენომიკაში ნათქვამი იყო, რომ დამფუძნებლის წილი *“publicly committed to never moving.”* გაუნძრევი წილის ქაღალდის ზარალი არ არის იგივე, რაც ნაღდი ფული, რომელიც საცალო მყიდველმა გადარიცხა. აქ დაფიქსირებულია როგორც **მისი მტკიცება**, არა როგორც ფაქტი.',
  lineKicker: 'სტრიქონი, რომელიც მათ თვითონ დაწერეს',
  lineIntro:
    'პროექტის საკუთარმა FAQ-მ — სრულად დაარქივებულმა წაშლამდე — rug-pull-ის კითხვას ერთ წინადადებაში უპასუხა:',
  lineAfter:
    'მაშ, როგორ გააკეთა NatroAlex-მა ფული? ჩანაწერი პასუხობს მხოლოდ იმას, რისი დამტკიცებაც შეუძლია: ყიდდნენ სახელს, რომელიც მან არ დაიმსახურა, და ერთადერთმა გაშვებამ ამ სახელით შეაგროვა საცალო ფული და მერე დაეცა. რა, თუ რამე, შეინარჩუნა — ეს კითხვა on-chain ფორენზიკისთვისაა, რომელიც ჯერ მიმდინარეობს. დასკვნას მკითხველი თავად აკეთებს.',
  replyKicker: 'პასუხის უფლება',
  replyBefore:
    'Alex Natroshvili და Spribe მოწვეულნი არიან პასუხისთვის; ფორმალური შეტყობინება გაიგზავნა Spribe-ის გამოქვეყნებულ იურიდიულ და კორპორაციულ მისამართებზე 25 მაისს 2026. დოკუმენტირებული ფაქტობრივი შესწორებები გამოქვეყნდება ჩანაწერის გვერდით. სრული წყაროები მის ',
  replyProfileLabel: 'პროფილზე',
  replyMid: ' და ',
  replyPressLabel: 'პრესის გვერდზეა',
  replyAfter: '.',
};

const fr: NatroMoneyContent = {
  metaTitle: 'Comment NatroAlex a-t-il gagné son argent ? — le dossier $NATRO',
  metaDescription:
    'Alex Natroshvili (@natroalex) n’a présenté aucun parcours entrepreneurial ou financier propre. Ce qui était mis en vente, c’était la confiance liée au nom de famille — fils du PDG de Spribe, David Natroshvili. Le seul lancement que ce nom a couvert, le token $NATRO sur Solana, a encaissé l’argent de la prévente du grand public et s’est effondré de ~98 % en 72 heures. Remboursements refusés, preuves effacées.',
  kicker: 'La valorisation de la réputation · la question',
  h1: 'Comment NatroAlex a-t-il gagné son argent ?',
  standfirst:
    'La réponse documentée est étroite : ce qui était mis en vente, c’était un nom qu’il n’a pas bâti, et le seul lancement porté par ce nom a encaissé l’argent du grand public puis s’est effondré.',
  imgAlt:
    'Le profil Instagram vérifié d’Alex Natroshvili (@natroalex), 54,1 K abonnés, fondateur du token $NATRO sur Solana.',
  imgCaption:
    'Alex Natroshvili — Instagram vérifié @natroalex (54,1 K abonnés), Telegram vérifié @natroalex1. Fondateur du token $NATRO, lancé le 21 mai 2026.',
  selfDoxxKicker: 'Ce que le pitch disait de lui',
  selfDoxxIntro:
    'Le site de $NATRO ne cachait pas d’où venait la crédibilité. Sa section fondateur s’ouvrait sur cette phrase — archivée intégralement avant le retrait du site :',
  selfDoxxAfter:
    'À bien lire, c’est le pitch lui-même qui nomme son actif : pas une entreprise, pas un produit, pas un parcours — *“his family is well-known globally.”* Ce qu’on proposait aux acheteurs, c’était le nom.',
  assetKicker: 'L’actif, tel qu’il était décrit',
  assetBody:
    'Le personnage attaché à ce nom était un style de vie, pas une entreprise. La même section décrivait Alex Natroshvili comme *“Boxer / Car Collector / Watch Collector.”* Le dossier n’a trouvé **aucune entreprise, aucun produit ni aucune activité auditée indépendante** présentés comme raison d’investir. La raison avancée était de qui il est le fils — David Natroshvili, fondateur et PDG de Spribe, le studio derrière le produit de jeu mondial Aviator. La confiance était empruntée, et la garantie était le nom de famille.',
  moneyKicker: 'Le seul mouvement d’argent documenté',
  moneyBody:
    'La seule occasion documentée où de l’argent s’est dirigé vers le projet, c’est la **prévente et le lancement de $NATRO**. La prévente a été sollicitée à la première personne, depuis des comptes familiaux vérifiés — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — orientant les acheteurs vers un **minimum de 1 500 $** et vers le Telegram d’Alex Natroshvili.\n\nLe token a été lancé le **21 mai 2026** et s’est effondré de **~98 %** en soixante-douze heures. Les demandes de remboursement des détenteurs lésés ont été refusées — *“Nothing to say”* de l’administrateur de l’équipe, *“stfu”* depuis le Telegram vérifié d’Alex. Dans la même fenêtre, le site a été mis hors ligne, le lien NATRO retiré de la bio Instagram du fondateur, et la vidéo promotionnelle payante supprimée.',
  figureKicker: 'Son propre chiffre',
  figureBody:
    'Interrogé sur ses propres pertes, Alex a donné un chiffre qui changeait au sein d’un même fil de messages — *“I lost 38k,”* puis *“I swear to god i lost 30k plus.”* La tokenomics du projet indiquait que l’allocation du fondateur était *“publicly committed to never moving.”* La perte sur papier d’une allocation qui n’a pas bougé n’équivaut pas à l’argent qu’un acheteur du grand public a viré. Consigné ici comme **son affirmation**, et non comme un fait.',
  lineKicker: 'La phrase qu’ils ont écrite eux-mêmes',
  lineIntro:
    'La FAQ du projet — archivée intégralement avant sa suppression — répondait à la question du rug-pull en une phrase :',
  lineAfter:
    'Alors, comment NatroAlex a-t-il gagné son argent ? Le dossier ne répond qu’à ce qu’il peut prouver : ce qui a été vendu, c’était un nom qu’il n’a pas mérité, et le seul lancement porté par ce nom a encaissé l’argent du grand public avant de s’effondrer. Ce qui a été conservé, le cas échéant, est une question pour l’analyse on-chain — toujours en cours. Le lecteur en tire ses propres conclusions.',
  replyKicker: 'Droit de réponse',
  replyBefore:
    'Alex Natroshvili et Spribe sont invités à répondre ; une notification formelle a été envoyée aux adresses juridiques et corporatives publiées de Spribe le 25 mai 2026. Les corrections factuelles documentées seront publiées aux côtés du dossier. Les sources complètes figurent sur son ',
  replyProfileLabel: 'profil',
  replyMid: ' et la ',
  replyPressLabel: 'page presse',
  replyAfter: '.',
};

const de: NatroMoneyContent = {
  metaTitle: 'Wie hat NatroAlex sein Geld verdient? — die $NATRO-Akte',
  metaDescription:
    'Alex Natroshvili (@natroalex) legte keine eigene unternehmerische oder finanzielle Erfolgsbilanz vor. Verkauft wurde das Vertrauen in den Familiennamen — Sohn von Spribe-CEO David Natroshvili. Der einzige Launch, den dieser Name deckte, der $NATRO-Token auf Solana, nahm Presale-Geld von Privatanlegern ein und brach in 72 Stunden um ~98 % ein. Rückerstattungen verweigert, Beweise gelöscht.',
  kicker: 'Reputationspreis · die Frage',
  h1: 'Wie hat NatroAlex sein Geld verdient?',
  standfirst:
    'Die belegte Antwort ist eng: Verkauft wurde ein Name, den er nicht aufgebaut hat, und der einzige von diesem Namen getragene Launch nahm Geld von Privatanlegern ein und brach ein.',
  imgAlt:
    'Das verifizierte Instagram-Profil von Alex Natroshvili (@natroalex), 54,1 Tsd. Follower, Gründer des $NATRO-Tokens auf Solana.',
  imgCaption:
    'Alex Natroshvili — verifiziertes Instagram @natroalex (54,1 Tsd. Follower), verifiziertes Telegram @natroalex1. Gründer des $NATRO-Tokens, Launch am 21. Mai 2026.',
  selfDoxxKicker: 'Was der Pitch über ihn sagte',
  selfDoxxIntro:
    'Die $NATRO-Website verbarg nicht, woher die Glaubwürdigkeit kam. Der Gründerabschnitt begann mit dieser Zeile — vollständig archiviert, bevor die Seite offline genommen wurde:',
  selfDoxxAfter:
    'Genau gelesen, benennt der Pitch hier sein eigenes Asset: kein Unternehmen, kein Produkt, keine Bilanz — *“his family is well-known globally.”* Den Käufern angeboten wurde der Name.',
  assetKicker: 'Das Asset, beschrieben',
  assetBody:
    'Die an diesen Namen geknüpfte Persona war ein Lebensstil, kein Geschäft. Derselbe Abschnitt beschrieb Alex Natroshvili als *“Boxer / Car Collector / Watch Collector.”* Die Akte fand **kein eigenständiges Unternehmen, kein Produkt und kein geprüftes Vorhaben**, das als Grund zum Investieren präsentiert worden wäre. Der genannte Grund war, wessen Sohn er ist — David Natroshvili, Gründer und CEO von Spribe, dem Studio hinter dem globalen Glücksspielprodukt Aviator. Das Vertrauen war geliehen, und die Sicherheit war der Familienname.',
  moneyKicker: 'Die einzige dokumentierte Geldbewegung',
  moneyBody:
    'Der einzige dokumentierte Anlass, bei dem Geld in Richtung des Projekts floss, ist der **$NATRO-Presale und -Launch**. Der Presale wurde in der Ich-Form beworben, von verifizierten Familienkonten — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — und lenkte Käufer zu einem **Mindestbetrag von 1.500 $** und zum Telegram von Alex Natroshvili.\n\nDer Token startete am **21. Mai 2026** und brach binnen zweiundsiebzig Stunden um **~98 %** ein. Rückerstattungsanfragen betroffener Halter wurden abgelehnt — *“Nothing to say”* vom Team-Admin, *“stfu”* aus Alex’ eigenem verifiziertem Telegram. Im selben Zeitfenster wurde die Website offline genommen, der NATRO-Link aus der Instagram-Bio des Gründers entfernt und das bezahlte Werbevideo gelöscht.',
  figureKicker: 'Seine eigene Zahl',
  figureBody:
    'Auf seine eigenen Verluste angesprochen, nannte Alex eine Zahl, die sich innerhalb eines einzigen Nachrichtenverlaufs verschob — *“I lost 38k,”* dann *“I swear to god i lost 30k plus.”* Die Tokenomics des Projekts hatte angegeben, die Gründer-Allokation sei *“publicly committed to never moving.”* Der Buchverlust einer nicht bewegten Allokation ist nicht dasselbe wie Bargeld, das ein Privatkäufer überwiesen hat. Hier festgehalten als **seine Behauptung**, nicht als Tatsache.',
  lineKicker: 'Die Zeile, die sie selbst geschrieben haben',
  lineIntro:
    'Die eigene FAQ des Projekts — vor der Löschung vollständig archiviert — beantwortete die Rug-Pull-Frage in einem Satz:',
  lineAfter:
    'Also, wie hat NatroAlex sein Geld verdient? Die Akte beantwortet nur, was sie belegen kann: Verkauft wurde ein Name, den er sich nicht verdient hat, und der einzige von diesem Namen getragene Launch nahm Geld von Privatanlegern ein und brach dann ein. Was, wenn überhaupt, behalten wurde, ist eine Frage für die On-Chain-Forensik — noch im Gange. Die Leser ziehen ihre eigenen Schlüsse.',
  replyKicker: 'Recht auf Gegendarstellung',
  replyBefore:
    'Alex Natroshvili und Spribe sind eingeladen zu antworten; eine formelle Mitteilung wurde am 25. Mai 2026 an die veröffentlichten Rechts- und Unternehmensadressen von Spribe gesendet. Dokumentierte sachliche Korrekturen werden neben dem Bericht veröffentlicht. Die vollständigen Quellen finden sich auf seinem ',
  replyProfileLabel: 'Profil',
  replyMid: ' und der ',
  replyPressLabel: 'Presseseite',
  replyAfter: '.',
};

const es: NatroMoneyContent = {
  metaTitle: '¿Cómo ganó NatroAlex su dinero? — el expediente $NATRO',
  metaDescription:
    'Alex Natroshvili (@natroalex) no presentó ninguna trayectoria empresarial o financiera propia. Lo que se vendía era la confianza en el apellido — hijo del CEO de Spribe, David Natroshvili. El único lanzamiento que ese nombre respaldó, el token $NATRO en Solana, recaudó dinero de la preventa minorista y se desplomó ~98 % en 72 horas. Reembolsos denegados, pruebas borradas.',
  kicker: 'Precio de la reputación · la pregunta',
  h1: '¿Cómo ganó NatroAlex su dinero?',
  standfirst:
    'La respuesta documentada es estrecha: lo que se vendía era un nombre que él no construyó, y el único lanzamiento respaldado por ese nombre recaudó dinero minorista y se desplomó.',
  imgAlt:
    'El perfil de Instagram verificado de Alex Natroshvili (@natroalex), 54,1 K seguidores, fundador del token $NATRO en Solana.',
  imgCaption:
    'Alex Natroshvili — Instagram verificado @natroalex (54,1 K seguidores), Telegram verificado @natroalex1. Fundador del token $NATRO, lanzado el 21 de mayo de 2026.',
  selfDoxxKicker: 'Lo que el pitch decía de él',
  selfDoxxIntro:
    'El sitio de $NATRO no ocultaba de dónde venía la credibilidad. Su sección de fundador abría con esta línea — archivada íntegramente antes de que retiraran el sitio:',
  selfDoxxAfter:
    'Leído con atención, es el propio pitch nombrando su activo: ni una empresa, ni un producto, ni una trayectoria — *“his family is well-known globally.”* Lo que se ofrecía a los compradores era el apellido.',
  assetKicker: 'El activo, descrito',
  assetBody:
    'La persona vinculada a ese nombre era un estilo de vida, no un negocio. La misma sección describía a Alex Natroshvili como *“Boxer / Car Collector / Watch Collector.”* El expediente no ha encontrado **ninguna empresa, producto ni proyecto auditado independiente** presentado como razón para invertir. La razón dada era de quién es hijo — David Natroshvili, fundador y CEO de Spribe, el estudio detrás del producto de apuestas global Aviator. La confianza era prestada, y la garantía era el apellido.',
  moneyKicker: 'El único movimiento de dinero documentado',
  moneyBody:
    'La única ocasión documentada en que el dinero se movió hacia el proyecto es la **preventa y el lanzamiento de $NATRO**. La preventa se solicitó en primera persona, desde cuentas familiares verificadas — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — dirigiendo a los compradores a un **mínimo de 1.500 $** y al Telegram de Alex Natroshvili.\n\nEl token se lanzó el **21 de mayo de 2026** y se desplomó **~98 %** en setenta y dos horas. Las solicitudes de reembolso de los tenedores afectados fueron denegadas — *“Nothing to say”* del administrador del equipo, *“stfu”* desde el propio Telegram verificado de Alex. En la misma ventana el sitio se puso fuera de línea, el enlace de NATRO se retiró de la bio de Instagram del fundador y el video promocional pagado se eliminó.',
  figureKicker: 'Su propia cifra',
  figureBody:
    'Preguntado por sus propias pérdidas, Alex dio una cifra que cambiaba dentro de un mismo hilo de mensajes — *“I lost 38k,”* y luego *“I swear to god i lost 30k plus.”* La tokenómica del proyecto había declarado que la asignación del fundador estaba *“publicly committed to never moving.”* La pérdida en papel de una asignación que no se ha movido no es lo mismo que el efectivo que transfirió un comprador minorista. Registrado aquí como **su afirmación**, no como un hecho.',
  lineKicker: 'La línea que escribieron ellos mismos',
  lineIntro:
    'El propio FAQ del proyecto — archivado íntegramente antes de borrarse — respondió a la pregunta del rug-pull en una sola frase:',
  lineAfter:
    'Entonces, ¿cómo ganó NatroAlex su dinero? El expediente responde solo a lo que puede probar: lo que se vendió fue un nombre que no se ganó, y el único lanzamiento respaldado por ese nombre recaudó dinero minorista y luego se desplomó. Qué se quedó, si acaso algo, es una pregunta para el análisis on-chain — todavía en curso. El lector saca sus propias conclusiones.',
  replyKicker: 'Derecho de réplica',
  replyBefore:
    'Se invita a Alex Natroshvili y a Spribe a responder; el 25 de mayo de 2026 se envió una notificación formal a las direcciones legales y corporativas publicadas de Spribe. Las correcciones factuales documentadas se publicarán junto al expediente. Las fuentes completas están en su ',
  replyProfileLabel: 'perfil',
  replyMid: ' y en la ',
  replyPressLabel: 'página de prensa',
  replyAfter: '.',
};

const ar: NatroMoneyContent = {
  metaTitle: 'كيف جنى NatroAlex أمواله؟ — ملف $NATRO',
  metaDescription:
    'لم يقدّم أليكس ناتروشفيلي (@natroalex) أي سجلّ تجاري أو مالي مستقل. ما كان معروضًا للبيع هو الثقة باسم العائلة — ابن الرئيس التنفيذي لـ Spribe، David Natroshvili. الإطلاق الوحيد الذي غطّاه هذا الاسم، عملة $NATRO على Solana، جمع أموال البيع المسبق من جمهور التجزئة وانهار ~98% خلال 72 ساعة. رُفض ردّ الأموال، ومُحيت الأدلّة.',
  kicker: 'تسعير السمعة · السؤال',
  h1: 'كيف جنى NatroAlex أمواله؟',
  standfirst:
    'الإجابة الموثَّقة ضيّقة: ما كان معروضًا للبيع اسمٌ لم يبنِه، والإطلاق الوحيد الذي حمله هذا الاسم جمع أموال التجزئة ثم انهار.',
  imgAlt:
    'الحساب الموثَّق لأليكس ناتروشفيلي على إنستغرام (@natroalex)، 54.1 ألف متابع، مؤسّس عملة $NATRO على Solana.',
  imgCaption:
    'Alex Natroshvili — إنستغرام موثَّق @natroalex (54.1 ألف متابع)، تيليغرام موثَّق @natroalex1. مؤسّس عملة $NATRO، أُطلقت في 21 مايو 2026.',
  selfDoxxKicker: 'ما قاله العرض التسويقي عنه',
  selfDoxxIntro:
    'لم يُخفِ موقع $NATRO مصدر المصداقية. افتُتح قسم المؤسّس بهذا السطر — المؤرشف بالكامل قبل إزالة الموقع:',
  selfDoxxAfter:
    'بقراءةٍ متأنّية، العرض نفسه يسمّي أصله: لا مشروع، ولا منتج، ولا سجلّ — *“his family is well-known globally.”* ما كان يُعرَض على المشترين هو اسم العائلة.',
  assetKicker: 'الأصل، كما وُصِف',
  assetBody:
    'كانت الصورة المرتبطة بهذا الاسم أسلوب حياة، لا عملًا تجاريًا. القسم ذاته وصف أليكس ناتروشفيلي بأنه *“Boxer / Car Collector / Watch Collector.”* لم يجد الملف **أي شركة أو منتج أو مشروع مدقَّق مستقل** قُدِّم سببًا للاستثمار. السبب المُقدَّم كان نسبه — David Natroshvili، مؤسّس Spribe ورئيسها التنفيذي، الاستوديو وراء منتج المقامرة العالمي Aviator. كانت الثقة مُستعارة، والضمان هو اسم العائلة.',
  moneyKicker: 'الحركة المالية الموثَّقة الوحيدة',
  moneyBody:
    'المناسبة الموثَّقة الوحيدة التي تحرّك فيها المال نحو المشروع هي **البيع المسبق وإطلاق $NATRO**. جرى طلب البيع المسبق بصيغة المتكلّم، من حسابات عائلية موثَّقة — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — موجّهًا المشترين إلى **حدّ أدنى قدره 1,500 دولار** وإلى تيليغرام أليكس ناتروشفيلي.\n\nأُطلقت العملة في **21 مايو 2026** وانهارت **~98%** خلال اثنتين وسبعين ساعة. رُفضت طلبات ردّ الأموال من المالكين المتضرّرين — *“Nothing to say”* من مشرف الفريق، و*“stfu”* من تيليغرام أليكس الموثَّق نفسه. في النافذة الزمنية ذاتها أُخرج الموقع عن الخدمة، وأُزيل رابط NATRO من سيرة المؤسّس على إنستغرام، وحُذِف الفيديو الترويجي المدفوع.',
  figureKicker: 'رقمه هو',
  figureBody:
    'سُئل أليكس عن خسائره فأعطى رقمًا تغيّر داخل سلسلة الرسائل نفسها — *“I lost 38k,”* ثم *“I swear to god i lost 30k plus.”* كانت اقتصاديات العملة في المشروع قد ذكرت أن حصّة المؤسّس *“publicly committed to never moving.”* وخسارة دفترية على حصّة لم تتحرّك ليست كالنقد الذي حوّله مشترٍ من التجزئة. مُسجَّل هنا بوصفه **ادّعاءه**، لا بوصفه حقيقة.',
  lineKicker: 'السطر الذي كتبوه بأنفسهم',
  lineIntro:
    'أجابت الأسئلة الشائعة للمشروع — المؤرشفة بالكامل قبل حذفها — على سؤال السحب الاحتيالي في جملة واحدة:',
  lineAfter:
    'إذن، كيف جنى NatroAlex أمواله؟ لا يجيب الملف إلا بما يستطيع إثباته: ما بِيع كان اسمًا لم يكتسبه، والإطلاق الوحيد الذي حمله هذا الاسم جمع أموال التجزئة ثم انهار. أمّا ما احتُفِظ به — إن وُجد — فسؤالٌ لتحليل السلسلة، ولا يزال جاريًا. والقارئ يستخلص استنتاجه بنفسه.',
  replyKicker: 'حقّ الردّ',
  replyBefore:
    'أليكس ناتروشفيلي وSpribe مدعوّان للردّ؛ أُرسل إشعار رسمي إلى عناوين Spribe القانونية والمؤسسية المنشورة في 25 مايو 2026. ستُنشر التصحيحات الوقائعية الموثَّقة إلى جانب السجلّ. المصادر الكاملة على ',
  replyProfileLabel: 'صفحته',
  replyMid: ' وعلى ',
  replyPressLabel: 'صفحة الصحافة',
  replyAfter: '.',
};

const ur: NatroMoneyContent = {
  metaTitle: 'NatroAlex نے اپنا پیسہ کیسے کمایا؟ — $NATRO کی فائل',
  metaDescription:
    'الیکس ناتروشویلی (@natroalex) نے اپنا کوئی آزاد کاروباری یا مالی ریکارڈ پیش نہیں کیا۔ جو چیز بیچی جا رہی تھی وہ خاندانی نام پر اعتماد تھا — Spribe کے سی ای او David Natroshvili کا بیٹا۔ جس واحد لانچ کو اس نام نے سہارا دیا، Solana پر $NATRO ٹوکن، اس نے ریٹیل پری سیل کا پیسہ لیا اور 72 گھنٹوں میں ~98% گر گیا۔ رقم کی واپسی سے انکار، ثبوت مٹا دیے گئے۔',
  kicker: 'ساکھ کی قیمت · سوال',
  h1: 'NatroAlex نے اپنا پیسہ کیسے کمایا؟',
  standfirst:
    'دستاویزی جواب محدود ہے: جو چیز بیچی جا رہی تھی وہ ایک ایسا نام تھا جو اُس نے نہیں بنایا، اور اس نام کے تحت واحد لانچ نے ریٹیل کا پیسہ لیا اور گر گیا۔',
  imgAlt:
    'الیکس ناتروشویلی کا تصدیق شدہ انسٹاگرام پروفائل (@natroalex)، 54.1 ہزار فالوورز، Solana پر $NATRO ٹوکن کے بانی۔',
  imgCaption:
    'Alex Natroshvili — تصدیق شدہ انسٹاگرام @natroalex (54.1 ہزار فالوورز)، تصدیق شدہ ٹیلیگرام @natroalex1۔ $NATRO ٹوکن کے بانی، 21 مئی 2026 کو لانچ۔',
  selfDoxxKicker: 'پِچ نے اُس کے بارے میں کیا کہا',
  selfDoxxIntro:
    '$NATRO کی ویب سائٹ نے یہ نہیں چھپایا کہ ساکھ کہاں سے آئی۔ بانی کا سیکشن اِس سطر سے شروع ہوتا تھا — جو سائٹ ہٹائے جانے سے پہلے مکمل آرکائیو ہو چکی تھی:',
  selfDoxxAfter:
    'غور سے پڑھیں تو یہ پِچ خود اپنا اثاثہ بتا رہا ہے: کوئی کاروبار نہیں، کوئی پروڈکٹ نہیں، کوئی ریکارڈ نہیں — *“his family is well-known globally.”* خریداروں کو جو پیش کیا جا رہا تھا وہ خاندانی نام تھا۔',
  assetKicker: 'اثاثہ، جیسا بیان ہوا',
  assetBody:
    'اِس نام سے جُڑی شخصیت ایک طرزِ زندگی تھی، کاروبار نہیں۔ اسی سیکشن نے الیکس ناتروشویلی کو *“Boxer / Car Collector / Watch Collector”* کہا۔ فائل کو **کوئی آزاد کمپنی، پروڈکٹ یا آڈٹ شدہ منصوبہ** نہیں ملا جسے سرمایہ کاری کی وجہ کے طور پر پیش کیا گیا ہو۔ جو وجہ دی گئی وہ یہ تھی کہ وہ کس کا بیٹا ہے — David Natroshvili، Spribe کے بانی اور سی ای او، وہ اسٹوڈیو جو عالمی جوئے کی پروڈکٹ Aviator کے پیچھے ہے۔ اعتماد اُدھار لیا گیا تھا، اور ضمانت خاندانی نام تھی۔',
  moneyKicker: 'پیسے کی واحد دستاویزی حرکت',
  moneyBody:
    'واحد دستاویزی موقع جب پیسہ منصوبے کی طرف منتقل ہوا وہ **$NATRO کا پری سیل اور لانچ** ہے۔ پری سیل پہلے شخص میں، تصدیق شدہ خاندانی اکاؤنٹس سے طلب کیا گیا — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — خریداروں کو **1,500 ڈالر کی کم از کم حد** اور الیکس ناتروشویلی کے ٹیلیگرام کی طرف بھیجتے ہوئے۔\n\nٹوکن **21 مئی 2026** کو لانچ ہوا اور بہتر گھنٹوں میں **~98%** گر گیا۔ متاثرہ ہولڈرز کی رقم واپسی کی درخواستیں مسترد کر دی گئیں — ٹیم ایڈمن کی طرف سے *“Nothing to say”*، اور الیکس کے اپنے تصدیق شدہ ٹیلیگرام سے *“stfu”*۔ اسی دورانیے میں ویب سائٹ آف لائن کر دی گئی، بانی کے انسٹاگرام بائیو سے NATRO کا لنک ہٹا دیا گیا، اور ادائیگی شدہ تشہیری ویڈیو حذف کر دی گئی۔',
  figureKicker: 'اُس کا اپنا عدد',
  figureBody:
    'اپنے نقصانات کے بارے میں پوچھے جانے پر الیکس نے ایک ایسا عدد دیا جو ایک ہی پیغام کے سلسلے میں بدلتا رہا — *“I lost 38k,”* پھر *“I swear to god i lost 30k plus.”* منصوبے کی ٹوکنومکس میں کہا گیا تھا کہ بانی کا حصہ *“publicly committed to never moving”* ہے۔ نہ ہلنے والے حصے کا کاغذی نقصان اُس نقد جیسا نہیں جو ایک ریٹیل خریدار نے بھیجا۔ یہاں اِسے **اُس کا دعویٰ** کے طور پر درج کیا گیا ہے، حقیقت کے طور پر نہیں۔',
  lineKicker: 'وہ سطر جو اُنہوں نے خود لکھی',
  lineIntro:
    'منصوبے کے اپنے FAQ نے — جو حذف ہونے سے پہلے مکمل آرکائیو ہو گیا — رگ پُل کے سوال کا جواب ایک جملے میں دیا:',
  lineAfter:
    'تو NatroAlex نے اپنا پیسہ کیسے کمایا؟ فائل صرف وہی جواب دیتی ہے جو ثابت کر سکتی ہے: جو بیچا گیا وہ ایک ایسا نام تھا جو اُس نے نہیں کمایا، اور اس نام کے تحت واحد لانچ نے ریٹیل کا پیسہ لیا اور پھر گر گیا۔ اگر کچھ رکھا گیا تو وہ کیا تھا — یہ آن چین فرانزک کا سوال ہے، جو ابھی جاری ہے۔ قاری اپنا نتیجہ خود نکالتا ہے۔',
  replyKicker: 'جواب کا حق',
  replyBefore:
    'الیکس ناتروشویلی اور Spribe کو جواب دینے کی دعوت ہے؛ 25 مئی 2026 کو Spribe کے شائع شدہ قانونی اور کارپوریٹ پتوں پر باضابطہ نوٹس بھیجا گیا تھا۔ دستاویزی حقائق پر مبنی تصحیحات ریکارڈ کے ساتھ شائع کی جائیں گی۔ مکمل ذرائع اُن کے ',
  replyProfileLabel: 'پروفائل',
  replyMid: ' اور ',
  replyPressLabel: 'پریس صفحہ',
  replyAfter: ' پر ہیں۔',
};

const hi: NatroMoneyContent = {
  metaTitle: 'NatroAlex ने अपना पैसा कैसे कमाया? — $NATRO का रिकॉर्ड',
  metaDescription:
    'Alex Natroshvili (@natroalex) ने अपना कोई स्वतंत्र व्यवसाय या वित्तीय ट्रैक रिकॉर्ड पेश नहीं किया। जो बेचा जा रहा था वह परिवार के नाम पर भरोसा था — Spribe के CEO David Natroshvili का बेटा। जिस इकलौते लॉन्च को इस नाम ने सहारा दिया, Solana पर $NATRO टोकन, उसने रिटेल प्रीसेल का पैसा लिया और 72 घंटों में ~98% गिर गया। रिफंड से इनकार, सबूत मिटा दिए गए।',
  kicker: 'प्रतिष्ठा की कीमत · सवाल',
  h1: 'NatroAlex ने अपना पैसा कैसे कमाया?',
  standfirst:
    'प्रलेखित उत्तर सीमित है: जो बेचा जा रहा था वह एक ऐसा नाम था जिसे उसने नहीं बनाया, और इस नाम के तहत इकलौते लॉन्च ने रिटेल का पैसा लिया और गिर गया।',
  imgAlt:
    'Alex Natroshvili का सत्यापित Instagram प्रोफ़ाइल (@natroalex), 54.1 हज़ार फ़ॉलोअर, Solana पर $NATRO टोकन के संस्थापक।',
  imgCaption:
    'Alex Natroshvili — सत्यापित Instagram @natroalex (54.1 हज़ार फ़ॉलोअर), सत्यापित Telegram @natroalex1। $NATRO टोकन के संस्थापक, 21 मई 2026 को लॉन्च।',
  selfDoxxKicker: 'पिच ने उसके बारे में क्या कहा',
  selfDoxxIntro:
    '$NATRO की वेबसाइट ने यह नहीं छिपाया कि भरोसा कहाँ से आता है। संस्थापक खंड इस पंक्ति से शुरू होता था — जो साइट हटाए जाने से पहले पूरी तरह संग्रहीत कर ली गई:',
  selfDoxxAfter:
    'ध्यान से पढ़िए, यह पिच खुद अपनी संपत्ति बता रहा है: न कोई उद्यम, न कोई उत्पाद, न कोई रिकॉर्ड — *“his family is well-known globally.”* खरीदारों को जो पेश किया जा रहा था वह उपनाम था।',
  assetKicker: 'संपत्ति, जैसा वर्णित',
  assetBody:
    'उस नाम से जुड़ी छवि एक जीवनशैली थी, व्यवसाय नहीं। उसी खंड ने Alex Natroshvili को *“Boxer / Car Collector / Watch Collector”* बताया। फ़ाइल को **कोई स्वतंत्र कंपनी, उत्पाद या ऑडिट किया गया उद्यम** नहीं मिला जिसे निवेश का कारण बताकर पेश किया गया हो। दिया गया कारण यह था कि वह किसका बेटा है — David Natroshvili, Spribe के संस्थापक और CEO, वह स्टूडियो जो वैश्विक जुआ उत्पाद Aviator के पीछे है। भरोसा उधार लिया गया था, और ज़मानत परिवार का नाम थी।',
  moneyKicker: 'पैसे की इकलौती प्रलेखित गतिविधि',
  moneyBody:
    'इकलौता प्रलेखित अवसर जब पैसा परियोजना की ओर बढ़ा वह है **$NATRO का प्रीसेल और लॉन्च**। प्रीसेल पहले पुरुष में, सत्यापित पारिवारिक अकाउंट से माँगा गया — *“If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.”* — खरीदारों को **1,500 डॉलर की न्यूनतम सीमा** और Alex Natroshvili के Telegram की ओर भेजते हुए।\n\nटोकन **21 मई 2026** को लॉन्च हुआ और बहत्तर घंटों के भीतर **~98%** गिर गया। प्रभावित होल्डरों के रिफंड अनुरोध अस्वीकार कर दिए गए — टीम एडमिन की ओर से *“Nothing to say”*, और Alex के अपने सत्यापित Telegram से *“stfu”*। उसी दौर में वेबसाइट ऑफ़लाइन कर दी गई, संस्थापक के Instagram बायो से NATRO का लिंक हटा दिया गया, और भुगतान किया गया प्रचार वीडियो हटा दिया गया।',
  figureKicker: 'उसका अपना आँकड़ा',
  figureBody:
    'अपने नुकसान के बारे में पूछे जाने पर Alex ने एक ऐसा आँकड़ा दिया जो एक ही संदेश-शृंखला के भीतर बदलता रहा — *“I lost 38k,”* फिर *“I swear to god i lost 30k plus.”* परियोजना की टोकनॉमिक्स में कहा गया था कि संस्थापक का आवंटन *“publicly committed to never moving”* है। न हिले हुए आवंटन का कागज़ी नुकसान उस नकदी के समान नहीं जो एक रिटेल खरीदार ने भेजी। यहाँ इसे **उसका दावा** के रूप में दर्ज किया गया है, तथ्य के रूप में नहीं।',
  lineKicker: 'वह पंक्ति जो उन्होंने खुद लिखी',
  lineIntro:
    'परियोजना के अपने FAQ ने — जो हटाए जाने से पहले पूरी तरह संग्रहीत कर लिया गया — रग-पुल के सवाल का जवाब एक वाक्य में दिया:',
  lineAfter:
    'तो NatroAlex ने अपना पैसा कैसे कमाया? रिकॉर्ड केवल उतना ही जवाब देता है जितना वह साबित कर सकता है: जो बेचा गया वह एक ऐसा नाम था जिसे उसने अर्जित नहीं किया, और इस नाम के तहत इकलौते लॉन्च ने रिटेल का पैसा लिया और फिर गिर गया। अगर कुछ रखा गया तो वह क्या था — यह ऑन-चेन फ़ोरेंसिक का सवाल है, जो अभी जारी है। पाठक अपना निष्कर्ष खुद निकालते हैं।',
  replyKicker: 'जवाब का अधिकार',
  replyBefore:
    'Alex Natroshvili और Spribe को जवाब देने के लिए आमंत्रित किया जाता है; एक औपचारिक सूचना 25 मई 2026 को Spribe के प्रकाशित कानूनी और कॉर्पोरेट पतों पर भेजी गई थी। प्रलेखित तथ्यात्मक सुधार रिकॉर्ड के साथ प्रकाशित किए जाएंगे। पूरे स्रोत उनके ',
  replyProfileLabel: 'प्रोफ़ाइल',
  replyMid: ' और ',
  replyPressLabel: 'प्रेस पेज',
  replyAfter: ' पर हैं।',
};

const CONTENT: Record<Locale, NatroMoneyContent> = {
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

export function getNatroMoney(locale: Locale): NatroMoneyContent {
  return CONTENT[locale] || en;
}

/**
 * Exhibit 20 — the "stfu" Telegram DM (ex13-stfu-from-alex.png), already
 * published in the case-file gallery. Embedded here because the same thread
 * carries the page's thesis verbatim: the affected holder states the family
 * name was the entire basis of trust, cites on-chain creator-fee activity, and
 * the founder's reply is "stfu." The caption foregrounds that substance.
 * "stfu" and the holder's quoted line stay English (sacred quotes / original).
 */
export const STFU_EXHIBIT = {
  slug: 'stfu-from-alex',
  img: '/exhibits/ex13-stfu-from-alex.png',
  width: 2364,
  height: 2224,
  attrib: 'Telegram DM · @natroalex1 (verified) · 25 May 2026, 10:11',
};

/** Slug of the hero portrait exhibit, for the lightbox trigger. */
export const HERO_EXHIBIT_SLUG = 'natroalex-profile-after';

export interface StfuCaption {
  kicker: string;
  alt: string;
  caption: string;
}

const STFU_CAPTIONS: Record<Locale, StfuCaption> = {
  en: {
    kicker: 'The reply, on the record',
    alt: 'Telegram DM thread with Alex Natroshvili (@natroalex1, verified). The affected holder offers to close the matter if affected holders are refunded and states the family name was the entire basis of trust; the founder’s reply is “stfu.”',
    caption:
      'The full refusal exchange. The affected holder’s offer turns on one point — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* The reply, in full: *“stfu.”*',
  },
  ru: {
    kicker: 'Ответ, под запись',
    alt: 'Переписка в Telegram с Alex Natroshvili (@natroalex1, верифицирован). Пострадавший держатель предлагает закрыть вопрос при возврате средств пострадавшим и заявляет, что вся основа доверия — это фамилия; ответ основателя — «stfu».',
    caption:
      'Полный обмен с отказом. Предложение пострадавшего держателя держится на одном — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* Ответ целиком: *“stfu.”*',
  },
  uk: {
    kicker: 'Відповідь, під запис',
    alt: 'Листування в Telegram з Alex Natroshvili (@natroalex1, верифікований). Постраждалий тримач пропонує закрити питання за умови повернення коштів постраждалим і заявляє, що вся основа довіри — це прізвище; відповідь засновника — «stfu».',
    caption:
      'Повний обмін із відмовою. Пропозиція постраждалого тримача тримається на одному — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* Відповідь цілком: *“stfu.”*',
  },
  ka: {
    kicker: 'პასუხი, ჩანაწერისთვის',
    alt: 'Telegram მიმოწერა Alex Natroshvili-სთან (@natroalex1, ვერიფიცირებული). დაზარალებული მფლობელი გვთავაზობს საკითხის დახურვას დაზარალებულების თანხის დაბრუნების სანაცვლოდ და აცხადებს, რომ ნდობის მთელი საფუძველი გვარი იყო; დამფუძნებლის პასუხია „stfu“.',
    caption:
      'უარის სრული მიმოწერა. დაზარალებული მფლობელის შეთავაზება ერთ რამეზე დგას — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* პასუხი სრულად: *“stfu.”*',
  },
  fr: {
    kicker: 'La réponse, pour mémoire',
    alt: 'Fil de messages Telegram avec Alex Natroshvili (@natroalex1, vérifié). Le détenteur lésé propose de clore l’affaire si les détenteurs lésés sont remboursés et déclare que le nom de famille était toute la base de sa confiance ; la réponse du fondateur est « stfu ».',
    caption:
      'L’échange de refus complet. L’offre du détenteur lésé repose sur un seul point — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* La réponse, en entier : *“stfu.”*',
  },
  de: {
    kicker: 'Die Antwort, fürs Protokoll',
    alt: 'Telegram-Nachrichtenverlauf mit Alex Natroshvili (@natroalex1, verifiziert). Der betroffene Halter bietet an, die Sache zu schließen, wenn betroffene Halter erstattet werden, und erklärt, der Familienname sei die gesamte Grundlage seines Vertrauens gewesen; die Antwort des Gründers lautet „stfu“.',
    caption:
      'Der vollständige Ablehnungs-Austausch. Das Angebot des betroffenen Halters hängt an einem Punkt — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* Die Antwort, vollständig: *“stfu.”*',
  },
  es: {
    kicker: 'La respuesta, para el registro',
    alt: 'Hilo de mensajes de Telegram con Alex Natroshvili (@natroalex1, verificado). El tenedor afectado se ofrece a cerrar el asunto si se reembolsa a los tenedores afectados y afirma que el apellido era toda la base de su confianza; la respuesta del fundador es «stfu».',
    caption:
      'El intercambio completo de la negativa. La oferta del tenedor afectado gira en torno a un punto — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* La respuesta, completa: *“stfu.”*',
  },
  ar: {
    kicker: 'الردّ، للسجلّ',
    alt: 'سلسلة رسائل تيليغرام مع أليكس ناتروشفيلي (@natroalex1، موثَّق). يعرض المالك المتضرّر إغلاق المسألة مقابل ردّ الأموال للمتضرّرين ويقول إن اسم العائلة كان كامل أساس ثقته؛ ردّ المؤسّس هو «stfu».',
    caption:
      'تبادل الرفض كاملًا. عرض المالك المتضرّر يقوم على نقطة واحدة — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* الردّ كاملًا: *“stfu.”*',
  },
  ur: {
    kicker: 'جواب، ریکارڈ کے لیے',
    alt: 'الیکس ناتروشویلی (@natroalex1، تصدیق شدہ) کے ساتھ ٹیلیگرام پیغامات کا سلسلہ۔ متاثرہ ہولڈر متاثرہ ہولڈرز کو رقم واپسی کی شرط پر معاملہ ختم کرنے کی پیشکش کرتا ہے اور کہتا ہے کہ اعتماد کی پوری بنیاد خاندانی نام تھا؛ بانی کا جواب «stfu» ہے۔',
    caption:
      'انکار کا مکمل تبادلہ۔ متاثرہ ہولڈر کی پیشکش ایک نکتے پر ٹکی ہے — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* جواب، مکمل: *“stfu.”*',
  },
  hi: {
    kicker: 'जवाब, रिकॉर्ड के लिए',
    alt: 'Alex Natroshvili (@natroalex1, सत्यापित) के साथ Telegram संदेश-शृंखला। प्रभावित होल्डर प्रभावित होल्डरों को रिफंड की शर्त पर मामला बंद करने का प्रस्ताव देता है और कहता है कि भरोसे का पूरा आधार उपनाम था; संस्थापक का जवाब है “stfu”।',
    caption:
      'इनकार का पूरा आदान-प्रदान। प्रभावित होल्डर का प्रस्ताव एक बिंदु पर टिका है — *“I entered because of your father, David Natroshvili, and the reputation of Spribe and Aviator … Without that name, I would never have touched NATRO.”* जवाब, पूरा: *“stfu.”*',
  },
};

export function getStfuCaption(locale: Locale): StfuCaption {
  return STFU_CAPTIONS[locale] || STFU_CAPTIONS.en;
}

/**
 * David Natroshvili's pre-launch Instagram Stories (@davidnatro1, verified),
 * already published as Exhibits 2, 21, 22, 23, 24. Embedded here as direct
 * proof of the page's thesis: the launch was pushed in the first person from
 * the father's verified account. Captions are verbatim English quotes (sacred)
 * plus attribution, identical across locales; the section's kicker/intro are
 * localised via getDavidStoriesIntro().
 */
export const DAVID_STORIES: {
  slug: string;
  img: string;
  width: number;
  height: number;
  caption: string;
}[] = [
  {
    slug: 'david-story-presale-bentley',
    img: '/exhibits/ex22-david-story-presale-bentley.jpg',
    width: 591,
    height: 1280,
    caption:
      '“Get involved in the crypto project presale with me & @natroalex — DM @natroalex1 — 1.5k min.” — @davidnatro1 (verified), Instagram Story, pre-launch',
  },
  {
    slug: 'david-story-presale-ferrari',
    img: '/exhibits/ex24-david-story-presale-ferrari.jpg',
    width: 591,
    height: 1280,
    caption:
      '“We’re opening private access to our crypto project presale with me & @natroalex … 1.5k min entry.” — @davidnatro1 (verified), Instagram Story, pre-launch',
  },
  {
    slug: 'david-story-celebs-on-line',
    img: '/exhibits/ex21-david-story-celebs-on-line.jpg',
    width: 591,
    height: 1280,
    caption:
      '“I have many celebs on the line to post about natro this will be crazy🔥” — @davidnatro1 (verified), Instagram Story, pre-launch',
  },
  {
    slug: 'david-reshare',
    img: '/exhibits/ex01-jrcryptex-promo-reshared-by-david.jpg',
    width: 1177,
    height: 2560,
    caption:
      'David Natroshvili reshares the paid @jrcryptex launch promo — @davidnatro1 (verified), Instagram Stories',
  },
  {
    slug: 'david-natroalex-coin-reshare',
    img: '/exhibits/ex23-david-natroalex-coin-reshare.jpg',
    width: 591,
    height: 1280,
    caption:
      'The NATRO COIN render, reshared by @davidnatro1 and @natroalex — Instagram Story, both verified, pre-launch',
  },
];

export interface DavidStoriesIntro {
  kicker: string;
  intro: string;
}

const DAVID_STORIES_I18N: Record<Locale, DavidStoriesIntro> = {
  en: {
    kicker: 'The launch, pushed from the father’s account',
    intro:
      'The solicitation did not come from an anonymous team. In the hours before launch, David Natroshvili — Spribe’s founder and CEO — promoted the presale in the first person and reshared the launch material from his own verified Instagram (@davidnatro1). The Stories, preserved in the file’s exhibit set:',
  },
  ru: {
    kicker: 'Запуск, продвигавшийся с аккаунта отца',
    intro:
      'Сбор шёл не от анонимной команды. В часы перед запуском David Natroshvili — основатель и CEO Spribe — лично, от первого лица, продвигал пресейл и репостил материалы запуска со своего верифицированного Instagram (@davidnatro1). Сторис сохранены в наборе экспонатов файла:',
  },
  uk: {
    kicker: 'Запуск, що просувався з акаунта батька',
    intro:
      'Збір ішов не від анонімної команди. У години перед запуском David Natroshvili — засновник і CEO Spribe — особисто, від першої особи, просував пресейл і репостив матеріали запуску зі свого верифікованого Instagram (@davidnatro1). Сторіс збережені в наборі експонатів файлу:',
  },
  ka: {
    kicker: 'გაშვება, რომელსაც მამის ანგარიშიდან უწევდნენ პიარს',
    intro:
      'შეგროვება ანონიმური გუნდისგან არ მოდიოდა. გაშვებამდე საათებში David Natroshvili — Spribe-ის დამფუძნებელი და CEO — პირადად, პირველ პირში, არეკლამებდა პრესეილს და რეპოსტავდა გაშვების მასალას საკუთარი ვერიფიცირებული Instagram-იდან (@davidnatro1). სტორებია დაცული ფაილის ექსპონატებში:',
  },
  fr: {
    kicker: 'Le lancement, poussé depuis le compte du père',
    intro:
      'La sollicitation ne venait pas d’une équipe anonyme. Dans les heures précédant le lancement, David Natroshvili — fondateur et PDG de Spribe — a fait la promotion de la prévente à la première personne et a repartagé le matériel de lancement depuis son propre Instagram vérifié (@davidnatro1). Les Stories, conservées dans le dossier :',
  },
  de: {
    kicker: 'Der Launch, beworben vom Konto des Vaters',
    intro:
      'Die Aufforderung kam nicht von einem anonymen Team. In den Stunden vor dem Launch bewarb David Natroshvili — Gründer und CEO von Spribe — den Presale in der Ich-Form und teilte das Launch-Material von seinem eigenen verifizierten Instagram (@davidnatro1) erneut. Die Stories, im Aktenbestand gesichert:',
  },
  es: {
    kicker: 'El lanzamiento, impulsado desde la cuenta del padre',
    intro:
      'La solicitud no vino de un equipo anónimo. En las horas previas al lanzamiento, David Natroshvili — fundador y CEO de Spribe — promovió la preventa en primera persona y recompartió el material de lanzamiento desde su propio Instagram verificado (@davidnatro1). Las Stories, conservadas en el expediente:',
  },
  ar: {
    kicker: 'الإطلاق، مدفوعًا من حساب الأب',
    intro:
      'لم يأتِ الطلب من فريق مجهول. في الساعات التي سبقت الإطلاق، روّج David Natroshvili — مؤسّس Spribe ورئيسها التنفيذي — للبيع المسبق بصيغة المتكلّم وأعاد نشر مواد الإطلاق من حسابه الموثَّق على إنستغرام (@davidnatro1). القصص، محفوظة ضمن أدلّة الملف:',
  },
  ur: {
    kicker: 'لانچ، جو والد کے اکاؤنٹ سے بڑھایا گیا',
    intro:
      'یہ مطالبہ کسی گمنام ٹیم کی طرف سے نہیں آیا۔ لانچ سے پہلے کے گھنٹوں میں David Natroshvili — Spribe کے بانی اور سی ای او — نے پہلے شخص میں پری سیل کی تشہیر کی اور اپنے تصدیق شدہ انسٹاگرام (@davidnatro1) سے لانچ کا مواد دوبارہ شیئر کیا۔ اسٹوریز فائل کے ثبوتوں میں محفوظ ہیں:',
  },
  hi: {
    kicker: 'लॉन्च, जो पिता के अकाउंट से बढ़ाया गया',
    intro:
      'यह माँग किसी गुमनाम टीम की ओर से नहीं आई। लॉन्च से पहले के घंटों में David Natroshvili — Spribe के संस्थापक और CEO — ने पहले पुरुष में प्रीसेल का प्रचार किया और अपने सत्यापित Instagram (@davidnatro1) से लॉन्च सामग्री दोबारा शेयर की। ये Stories फ़ाइल के साक्ष्यों में संरक्षित हैं:',
  },
};

export function getDavidStoriesIntro(locale: Locale): DavidStoriesIntro {
  return DAVID_STORIES_I18N[locale] || DAVID_STORIES_I18N.en;
}
