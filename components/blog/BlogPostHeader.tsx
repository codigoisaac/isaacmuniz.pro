import { BlogPost as BlogPostInterface } from "@/interfaces/blog-post";
import CustomBadge from "../CustomBadge";
import ItemHeadlines from "../ItemHeadlines";

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
          {post.date}
        </div>

        {post.tags.map((tag, index) => (
          <span key={index}>
            <span className="mr-3">{tag}</span>

            <span className="mr-3">{index < post.tags.length - 1 && "|"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
