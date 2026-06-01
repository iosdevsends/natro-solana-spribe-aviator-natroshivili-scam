import type { Locale } from '@/i18n/routing';

/**
 * Localised copy for /david-natroshvili-principles.
 *
 * A single-subject page built around David Natroshvili's public
 * "My core principles & insights" Instagram carousel (@davi.natroshvili,
 * posted 1 June 2026 — i.e. after the $NATRO collapse and refund refusals).
 *
 * Editorial method: HIS public values posts (verbatim) set beside HIS
 * documented, first-person $NATRO presale solicitation (verbatim, Exhibits
 * 21/22/24) and the outcome. The page renders no accusation in its own voice —
 * the juxtaposition is built entirely from his own words, attributed, and the
 * reader draws the conclusion. Verbatim quotes stay English (sacred quotes,
 * original language); editorial connective prose is translated per locale.
 */
export interface DavidPrinciplesContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  standfirst: string;
  postKicker: string;
  postIntro: string;
  postAttrib: string;
  conductKicker: string;
  conductBody: string;
  juxtaKicker: string;
  juxtaBody: string;
  replyKicker: string;
  replyBefore: string;
  replyProfileLabel: string;
  replyMid: string;
  replyPressLabel: string;
  replyAfter: string;
}

// Verbatim, English, identical across every locale. His public carousel
// slides (@davi.natroshvili, 1 June 2026), reproduced as quotes.
export const PRINCIPLES: Array<{ title: string; body: string }> = [
  { title: 'People > Everything', body: 'Connections and communication are the ultimate business currency.' },
  { title: 'You don’t need to know it all to start', body: 'Day one in iGaming, I was literally googling what it was. Zero experience, total focus.' },
  { title: 'Play for the joy, not just the win', body: 'The process matters as much as the result.' },
  { title: 'Family first', body: 'Always no matter what.' },
  { title: 'Rejection isn’t a loss', body: 'It’s just proof that you are still in the game. Keep moving.' },
  { title: 'Love the grind', body: 'Build a business that makes you excited to work even on weekends.' },
  { title: 'The best is yet to come', body: 'No matter how successful you are today, real peak success is always ahead.' },
];

// Verbatim, English. His documented first-person presale solicitation.
export const PRESALE_1 =
  'If you want to get involved in the crypto project presale with me & @natroalex — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k.';
export const PRESALE_2 =
  'We’re opening private access to our crypto project presale with me & @natroalex…';
export const PRESALE_3 =
  'I have many celebs on the line to post about natro this will be crazy 🔥';
export const PRESALE_ATTRIB =
  '— @davidnatro1 (verified), pre-launch Instagram Stories · Exhibits 21, 22, 24';

const en: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: stated principles and the $NATRO presale',
  metaDescription:
    'David Natroshvili posted his “core principles & insights” to his followers. From the same verified Instagram account he had personally solicited presale investment in $NATRO — $1,500 minimum — before the token fell ~98% and refunds were refused. Every quote is his own; the reader judges.',
  kicker: 'Stated values · documented conduct',
  h1: '“My core principles.” And the $NATRO presale.',
  standfirst:
    'This week David Natroshvili posted his “principles & insights” to his followers. Before the launch, from the same verified account, he had personally solicited presale investment in $NATRO — a $1,500 minimum. The token then fell ~98%, and refunds were refused. Every quote on this page is his own.',
  postKicker: 'What he posted',
  postIntro:
    'The carousel, in his own words — published while the $NATRO record below was already public:',
  postAttrib: '— @davi.natroshvili, Instagram carousel, 1 June 2026',
  conductKicker: 'What the same account solicited',
  conductBody:
    'Before the 21 May 2026 launch, from his **verified** Instagram account (@davidnatro1), David Natroshvili personally solicited presale investment in the $NATRO Solana token — in the first person, naming a minimum cheque:',
  juxtaKicker: 'The two records, side by side',
  juxtaBody:
    'Within seventy-two hours of launch the token fell **~98%**. Affected holders’ refund requests were refused — *“Nothing to say”* from the team admin, *“stfu”* from the founder’s personal Telegram. In the same window the website was taken offline, the NATRO link was removed from the founder’s Instagram bio, and the paid promotional video was deleted.\n\nThe principles above were posted to his followers *after* all of that was already on the record. Both sets of words are his own, on his own verified accounts. This page adds no adjective to either. The reader draws the conclusion.',
  replyKicker: 'Right of reply',
  replyBefore:
    'David Natroshvili and Spribe are invited to respond; a formal notice was sent to Spribe’s published legal and corporate addresses on 25 May 2026. Documented factual corrections will be published alongside the record. The full sourcing is on his ',
  replyProfileLabel: 'profile',
  replyMid: ' and the ',
  replyPressLabel: 'press page',
  replyAfter: '.',
};

