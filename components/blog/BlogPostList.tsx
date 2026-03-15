"use client";

import { useState } from "react";
import { BlogPost } from "@/interfaces/blog-post";
import { HoverEffect } from "@/components/portfolio/HoverEffect";
import BlogPostCard from "@/components/blog/BlogPostCard";

interface Props {
  posts: BlogPost[];
  idPrefix?: string;
}

export default function BlogPostList({ posts, idPrefix = "blog" }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <HoverEffect
      idPrefix={idPrefix}
      className="grid-cols-1 sm:grid-cols-1 py-0"
      hoverClassName="bg-base-200"
      hoveredIndex={hoveredIndex}
      setHoveredIndex={setHoveredIndex}
      items={posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    />
  );
}
