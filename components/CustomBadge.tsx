import { BlogPost } from "@/interfaces/blog-post";
import DecryptedText from "./DecryptedText";
import GoBackButton from "./GoBackButton";
import { Project } from "@/interfaces/portfolio";

interface Props {
  item: BlogPost | Project;
  mainPageAddress: "/blog" | "/portfolio";
}

export default function CustomBadge({ item, mainPageAddress }: Props) {
  return (
    <>
      {/* Back Button and Badge */}
      <div className="flex items-center gap-2">
        <GoBackButton destination={`${mainPageAddress}`} />

        <div className="font-geist-mono badge badge-sm badge-secondary">
          <DecryptedText text={`${mainPageAddress}/${item.slug}`} speed={40} />
        </div>
      </div>
    </>
  );
}
