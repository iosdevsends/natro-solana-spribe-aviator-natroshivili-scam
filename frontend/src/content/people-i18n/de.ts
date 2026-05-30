/**
 * German (de) translation overlay for the /people profile pages.
 *
 * Index-aligned with the canonical English data in ../people.ts:
 *   profiles[slug].sections[i]      ↔ English profile.sections[i]
 *   profiles[slug].handleNotes[i]   ↔ English profile.handles[i].note
 *   profiles[slug].sourceLabels[i]  ↔ English profile.sources[i].label
 *
 * Verbatim source quotes (the presale Stories, "stfu", "Nothing to say",
 * stated loss figures) are kept in their original English inside the
 * translated prose — quotes are sacred. Markdown markers (**bold**, *italic*,
 * [label](url)) and all URLs are preserved exactly.
 */
import type { PeopleLocaleBundle } from '../people';

export const de: PeopleLocaleBundle = {
  profiles: {
    'alex-natroshvili': {
      role: 'Genannte Partei · Gründer',
      tagline:
        'Gründer des Solana-Memecoins $NATRO (gestartet am 21. Mai 2026); Sohn des Spribe-CEO David Natroshvili. Durch das Launch-Marketing selbst identifiziert.',
      metaTitle:
        'Alex Natroshvili — Gründer des Solana-Tokens $NATRO | The NATRO File',
      metaDescription:
        'Wer ist Alex Natroshvili? Gründer des Solana-Memecoins $NATRO (21. Mai 2026), Sohn des Spribe-CEO David Natroshvili. Verifizierter Instagram @natroalex, Telegram @natroalex1. Ein dokumentiertes Dossier.',
      handleNotes: ['verifiziert · 54,1K Follower', 'verifiziert'],
      sections: [
        {
          heading: 'Wer er ist',
          body: `Alex Natroshvili wurde von der eigenen Website des $NATRO-Projekts öffentlich als Gründer identifiziert — er war nicht anonym. Der Gründer-Abschnitt begann mit der Zeile: *„Most coin founders are anonymous. Alex isn't. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally."* Sein persönliches Profil wurde dort beschrieben als *„Boxer / Car Collector / Watch Collector."*

Er ist der Sohn von **David Natroshvili**, Gründer und CEO von Spribe — dem iGaming-Studio hinter dem globalen Glücksspielprodukt im Crash-Genre Aviator. Seine überprüfbaren öffentlichen Accounts zum Zeitpunkt des Launches waren Instagram [@natroalex](https://instagram.com/natroalex) (verifiziert, 54,1K Follower) und Telegram [@natroalex1](https://t.me/natroalex1) (verifiziert).`,
        },
        {
          heading: 'Rolle beim $NATRO-Launch',
          body: `$NATRO wurde als „Networking-Coin" mit tier-gestuftem Zugang vermarktet, und das Angebot stützte sich ausdrücklich auf den Familiennamen Natroshvili und die Verbindung zu Spribe / Aviator als zentrales Vertrauenssignal. Das eigene FAQ der Website ging direkt auf die Rug-Pull-Frage ein und erklärte: *„The reputation hit lasts forever; the cash from a rug doesn't."*

Eine vierstufige Zugangsleiter wurde versprochen — Foyer (1M), Floor (5M), Lounge (10M) und Salon · Inner Circle (20M), deren oberste Stufe beschrieben wurde als „names you'd recognize, real money behind them, people who can actually open doors". Nachdem die Chats geöffnet wurden, existierten die Räume nur in einem Bruchteil des versprochenen Umfangs: Foyer mit 13 Mitgliedern, Floor mit 10, Lounge mit 2 Haltern plus 3 Admins; der Salon wurde nie erstellt.`,
        },
        {
          heading: 'Nach dem Kollaps',
          body: `Innerhalb von rund 48 Stunden fiel der Kurs um etwa 98 %. Als betroffene frühe Halter Rückerstattungen verlangten, lehnte das Team ab; die Antwort des Team-Admins lautete *„Nothing to say."* Am 25. Mai 2026 um 10:11 UTC antwortete Alex Natroshvili, als Reaktion auf einen strukturierten Vorschlag „Rückerstattung oder Veröffentlichung", der an seinen verifizierten Telegram-Account gesendet worden war, mit zwei Buchstaben: *„stfu."* Diese Nachricht ist im Beweisstück-Bestand des Dossiers erhalten.

Im selben Zeitfenster wurde die Website natrocoin.net offline genommen, der NATRO-Link aus seiner verifizierten Instagram-Bio entfernt und das bezahlte Promo-Video des KOL @jrcryptex (114K Follower) gelöscht. Die Blockchain-Aufzeichnung, das Website-Archiv und die Chat-Logs nicht.`,
        },
        {
          heading: 'Zu seinen angegebenen Verlusten',
          body: `In Direktnachrichten gab Alex Natroshvili an, selbst beim Launch Geld verloren zu haben — *„I lost 38k"* und, separat, *„I swear to god i lost 30k plus."* Diese Zahlen werden hier als seine Behauptungen festgehalten, nicht als belegte Fakten: Die angegebene Summe verändert sich innerhalb desselben Nachrichtenverlaufs, und die eigene Tokenomics des Projekts beschrieb die Gründer-Allokation von 30M als öffentlich verpflichtet, sich nie zu bewegen. Ein nicht realisierter Buchverlust auf einer sich nicht bewegenden Allokation ist nicht gleichbedeutend mit einem realisierten Geldverlust durch Privatanleger.

Eine separate On-Chain-Prüfung läuft. Die Wallet des Erstellers zeigt nach dem Launch fortlaufende Swap- und Liquiditätsaktivität; ob das dem genannten Gründer-Bag von 30M oder einer separaten Team-Allokation entspricht, erfordert weitere forensische On-Chain-Analyse und wird hier nicht behauptet.`,
        },
        {
          heading: 'Recht auf Gegendarstellung',
          body: `Alex Natroshvili ist eingeladen, zu antworten. Dokumentierte sachliche Korrekturen werden zusammen mit der Aufzeichnung veröffentlicht. Kontaktdaten finden sich auf der [Presseseite](/press).`,
        },
      ],
      sourceLabels: [
        'Wayback-Archiv von natrocoin.net (vor der Abschaltung, Gründer-Abschnitt)',
        'Solscan — $NATRO-Token-Contract',
        'Kutztown University Foundation — Kontext zur Familie Natroshvili',
      ],
    },
    'david-natroshvili': {
      role: 'Genannte Partei · Spribe-CEO',
      tagline:
        'Gründer und CEO von Spribe; Vater des $NATRO-Gründers Alex Natroshvili. Auf seinem eigenen verifizierten Instagram bewarb er persönlich den $NATRO-Presale mit und warb vor dem Launch um Investitionen.',
      metaTitle: 'David Natroshvili — Gründer & CEO von Spribe | The NATRO File',
      metaDescription:
        'Wer ist David Natroshvili? Gründer & CEO von Spribe und Vater des $NATRO-Gründers Alex Natroshvili. Auf seinem verifizierten Instagram bewarb er persönlich den $NATRO-Presale („with me & @natroalex", 1.5k Minimum) vor dem Launch am 21. Mai 2026. Ein dokumentiertes Dossier.',
      handleNotes: [undefined, 'verifiziert', undefined],
      sections: [
        {
          heading: 'Wer er ist',
          body: `David Natroshvili ist Gründer und CEO von **Spribe**, dem iGaming-Studio hinter dem globalen Glücksspielprodukt im Crash-Genre Aviator. Er hat einen MBA der Kutztown University of Pennsylvania (Jahrgang 2001); das Hauptbüro des Pennsylvania Small Business Development Center in Kutztown [trägt seinen Namen](https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/) nach einer wohltätigen Spende im Frühjahr 2025. Er ist der Vater von [Alex Natroshvili](/people/alex-natroshvili), dem Gründer des Solana-Memecoins $NATRO.`,
        },
        {
          heading: 'Er bewarb den Presale persönlich',
          body: `David Natroshvili wurde nicht bloß als reputativer Hintergrund herangezogen. Auf seinem eigenen **verifizierten** Instagram-Account (@davidnatro1) bewarb er in den Stunden vor dem Launch persönlich und in der ersten Person den $NATRO-Presale und warb um Investitionen. Die Stories sind im Beweisstück-Bestand des Dossiers erhalten:

*„If you want to get involved in the crypto project presale **with me & @natroalex** — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k."* (Beweisstück 22)

*„We're opening private access to **our** crypto project presale **with me & @natroalex** — Telegram by DM · 1.5k min entry · Limited access available."* (Beweisstück 24)

*„I have many celebs on the line to post about natro this will be crazy🔥"* (Beweisstück 21)

Er teilte außerdem das bezahlte Promo-Video des KOL @jrcryptex (114K Follower) — *„It's called NATRO"* — in seinen Stories (Beweisstück 2). Die Presale-Aufforderung leitete potenzielle Käufer zu einem Minimum von $1.500 und zum Telegram von Alex Natroshvili (@natroalex1).`,
        },
        {
          heading: 'Dokumentiert vs. ausstehend',
          body: `**Dokumentiert:** Dass David Natroshvili den $NATRO-Presale persönlich und öffentlich von seinem verifizierten Account aus, in der ersten Person („with me", „our crypto project"), bewarb und um Investitionen warb, ist durch seine eigenen Stories belegt, die vor ihrem Ablauf festgehalten wurden.

**Ausstehende Forensik:** Wohin die Presale-Gelder flossen und ob David Natroshvili irgendeine Projekt-Wallet kontrollierte oder von ihr Gelder erhielt, wird hier nicht behauptet. Dies festzustellen erfordert On-Chain-Arbeit, die läuft. Das Dossier trennt das, was die öffentliche Aufzeichnung bereits zeigt, von dem, was noch Beweise erfordert.`,
        },
        {
          heading: 'Anmerkung zum Umfang',
          body: `Dieses Dossier betrifft den $NATRO-Token-Launch vom Mai 2026. Es erhebt keine Behauptungen über die lizenzierten Glücksspielprodukte von Spribe oder dessen weiteres Geschäft, die ihren eigenen Rechtsstatus in mehreren Jurisdiktionen haben und außerhalb des Umfangs dieser Aufzeichnung liegen.`,
        },
        {
          heading: 'Recht auf Gegendarstellung',
          body: `David Natroshvili und Spribe sind eingeladen, zu antworten. Eine formelle Mitteilung wurde am 25. Mai 2026 an die veröffentlichten rechtlichen und korporativen Adressen von Spribe gesendet. Dokumentierte sachliche Korrekturen werden zusammen mit der Aufzeichnung veröffentlicht. Kontaktdaten finden sich auf der [Presseseite](/press).`,
        },
      ],
      sourceLabels: [
        'Instagram Stories vor dem Launch, @davidnatro1 (verifiziert) — Beweisstücke 21, 22, 24 (Presale-Aufforderung) und Beweisstück 2 (Promo-Reshare), in der Galerie des Dossiers',
        'Wayback-Archiv von natrocoin.net (vor der Abschaltung, Gründer-Abschnitt)',
        'Kutztown University Foundation — nach ihm benanntes SBDC-Büro',
        'Spribe — Unternehmensseite',
      ],
    },
  },
  chrome: {
    namedParties: 'Genannte Parteien',
    indexKicker: '§ Genannte Parteien',
    indexH1: 'In diesem Dossier genannte Personen',
    indexStandfirst:
      'Jede wurde durch das Launch-Marketing von $NATRO selbst identifiziert — nicht durch dieses Dossier enthüllt. Jedes Profil ist sachlich, mit Quellen belegt und trägt ein dauerhaftes Recht auf Gegendarstellung.',
    indexMetaTitle:
      'Genannte Parteien — Alex und David Natroshvili | The NATRO File',
    indexMetaDescription:
      'Die im $NATRO-Dossier genannten Personen, jede durch das Launch-Marketing selbst identifiziert: Alex Natroshvili (Gründer) und David Natroshvili (Spribe-CEO). Einzelne Profile mit Quellenangaben.',
    readFullProfile: 'Vollständiges Profil lesen →',
    storiesHeading: 'Stories · Primärquellen',
    storiesNote:
      'Von seinem verifizierten Instagram festgehalten, bevor die Stories abliefen. Klicken Sie auf einen Screenshot, um das Beweisstück in voller Auflösung zu öffnen.',
    sources: 'Quellen',
    whereToNext: 'Wohin als Nächstes',
    davidAwardTitle: 'Nr. 1 der einflussreichsten Personen im iGaming →',
    davidAwardSub: 'Auszeichnung „Game Changers 2026" — vor dem Hintergrund der $NATRO-Aufzeichnung',
    fullFile: 'Vollständiges Dossier →',
    fullFileSub: 'Versprechen · Realität · Beseitigung · Stimmen · Personen · Quellen',
    onchain: 'On-Chain-Prüfung →',
    onchainSub: 'Aktueller Status des Tokens, Aktivität der Ersteller-Wallet',
    press: 'Pressekit und Recht auf Gegendarstellung →',
    pressSub: 'Faktencheck-Liste, Kontakte, formelle Mitteilung',
  },
};
