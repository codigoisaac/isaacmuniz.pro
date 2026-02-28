import BlurImage from "@/components/BlurImage";
import FeaturedProjectTag from "./FeaturedProjectTag";
import Link from "next/link";
import { Project } from "@/interfaces/portfolio";
import TagsDisplay from "./TagsDisplay";
import TechStackDisplay from "./TechStackDisplay";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  variant?: "compact" | "smallCompact";
};

export default function ProjectCardCompact({
  project,
  variant = "compact",
}: Props) {
  return (
    <Link
      className={cn(
        "relative flex gap-4 bg-base-200 p-3 rounded-xl w-full group h-full items-center",
        { "pt-8 sm:pt-3": project.isFeaturedProject },
      )}
      href={`/portfolio/${project.slug}`}
    >
      {project.isFeaturedProject && <FeaturedProjectTag showOnCenterOnMobile />}

      <div className="shrink-0 w-32 h-32 rounded-lg overflow-hidden">
        <BlurImage
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
          containerClassname="h-full w-full flex items-center justify-center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container do Conteúdo */}
      <div className="flex flex-col min-h-32 h-full justify-between grow py-1 min-w-0">
        <div>
          <div
            className={cn(
              "text-lg font-geist-mono font-medium tracking-wide leading-tight mb-1",
              {
                "mt-3.5":
                  project.isFeaturedProject && variant === "smallCompact",
              },
            )}
          >
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
