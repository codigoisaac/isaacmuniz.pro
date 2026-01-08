import { getAllBlogPosts } from "@/lib/api";
import Link from "next/link";

export default function BlogPage() {
  const allBlogPosts = getAllBlogPosts();

  return (
    <>
      <div className="mb-7">Blog Page</div>

      {allBlogPosts.map((post) => (
        <Link key={post.slug} href={`blog/${post.slug}`} className="block">
          {post.title}
        </Link>
      ))}
    </>
  );
}
