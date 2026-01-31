import DecryptedText from "@/components/DecryptedText";
import { ArrowBendUpLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { BlogPost as BlogPostInterface } from "@/interfaces/blog-post";

type Props = {
  post: BlogPostInterface;
  slug: string;
};

export default function BlogPostHeader({ post, slug }: Props) {
  return (
    <div className="mb-8 pb-8 border-b border-neutral-content">
      {/* Back Button and Badge */}
      <div className="flex items-center gap-2">
        <Link
          href="/blog"
          className="hover:text-neutral hover:bg-base-300 p-1 rounded-field"
        >
          <ArrowBendUpLeftIcon />
        </Link>

        <div className="font-geist-mono badge badge-sm badge-secondary">
          <DecryptedText text={`/blog/${slug}`} speed={40} />
        </div>
      </div>

      {/* Post Title */}
      <div className="font-saira mt-2.5 mb-5 text-5xl text-primary leading-14">
        {post.title}
      </div>

      {/* Post Excerpt */}
      <div className="font-transducer mb-5">{post.excerpt}</div>

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
