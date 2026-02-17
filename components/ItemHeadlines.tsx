import { BlogPost } from "@/interfaces/blog-post";
import { Project } from "@/interfaces/portfolio";

interface Props {
  item: BlogPost | Project;
  shouldShowExcerpt?: boolean;
}

export default function ItemHeadlines({
  item,
  shouldShowExcerpt = true,
}: Props) {
  return (
    <>
      {/* Item Title */}
      <div className="font-saira my-4 text-5xl text-primary leading-14">
        {item.title}
      </div>

      {/* Item Excerpt */}
      {shouldShowExcerpt && (
        <div className="font-transducer mb-5">{item.excerpt}</div>
      )}
    </>
  );
}