const ru: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: заявленные принципы и пресейл $NATRO',
  metaDescription:
    'David Natroshvili опубликовал свои «core principles & insights» для подписчиков. С того же верифицированного аккаунта он ранее лично собирал инвестиции в пресейл $NATRO — минимум $1,500 — после чего токен упал на ~98%, а в возврате отказали. Все цитаты — его собственные; вывод делает читатель.',
  kicker: 'Заявленные ценности · задокументированные действия',
  h1: '«My core principles». И пресейл $NATRO.',
  standfirst:
    'На этой неделе David Natroshvili опубликовал свои «principles & insights» для подписчиков. А перед запуском, с того же верифицированного аккаунта, он лично собирал инвестиции в пресейл $NATRO — минимум $1,500. Затем токен упал на ~98%, в возврате отказали. Все цитаты на этой странице — его собственные.',
  postKicker: 'Что он опубликовал',
  postIntro:
    'Карусель — его собственными словами, опубликована тогда, когда хроника $NATRO ниже уже была публичной:',
  postAttrib: '— @davi.natroshvili, карусель в Instagram, 1 июня 2026',
  conductKicker: 'Что собирал тот же аккаунт',
  conductBody:
    'Перед запуском 21 мая 2026 года, со своего **верифицированного** аккаунта в Instagram (@davidnatro1), David Natroshvili лично собирал инвестиции в пресейл солана-токена $NATRO — от первого лица, с указанием минимального чека:',
  juxtaKicker: 'Две хроники рядом',
  juxtaBody:
    'За семьдесят два часа после запуска токен упал на **~98%**. В возврате средств пострадавшим держателям отказали — *«Nothing to say»* от админа команды, *«stfu»* из личного Telegram основателя. В то же окно сайт отключили, ссылку на NATRO убрали из биографии Instagram основателя, оплаченное промо-видео удалили.\n\nПринципы выше опубликованы для подписчиков *после* того, как всё это уже было задокументировано. Обе части — его собственные слова, на его собственных верифицированных аккаунтах. Эта страница не добавляет ни одного прилагательного. Вывод делает читатель.',
  replyKicker: 'Право на ответ',
  replyBefore:
    'David Natroshvili и Spribe приглашаются ответить; формальное уведомление было направлено на публичные юридические и корпоративные адреса Spribe 25 мая 2026 года. Документированные фактические уточнения будут опубликованы рядом с записью. Полные источники — на его ',
  replyProfileLabel: 'странице',
  replyMid: ' и на ',
  replyPressLabel: 'странице для прессы',
  replyAfter: '.',
};

const uk: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: заявлені принципи і пресейл $NATRO',
  metaDescription:
    'David Natroshvili опублікував свої «core principles & insights» для підписників. З того ж верифікованого акаунта він раніше особисто збирав інвестиції в пресейл $NATRO — мінімум $1,500 — після чого токен упав на ~98%, а в поверненні відмовили. Усі цитати — його власні; висновок робить читач.',
  kicker: 'Заявлені цінності · задокументовані дії',
  h1: '«My core principles». І пресейл $NATRO.',
  standfirst:
    'Цього тижня David Natroshvili опублікував свої «principles & insights» для підписників. А перед запуском, з того ж верифікованого акаунта, він особисто збирав інвестиції в пресейл $NATRO — мінімум $1,500. Потім токен упав на ~98%, у поверненні відмовили. Усі цитати на цій сторінці — його власні.',
  postKicker: 'Що він опублікував',
  postIntro:
    'Карусель — його власними словами, опублікована тоді, коли хроніка $NATRO нижче вже була публічною:',
  postAttrib: '— @davi.natroshvili, карусель в Instagram, 1 червня 2026',
  conductKicker: 'Що збирав той самий акаунт',
  conductBody:
    'Перед запуском 21 травня 2026 року, зі свого **верифікованого** акаунта в Instagram (@davidnatro1), David Natroshvili особисто збирав інвестиції в пресейл солана-токена $NATRO — від першої особи, із зазначенням мінімального чека:',
  juxtaKicker: 'Дві хроніки поряд',
  juxtaBody:
    'За сімдесят дві години після запуску токен упав на **~98%**. У поверненні коштів постраждалим тримачам відмовили — *«Nothing to say»* від адміна команди, *«stfu»* з особистого Telegram засновника. У те саме вікно сайт відключили, посилання на NATRO прибрали з біографії Instagram засновника, оплачене промо-відео видалили.\n\nПринципи вище опубліковано для підписників *після* того, як усе це вже було задокументовано. Обидві частини — його власні слова, на його власних верифікованих акаунтах. Ця сторінка не додає жодного прикметника. Висновок робить читач.',
  replyKicker: 'Право на відповідь',
  replyBefore:
    'David Natroshvili і Spribe запрошуються відповісти; формальне повідомлення було надіслано на публічні юридичні та корпоративні адреси Spribe 25 травня 2026 року. Документовані фактичні уточнення буде опубліковано поряд із записом. Повні джерела — на його ',
  replyProfileLabel: 'сторінці',
  replyMid: ' і на ',
  replyPressLabel: 'сторінці для преси',
  replyAfter: '.',
};

