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
