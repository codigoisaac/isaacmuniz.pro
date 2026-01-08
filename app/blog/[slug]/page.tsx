import { getBlogPostBySlug } from "@/lib/api";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  console.log(params, post);

  return (
    <>
      <div className="mb-7">Blog Post Page</div>

      <div className="mb-5">{post.title}</div>

      <div>{post.content}</div>
    </>
  );
}