const ka: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: გაცხადებული პრინციპები და $NATRO-ს პრესეილი',
  metaDescription:
    'David Natroshvili-მ თავის მიმდევრებს გამოუქვეყნა „core principles & insights“. იმავე ვერიფიცირებული Instagram-ანგარიშიდან მან ადრე პირადად მოაგროვა პრესეილ-ინვესტიცია $NATRO-ში — მინიმუმ $1,500 — რის შემდეგაც ტოკენი ~98%-ით დაეცა და დაბრუნებაზე უარი თქვეს. ყველა ციტატა მისივეა; დასკვნას მკითხველი აკეთებს.',
  kicker: 'გაცხადებული ღირებულებები · დოკუმენტირებული ქმედებები',
  h1: '„My core principles.“ და $NATRO-ს პრესეილი.',
  standfirst:
    'ამ კვირას David Natroshvili-მ მიმდევრებს გამოუქვეყნა თავისი „principles & insights“. გაშვებამდე კი, იმავე ვერიფიცირებული ანგარიშიდან, მან პირადად მოაგროვა პრესეილ-ინვესტიცია $NATRO-ში — მინიმუმ $1,500. შემდეგ ტოკენი ~98%-ით დაეცა, დაბრუნებაზე უარი თქვეს. ამ გვერდის ყველა ციტატა მისივეა.',
  postKicker: 'რა გამოაქვეყნა',
  postIntro:
    'კარუსელი — მისივე სიტყვებით, გამოქვეყნებული მაშინ, როცა ქვემოთ მოცემული $NATRO-ს ჩანაწერი უკვე საჯარო იყო:',
  postAttrib: '— @davi.natroshvili, Instagram-კარუსელი, 1 ივნისი 2026',
  conductKicker: 'რას აგროვებდა იგივე ანგარიში',
  conductBody:
    '2026 წლის 21 მაისს გაშვებამდე, თავისი **ვერიფიცირებული** Instagram-ანგარიშიდან (@davidnatro1), David Natroshvili პირადად აგროვებდა პრესეილ-ინვესტიციას Solana-ტოკენ $NATRO-ში — პირველი პირით, მინიმალური თანხის მითითებით:',
  juxtaKicker: 'ორი ჩანაწერი გვერდიგვერდ',
  juxtaBody:
    'გაშვებიდან სამოცდათორმეტ საათში ტოკენი დაეცა **~98%**-ით. დაზარალებული მფლობელების დაბრუნების მოთხოვნებზე უარი ეთქვა — *„Nothing to say“* გუნდის ადმინისგან, *„stfu“* დამფუძნებლის პირადი Telegram-იდან. იმავე ფანჯარაში საიტი გაითიშა, NATRO-ს ბმული მოშორდა დამფუძნებლის Instagram-ბიოს, ფასიანი რეკლამა წაიშალა.\n\nზემოთ მოცემული პრინციპები მიმდევრებს გამოექვეყნა *მას შემდეგ*, რაც ეს ყველაფერი უკვე დოკუმენტირებული იყო. ორივე ნაწილი მისივე სიტყვებია, მის ვერიფიცირებულ ანგარიშებზე. ეს გვერდი არცერთ ზედსართავს არ ამატებს. დასკვნას მკითხველი აკეთებს.',
  replyKicker: 'პასუხის უფლება',
  replyBefore:
    'David Natroshvili და Spribe მოწვეულნი არიან პასუხის გასაცემად; ფორმალური შეტყობინება გაიგზავნა Spribe-ის გამოქვეყნებულ იურიდიულ და კორპორაციულ მისამართებზე 2026 წლის 25 მაისს. დოკუმენტირებული ფაქტობრივი შესწორებები გამოქვეყნდება ჩანაწერის გვერდით. სრული წყაროები მის ',
  replyProfileLabel: 'პროფილზე',
  replyMid: ' და ',
  replyPressLabel: 'პრესის გვერდზეა',
  replyAfter: '.',
};

