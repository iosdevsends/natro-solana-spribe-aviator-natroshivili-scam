import type { PressContent } from '../press-release';

/**
 * Coverage item constants are inlined here (the screenshots and source are
 * language-neutral); the heading/intro/body localize per locale.
 */
const COVERAGE_IGAMING_INSIDES = {
  source: 'iGaming Insides',
  url: 'https://t.me/igaming_inside',
  image: '/exhibits/ex-coverage-igaming-insides-linkedin.png',
  imageWidth: 1156,
  imageHeight: 3108,
};

export const de: PressContent = {
  forImmediateRelease: 'Zur sofortigen Veröffentlichung',
  dateline: '28. Mai 2026 · Kyjiw / Monaco',
  headline:
    'Ein Solana-Memecoin, ein Familienname, ein Einbruch um 98 %: eine dokumentierte Fallakte zu $NATRO',
  dek: 'Spribe-Gründer und CEO David Natroshvili warb persönlich um Presale-Investitionen in den Solana-Memecoin $NATRO, der am 21. Mai 2026 von seinem 15-jährigen Sohn Alex Natroshvili gestartet wurde. Der Token brach innerhalb von 48 Stunden um 98 % ein; Rückerstattungen wurden verweigert; ein Muster der Beweismittelentfernung durch das Team ist in Primärquellen dokumentiert.',
  lede: 'Eine heute auf [natro.meme](https://natro.meme) veröffentlichte dokumentierte Fallakte legt Belege aus Primärquellen zum Start und zum 98-prozentigen Einbruch von $NATRO vor — einem Solana-Memecoin, dessen Vermarktung auf dem Familiennamen Natroshvili und der Verbindung zum Glücksspielprodukt Spribe / Aviator aufbaute.',
  keyFactsHeading: 'Kernfakten (alle durch Primärquellen verifiziert)',
  keyFacts: [
    'Am 21. Mai 2026 um 20:11 UTC wurde der Solana-Token $NATRO auf Pump.fun gestartet. Contract-Adresse: `9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF`.',
    'In den 24 Stunden vor dem Start veröffentlichte David Natroshvili — Gründer und CEO von Spribe (dem iGaming-Studio hinter dem weltweit verbreiteten Crash-Style-Glücksspielprodukt Aviator) — eine Reihe von Instagram-Stories aus seinem verifizierten Konto (@davidnatro1), in denen er persönlich um bezahlte Presale-Investitionen warb, sich selbst als Mitbeteiligten benannte (*„with me & @natroalex"*), eine Mindesteinstiegsschwelle von $1.500 festlegte und den Kontakt an das persönliche Telegram seines minderjährigen Sohnes (@natroalex1) verwies. Fünf Stories wurden vor ihrem Ablauf gesichert.',
    'Der Preis des Tokens brach innerhalb von 48 Stunden um rund 98 % ein. Die Marktkapitalisierung fiel von angegebenen über $200K beim Start auf etwa $36 (laut Pump.fun-API zum Zeitpunkt der Einreichung).',
    'Rückerstattungsanträge betroffener früher Halter wurden abgelehnt. Die Antwort des Team-Admins auf einen strukturierten Vorschlag: *„Nothing to say."* Die persönliche Telegram-Antwort des Gründers bei direkter Kontaktaufnahme: *„stfu."*',
    'Innerhalb von 72 Stunden nach der Rückerstattungsverweigerung: natrocoin.net wurde offline genommen (die Wayback Machine bewahrte den vollständigen Snapshot vor der Abschaltung), der NATRO-Link wurde aus der Instagram-Bio des Gründers entfernt, und das bezahlte Werbevideo des KOL @jrcryptex (114K Follower) wurde von Instagram gelöscht.',
    'Ein formelles Schreiben wurde am 25. Mai 2026 um 12:24 UTC an die juristischen Kanäle von Spribe (`info@spribe.co`, `legal@spribe.co` sowie zwei namentlich genannte Executive-Adressen) übermittelt. Zum Zeitpunkt der Veröffentlichung: keine öffentliche Reaktion.',
  ],
  caseFileHeading: 'Fallakte',
  caseFileBody:
    'Die vollständige Akte — 25 dokumentierte Belegstücke (Telegram-Chatprotokolle, On-Chain-Spur, Vorher-/Nachher-Screenshots, Löschnachweise des KOL, die vollständig per Wayback bewahrte Website), Abschnitt §V Genannte Parteien, Abschnitt §VI Index der Primärquellen, §VIII FAQ — ist unter [natro.meme](https://natro.meme) verfügbar. Erhältlich in 8 Sprachen: EN · RU · UK · KA · FR · DE · ES · AR.\n\nDie Akte ist als investigatives Dokument aufgebaut, nicht als persönliche Beschwerde. Die redaktionelle Rahmung folgt einer faktischen Berichterstattung in der dritten Person; in der Stimme der Akte werden keine Schlussfolgerungen zu Betrug / Scam gezogen — den Lesern werden Primärquellen vorgelegt, und sie ziehen ihre eigenen.',
  ageNoteHeading: 'Hinweis zum Alter des Gründers',
  ageNoteBody:
    'Alex Natroshvili war zum Zeitpunkt des Starts 15 Jahre alt (geboren am 14. September 2010; bestätigt über das [Tapology-Amateurbox-Profil](https://tapology.com/fightcenter/fighters/540307-alex-natroshvili)). David Natroshvili verwies den Presale-Kontakt von seinem eigenen verifizierten Spribe-CEO-Konto an das persönliche Telegram seines minderjährigen Sohnes.',
  rorHeading: 'Recht auf Gegendarstellung',
  rorBody:
    'Die Fallakte hält ein offenes Recht auf Gegendarstellung aufrecht. Jede im Dokument genannte Partei kann eine wortgetreue Stellungnahme einreichen, die der Akte beigefügt wird. Bis zum Zeitpunkt der Veröffentlichung ist keine eingegangen.',
  contactHeading: 'Kontakt',
  contactBody:
    '**Zusammengestellt von:** [@btc3050](https://t.me/btc3050) (Telegram)\n\n**Akte:** [natro.meme](https://natro.meme)\n\n**Wayback-Archiv (einzelne stärkste Quelle):** [web.archive.org/web/20260521213245/https://natrocoin.net/](https://web.archive.org/web/20260521213245/https://natrocoin.net/)',
  coverageHeading: 'In der Presse',
  coverageIntro:
    'Externe Berichterstattung, während der Fall in der Branche die Runde macht. Mit Quellenangabe wiedergegeben — die Formulierungen stammen von den Medien selbst, nicht von der Akte. Dieser Abschnitt wird erweitert.',
  coverage: [
    {
      ...COVERAGE_IGAMING_INSIDES,
      meta: 'iGaming-Fachpublikation · LinkedIn · 30. Mai 2026',
      title: '„Spribe-Gründer David Natroshvili des Krypto-Scams beschuldigt"',
      body:
        'Ein Redakteur des iGaming-Fachmediums **iGaming Insides** veröffentlichte auf LinkedIn eine russischsprachige Zusammenfassung des Falls. Sie schildert den Pitch über den Familiennamen (*„most coin founders are anonymous, Alex isn\'t"*), David Natroshvilis Presale-Stories vor dem Start, gefilmt über einem Bentley und einem Ferrari mit einer Mindestsumme von $1.500 und einer direkten Leitung zu seinem Sohn, die nahezu leeren Tier-Räume (Foyer 13, Floor 10, Lounge 2 Halter + 3 Admins, Inner Circle nie erstellt), den Einbruch um ~98 %, die Abfuhren *„Nothing to say"* und *„stfu"* sowie die Beweismittelbereinigung binnen 72 Stunden — mit dem Hinweis, dass die Wayback Machine die Website bewahrte. Der Beitrag endet: *„Very strange business, of course."*',
      urlLabel: 'iGaming Insides — Telegram-Kanal',
      imageAlt: 'iGaming Insides LinkedIn post on the $NATRO case',
    },
  ],
  downloadsHeading: 'Downloads & Schnellzugriffe',
  downloadsLabels: {
    txt: 'Pressemitteilung (Klartext)',
    factSheet: 'Einseitiges Factsheet',
    factSheetSub: 'Übersichtliche Zahlen + Zeitleiste (druckfertig)',
    waybackArchive: 'Wayback-Archiv — natrocoin.net (vor der Abschaltung)',
    fullFile: 'Vollständige Fallakte (interaktiv)',
    exhibitArchive: 'Belegstück-Archiv — Index von 25 Primärquellen-Dokumenten',
  },
};
