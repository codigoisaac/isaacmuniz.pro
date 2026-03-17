import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

export const homeMetadata: Metadata = {
  description:
    "Desenvolvedor com 5 anos de experiência construindo sites, apps e sistemas para startups e empresas.",

  keywords: [
    ...siteMetadata.keywords,
    "criar site profissional",
    "desenvolvimento web sob medida",
    "app mobile",
    "desenvolvimento de aplicativos",
    "freelancer desenvolvedor",
    "contratar desenvolvedor",
  ],

  alternates: {
    canonical: siteMetadata.siteUrl,
  },

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    type: "website",
  },
};
