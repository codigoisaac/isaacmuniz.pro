import { BlogPost } from "@/interfaces/blog-post";
import { Project } from "@/interfaces/portfolio";

interface Props {
  item: BlogPost | Project;
}

export default function ItemHeadlines({ item }: Props) {
  return (
    <>
      {/* Item Title */}
      <div className="font-saira mt-2.5 mb-5 text-5xl text-primary leading-14">
        {item.title}
      </div>

      {/* Item Excerpt */}
      <div className="font-transducer mb-5">{item.excerpt}</div>
    </>
  );
}
