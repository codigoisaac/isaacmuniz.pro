import { getAllBlogPosts } from "@/lib/api";
import Link from "next/link";

export default function BlogPage() {
  const allBlogPosts = getAllBlogPosts();

  return (
    <>
      <div className="font-geistMono font-bold mb-14 text-center">/blog</div>

      {allBlogPosts.map((post) => (
        <Link
          key={post.slug}
          href={`blog/${post.slug}`}
          className="flex flex-col gap-1 mb-10"
        >
          {/* Date */}
          <div className="font-geistMono text-xs tracking-wider text-gray-400">
            {post.date.toString()}
          </div>

          <div className="flex flex-col gap-2">
            {/* Title */}
            <div className="font-saira text-2xl font-medium text-pretty text-primary">
              {post.title}
            </div>

            {/* Excerpt */}
            <div className="text-pretty tracking-wide text-gray-400">
              {post.excerpt}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
