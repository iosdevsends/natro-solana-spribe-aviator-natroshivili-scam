import { extendEn } from './_helpers';

/**
 * French overlay — machine-draft, pending native review.
 * Unfilled fields fall through to the English baseline so the page still
 * renders fully.
 */
export const fr = () =>
  extendEn({
    config: {
      siteTitle: 'Le Dossier NATRO — Une étude de cas sur le prix de la réputation',
      tagline: 'Un cas documenté de tarification de la réputation',
      mastheadMeta: 'Étude de cas · Compilée à partir de sources primaires',
      kicker: 'Un cas documenté de tarification de la réputation',
      headline: 'Un jeton vendu sur un nom de famille. Une chute de 98 %. Un effacement.',
      deck: 'Le 21 mai 2026, un memecoin Solana nommé $NATRO a été lancé sur Pump.fun par Alex Natroshvili — fils de David Natroshvili, fondateur et CEO de Spribe, le studio derrière le produit de jeu d\'argent mondial Aviator. L\'argumentaire reposait sur le nom de famille. Soixante-douze heures après le refus des remboursements, le site, la vidéo promotionnelle et les liens dans les bios des réseaux sociaux avaient tous été effacés. La trace blockchain, le site archivé et les journaux de chat — non.',
      dateline: [
        { label: 'DATE', value: '26 mai 2026' },
        { label: 'SUJET', value: '$NATRO · Lancement de token Solana' },
        { label: 'STATUT', value: 'Document public' },
        { label: 'JURIDICTION', value: 'Transfrontalier (Monaco / Géorgie / Ukraine)' },
      ],
      byline: [
        { label: 'COMPILÉ PAR', value: 'Un détenteur précoce affecté' },
        { label: 'POSITION', value: '220 000 000 NATRO (≈22 % de l\'offre retail)' },
        { label: 'MÉTHODE', value: 'Sources primaires uniquement · liées et archivées' },
      ],
      uiStrings: {
        'nav.promise': '§ I · Promesse',
        'nav.reality': '§ II · Réalité',
        'nav.scrub': '§ III · Effacement',
        'nav.voices': '§ IV · Voix',
        'nav.people': '§ V · Personnes',
        'nav.evidence': '§ VI · Sources',
        'nav.gallery': '§ VII · Galerie',
        'nav.stories': 'Récits des lecteurs',
        'ui.what_promised': 'Ce qui a été promis',
        'ui.what_delivered': 'Ce qui a été livré',
        'ui.right_of_reply': 'Droit de réponse',
        'ui.contact': 'Contact',
        'ui.translation_pending': 'Traduction en cours de relecture par un locuteur natif',
      },
    },
  });
