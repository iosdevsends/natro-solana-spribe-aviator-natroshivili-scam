import { extendEn } from './_helpers';

/**
 * German overlay — machine-draft, pending native review.
 */
export const de = () =>
  extendEn({
    config: {
      siteTitle: 'Die NATRO-Akte — Eine Fallstudie zur Preisbildung von Reputation',
      tagline: 'Ein dokumentierter Fall zur Preisbildung von Reputation',
      mastheadMeta: 'Fallstudie · Aus Primärquellen zusammengestellt',
      seoDescription: 'Eine dokumentierte Fallstudie: der $NATRO-Solana-Token-Launch (21. Mai 2026), sein 98%-Absturz und das Löschen von Beweisen. Nur Primärquellen.',
      kicker: 'Ein dokumentierter Fall zur Preisbildung von Reputation',
      headline: 'Ein Token, verkauft über einen Familiennamen. Ein 98-Prozent-Absturz. Ein Aufräumen.',
      deck: 'Am 21. Mai 2026 wurde auf Pump.fun ein Solana-Memecoin namens $NATRO von Alex Natroshvili lanciert — dem Sohn von David Natroshvili, Gründer und CEO von Spribe, dem Studio hinter dem global vertriebenen Glücksspielprodukt Aviator. Das Verkaufsargument war der Familienname. Innerhalb von 72 Stunden nach der Verweigerung der Rückzahlungen wurden die Website, das Werbevideo und die Social-Media-Links entfernt. Die Blockchain-Spur, die archivierte Website und die Chat-Protokolle nicht.',
      dateline: [
        { label: 'DATUM', value: '26. Mai 2026' },
        { label: 'GEGENSTAND', value: '$NATRO · Solana-Token-Launch' },
        { label: 'STATUS', value: 'Öffentliche Akte' },
        { label: 'GERICHTSBARKEIT', value: 'Grenzüberschreitend (Monaco / Georgien / Ukraine)' },
      ],
      byline: [
        { label: 'ZUSAMMENGESTELLT VON', value: 'Einem betroffenen frühen Inhaber' },
        { label: 'POSITION', value: '220.000.000 NATRO (ca. 22 % des Retail-Angebots)' },
        { label: 'METHODE', value: 'Nur Primärquellen · alles verlinkt und archiviert' },
      ],
      archiveCallout: {
        kicker: 'In ihren eigenen Worten',
        headline: 'Sehen Sie, was verkauft wurde.',
        body: 'Bevor die Seite offline genommen wurde, hat die Wayback Machine die komplette archivierte Version von **natrocoin.net** erfasst — den Hero-Pitch, die vierstufige Tier-Leiter, den Gründer-Abschnitt mit dem Familiennamen, die Tokenomics-Seite und die vollständige FAQ (einschließlich der Antwort auf *„Was hindert Sie an einem Rug?"*).\n\nDies ist die stärkste Einzelquelle der Akte. Der Marketing-Text unter der Schlagzeile dieser Seite ist daraus rekonstruiert.',
        linkText: 'Archiv von natrocoin.net öffnen →',
        linkUrl: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/',
        urlLabel: 'Wayback Machine · erfasst am 21. Mai 2026, 21:32 UTC',
      },
      contactBlock: 'Für Anfragen von Journalisten, Anwälten, Regulierungsbehörden oder betroffenen Inhabern mit Belegmaterial: Bitte geben Sie Identität und Art der Anfrage an.\n\nFür betroffene Inhaber, die ihren eigenen dokumentierten Bericht einreichen möchten: Halten Sie sich bereit, Ihre Position on-chain zu verifizieren.\n\n**Telegram (Compiler):** [@btc3050](https://t.me/btc3050)',
      compilerAddendum: 'Persönlicher Anhang eingereicht von **@btc3050**, 27. Mai 2026.\n\nDer Compiler schätzte David Natroshvili öffentlich hoch und betrachtete die Spribe / Aviator-Geschichte als ernsthafte unternehmerische Leistung, die über Jahre aufgebaut wurde. Diese Einschätzung änderte sich, als @davidnatro1 den Launch von seinem eigenen verifizierten Konto aus verstärkte und dann während der Verweigerung der Inhaber-Rückzahlung schwieg.\n\nDieser Anhang ist absichtlich vom Hauptdokument getrennt — das Hauptdokument bleibt ein Bericht in der dritten Person, zusammengestellt aus Primärquellen. Dieser Absatz ist die eigene Stimme des Compilers.',
      uiStrings: {
        'nav.promise': '§ I · Versprechen',
        'nav.reality': '§ II · Realität',
        'nav.scrub': '§ III · Aufräumen',
        'nav.voices': '§ IV · Stimmen',
        'nav.people': '§ V · Personen',
        'nav.evidence': '§ VI · Quellen',
        'nav.gallery': '§ VII · Galerie',
        'nav.stories': 'Leserberichte',
        'ui.what_promised': 'Was versprochen wurde',
        'ui.what_delivered': 'Was geliefert wurde',
        'ui.right_of_reply': 'Recht auf Erwiderung',
        'ui.contact': 'Kontakt',
        'ui.translation_pending': 'Übersetzung in Prüfung durch Muttersprachler',
      },
    },
  });