const fr: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili : principes affichés et prévente $NATRO',
  metaDescription:
    'David Natroshvili a publié ses « core principles & insights » à ses abonnés. Depuis le même compte Instagram vérifié, il avait personnellement sollicité l’investissement en prévente sur $NATRO — 1 500 $ minimum — avant que le token ne chute d’environ 98 % et que les remboursements soient refusés. Chaque citation est de lui ; le lecteur juge.',
  kicker: 'Valeurs affichées · conduite documentée',
  h1: '« My core principles. » Et la prévente $NATRO.',
  standfirst:
    'Cette semaine, David Natroshvili a publié ses « principles & insights » à ses abonnés. Avant le lancement, depuis le même compte vérifié, il avait personnellement sollicité l’investissement en prévente sur $NATRO — 1 500 $ minimum. Le token a ensuite chuté d’environ 98 %, et les remboursements ont été refusés. Chaque citation de cette page est de lui.',
  postKicker: 'Ce qu’il a publié',
  postIntro:
    'Le carrousel, dans ses propres mots — publié alors que le récit $NATRO ci-dessous était déjà public :',
  postAttrib: '— @davi.natroshvili, carrousel Instagram, 1er juin 2026',
  conductKicker: 'Ce que le même compte a sollicité',
  conductBody:
    'Avant le lancement du 21 mai 2026, depuis son compte Instagram **vérifié** (@davidnatro1), David Natroshvili a personnellement sollicité l’investissement en prévente sur le token Solana $NATRO — à la première personne, en nommant un montant minimal :',
  juxtaKicker: 'Les deux récits, côte à côte',
  juxtaBody:
    'En soixante-douze heures après le lancement, le token a chuté d’environ **~98 %**. Les demandes de remboursement des détenteurs affectés ont été refusées — *« Nothing to say »* de l’administrateur, *« stfu »* depuis le Telegram personnel du fondateur. Dans la même fenêtre, le site a été mis hors ligne, le lien NATRO retiré de la bio Instagram du fondateur, et la vidéo promotionnelle payante supprimée.\n\nLes principes ci-dessus ont été publiés à ses abonnés *après* que tout cela était déjà au dossier. Les deux ensembles de mots sont les siens, sur ses propres comptes vérifiés. Cette page n’ajoute aucun adjectif. Le lecteur tire sa conclusion.',
  replyKicker: 'Droit de réponse',
  replyBefore:
    'David Natroshvili et Spribe sont invités à répondre ; un avis formel a été envoyé aux adresses juridiques et corporatives publiées de Spribe le 25 mai 2026. Les corrections factuelles documentées seront publiées à côté du dossier. Les sources complètes figurent sur son ',
  replyProfileLabel: 'profil',
  replyMid: ' et sur la ',
  replyPressLabel: 'page presse',
  replyAfter: '.',
};

