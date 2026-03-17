import { Metadata } from "next";
import { BlogPost } from "@/interfaces/blog-post";
import siteMetadata from "@/data/siteMetadata";

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  const url = `${siteMetadata.siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,

    keywords: [
      ...post.tags,
      "desenvolvimento web",
      "programação",
      "Isaac Muniz",
      "blog técnico",
    ],

    authors: [{ name: siteMetadata.authorName, url: siteMetadata.siteUrl }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [siteMetadata.authorName],
      tags: post.tags,
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}
