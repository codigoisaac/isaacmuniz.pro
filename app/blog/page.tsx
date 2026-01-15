import { getAllBlogPosts } from "@/lib/api";
import Link from "next/link";

export default function BlogPage() {
  const allBlogPosts = getAllBlogPosts();

  return (
    <>
      <div className="mb-7">Blog Page</div>

      {allBlogPosts.map((post) => (
        <Link
          key={post.slug}
          href={`blog/${post.slug}`}
          className="flex flex-col gap-1 py-4"
        >
          {/* Date */}
          <div className="text-sm text-gray-400">{post.date.toString()}</div>

          <div className="flex flex-col gap-2">
            {/* Title */}
            <div className="text-xl font-bold text-pretty">{post.title}</div>

            {/* Excerpt */}
            <div className="text-pretty text-gray-400">{post.excerpt}</div>
          </div>
        </Link>
      ))}
    </>
  );
}