const de: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: erklärte Prinzipien und der $NATRO-Presale',
  metaDescription:
    'David Natroshvili postete seine „core principles & insights“ an seine Follower. Vom selben verifizierten Instagram-Konto hatte er zuvor persönlich um Presale-Investitionen in $NATRO geworben — 1.500 $ Minimum — bevor der Token um ~98 % fiel und Rückerstattungen verweigert wurden. Jedes Zitat ist seines; der Leser urteilt.',
  kicker: 'Erklärte Werte · dokumentiertes Handeln',
  h1: '„My core principles.“ Und der $NATRO-Presale.',
  standfirst:
    'Diese Woche postete David Natroshvili seine „principles & insights“ an seine Follower. Vor dem Launch hatte er vom selben verifizierten Konto persönlich um Presale-Investitionen in $NATRO geworben — 1.500 $ Minimum. Der Token fiel dann um ~98 %, und Rückerstattungen wurden verweigert. Jedes Zitat auf dieser Seite ist seines.',
  postKicker: 'Was er gepostet hat',
  postIntro:
    'Das Karussell, in seinen eigenen Worten — gepostet, als das $NATRO-Protokoll unten bereits öffentlich war:',
  postAttrib: '— @davi.natroshvili, Instagram-Karussell, 1. Juni 2026',
  conductKicker: 'Wofür dasselbe Konto warb',
  conductBody:
    'Vor dem Launch am 21. Mai 2026 warb David Natroshvili von seinem **verifizierten** Instagram-Konto (@davidnatro1) persönlich um Presale-Investitionen in den Solana-Token $NATRO — in der ersten Person, mit einem genannten Mindestbetrag:',
  juxtaKicker: 'Die zwei Protokolle, nebeneinander',
  juxtaBody:
    'Innerhalb von zweiundsiebzig Stunden nach dem Launch fiel der Token um **~98 %**. Rückerstattungsanfragen betroffener Inhaber wurden abgelehnt — *„Nothing to say“* vom Team-Admin, *„stfu“* vom persönlichen Telegram des Gründers. Im selben Zeitfenster wurde die Website offline genommen, der NATRO-Link aus der Instagram-Bio des Gründers entfernt und das bezahlte Werbevideo gelöscht.\n\nDie Prinzipien oben wurden den Followern *nachdem* all das bereits aktenkundig war gepostet. Beide Wortsammlungen sind seine eigenen, auf seinen eigenen verifizierten Konten. Diese Seite fügt kein einziges Adjektiv hinzu. Der Leser zieht den Schluss.',
  replyKicker: 'Recht auf Gegendarstellung',
  replyBefore:
    'David Natroshvili und Spribe sind eingeladen zu antworten; eine formelle Mitteilung wurde am 25. Mai 2026 an die veröffentlichten rechtlichen und Unternehmensadressen von Spribe gesendet. Dokumentierte sachliche Korrekturen werden neben der Akte veröffentlicht. Die vollständigen Quellen stehen auf seinem ',
  replyProfileLabel: 'Profil',
  replyMid: ' und auf der ',
  replyPressLabel: 'Presseseite',
  replyAfter: '.',
};

const es: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: principios declarados y la preventa de $NATRO',
  metaDescription:
    'David Natroshvili publicó sus «core principles & insights» a sus seguidores. Desde la misma cuenta de Instagram verificada había solicitado personalmente inversión en la preventa de $NATRO — 1.500 $ mínimo — antes de que el token cayera ~98 % y se negaran los reembolsos. Cada cita es suya; el lector juzga.',
  kicker: 'Valores declarados · conducta documentada',
  h1: '«My core principles». Y la preventa de $NATRO.',
  standfirst:
    'Esta semana David Natroshvili publicó sus «principles & insights» a sus seguidores. Antes del lanzamiento, desde la misma cuenta verificada, había solicitado personalmente inversión en la preventa de $NATRO — 1.500 $ mínimo. El token cayó luego ~98 %, y se negaron los reembolsos. Cada cita de esta página es suya.',
  postKicker: 'Lo que publicó',
  postIntro:
    'El carrusel, en sus propias palabras — publicado cuando el registro de $NATRO de abajo ya era público:',
  postAttrib: '— @davi.natroshvili, carrusel de Instagram, 1 de junio de 2026',
  conductKicker: 'Lo que solicitó la misma cuenta',
  conductBody:
    'Antes del lanzamiento del 21 de mayo de 2026, desde su cuenta de Instagram **verificada** (@davidnatro1), David Natroshvili solicitó personalmente inversión en la preventa del token de Solana $NATRO — en primera persona, nombrando un importe mínimo:',
  juxtaKicker: 'Los dos registros, lado a lado',
  juxtaBody:
    'En setenta y dos horas tras el lanzamiento, el token cayó un **~98 %**. Las solicitudes de reembolso de los holders afectados fueron rechazadas — *«Nothing to say»* del admin del equipo, *«stfu»* desde el Telegram personal del fundador. En la misma ventana, el sitio fue retirado, el enlace de NATRO eliminado de la bio de Instagram del fundador y el vídeo promocional pagado borrado.\n\nLos principios de arriba se publicaron a sus seguidores *después* de que todo eso ya constara. Ambos conjuntos de palabras son suyos, en sus propias cuentas verificadas. Esta página no añade ni un adjetivo. El lector saca la conclusión.',
  replyKicker: 'Derecho de réplica',
  replyBefore:
    'David Natroshvili y Spribe están invitados a responder; se envió un aviso formal a las direcciones legales y corporativas publicadas de Spribe el 25 de mayo de 2026. Las correcciones factuales documentadas se publicarán junto al registro. Las fuentes completas están en su ',
  replyProfileLabel: 'perfil',
  replyMid: ' y en la ',
  replyPressLabel: 'página de prensa',
  replyAfter: '.',
};

