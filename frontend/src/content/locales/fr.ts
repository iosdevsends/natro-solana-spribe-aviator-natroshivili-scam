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
      archiveCallout: {
        kicker: 'Dans leurs propres mots',
        headline: 'Voyez ce qui était vendu.',
        body: 'Avant que le site ne soit mis hors ligne, la Wayback Machine a capturé la version archivée complète de **natrocoin.net** — l\'argumentaire d\'accueil, l\'échelle à quatre niveaux, la section fondateur qui nommait la famille, la page tokenomics et la FAQ complète (y compris la réponse à *« Qu\'est-ce qui vous empêche de rug ? »*).\n\nC\'est la source la plus solide du dossier. Le texte marketing sous le titre de cette page en est reconstitué.',
        linkText: 'Ouvrir l\'archive de natrocoin.net →',
        linkUrl: 'https://web.archive.org/web/20260521213245/https://natrocoin.net/',
        urlLabel: 'Wayback Machine · capturé le 21 mai 2026, 21:32 UTC',
      },
      contactBlock: 'Pour les demandes des journalistes, avocats, régulateurs ou détenteurs affectés disposant d\'informations corroborantes : veuillez inclure votre identité et la nature de la demande.\n\nPour les détenteurs affectés souhaitant soumettre leur propre récit documenté : préparez-vous à vérifier votre position on-chain.\n\n**Telegram (compilateur) :** [@btc3050](https://t.me/btc3050)',
      compilerAddendum: 'Addendum personnel déposé par **@btc3050**, 27 mai 2026.\n\nLe compilateur tenait publiquement David Natroshvili en haute estime et considérait l\'histoire Spribe / Aviator comme une réalisation entrepreneuriale sérieuse construite au fil des années. Cette opinion a changé lorsque @davidnatro1 a amplifié le lancement depuis son propre compte vérifié, puis est resté silencieux pendant le refus de remboursement des détenteurs.\n\nCet addendum est délibérément séparé du fichier principal — le fichier principal reste un compte rendu à la troisième personne compilé à partir de sources primaires. Ce paragraphe est la propre voix du compilateur.',
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
