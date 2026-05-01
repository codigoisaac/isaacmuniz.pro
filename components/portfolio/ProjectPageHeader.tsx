import CustomBadge from "../CustomBadge";
import ItemHeadlines from "../ItemHeadlines";
import { Project } from "@/interfaces/portfolio";
import ProjectButtons from "./ProjectButtons";
import TechStackDisplay from "./TechStackDisplay";

type Props = {
  project: Project;
};

export default function ProjectPageHeader({ project }: Props) {
  return (
    <div className="mb-8 pb-7 border-b border-neutral-content">
      <CustomBadge item={project} mainPageAddress="/portfolio" />

      <ItemHeadlines item={project} shouldShowExcerpt={false} />

      {/* Project Metadata */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-6">
        <div className="font-geist-mono text-sm text-neutral-content flex flex-wrap gap-4 py-2 px-4 border-l-2 border-base-300 items-center flex-1 min-w-0">
          {/* date */}
          <div className="tracking-wider text-xs">{project.date}</div>

          <span>/</span>

          {/* tags */}
          {project.tags.map((tag, index) => (
            <span key={index}>
              <span>{tag}</span>

              {index < project.tags.length - 1 && (
                <span className="ml-3">|</span>
              )}
            </span>
          ))}

          <span>/</span>

          {/* stack */}
          <TechStackDisplay project={project} shouldDisplayTitle />
        </div>

        <div className="shrink-0">
          <ProjectButtons project={project} />
        </div>
      </div>
    </div>
  );
}