const ar: DavidPrinciplesContent = {
  metaTitle: 'David Natroshvili: المبادئ المُعلَنة والبيع المسبق لـ $NATRO',
  metaDescription:
    'نشر David Natroshvili «core principles & insights» لمتابعيه. ومن حساب Instagram الموثَّق نفسه كان قد طلب شخصيًا الاستثمار في البيع المسبق لـ $NATRO — بحد أدنى 1,500 دولار — قبل أن ينهار التوكن بنحو 98% ويُرفض ردّ الأموال. كل اقتباس من كلماته؛ والقارئ يحكم.',
  kicker: 'قيم مُعلَنة · سلوك موثَّق',
  h1: '«My core principles.» والبيع المسبق لـ $NATRO.',
  standfirst:
    'هذا الأسبوع نشر David Natroshvili «principles & insights» لمتابعيه. وقبل الإطلاق، من الحساب الموثَّق نفسه، كان قد طلب شخصيًا الاستثمار في البيع المسبق لـ $NATRO — بحد أدنى 1,500 دولار. ثم انهار التوكن بنحو 98%، ورُفض ردّ الأموال. كل اقتباس في هذه الصفحة من كلماته.',
  postKicker: 'ما الذي نشره',
  postIntro:
    'الكاروسيل، بكلماته هو — نُشر بينما كان سجلّ $NATRO أدناه علنيًّا بالفعل:',
  postAttrib: '— @davi.natroshvili، كاروسيل Instagram، 1 يونيو 2026',
  conductKicker: 'ما الذي طلبه الحساب نفسه',
  conductBody:
    'قبل الإطلاق في 21 مايو 2026، ومن حسابه **الموثَّق** على Instagram (@davidnatro1)، طلب David Natroshvili شخصيًا الاستثمار في البيع المسبق لتوكن Solana باسم $NATRO — بصيغة المتكلّم، مع تحديد حدٍّ أدنى:',
  juxtaKicker: 'السجلّان جنبًا إلى جنب',
  juxtaBody:
    'خلال اثنتين وسبعين ساعة من الإطلاق انهار التوكن بنحو **~98%**. ورُفضت طلبات ردّ الأموال من الحاملين المتضرّرين — *«Nothing to say»* من مشرف الفريق، و*«stfu»* من حساب Telegram الشخصي للمؤسّس. في النافذة نفسها أُغلق الموقع، وأُزيل رابط NATRO من السيرة الذاتية للمؤسّس على Instagram، وحُذف الفيديو الترويجي المدفوع.\n\nالمبادئ أعلاه نُشرت لمتابعيه *بعد* أن صار كل ذلك موثَّقًا بالفعل. والمجموعتان من الكلمات كلتاهما له، على حساباته الموثَّقة. هذه الصفحة لا تضيف أي نعت. والقارئ يستخلص الاستنتاج.',
  replyKicker: 'حق الردّ',
  replyBefore:
    'David Natroshvili وSpribe مدعوّان للردّ؛ وقد أُرسل إشعار رسمي إلى عناوين Spribe القانونية والمؤسسية المنشورة في 25 مايو 2026. ستُنشر التصحيحات الوقائعية الموثَّقة بجانب السجلّ. المصادر الكاملة على ',
  replyProfileLabel: 'صفحته التعريفية',
  replyMid: ' وعلى ',
  replyPressLabel: 'صفحة الصحافة',
  replyAfter: '.',
};

const CONTENT: Record<Locale, DavidPrinciplesContent> = {
  en,
  ru,
  uk,
  ka,
  fr,
  de,
  es,
  ar,
};

export function getDavidPrinciples(locale: Locale): DavidPrinciplesContent {
  return CONTENT[locale] || en;
}
