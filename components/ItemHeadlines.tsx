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
      <div className="font-saira mt-4 text-5xl text-primary leading-14">
        {item.title}
      </div>

      {/* Item Subtitle */}
      {"subtitle" in item && item.subtitle && (
        <div className="font-saira my-6 text-3xl text-neutral-content">
          {item.subtitle}
        </div>
      )}

      {/* Item Excerpt */}
      {shouldShowExcerpt && (
        <div className="font-transducer mt-4 mb-6">{item.excerpt}</div>
      )}
    </>
  );
}
