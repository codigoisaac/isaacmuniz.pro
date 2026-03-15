import BlogPost from "@/components/blog/BlogPost";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { getBlogPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <>
      <BlogPostHeader post={post} />

      <BlogPost post={post} />

      <ScrollToTop />
    </>
  );
}
