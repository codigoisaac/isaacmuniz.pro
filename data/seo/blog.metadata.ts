import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

const url = `${siteMetadata.siteUrl}/blog`;

export const blogMetadata: Metadata = {
  title: "Blog",

  description:
    "Artigos técnicos sobre desenvolvimento web e mobile: React, Next.js, Node.js, TypeScript, PHP, Laravel, Angular, Flutter e boas práticas de programação.",

  keywords: [
    "blog desenvolvimento web",
    "artigos react",
    "tutorial nextjs",
    "programação javascript typescript",
    "artigos php laravel",
    "dicas desenvolvedor",
    "blog programação brasil",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "Blog | Isaac Muniz",
    description:
      "Artigos técnicos sobre React, Next.js, Node.js, TypeScript, PHP, Laravel, Angular e mais.",
    url,
    type: "website",
  },
};
