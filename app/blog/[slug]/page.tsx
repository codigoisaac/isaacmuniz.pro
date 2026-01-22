import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/api";
import BlogPost from "@/components/blog/BlogPost";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <div className="mb-7">Blog Post Page</div>

      <BlogPost post={post} />
    </>
  );
}
