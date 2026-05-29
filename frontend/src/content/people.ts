/**
 * Canonical named-entity data for the dedicated /people/<slug> profile pages.
 *
 * Why these pages exist (SEO): a journalist, regulator, or prospective holder
 * who searches "Alex Natroshvili" / "David Natroshvili" should land on a single
 * authoritative URL that *is about that person*. A dedicated page with an
 * @id-anchored schema.org Person (ProfilePage) is a far stronger entity signal
 * than a section anchor on the homepage. The JSON-LD @id values match the ones
 * the homepage @graph already publishes (`https://natro.meme/#alex-natroshvili`,
 * `#david-natroshvili`, `#spribe`) so search engines reconcile both surfaces to
 * the same entity instead of treating them as two different things.
 *
 * Tone is strictly factual / third-person, mirroring the rest of the case file.
 * Body prose is English (proper nouns, dates, handles, on-chain addresses are
 * language-neutral); the route still renders at every locale prefix so hreflang
 * resolves, matching the existing /scam-one-pager pattern.
 */

export interface PersonProfileSection {
  heading: string;
  /** Inline-markdown understood by <Prose>: **bold**, *italic*, `code`, [label](url), blank-line paragraphs. */
  body: string;
}

export interface PersonProfileHandle {
  platform: string;
  handle: string;
  url?: string;
  note?: string;
}

export interface PersonProfileSource {
  label: string;
  url: string;
}

export interface PersonProfile {
  slug: string;
  /** Display name + the canonical schema.org @id for cross-surface reconciliation. */
  name: string;
  schemaId: string;
  /** Kicker above the H1. */
  role: string;
  /** One-line italic standfirst under the H1. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  handles: PersonProfileHandle[];
  sections: PersonProfileSection[];
  /** Exhibit slugs (from content/exhibits) to display as a figure grid — the
   *  primary-source screenshots backing the profile. Rendered in given order. */
  exhibitSlugs?: string[];
  sources: PersonProfileSource[];
  /** schema.org Person object (the same one published in the homepage @graph). */
  jsonLdPerson: Record<string, unknown>;
}

/**
 * The @id-anchored Person / Organization entities. These are the single source
 * of truth — the homepage imports the three constants below for its @graph so
 * the data never drifts between the two surfaces.
 */
export const ALEX_NATROSHVILI = {
  '@type': 'Person',
  '@id': 'https://natro.meme/#alex-natroshvili',
  name: 'Alex Natroshvili',
  alternateName: [
    'Aleksandre Natroshvili',
    'Aleko Natroshvili',
    'Алекс Натрошвили',
    'Алекс Натрошвілі',
    'ალექს ნატროშვილი',
    '@natroalex',
    '@natroalex1',
  ],
  description:
    'Founder of the $NATRO Solana memecoin (launched 21 May 2026). Son of David Natroshvili. Verified Instagram @natroalex (54.1K followers), verified Telegram @natroalex1.',
  jobTitle: 'Founder, $NATRO (Solana memecoin)',
  nationality: 'GE',
  url: 'https://natro.meme/people/alex-natroshvili',
  mainEntityOfPage: 'https://natro.meme/people/alex-natroshvili',
  sameAs: [
    'https://instagram.com/natroalex',
    'https://t.me/natroalex1',
    'https://tapology.com/fightcenter/fighters/540307-alex-natroshvili',
  ],
};

export const DAVID_NATROSHVILI = {
  '@type': 'Person',
  '@id': 'https://natro.meme/#david-natroshvili',
  name: 'David Natroshvili',
  alternateName: [
    'Davit Natroshvili',
    'Давид Натрошвили',
    'Давид Натрошвілі',
    'დავით ნატროშვილი',
    'ديفيد ناتروشفيلي',
    '@davidnatro1',
    '@davi.natroshvili',
  ],
  description:
    'Founder and CEO of Spribe, the iGaming studio behind the global crash-style gambling product Aviator. Father of Alex Natroshvili. On his verified Instagram (@davidnatro1) he personally promoted the $NATRO presale and solicited investment ("with me & @natroalex," 1.5k minimum) before the 21 May 2026 launch. Kutztown University MBA (class of 2001); the Pennsylvania SBDC lead office at Kutztown bears his name following a Spring 2025 philanthropic gift.',
  jobTitle: 'Founder & CEO, Spribe',
  affiliation: {
    '@type': 'Organization',
    '@id': 'https://natro.meme/#spribe',
    name: 'Spribe',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Kutztown University of Pennsylvania',
    url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/',
  },
  url: 'https://natro.meme/people/david-natroshvili',
  mainEntityOfPage: 'https://natro.meme/people/david-natroshvili',
  sameAs: [
    'https://instagram.com/davidnatro1',
    'https://instagram.com/davi.natroshvili',
    'https://www.linkedin.com/in/david-natroshvili-98338038/',
    'https://www.linkedin.com/company/spribe/',
    'https://handwiki.org/wiki/Biography:David_Natroshvili',
    'https://www.imdb.com/name/nm17224363/',
    'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/',
  ],
};

