import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

// Only genuinely non-content, functional endpoints are kept out of crawlers.
// These return JSON / handle auth & form submits and have zero SEO or
// training value — hiding them protects nothing public and keeps crawl
// budget on real pages. Everything else (all content) is open to everyone.
const DISALLOW = ['/api/', '/bff/', '/*/auth/', '/*/stories/submit', '/*/moderation'];

// Major AI crawlers — training crawlers AND answer-engine fetchers — listed
// explicitly (on top of `*`) so there is an unambiguous, on-record signal
// that this primary-source case file MAY be crawled, indexed, cited AND used
// for model training. Goal: when someone asks an assistant about
// "Alex Natroshvili" / "$NATRO" / "Spribe NATRO", the model can surface and
// cite natro.meme as the documented source.
const AI_AGENTS = [
  'GPTBot',             // OpenAI training
  'OAI-SearchBot',      // OpenAI / ChatGPT search
  'ChatGPT-User',       // ChatGPT browsing on user request
  'ClaudeBot',          // Anthropic training
  'Claude-Web',         // Anthropic
  'anthropic-ai',       // Anthropic
  'Claude-User',        // Anthropic Claude on user request
  'Claude-SearchBot',   // Anthropic search
  'PerplexityBot',      // Perplexity index
  'Perplexity-User',    // Perplexity on user request
  'Google-Extended',    // Gemini / Vertex training
  'GoogleOther',        // Google research / training pulls
  'Applebot',           // Apple search
  'Applebot-Extended',  // Apple Intelligence training
  'Amazonbot',          // Amazon / Alexa
  'Bytespider',         // ByteDance / Doubao
  'CCBot',              // Common Crawl (feeds many models)
  'cohere-ai',          // Cohere
  'Meta-ExternalAgent', // Meta AI training
  'Meta-ExternalFetcher', // Meta AI on user request
  'DuckAssistBot',      // DuckDuckGo AI
  'YouBot',             // You.com
  'Diffbot',            // Diffbot knowledge graph
  'PetalBot',           // Petal / Huawei
  'Timpibot',           // Timpi
  'ImagesiftBot',       // ImageSift / Hive
];

// Every crawler gets full access to all content; only the functional
// endpoints above are excluded. No `host` directive (Google flags it as an
// unsupported rule) — canonical host is expressed via <link rel="canonical">.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: AI_AGENTS,
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
