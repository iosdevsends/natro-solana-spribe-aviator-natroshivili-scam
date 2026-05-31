import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { locales, type Locale } from '@/i18n/routing';
import { CeremonialMasthead } from '@/components/CeremonialMasthead';
import { AskAI } from '@/components/AskAI';
import { OnChainStateBlock } from '@/components/OnChainStateBlock';
import { HoldersTable } from '@/components/HoldersTable';
import { CreatorActivityLog } from '@/components/CreatorActivityLog';
import { DexScreenerEmbed } from '@/components/DexScreenerEmbed';
import { loadCaseFile } from '@/lib/case-file';
import { buildAlternates, absoluteUrl, ogLocale, ogLocaleAlternates, clampTitle, clampDescription, OG_IMAGE } from '@/lib/seo';
import { fetchTopHolders, fetchCreatorActivity, ONCHAIN_CONSTANTS } from '@/lib/onchain';

// Refresh the page in the edge cache every hour so on-chain values stay fresh.
export const revalidate = 3600;

// Third-party reference: RugCheck's automated insider-network analysis (BETA).
// Reproduced from RugCheck's public report as a documented snapshot, NOT
// re-derived here. Cluster shares OVERLAP and are not additive — the same
// tokens can move through more than one insider network, which is why the
// percentages sum to well over 100%. These are algorithmic heuristics:
// suggestive of coordinated distribution, not proof of wrongdoing on their own.
const RUGCHECK_URL =
  'https://rugcheck.xyz/tokens/9TmTw3B4WVzfZY15Cf28uK3vk32QUixCYcM9W1RrtdiF';
const RUGCHECK_SNAPSHOT = '31 May 2026';
const INSIDER_CLUSTERS: Array<{ name: string; accounts: number; tokens: string; share: string }> = [
  { name: 'dazzling-sapphire-beaver', accounts: 170, tokens: '369M', share: '37%' },
  { name: 'dazzling-garnet-beaver', accounts: 136, tokens: '363M', share: '36%' },
  { name: 'lazy-coffee-newt', accounts: 48, tokens: '228M', share: '23%' },
  { name: 'bitter-slate-squirrel', accounts: 174, tokens: '208M', share: '21%' },
  { name: 'little-cinnamon-mouse', accounts: 37, tokens: '118M', share: '12%' },
  { name: 'elastic-teal-ram', accounts: 62, tokens: '115M', share: '12%' },
];

