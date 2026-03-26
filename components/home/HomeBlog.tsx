"use client";

import { BlogPost } from "@/interfaces/blog-post";
import Text from "@/components/Text";
import Button from "@/components/Button";
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

        <Button internal text="Ver todos artigos →" link="/blog" variant="outline" size="sm" />
      </div>

      <BlogPostList posts={posts} />

      {/* Mobile "ver todos" */}
      <div className="flex justify-center mt-8 sm:hidden">
        <Button internal text="Ver todos artigos →" link="/blog" variant="outline" size="md" />
      </div>
    </section>
  );
}
