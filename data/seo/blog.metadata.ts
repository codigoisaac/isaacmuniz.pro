import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import {
  buildOgTitle,
  buildCanonical,
  buildTwitterMeta,
  buildOgImageUrl,
} from "@/data/seo/seo-defaults";

const path = "/blog";
const title = "Blog";
const description =
  "Artigos técnicos sobre desenvolvimento web e mobile: React, Next.js, Node.js, TypeScript e boas práticas de programação.";

const ogTitle = buildOgTitle(title);
const ogImageUrl = buildOgImageUrl({ page: "blog" });
const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Blog — Isaac Muniz",
};

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
