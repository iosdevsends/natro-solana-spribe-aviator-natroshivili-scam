import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

// Paths kept out of every crawler (private/non-content surfaces).
const DISALLOW = ['/api/', '/bff/', '/*/auth/', '/*/stories/submit', '/*/moderation'];

// Major AI crawlers — both training crawlers and answer-engine fetchers —
// listed explicitly (in addition to `*`) so there is an unambiguous, on-record
// signal that this primary-source case file may be crawled, indexed and cited.
// Goal: when someone asks an assistant about "Alex Natroshvili" / "$NATRO" /
// "Spribe NATRO", the model can surface natro.meme as the documented source.
const AI_AGENTS = [
  'GPTBot',            // OpenAI training
  'OAI-SearchBot',     // OpenAI / ChatGPT search
  'ChatGPT-User',      // ChatGPT browsing on user request
  'ClaudeBot',         // Anthropic training
  'Claude-Web',        // Anthropic
  'anthropic-ai',      // Anthropic
  'Claude-User',       // Anthropic Claude on user request
  'PerplexityBot',     // Perplexity index
  'Perplexity-User',   // Perplexity on user request
  'Google-Extended',   // Gemini / Vertex training
  'Applebot-Extended', // Apple Intelligence
  'Amazonbot',         // Amazon / Alexa
  'Bytespider',        // ByteDance / Doubao
  'CCBot',             // Common Crawl (feeds many models)
  'cohere-ai',         // Cohere
  'Meta-ExternalAgent',// Meta AI
];

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
    host: siteUrl,
  };
}
