"use client";

import Link from "next/link";
import { BlogPost } from "@/interfaces/blog-post";
import Text from "@/components/Text";
import BlogPostList from "@/components/blog/BlogPostList";
import HeadingLabel from "./HeadingLabel";

interface Props {
  posts: BlogPost[];
}

export default function HomeBlog({ posts }: Props) {
  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <HeadingLabel text="Blog" />

          <Text as="h2" variant="display" intent="primary">
            Artigos recentes
          </Text>
        </div>

        <Link href="/blog" className="animated-underline hidden sm:block">
          <Text
            as="span"
            variant="caps"
            intent="muted"
            className="normal-case tracking-normal text-sm"
          >
            Ver todos →
          </Text>
        </Link>
      </div>

      <BlogPostList posts={posts} />

      {/* Mobile "ver todos" */}
      <div className="flex justify-center mt-8 sm:hidden">
        <Link href="/blog" className="animated-underline">
          <Text
            as="span"
            variant="caps"
            intent="muted"
            className="normal-case tracking-normal text-sm"
          >
            Ver todos os artigos →
          </Text>
        </Link>
      </div>
    </section>
  );
}
