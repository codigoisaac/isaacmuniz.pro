import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "./markdown.module.css";

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

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <div className="mb-7">Blog Post Page</div>

      <div className="mb-5">{post.title}</div>

      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