const COPY = {
  en: {
    h1: 'On-chain verification',
    lead:
      'Every claim in the case file that touches the blockchain is verifiable independently. This page renders the relevant values fetched server-side from public, no-auth APIs at the time shown. Click any address to verify on Solscan or Pump.fun directly.',
    methodology: 'Methodology',
    methodologyBody:
      'Token state and holder data are pulled from the Solana mainnet public RPC (`api.mainnet-beta.solana.com`). Market data is pulled from Pump.fun\'s public API (`frontend-api-v3.pump.fun`). Both are refreshed at most once per hour via Next.js ISR. No private keys, no paid API tier, no third-party aggregator that could shape the numbers.',
    sectionState: 'Token state',
    sectionHolders: 'Holder distribution',
    sectionInsider: 'Insider clustering',
    sectionCreator: 'Creator wallet activity',
    sectionChart: 'Live market chart',
    note: 'If any block shows "API temporarily unavailable", the public source briefly rate-limited us — refresh the page in a few minutes. The case file\'s factual claims do not depend on this live verification rendering; the underlying blockchain state is independently checkable at any time via the linked addresses.',
    insiderLead:
      'RugCheck — an independent, automated Solana token scanner — flags large token movements between connected wallets it groups into "insider networks". The figures below are reproduced verbatim from RugCheck\'s public report for the token; they are algorithmic heuristics (BETA), suggestive of coordinated distribution rather than organic holding, and are not on their own proof of wrongdoing. On-chain forensic attribution is in progress.',
    insiderColNetwork: 'Insider network',
    insiderColAccounts: 'Accounts',
    insiderColTokens: 'Moved',
    insiderColShare: 'of supply',
    insiderOverlap: 'Cluster shares overlap and are not additive — the same tokens can move through more than one network, so the percentages sum to more than 100%. RugCheck also marks the token\'s "Launch Insights" (BETA) as "Anomaly Found".',
    insiderCaveat:
      'Two points on the record. First: RugCheck\'s aggregate "risk" score for the token reads low — but that score measures only technical rug vectors (mint authority revoked, liquidity-pool locked), not the marketing conduct or refund refusal documented elsewhere in this file; those are separate questions. Second: RugCheck still shows the creator wallet holding ~30M NATRO (3.0% of supply), consistent with the "founder bag" the project publicly committed to never moving. This file does not claim that bag has moved. Whether the clustered transfers above correspond to the named founder allocation or to separate team / insider allocations requires further on-chain forensics.',
    insiderSource: 'View the live RugCheck report',
  },
  ru: {
    h1: 'On-chain верификация',
    lead:
      'Каждое утверждение в файле, касающееся блокчейна, проверяемо независимо. На этой странице рендерятся релевантные значения, забранные с публичных API без авторизации на момент, указанный в каждом блоке. Нажми на любой адрес — откроется Solscan или Pump.fun, чтобы убедиться напрямую.',
    methodology: 'Методология',
    methodologyBody:
      'Состояние токена и данные холдеров берутся с публичной RPC Solana mainnet (`api.mainnet-beta.solana.com`). Рыночные данные — с публичного API Pump.fun (`frontend-api-v3.pump.fun`). Оба обновляются не чаще раза в час через Next.js ISR. Никаких приватных ключей, никакого платного API-тира, никаких сторонних агрегаторов, которые могли бы повлиять на цифры.',
    sectionState: 'Состояние токена',
    sectionHolders: 'Распределение холдеров',
    sectionInsider: 'Кластеры инсайдеров',
    sectionCreator: 'Активность creator-кошелька',
    sectionChart: 'Живой график рынка',
    note: 'Если какой-то блок показывает «API temporarily unavailable» — публичный источник кратковременно поджался по rate-limit; обнови страницу через несколько минут. Фактические утверждения файла не зависят от рендеринга этой live-верификации; состояние блокчейна независимо проверяемо в любой момент через указанные ссылки.',
    insiderLead:
      'RugCheck — независимый автоматический сканер токенов Solana — отмечает крупные перемещения токенов между связанными кошельками, объединяя их в «сети инсайдеров». Цифры ниже воспроизведены дословно из публичного отчёта RugCheck по токену; это алгоритмические эвристики (BETA) — они указывают на скоординированное распределение, а не на органическое владение, и сами по себе не являются доказательством нарушения. On-chain атрибуция в процессе.',
    insiderColNetwork: 'Сеть инсайдеров',
    insiderColAccounts: 'Аккаунтов',
    insiderColTokens: 'Перемещено',
    insiderColShare: 'от supply',
    insiderOverlap: 'Доли кластеров пересекаются и не суммируются — одни и те же токены могут проходить через несколько сетей, поэтому проценты в сумме дают больше 100%. RugCheck также помечает «Launch Insights» (BETA) токена как «Anomaly Found».',
    insiderCaveat:
      'Два уточнения — на запись. Первое: совокупный «risk»-балл RugCheck по токену низкий, но этот балл измеряет только технические векторы раг-пула (отозвана ли mint authority, залочен ли пул ликвидности), а не маркетинговое поведение и не отказ в рефанде, задокументированные в других разделах файла; это отдельные вопросы. Второе: RugCheck по-прежнему показывает ~30M NATRO (3.0% supply) на creator-кошельке — что согласуется с «founder bag», который проект публично обязался не двигать. Файл не утверждает, что этот bag сдвинулся. Соответствуют ли кластерные переводы выше именованной аллокации основателя или отдельным командным / инсайдерским аллокациям — требует дальнейшей on-chain форензики.',
    insiderSource: 'Открыть живой отчёт RugCheck',
  },
  uk: {
    h1: 'On-chain верифікація',
    lead:
      'Кожне твердження у справі, що стосується блокчейну, можна перевірити незалежно. На цій сторінці рендеряться релевантні значення, отримані на сервері з публічних API без авторизації на момент, зазначений у кожному блоці. Натисни на будь-яку адресу — відкриється Solscan або Pump.fun, щоб переконатися напряму.',
    methodology: 'Методологія',
    methodologyBody:
      'Стан токена й дані холдерів беруться з публічної RPC Solana mainnet (`api.mainnet-beta.solana.com`). Ринкові дані — з публічного API Pump.fun (`frontend-api-v3.pump.fun`). Обидва оновлюються не частіше ніж раз на годину через Next.js ISR. Жодних приватних ключів, жодного платного API-тиру, жодних сторонніх агрегаторів, які могли б вплинути на цифри.',
    sectionState: 'Стан токена',
    sectionHolders: 'Розподіл холдерів',
    sectionInsider: 'Кластери інсайдерів',
    sectionCreator: 'Активність creator-гаманця',
    sectionChart: 'Живий графік ринку',
    note: 'Якщо якийсь блок показує «API temporarily unavailable» — публічне джерело короткочасно обмежило нас за rate-limit; онови сторінку за кілька хвилин. Фактичні твердження справи не залежать від рендерингу цієї live-верифікації; стан блокчейну незалежно перевіряється будь-якої миті через зазначені посилання.',
    insiderLead:
      'RugCheck — незалежний автоматичний сканер токенів Solana — позначає великі переміщення токенів між пов’язаними гаманцями, об’єднуючи їх у «мережі інсайдерів». Цифри нижче відтворені дослівно з публічного звіту RugCheck по токену; це алгоритмічні евристики (BETA) — вони вказують на скоординований розподіл, а не на органічне володіння, і самі по собі не є доказом порушення. On-chain атрибуція триває.',
    insiderColNetwork: 'Мережа інсайдерів',
    insiderColAccounts: 'Акаунтів',
    insiderColTokens: 'Переміщено',
    insiderColShare: 'від supply',
    insiderOverlap: 'Частки кластерів перетинаються й не сумуються — одні й ті самі токени можуть проходити через кілька мереж, тому відсотки в сумі дають понад 100%. RugCheck також позначає «Launch Insights» (BETA) токена як «Anomaly Found».',
    insiderCaveat:
      'Два уточнення — на запис. Перше: сукупний «risk»-бал RugCheck по токену низький, але цей бал вимірює лише технічні вектори раг-пулу (чи відкликана mint authority, чи залочений пул ліквідності), а не маркетингову поведінку й не відмову в рефанді, задокументовані в інших розділах справи; це окремі питання. Друге: RugCheck досі показує ~30M NATRO (3.0% supply) на creator-гаманці — що узгоджується з «founder bag», який проєкт публічно зобов’язався не рухати. Справа не стверджує, що цей bag зрушив. Чи відповідають кластерні перекази вище іменованій алокації засновника, чи окремим командним / інсайдерським алокаціям — потребує подальшої on-chain форензики.',
    insiderSource: 'Відкрити живий звіт RugCheck',
  },
  ka: {
    h1: 'On-chain ვერიფიკაცია',
    lead:
      'საქმეში ყველა მტკიცება, რომელიც ბლოკჩეინს ეხება, დამოუკიდებლად შემოწმებადია. ამ გვერდზე ჩანს რელევანტური მონაცემები, რომლებიც სერვერის მხარეს მოპოვებულია საჯარო, ავტორიზაციის გარეშე API-დან მითითებულ დროს. დააჭირე ნებისმიერ მისამართს — გაიხსნება Solscan ან Pump.fun პირდაპირი შემოწმებისთვის.',
    methodology: 'მეთოდოლოგია',
    methodologyBody:
      'ტოკენის მდგომარეობა და მფლობელთა მონაცემები მოპოვებულია Solana mainnet-ის საჯარო RPC-დან (`api.mainnet-beta.solana.com`). საბაზრო მონაცემები — Pump.fun-ის საჯარო API-დან (`frontend-api-v3.pump.fun`). ორივე განახლდება მაქსიმუმ საათში ერთხელ Next.js ISR-ის მეშვეობით. არანაირი პირადი გასაღები, ფასიანი API, ან მესამე მხარის აგრეგატორი, რომელსაც ციფრებზე გავლენის მოხდენა შეეძლო.',
    sectionState: 'ტოკენის მდგომარეობა',
    sectionHolders: 'მფლობელთა განაწილება',
    sectionInsider: 'ინსაიდერული კლასტერები',
    sectionCreator: 'Creator-საფულის აქტივობა',
    sectionChart: 'ცოცხალი საბაზრო გრაფიკი',
    note: 'თუ რომელიმე ბლოკი აჩვენებს «API temporarily unavailable» — საჯარო წყარომ მოკლედ შეგვიზღუდა rate-limit-ით; განაახლე გვერდი რამდენიმე წუთში. საქმის ფაქტობრივი მტკიცებები არ არის დამოკიდებული ამ live-ვერიფიკაციის რენდერინგზე; ბლოკჩეინის მდგომარეობა ნებისმიერ დროს დამოუკიდებლად შემოწმებადია მითითებული ბმულებით.',
    insiderLead:
      'RugCheck — Solana-ს ტოკენების დამოუკიდებელი ავტომატური სკანერი — აღნიშნავს ტოკენების დიდ გადატანებს დაკავშირებულ საფულეებს შორის, რომლებსაც «ინსაიდერულ ქსელებად» აჯგუფებს. ქვემოთ მოცემული ციფრები სიტყვასიტყვით არის აღებული RugCheck-ის საჯარო ანგარიშიდან; ეს ალგორითმული ევრისტიკაა (BETA) — ისინი მიუთითებენ კოორდინირებულ განაწილებაზე და არა ორგანულ ფლობაზე, და თავისთავად დარღვევის მტკიცებულება არ არის. On-chain ატრიბუცია მიმდინარეობს.',
    insiderColNetwork: 'ინსაიდერული ქსელი',
    insiderColAccounts: 'ანგარიში',
    insiderColTokens: 'გადატანილი',
    insiderColShare: 'supply-დან',
    insiderOverlap: 'კლასტერების წილები იკვეთება და არ ჯამდება — ერთი და იგივე ტოკენები შეიძლება გაიაროს რამდენიმე ქსელში, ამიტომ პროცენტები ჯამში 100%-ზე მეტს იძლევა. RugCheck ასევე აღნიშნავს ტოკენის «Launch Insights»-ს (BETA) როგორც «Anomaly Found».',
    insiderCaveat:
      'ორი დაზუსტება — ოფიციალურად. პირველი: RugCheck-ის ჯამური «risk»-ქულა ტოკენისთვის დაბალია, მაგრამ ეს ქულა ზომავს მხოლოდ ტექნიკურ რაგ-ვექტორებს (გაუქმებულია თუ არა mint authority, ჩაკეტილია თუ არა ლიკვიდურობის პული), და არა მარკეტინგულ ქცევას ან რეფანდზე უარს, რომლებიც საქმის სხვა ნაწილებშია დოკუმენტირებული; ეს ცალკე საკითხებია. მეორე: RugCheck კვლავ აჩვენებს ~30M NATRO-ს (3.0% supply) creator-საფულეზე — რაც შეესაბამება «founder bag»-ს, რომლის გადაუადგილებლობაც პროექტმა საჯაროდ აიღო ვალდებულებად. საქმე არ ამტკიცებს, რომ ეს bag გადაადგილდა. შეესაბამება თუ არა ზემოთ მოცემული კლასტერული გადარიცხვები დამფუძნებლის დასახელებულ ალოკაციას თუ ცალკე გუნდურ / ინსაიდერულ ალოკაციებს — საჭიროებს დამატებით on-chain ფორენზიკას.',
    insiderSource: 'RugCheck-ის ცოცხალი ანგარიშის ნახვა',
  },
  fr: {
    h1: 'Vérification on-chain',
    lead:
      'Chaque affirmation du dossier touchant à la blockchain est vérifiable de manière indépendante. Cette page affiche les valeurs pertinentes récupérées côté serveur depuis des API publiques sans authentification, à l’heure indiquée dans chaque bloc. Cliquez sur n’importe quelle adresse pour vérifier directement sur Solscan ou Pump.fun.',
    methodology: 'Méthodologie',
    methodologyBody:
      'L’état du token et les données des détenteurs proviennent du RPC public de Solana mainnet (`api.mainnet-beta.solana.com`). Les données de marché proviennent de l’API publique de Pump.fun (`frontend-api-v3.pump.fun`). Les deux sont actualisées au plus une fois par heure via l’ISR de Next.js. Aucune clé privée, aucun palier d’API payant, aucun agrégateur tiers susceptible d’influencer les chiffres.',
    sectionState: 'État du token',
    sectionHolders: 'Répartition des détenteurs',
    sectionInsider: 'Regroupements d’initiés',
    sectionCreator: 'Activité du portefeuille créateur',
    sectionChart: 'Graphique de marché en direct',
    note: 'Si un bloc affiche « API temporarily unavailable », la source publique nous a brièvement limités (rate-limit) — actualisez la page dans quelques minutes. Les affirmations factuelles du dossier ne dépendent pas du rendu de cette vérification en direct ; l’état de la blockchain est vérifiable de façon indépendante à tout moment via les adresses liées.',
    insiderLead:
      'RugCheck — un scanner de tokens Solana indépendant et automatisé — signale les mouvements importants de tokens entre portefeuilles liés, qu’il regroupe en « réseaux d’initiés ». Les chiffres ci-dessous sont reproduits mot pour mot depuis le rapport public de RugCheck pour le token ; ce sont des heuristiques algorithmiques (BETA) — elles suggèrent une distribution coordonnée plutôt qu’une détention organique, et ne constituent pas à elles seules une preuve de faute. L’attribution forensique on-chain est en cours.',
    insiderColNetwork: 'Réseau d’initiés',
    insiderColAccounts: 'Comptes',
    insiderColTokens: 'Déplacé',
    insiderColShare: 'du supply',
    insiderOverlap: 'Les parts des regroupements se chevauchent et ne s’additionnent pas — les mêmes tokens peuvent transiter par plusieurs réseaux, c’est pourquoi le total des pourcentages dépasse 100 %. RugCheck marque également les « Launch Insights » (BETA) du token comme « Anomaly Found ».',
    insiderCaveat:
      'Deux précisions, pour le compte rendu. Premièrement : le score de « risk » global de RugCheck pour le token est faible — mais ce score ne mesure que les vecteurs techniques de rug pull (autorité de mint révoquée, pool de liquidité verrouillé), et non la conduite marketing ni le refus de remboursement documentés ailleurs dans ce dossier ; ce sont des questions distinctes. Deuxièmement : RugCheck montre toujours le portefeuille créateur détenant ~30M NATRO (3,0 % du supply), ce qui est cohérent avec le « founder bag » que le projet s’est publiquement engagé à ne jamais déplacer. Ce dossier n’affirme pas que ce bag a bougé. Savoir si les transferts groupés ci-dessus correspondent à l’allocation nommée du fondateur ou à des allocations distinctes d’équipe / d’initiés nécessite davantage de forensique on-chain.',
    insiderSource: 'Voir le rapport RugCheck en direct',
  },
  de: {
    h1: 'On-Chain-Verifizierung',
    lead:
      'Jede Aussage in der Akte, die die Blockchain betrifft, ist unabhängig überprüfbar. Diese Seite rendert die relevanten Werte, die serverseitig zum angezeigten Zeitpunkt aus öffentlichen APIs ohne Authentifizierung abgerufen wurden. Klicken Sie auf eine beliebige Adresse, um direkt auf Solscan oder Pump.fun zu prüfen.',
    methodology: 'Methodik',
    methodologyBody:
      'Token-Status und Holder-Daten stammen vom öffentlichen RPC der Solana Mainnet (`api.mainnet-beta.solana.com`). Marktdaten stammen von der öffentlichen API von Pump.fun (`frontend-api-v3.pump.fun`). Beide werden höchstens einmal pro Stunde via Next.js ISR aktualisiert. Keine privaten Schlüssel, keine kostenpflichtige API-Stufe, kein Drittanbieter-Aggregator, der die Zahlen beeinflussen könnte.',
    sectionState: 'Token-Status',
    sectionHolders: 'Holder-Verteilung',
    sectionInsider: 'Insider-Cluster',
    sectionCreator: 'Aktivität der Creator-Wallet',
    sectionChart: 'Live-Marktchart',
    note: 'Wenn ein Block „API temporarily unavailable“ anzeigt, hat die öffentliche Quelle uns kurzzeitig per Rate-Limit gedrosselt — laden Sie die Seite in einigen Minuten neu. Die faktischen Aussagen der Akte hängen nicht vom Rendern dieser Live-Verifizierung ab; der Blockchain-Status ist jederzeit unabhängig über die verlinkten Adressen prüfbar.',
    insiderLead:
      'RugCheck — ein unabhängiger, automatisierter Solana-Token-Scanner — kennzeichnet große Token-Bewegungen zwischen verbundenen Wallets, die es zu „Insider-Netzwerken“ gruppiert. Die folgenden Zahlen sind wortgetreu aus dem öffentlichen RugCheck-Bericht zum Token übernommen; es handelt sich um algorithmische Heuristiken (BETA) — sie deuten auf eine koordinierte Verteilung statt organischen Besitz hin und sind für sich genommen kein Beweis für Fehlverhalten. Die On-Chain-forensische Zuordnung läuft.',
    insiderColNetwork: 'Insider-Netzwerk',
    insiderColAccounts: 'Konten',
    insiderColTokens: 'Bewegt',
    insiderColShare: 'vom Supply',
    insiderOverlap: 'Die Cluster-Anteile überschneiden sich und sind nicht additiv — dieselben Token können durch mehrere Netzwerke laufen, daher ergeben die Prozentwerte in Summe über 100 %. RugCheck markiert zudem die „Launch Insights“ (BETA) des Tokens als „Anomaly Found“.',
    insiderCaveat:
      'Zwei Klarstellungen, fürs Protokoll. Erstens: Der aggregierte „risk“-Score von RugCheck für den Token ist niedrig — dieser Score misst jedoch nur technische Rug-Vektoren (Mint-Authority widerrufen, Liquiditätspool gesperrt), nicht das Marketing-Verhalten oder die andernorts in dieser Akte dokumentierte Rückerstattungsverweigerung; das sind separate Fragen. Zweitens: RugCheck zeigt die Creator-Wallet weiterhin mit ~30M NATRO (3,0 % des Supply) — im Einklang mit dem „Founder Bag“, den das Projekt öffentlich nie zu bewegen zugesagt hat. Diese Akte behauptet nicht, dass dieser Bag bewegt wurde. Ob die oben gruppierten Transfers der genannten Gründer-Allokation oder separaten Team-/Insider-Allokationen entsprechen, erfordert weitere On-Chain-Forensik.',
    insiderSource: 'Den Live-RugCheck-Bericht ansehen',
  },
  es: {
    h1: 'Verificación on-chain',
    lead:
      'Toda afirmación del expediente que toque la blockchain es verificable de forma independiente. Esta página renderiza los valores relevantes obtenidos del lado del servidor desde APIs públicas sin autenticación, en el momento indicado en cada bloque. Haz clic en cualquier dirección para verificar directamente en Solscan o Pump.fun.',
    methodology: 'Metodología',
    methodologyBody:
      'El estado del token y los datos de holders se obtienen del RPC público de Solana mainnet (`api.mainnet-beta.solana.com`). Los datos de mercado provienen de la API pública de Pump.fun (`frontend-api-v3.pump.fun`). Ambos se actualizan como máximo una vez por hora mediante ISR de Next.js. Sin claves privadas, sin nivel de API de pago, sin agregadores de terceros que pudieran moldear las cifras.',
    sectionState: 'Estado del token',
    sectionHolders: 'Distribución de holders',
    sectionInsider: 'Agrupaciones de insiders',
    sectionCreator: 'Actividad del wallet creador',
    sectionChart: 'Gráfico de mercado en vivo',
    note: 'Si algún bloque muestra «API temporarily unavailable», la fuente pública nos limitó brevemente (rate-limit) — actualiza la página en unos minutos. Las afirmaciones factuales del expediente no dependen del renderizado de esta verificación en vivo; el estado de la blockchain es verificable de forma independiente en cualquier momento mediante las direcciones enlazadas.',
    insiderLead:
      'RugCheck — un escáner independiente y automatizado de tokens de Solana — señala grandes movimientos de tokens entre wallets conectados que agrupa en «redes de insiders». Las cifras de abajo se reproducen textualmente del informe público de RugCheck para el token; son heurísticas algorítmicas (BETA) — sugieren una distribución coordinada en lugar de tenencia orgánica, y por sí solas no constituyen prueba de irregularidad. La atribución forense on-chain está en curso.',
    insiderColNetwork: 'Red de insiders',
    insiderColAccounts: 'Cuentas',
    insiderColTokens: 'Movido',
    insiderColShare: 'del supply',
    insiderOverlap: 'Las cuotas de los clústeres se solapan y no son aditivas — los mismos tokens pueden pasar por más de una red, por lo que los porcentajes suman más del 100 %. RugCheck también marca los «Launch Insights» (BETA) del token como «Anomaly Found».',
    insiderCaveat:
      'Dos precisiones, para que conste. Primero: la puntuación agregada de «risk» de RugCheck para el token es baja — pero esa puntuación solo mide vectores técnicos de rug pull (autoridad de mint revocada, pool de liquidez bloqueado), no la conducta de marketing ni la negativa de reembolso documentadas en otras partes de este expediente; son cuestiones distintas. Segundo: RugCheck sigue mostrando el wallet creador con ~30M NATRO (3,0 % del supply), coherente con el «founder bag» que el proyecto se comprometió públicamente a no mover nunca. Este expediente no afirma que ese bag se haya movido. Si las transferencias agrupadas anteriores corresponden a la asignación nombrada del fundador o a asignaciones separadas de equipo / insiders requiere más análisis forense on-chain.',
    insiderSource: 'Ver el informe en vivo de RugCheck',
  },
  ar: {
    h1: 'التحقق على السلسلة (on-chain)',
    lead:
      'كل ادعاء في الملف يتعلق بالبلوكشين قابل للتحقق بشكل مستقل. تعرض هذه الصفحة القيم ذات الصلة المجلوبة من جهة الخادم من واجهات برمجية عامة بلا مصادقة، في الوقت المبيّن في كل كتلة. انقر على أي عنوان للتحقق مباشرة عبر Solscan أو Pump.fun.',
    methodology: 'المنهجية',
    methodologyBody:
      'تُجلب حالة التوكن وبيانات الحائزين من RPC العام لشبكة Solana mainnet (`api.mainnet-beta.solana.com`). وتُجلب بيانات السوق من الواجهة البرمجية العامة لـ Pump.fun (`frontend-api-v3.pump.fun`). يُحدَّث كلاهما مرة واحدة في الساعة على الأكثر عبر ISR في Next.js. لا مفاتيح خاصة، ولا مستوى واجهة برمجية مدفوع، ولا مُجمِّع طرف ثالث يمكن أن يشكّل الأرقام.',
    sectionState: 'حالة التوكن',
    sectionHolders: 'توزيع الحائزين',
    sectionInsider: 'تجمّعات المطّلعين',
    sectionCreator: 'نشاط محفظة المُنشئ',
    sectionChart: 'مخطط السوق المباشر',
    note: 'إذا أظهرت أي كتلة «API temporarily unavailable»، فإن المصدر العام قيّدنا مؤقتًا (rate-limit) — أعد تحميل الصفحة بعد بضع دقائق. لا تعتمد الادعاءات الواقعية في الملف على عرض هذا التحقق المباشر؛ فحالة البلوكشين قابلة للتحقق بشكل مستقل في أي وقت عبر العناوين المرتبطة.',
    insiderLead:
      'RugCheck — ماسح مستقل وآلي لتوكنات Solana — يرصد التحركات الكبيرة للتوكنات بين المحافظ المرتبطة التي يجمّعها في «شبكات مطّلعين». الأرقام أدناه منقولة حرفيًا من التقرير العام لـ RugCheck حول التوكن؛ وهي استدلالات خوارزمية (BETA) — تشير إلى توزيع منسّق لا إلى حيازة عضوية، وهي بمفردها ليست دليلاً على مخالفة. الإسناد الجنائي على السلسلة قيد التنفيذ.',
    insiderColNetwork: 'شبكة المطّلعين',
    insiderColAccounts: 'حسابات',
    insiderColTokens: 'مُحوَّل',
    insiderColShare: 'من المعروض',
    insiderOverlap: 'تتداخل حصص التجمّعات وليست قابلة للجمع — يمكن للتوكنات نفسها أن تمر عبر أكثر من شبكة، لذا تتجاوز النسب في مجموعها 100%. كما يصنّف RugCheck «Launch Insights» (BETA) للتوكن على أنها «Anomaly Found».',
    insiderCaveat:
      'نقطتان للتسجيل. أولاً: درجة «risk» الإجمالية من RugCheck للتوكن منخفضة — لكن هذه الدرجة تقيس فقط النواقل التقنية للاحتيال (إلغاء صلاحية الـ mint، قفل مجمّع السيولة)، لا السلوك التسويقي ولا رفض الاسترداد الموثّقين في مواضع أخرى من هذا الملف؛ وهي مسائل منفصلة. ثانيًا: لا يزال RugCheck يُظهر محفظة المُنشئ تحوي نحو 30M NATRO (3.0% من المعروض)، بما يتسق مع «founder bag» الذي تعهّد المشروع علنًا بعدم تحريكه أبدًا. لا يدّعي هذا الملف أن هذه الحصة قد تحرّكت. أما إن كانت التحويلات المُجمَّعة أعلاه تخص حصة المؤسّس المُسمّاة أم حصص فريق / مطّلعين منفصلة، فذلك يتطلب مزيدًا من التحليل الجنائي على السلسلة.',
    insiderSource: 'عرض تقرير RugCheck المباشر',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const copy = COPY[loc as keyof typeof COPY] || COPY.en;
  const title = clampTitle(`${copy.h1} — The NATRO File`);
  return {
    title,
    description: clampDescription(copy.lead.slice(0, 200)),
    alternates: buildAlternates(loc, '/on-chain'),
    openGraph: {
      title,
      description: copy.lead.slice(0, 200),
      images: [OG_IMAGE],
      type: 'article',
      url: absoluteUrl(loc, '/on-chain'),
      siteName: 'The NATRO File',
      locale: ogLocale(loc),
      alternateLocale: ogLocaleAlternates(loc),
    },
    twitter: { card: 'summary_large_image', title, images: [OG_IMAGE.url] },
  };
}

export default async function OnChainPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const loc = locale as Locale;
  const copy = COPY[loc as keyof typeof COPY] || COPY.en;

  const bundle = await loadCaseFile(loc);
  const ui = bundle.config.uiStrings || {};

  // The state block fetches internally — but for the dashboard view we want
  // separate Holders + Creator widgets, so fetch those in parallel here.
  const [holders, creator] = await Promise.all([
    fetchTopHolders(),
    fetchCreatorActivity(),
  ]);

  return (
    <>
      <CeremonialMasthead
        locale={loc}
        tagline={bundle.config.tagline}
        uiStrings={ui}
        exhibitCount={bundle.exhibits.length}
        languageCount={locales.length}
        compact
      />
      <main
        className="relative z-[2] mx-auto"
        style={{ maxWidth: '900px', padding: 'clamp(20px, 4vw, 60px) clamp(16px, 5vw, 56px) 120px' }}
      >
        <div className="kicker mb-3">§ On-chain</div>
        <h1 className="serif text-[28px] sm:text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight">
          {copy.h1}
        </h1>
        <p className="mt-4 serif italic text-lg text-[var(--color-ink-soft)] max-w-[720px]">{copy.lead}</p>
        <hr className="rule-divider-strong" />

        <AskAI />

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionState}</h2>
          <OnChainStateBlock />
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionHolders}</h2>
          <HoldersTable data={holders} />
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionInsider}</h2>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)] max-w-[720px] mb-4">
            {copy.insiderLead}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mono text-[13px]">
              <thead>
                <tr className="border-b border-[var(--color-ink)] text-[var(--color-ink-faint)] uppercase tracking-wider text-[10px]">
                  <th className="text-left py-2 pr-3 font-normal">{copy.insiderColNetwork}</th>
                  <th className="text-right py-2 px-3 font-normal">{copy.insiderColAccounts}</th>
                  <th className="text-right py-2 px-3 font-normal">{copy.insiderColTokens}</th>
                  <th className="text-right py-2 pl-3 font-normal">{copy.insiderColShare}</th>
                </tr>
              </thead>
              <tbody>
                {INSIDER_CLUSTERS.map((c) => (
                  <tr key={c.name} className="border-b border-[var(--color-rule-soft)]">
                    <td className="text-left py-2 pr-3 break-all">{c.name}</td>
                    <td className="text-right py-2 px-3">{c.accounts}</td>
                    <td className="text-right py-2 px-3">{c.tokens}</td>
                    <td className="text-right py-2 pl-3 text-[var(--color-accent)]">{c.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sans text-xs leading-relaxed text-[var(--color-ink-faint)] mt-3 italic">
            {copy.insiderOverlap}
          </p>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)] mt-4 border-l-2 border-[var(--color-rule)] pl-4">
            {copy.insiderCaveat}
          </p>
          <p className="mt-4">
            <a
              href={RUGCHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-[var(--color-accent-soft)]"
            >
              {copy.insiderSource} ↗
            </a>
            <span className="mono text-[10px] text-[var(--color-ink-faint)] ml-2">
              · {RUGCHECK_SNAPSHOT}
            </span>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionCreator}</h2>
          <CreatorActivityLog data={creator} />
        </section>

        <section className="mb-10">
          <h2 className="kicker mb-3">§ {copy.sectionChart}</h2>
          <DexScreenerEmbed pairAddress={ONCHAIN_CONSTANTS.pumpSwapPool} />
        </section>

        <section className="mt-12 border-t border-[var(--color-rule)] pt-6">
          <h2 className="kicker mb-3">{copy.methodology}</h2>
          <p className="sans text-sm leading-relaxed text-[var(--color-ink-soft)]">{copy.methodologyBody}</p>
          <p className="sans text-xs leading-relaxed text-[var(--color-ink-faint)] mt-3 italic">{copy.note}</p>
        </section>
      </main>
    </>
  );
}
