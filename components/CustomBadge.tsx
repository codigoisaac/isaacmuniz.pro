import { ArrowBendUpLeftIcon } from "@phosphor-icons/react/ssr";
import { BlogPost } from "@/interfaces/blog-post";
import DecryptedText from "./DecryptedText";
import Link from "next/link";
import { Project } from "@/data/portfolio";

interface Props {
  item: BlogPost | Project;
  itemPageSlug: "blog" | "portfolio";
}

export default function CustomBadge({ item, itemPageSlug }: Props) {
  return (
    <>
      {/* Back Button and Badge */}
      <div className="flex items-center gap-2">
        <Link
          href={`/${itemPageSlug}`}
          className="hover:text-neutral hover:bg-base-300 p-1 rounded-field"
        >
          <ArrowBendUpLeftIcon />
        </Link>

        <div className="font-geist-mono badge badge-sm badge-secondary">
          <DecryptedText text={`/${itemPageSlug}/${item.slug}`} speed={40} />
        </div>
      </div>
    </>
  );
}
