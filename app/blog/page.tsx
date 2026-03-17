import PageHeader from "@/components/PageHeader";
import { getAllBlogPosts } from "@/lib/api";
import BlogPostList from "@/components/blog/BlogPostList";
import { Metadata } from "next";
import { blogMetadata } from "@/data/seo/blog.metadata";

export const metadata: Metadata = blogMetadata;

export default function BlogPage() {
  const allBlogPosts = getAllBlogPosts();

  return (
    <>
      <PageHeader text="/blog" />

      <BlogPostList posts={allBlogPosts} />
    </>
  );
}
