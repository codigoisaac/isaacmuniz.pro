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
      <div className="badge badge-sm badge-primary">/blog/{params.slug}</div>

      <div className="mb-5 mt-1.5 text-4xl md:text-5xl text-primary leading-14">
        {post.title}
      </div>

      <BlogPost post={post} />
    </>
  );
}
