import Link from "next/link";
import { BlogPost } from "@/interfaces/blog-post";
import Text from "@/components/Text";
import TagsDisplay from "@/components/portfolio/TagsDisplay";

interface Props {
  post: BlogPost;
}

export default function BlogPostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-1.5 group h-full p-3 rounded-2xl bg-base-200 border border-base-300"
    >
      {/* Date + tags */}
      <div className="flex flex-wrap items-center gap-3 mb-1.5">
        <Text
          as="span"
          variant="caps"
          intent="muted"
          className="normal-case tracking-wider text-xs"
        >
          {post.date}
        </Text>

        <span>
          {post.tags.length > 0 && <TagsDisplay tags={post.tags.slice(0, 2)} />}
        </span>
      </div>

      {/* Title */}
      <div>
        <span className="font-saira text-2xl font-medium text-pretty text-base-content inline animated-underline group-animated-underline">
          {post.title}
        </span>
      </div>

      {/* Excerpt */}
      <Text
        variant="p"
        intent="muted"
        className="font-transducer text-sm leading-relaxed line-clamp-2"
      >
        {post.excerpt}
      </Text>
    </Link>
  );
}
