import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/api";
import BlogPost from "@/components/blog/BlogPost";
import BlogPostHeader from "@/components/blog/BlogPostHeader";

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
      <BlogPostHeader post={post} slug={params.slug} />

      <BlogPost post={post} />
    </>
  );
}
