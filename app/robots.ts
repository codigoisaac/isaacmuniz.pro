import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Buscadores ───────────────────────────────────────────────────────
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },

      // ─── Redes sociais e geradores de preview ─────────────────────────────
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" }, // previews de link Meta
      { userAgent: "WhatsApp", allow: "/" },
      { userAgent: "Discordbot", allow: "/" },
      { userAgent: "TelegramBot", allow: "/" },
      { userAgent: "Slackbot", allow: "/" },
      { userAgent: "Slackbot-LinkExpanding", allow: "/" },

      // ─── AI search (visibilidade sem treinamento) ─────────────────────────
      { userAgent: "OAI-SearchBot", allow: "/" }, // aparece no ChatGPT Search
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },

      // ─── Treinamento de LLMs ──────────────────────────────────────────────
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      { userAgent: "Claude-User", disallow: "/" },
      { userAgent: "Claude-SearchBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "GoogleOther", disallow: "/" },
      { userAgent: "GoogleOther-Image", disallow: "/" },
      { userAgent: "GoogleOther-Video", disallow: "/" },
      { userAgent: "Google-CloudVertexBot", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "cohere-training-data-crawler", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "webzio-extended", disallow: "/" },
      { userAgent: "Ai2Bot", disallow: "/" },
      { userAgent: "Ai2Bot-Dolma", disallow: "/" },
      { userAgent: "ExaBot", disallow: "/" },
      { userAgent: "iaskspider", disallow: "/" },
      { userAgent: "firecrawlAgent", disallow: "/" },

      // ─── Scrapers comerciais de SEO ───────────────────────────────────────
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "BLEXBot", disallow: "/" },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  };
}
