import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import {
  baseKeywords,
  buildOgTitle,
  buildCanonical,
  buildTwitterMeta,
  defaultOgImage,
} from "@/data/seo/seo-defaults";

const path = "/portfolio";
const title = "Portfolio";
const description =
  "Portfolio de Isaac Muniz — projetos de desenvolvimento web, mobile e sistemas construídos com React, Next.js, Flutter, Node.js e TypeScript.";

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
    title: buildOgTitle(title),
    description,
    url: `${siteMetadata.siteUrl}${path}`,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: buildTwitterMeta(buildOgTitle(title), description),
};
