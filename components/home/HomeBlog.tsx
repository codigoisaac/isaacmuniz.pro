import Link from "next/link";
import { BlogPost } from "@/interfaces/blog-post";
import Text from "@/components/Text";
import TagsDisplay from "@/components/portfolio/TagsDisplay";

interface Props {
  posts: BlogPost[];
}

// Server-safe wrapper — animated children are isolated in client spans below.
// This component is itself server-renderable since no state/hooks are used.
export default function HomeBlog({ posts }: Props) {
  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary select-none text-sm">▸</span>
            <Text variant="caps" intent="muted">
              Blog
            </Text>
          </div>
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

      {/* Posts list */}
      {posts.length > 0 ? (
        <div className="flex flex-col gap-9">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-1.5 group"
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
                {post.tags.length > 0 && (
                  <TagsDisplay tags={post.tags.slice(0, 2)} />
                )}
              </div>

              {/* Title */}
              <div>
                <span className="font-saira text-xl font-medium text-pretty text-primary inline animated-underline group-animated-underline">
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
          ))}
        </div>
      ) : (
        // Placeholder shown when slugs haven't been configured yet
        <div className="py-12 text-center border border-dashed border-base-300 rounded-xl">
          <p className="font-geist-mono text-sm text-neutral-content">
            Configure{" "}
            <code className="bg-base-200 px-1 rounded-selector">
              FEATURED_POST_SLUGS
            </code>{" "}
            em{" "}
            <code className="bg-base-200 px-1 rounded-selector">
              app/page.tsx
            </code>
          </p>
        </div>
      )}

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
