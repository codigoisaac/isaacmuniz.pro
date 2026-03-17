import { BlogPost } from "@/interfaces/blog-post";
import siteMetadata from "@/data/siteMetadata";

type Props = {
  post: BlogPost;
};

export default function BlogPostSchema({ post }: Props) {
  const postUrl = `${siteMetadata.siteUrl}/blog/${post.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": postUrl,
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@id": `${siteMetadata.siteUrl}/#person`,
    },
    publisher: {
      "@id": `${siteMetadata.siteUrl}/#person`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteMetadata.siteUrl}/blog`,
      name: "Blog de Isaac Muniz",
    },
    inLanguage: "pt-BR",
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
