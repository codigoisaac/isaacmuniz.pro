import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import {
  baseKeywords,
  buildOgTitle,
  buildCanonical,
  buildTwitterMeta,
  buildOgImageUrl,
} from "@/data/seo/seo-defaults";

const path = "/portfolio";
const title = "Portfolio";
const description =
  "Portfolio de Isaac Muniz — projetos de desenvolvimento web, mobile e sistemas construídos com React, Next.js, Node.js e TypeScript.";

const ogTitle = buildOgTitle(title);
const ogImageUrl = buildOgImageUrl({ page: "portfolio" });
const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Portfólio — Isaac Muniz",
};

export const portfolioMetadata: Metadata = {
  title,
  description,
  keywords: [
    ...baseKeywords,
    "portfolio desenvolvedor",
    "projetos react",
    "projetos next.js",
    "projetos flutter",
    "projetos node.js",
    "projetos typescript",
    "trabalhos desenvolvedor web",
    "exemplos projetos fullstack",
    "projetos mobile flutter",
    "projetos open source",
  ],
  alternates: buildCanonical(path),
  openGraph: {
    title: ogTitle,
    description,
    url: `${siteMetadata.siteUrl}${path}`,
    type: "website",
    images: [ogImage],
  },
  twitter: {
    ...buildTwitterMeta(ogTitle, description),
    images: [ogImageUrl],
  },
};