export const SPRIBE_ORG = {
  '@type': 'Organization',
  '@id': 'https://natro.meme/#spribe',
  name: 'Spribe',
  description:
    'iGaming studio; developer of Aviator (a global crash-style gambling product licensed in multiple jurisdictions). Mentioned in this case file because the $NATRO marketing leaned on the Spribe / Aviator association as a trust signal; not affiliated with $NATRO as an entity.',
  url: 'https://www.linkedin.com/company/spribe/',
  founder: { '@id': 'https://natro.meme/#david-natroshvili' },
};

const WAYBACK = 'https://web.archive.org/web/20260521213245/https://natrocoin.net/';

export const PEOPLE_PROFILES: PersonProfile[] = [
  {
    slug: 'alex-natroshvili',
    name: 'Alex Natroshvili',
    schemaId: 'https://natro.meme/#alex-natroshvili',
    role: 'Named party · Founder',
    tagline:
      'Founder of the $NATRO Solana memecoin (launched 21 May 2026); son of Spribe CEO David Natroshvili. Self-identified by the launch marketing.',
    metaTitle:
      'Alex Natroshvili — founder of the $NATRO Solana token | The NATRO File',
    metaDescription:
      'Who is Alex Natroshvili? Founder of the $NATRO Solana memecoin (21 May 2026), son of Spribe CEO David Natroshvili. Verified Instagram @natroalex, Telegram @natroalex1. A documented case file.',
    handles: [
      { platform: 'Instagram', handle: '@natroalex', url: 'https://instagram.com/natroalex', note: 'verified · 54.1K followers' },
      { platform: 'Telegram', handle: '@natroalex1', url: 'https://t.me/natroalex1', note: 'verified' },
    ],
    sections: [
      {
        heading: 'Who he is',
        body:
          'Alex Natroshvili was publicly identified by the $NATRO project’s own website as the founder — he was not anonymous. The founder section opened with the line: *"Most coin founders are anonymous. Alex isn’t. His name is on the project, his face is on TikTok and Instagram, and his family is well-known globally."* His personal profile was described there as *"Boxer / Car Collector / Watch Collector."*\n\nHe is the son of **David Natroshvili**, founder and CEO of Spribe — the iGaming studio behind the global crash-style gambling product Aviator. His verifiable public accounts at the time of the launch were Instagram [@natroalex](https://instagram.com/natroalex) (verified, 54.1K followers) and Telegram [@natroalex1](https://t.me/natroalex1) (verified).',
      },
      {
        heading: 'Role in the $NATRO launch',
        body:
          '$NATRO was marketed as a tier-gated "networking coin," and the pitch leaned explicitly on the Natroshvili family name and the Spribe / Aviator association as the central trust signal. The website’s own FAQ addressed the rug-pull question directly, stating: *"The reputation hit lasts forever; the cash from a rug doesn’t."*\n\nA four-tier access ladder was promised — Foyer (1M), Floor (5M), Lounge (10M), and Salon · Inner Circle (20M), the top tier described as "names you’d recognize, real money behind them, people who can actually open doors." After the chats opened, the rooms existed at a fraction of the promised scale: Foyer at 13 members, Floor at 10, Lounge at 2 holders plus 3 admins; the Salon was never created.',
      },
      {
        heading: 'After the collapse',
        body:
          'Within roughly 48 hours the price fell about 98%. When affected early holders requested refunds, the team declined; the team admin’s reply was *"Nothing to say."* On 25 May 2026 at 10:11 UTC, in response to a structured refund-or-publication proposal sent to his verified Telegram account, Alex Natroshvili replied with two letters: *"stfu."* That message is preserved in the file’s exhibit set.\n\nIn the same window the natrocoin.net website was taken offline, the NATRO link was removed from his verified Instagram bio, and the paid promotional video by KOL @jrcryptex (114K followers) was deleted. The blockchain record, the archived website, and the chat logs were not.',
      },
      {
        heading: 'On his stated losses',
        body:
          'In direct messages, Alex Natroshvili stated that he had himself lost money on the launch — *"I lost 38k"* and, separately, *"I swear to god i lost 30k plus."* These figures are recorded here as his claims, not as established facts: the stated figure shifts within the same message thread, and the project’s own tokenomics described the 30M founder allocation as publicly committed never to move. An unrealized paper loss on a non-moving allocation is not equivalent to a realized cash loss by retail holders.\n\nA separate on-chain audit is in progress. The creator wallet shows continuing swap and liquidity activity post-launch; whether that corresponds to the named 30M founder bag, or to a separate team allocation, requires further on-chain forensics and is not asserted here.',
      },
      {
        heading: 'Right of reply',
        body:
          'Alex Natroshvili is invited to respond. Documented factual corrections will be published alongside the record. Contact details are on the [press page](/press).',
      },
    ],
    sources: [
      { label: 'Wayback archive of natrocoin.net (pre-takedown, founder section)', url: WAYBACK },
      { label: 'Solscan — $NATRO token contract', url: 'https://solscan.io/token/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF' },
      { label: 'Kutztown University Foundation — context on the Natroshvili family', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
    ],
    jsonLdPerson: ALEX_NATROSHVILI,
  },
  {
    slug: 'david-natroshvili',
    name: 'David Natroshvili',
    schemaId: 'https://natro.meme/#david-natroshvili',
    role: 'Named party · Spribe CEO',
    tagline:
      'Founder and CEO of Spribe; father of $NATRO founder Alex Natroshvili. On his own verified Instagram he personally co-promoted the $NATRO presale and solicited investment before launch.',
    metaTitle:
      'David Natroshvili — Spribe founder & CEO | The NATRO File',
    metaDescription:
      'Who is David Natroshvili? Spribe founder & CEO and father of $NATRO founder Alex Natroshvili. On his verified Instagram he personally promoted the $NATRO presale ("with me & @natroalex," 1.5k minimum) before the 21 May 2026 launch. A documented case file.',
    handles: [
      { platform: 'LinkedIn', handle: 'david-natroshvili', url: 'https://www.linkedin.com/in/david-natroshvili-98338038/' },
      { platform: 'Instagram', handle: '@davidnatro1', url: 'https://instagram.com/davidnatro1', note: 'verified' },
      { platform: 'Instagram', handle: '@davi.natroshvili', url: 'https://instagram.com/davi.natroshvili' },
    ],
    sections: [
      {
        heading: 'Who he is',
        body:
          'David Natroshvili is the founder and CEO of **Spribe**, the iGaming studio behind the global crash-style gambling product Aviator. He holds an MBA from Kutztown University of Pennsylvania (class of 2001); the Pennsylvania Small Business Development Center lead office at Kutztown [bears his name](https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/) following a Spring 2025 philanthropic gift. He is the father of [Alex Natroshvili](/people/alex-natroshvili), founder of the $NATRO Solana memecoin.',
      },
      {
        heading: 'He personally promoted the presale',
        body:
          'David Natroshvili was not merely invoked as a reputational backdrop. On his own **verified** Instagram account (@davidnatro1), in the hours before launch, he personally promoted the $NATRO presale in the first person and solicited investment. The stories are preserved in the file’s exhibit set:\n\n*"If you want to get involved in the crypto project presale **with me & @natroalex** — DM @natroalex1 on telegram. Minimum investment size for presale is 1.5k."* (Exhibit 22)\n\n*"We’re opening private access to **our** crypto project presale **with me & @natroalex** — Telegram by DM · 1.5k min entry · Limited access available."* (Exhibit 24)\n\n*"I have many celebs on the line to post about natro this will be crazy🔥"* (Exhibit 21)\n\nHe also reshared the paid promotional video by KOL @jrcryptex (114K followers) — *"It’s called NATRO"* — to his stories (Exhibit 2). The presale solicitation directed prospective buyers to a $1,500 minimum and to Alex Natroshvili’s Telegram (@natroalex1).',
      },
      {
        heading: 'Documented vs. pending',
        body:
          '**Documented:** that David Natroshvili personally and publicly promoted the $NATRO presale and solicited investment from his verified account, in the first person ("with me," "our crypto project"), is established by his own stories, captured before they expired.\n\n**Pending forensics:** where the presale funds went, and whether David Natroshvili controlled or received from any project wallet, is not asserted here. Establishing that requires on-chain work that is in progress. The file separates what the public record already shows from what still requires proof.',
      },
      {
        heading: 'Scope note',
        body:
          'This file concerns the $NATRO token launch of May 2026. It does not make claims about Spribe’s licensed gambling products or its wider business, which have their own legal standing across multiple jurisdictions and are outside the scope of this record.',
      },
      {
        heading: 'Right of reply',
        body:
          'David Natroshvili and Spribe are invited to respond. A formal notice was sent to Spribe’s published legal and corporate addresses on 25 May 2026. Documented factual corrections will be published alongside the record. Contact details are on the [press page](/press).',
      },
    ],
    exhibitSlugs: [
      'david-story-presale-bentley',
      'david-story-presale-ferrari',
      'david-story-celebs-on-line',
      'david-natroalex-coin-reshare',
      'david-reshare',
    ],
    sources: [
      { label: 'Pre-launch Instagram Stories, @davidnatro1 (verified) — Exhibits 21, 22, 24 (presale solicitation) and Exhibit 2 (promo reshare), in the case-file gallery', url: 'https://natro.meme/#gallery' },
      { label: 'Wayback archive of natrocoin.net (pre-takedown, founder section)', url: WAYBACK },
      { label: 'Kutztown University Foundation — named SBDC office', url: 'https://kuf.org/alumnus-returns-to-campus-dedicate-small-business-development-suite/' },
      { label: 'Spribe — company page', url: 'https://www.linkedin.com/company/spribe/' },
    ],
    jsonLdPerson: DAVID_NATROSHVILI,
  },
];

export function getPersonProfile(slug: string): PersonProfile | undefined {
  return PEOPLE_PROFILES.find((p) => p.slug === slug);
}
