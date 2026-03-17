import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

export const globalMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.headerTitle}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
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
    siteName: siteMetadata.headerTitle,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteMetadata.authorName} — Desenvolvedor de Software`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/og-image.png"],
    creator: siteMetadata.socials.twitterHandle,
  },
  alternates: { canonical: siteMetadata.siteUrl },
  icons: {
    icon: "/favicon-dark.svg",
  },
};
