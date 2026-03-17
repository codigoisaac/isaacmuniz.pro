import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";
import {
  seoTitle,
  seoDescription,
  baseKeywords,
  buildOgTitle,
  defaultOgImage,
} from "@/data/seo/seo-defaults";

export const homeMetadata: Metadata = {
  // A home não precisa de title próprio — usa o default do layout,
  // que já é o seoTitle. Definir aqui causaria duplicação no template.
  description: seoDescription,
  keywords: [
    ...baseKeywords,
    "portfólio desenvolvedor web",
    "sobre Isaac Muniz",
    "serviços de desenvolvimento",
    "desenvolvimento web profissional",
  ],
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    title: buildOgTitle(seoTitle),
    description: seoDescription,
    url: siteMetadata.siteUrl,
    type: "website",
    images: [defaultOgImage],
  },
};
