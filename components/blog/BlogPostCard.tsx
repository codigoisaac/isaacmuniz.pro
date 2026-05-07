import Link from "next/link";
import { BlogPost } from "@/interfaces/blog-post";
import Text from "@/components/Text";
import TagsDisplay from "@/components/portfolio/TagsDisplay";
import PublicationPlatforms from "@/components/blog/PublicationPlatforms";
import { formatBlogDate, getReadingTime } from "@/lib/utils";

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
          {formatBlogDate(post.date)}
        </Text>

        <span className="text-neutral-content mx-2 text-[7px]">▪</span>

        <Text
          as="span"
          variant="caps"
          intent="muted"
          className="normal-case tracking-wider text-xs"
        >
          {getReadingTime(post.content)} min de leitura
        </Text>
      </div>

      {/* Title */}
      <div>
        <span className="font-saira text-2xl font-medium text-pretty text-base-content inline animated-underline group-animated-underline">
          {post.title}
        </span>

        {post.subtitle && (
          <div className="font-saira text-base mt-2">{post.subtitle}</div>
        )}
      </div>

      {/* Excerpt */}
      <Text
        variant="p"
        intent="muted"
        className="font-transducer text-sm leading-relaxed line-clamp-2"
      >
        {post.excerpt}
      </Text>

      {(post.tags.length > 0 || post.publishedOn) && (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 mt-3">
          {post.tags.length > 0 && (
            <TagsDisplay
              tags={post.tags}
              tagClassName="bg-transparent border border-base-300"
            />
          )}
          {post.publishedOn && (
            <PublicationPlatforms publishedOn={post.publishedOn} />
          )}
        </div>
      )}
    </Link>
  );
}
