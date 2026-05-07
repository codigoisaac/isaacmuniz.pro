import { BlogPost as BlogPostInterface } from "@/interfaces/blog-post";
import CustomBadge from "../CustomBadge";
import ItemHeadlines from "../ItemHeadlines";
import PublicationPlatforms from "./PublicationPlatforms";
import { formatBlogDate, getReadingTime } from "@/lib/utils";

type Props = {
  post: BlogPostInterface;
};

export default function BlogPostHeader({ post }: Props) {
  return (
    <div className="mb-8 pb-8 border-b border-neutral-content">
      <CustomBadge item={post} mainPageAddress="/blog" />

      <ItemHeadlines item={post} />

      {/* Post Metadata */}
      <div className="font-geist-mono text-sm text-neutral-content flex-col py-2 px-4 border-l-2 border-base-300">
        <div className="tracking-wider text-xs mb-2 underline decoration-dashed decoration-base-300 decoration-0 underline-offset-7">
          {formatBlogDate(post.date)}{" "}
          <span className="text-neutral-content mx-2">·</span>{" "}
          {getReadingTime(post.content)} min de leitura
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <div>
            {post.tags.map((tag, index) => (
              <span key={index}>
                <span className="mr-3">{tag}</span>
                <span className="mr-3">
                  {index < post.tags.length - 1 && "|"}
                </span>
              </span>
            ))}
          </div>
          {post.publishedOn && (
            <PublicationPlatforms publishedOn={post.publishedOn} />
          )}
        </div>
      </div>
    </div>
  );
}
