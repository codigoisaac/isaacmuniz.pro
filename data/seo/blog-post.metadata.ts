import { Metadata } from "next";
import { BlogPost } from "@/interfaces/blog-post";
import siteMetadata from "@/data/siteMetadata";
import {
  buildCanonical,
  buildOgTitle,
  buildTwitterMeta,
  buildOgImageUrl,
  authorKeywords,
} from "@/data/seo/seo-defaults";

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  const path = `/blog/${post.slug}`;
  const ogTitle = buildOgTitle(post.title);
  const ogImageUrl = buildOgImageUrl({ post: post.slug });
  const ogImage = {
    url: ogImageUrl,
    width: 1200,
    height: 630,
    alt: post.title,
  };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      ...authorKeywords,
      "desenvolvimento web",
      "programação",
      "artigo técnico",
      "blog programação",
    ],
    authors: [{ name: siteMetadata.authorName, url: siteMetadata.siteUrl }],
    alternates: buildCanonical(path),
    openGraph: {
      title: ogTitle,
      description: post.excerpt,
      url: `${siteMetadata.siteUrl}${path}`,
      type: "article",
      publishedTime: post.date,
      authors: [siteMetadata.authorName],
      tags: post.tags,
      images: [ogImage],
    },
    twitter: {
      ...buildTwitterMeta(ogTitle, post.excerpt),
      images: [ogImageUrl],
    },
  };
}
