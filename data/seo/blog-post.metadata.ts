import { Metadata } from "next";
import { BlogPost } from "@/interfaces/blog-post";
import siteMetadata from "@/data/siteMetadata";
import {
  buildCanonical,
  buildTwitterMeta,
  authorKeywords,
} from "@/data/seo/seo-defaults";

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  const path = `/blog/${post.slug}`;

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
      title: post.title,
      description: post.excerpt,
      url: `${siteMetadata.siteUrl}${path}`,
      type: "article",
      publishedTime: post.date,
      authors: [siteMetadata.authorName],
      tags: post.tags,
    },
    twitter: buildTwitterMeta(post.title, post.excerpt),
  };
}
