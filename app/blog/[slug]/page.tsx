import BlogPost from "@/components/blog/BlogPost";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import BlogPostSchema from "@/components/seo/BlogPostSchema";
import { buildBlogPostMetadata } from "@/data/seo/blog-post.metadata";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();

  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) return {};

  return buildBlogPostMetadata(post);
}

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <>
      <ReadingProgressBar />

      <BlogPostHeader post={post} />

      <BlogPost post={post} />

      <ScrollToTop />

      <BlogPostSchema post={post} />
    </>
  );
}
