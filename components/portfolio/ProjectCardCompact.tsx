import BlurImage from "@/components/BlurImage";
import FeaturedProjectTag from "./FeaturedProjectTag";
import Link from "next/link";
import { Project } from "@/interfaces/portfolio";
import TagsDisplay from "./TagsDisplay";
import TechStackDisplay from "./TechStackDisplay";

type Props = {
  project: Project;
};

export default function ProjectCardCompact({ project }: Props) {
  return (
    <Link
      className="flex gap-4 bg-base-200 p-3 rounded-xl w-full hover:border-neutral-content/20 transition-colors group"
      href={`/portfolio/${project.slug}`}
    >
      {project.isFeaturedProject && <FeaturedProjectTag />}

      <div className="shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-base-100 border border-base-300">
        <BlurImage
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
          containerClassname="h-full w-full flex items-center justify-center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container do Conteúdo */}
      <div className="flex flex-col justify-between grow py-1 min-w-0">
        <div>
          <div className="text-lg font-geist-mono font-medium leading-tight mb-1 truncate">
            {project.title}
          </div>

          <div className="text-sm text-pretty text-neutral-content line-clamp-2 mb-2">
            {project.excerpt}
          </div>
        </div>

        <div className="flex items-center gap-2 justify-between mt-auto">
          <div className="hidden sm:block">
            <TagsDisplay tags={project.tags} />
          </div>

          <TechStackDisplay project={project} />
        </div>
      </div>
    </Link>
  );
}
