import Button from "../Button";
import CustomBadge from "../CustomBadge";
import ItemHeadlines from "../ItemHeadlines";
import { Project } from "@/interfaces/portfolio";
import TechStackDisplay from "./TechStackDisplay";

type Props = {
  project: Project;
};

export default function ProjectHeader({ project }: Props) {
  return (
    <div className="mb-8 pb-7 border-b border-neutral-content">
      <CustomBadge item={project} itemPageSlug="portfolio" />

      <ItemHeadlines item={project} shouldShowExcerpt={false} />

      {/* Project Metadata */}
      <div className="flex justify-between items-center">
        <div className="font-geist-mono text-sm text-neutral-content flex flex-wrap gap-4 py-2 px-4 border-l-2 border-base-300 items-center">
          <div className="tracking-wider text-xs">{project.date}</div>

          <span>/</span>

          {project.tags.map((tag, index) => (
            <span key={index}>
              <span>{tag}</span>

              {index < project.tags.length - 1 && (
                <span className="ml-3">|</span>
              )}
            </span>
          ))}

          <span>/</span>

          <TechStackDisplay project={project} shouldDisplayTitle />
        </div>

        <Button text="Visitar projeto" link={project.link} />
      </div>
    </div>
  );
}
