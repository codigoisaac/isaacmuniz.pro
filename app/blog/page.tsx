import PageHeader from "@/components/PageHeader";
import { getAllBlogPosts } from "@/lib/api";
import BlogPostList from "@/components/blog/BlogPostList";

export default function BlogPage() {
  const allBlogPosts = getAllBlogPosts();

  return (
    <>
      <PageHeader text="/blog" />

      <BlogPostList posts={allBlogPosts} />
    </>
  );
}
