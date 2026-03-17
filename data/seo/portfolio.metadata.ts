// data/seo/portfolio.metadata.ts

import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

const url = `${siteMetadata.siteUrl}/portfolio`;

export const portfolioMetadata: Metadata = {
  title: "Portfolio",

  description:
    "Portfolio de projetos de Isaac Muniz — aplicativos web, sistemas, apps mobile e extensões para VS Code, desenvolvidos com React, Next.js, Flutter, Node.js e TypeScript.",

  keywords: [
    "portfolio desenvolvedor",
    "projetos react",
    "projetos nextjs",
    "projetos flutter",
    "exemplos trabalhos web developer",
    "projetos fullstack",
    "projetos typescript",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: "Portfolio | Isaac Muniz",
    description:
      "Projetos de desenvolvimento web e mobile — React, Next.js, Flutter, Node.js e mais.",
    url,
    type: "website",
  },
};
