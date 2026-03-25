// Responsabilidade: montar o objeto Metadata do Next.js para o layout raiz.
// Usa siteMetadata (dados factuais) + seo-defaults (copy de SEO).

import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import {
  seoTitle,
  seoDescription,
  baseKeywords,
  defaultOgImage,
} from "@/data/seo/seo-defaults";

export const globalMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: seoTitle,
    template: `%s | ${siteMetadata.authorName}`,
  },
  description: seoDescription,
  keywords: baseKeywords,
  authors: [{ name: siteMetadata.authorName, url: siteMetadata.siteUrl }],
  creator: siteMetadata.authorName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.authorName,
    title: seoTitle,
    description: seoDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [defaultOgImage.url],
    creator: `@${siteMetadata.socials.twitterHandle}`,
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  icons: {
    icon: "/favicons/favicon-dark.svg",
  },
};
