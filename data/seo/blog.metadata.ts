import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import {
  buildOgTitle,
  buildCanonical,
  buildTwitterMeta,
  defaultOgImage,
} from "@/data/seo/seo-defaults";

const path = "/blog";
const title = "Blog";
const description =
  "Artigos técnicos sobre desenvolvimento web e mobile: React, Next.js, Node.js, TypeScript, PHP, Laravel, Angular, Flutter e boas práticas de programação.";

export const blogMetadata: Metadata = {
  title,
  description,
  keywords: [
    "blog programação",
    "artigos desenvolvimento web",
    "tutoriais react",
    "tutoriais next.js",
    "tutoriais node.js",
    "artigos typescript",
    "artigos php",
    "artigos laravel",
    "artigos angular",
    "artigos flutter",
    "dicas desenvolvedor",
    "boas práticas programação",
    "blog técnico brasil",
    "aprender programação",
    "desenvolvimento web brasil",
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
