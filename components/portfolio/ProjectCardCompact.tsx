import ProjectTag from "./ProjectTag";
import Link from "next/link";
import { Project } from "@/interfaces/portfolio";
import TagsDisplay from "./TagsDisplay";
import TechStackDisplay from "./TechStackDisplay";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  project: Project;
  variant?: "compact" | "smallCompact";
};

export default function ProjectCardCompact({
  project,
  variant = "compact",
}: Props) {
  const pathname = usePathname();
  const isOnHome = pathname === "/";

  return (
    <Link
      className={cn(
        "relative flex gap-4 bg-base-200 p-3 rounded-xl w-full group h-full items-center",
        { "pt-8 sm:pt-3": project.isInDevelopment && !isOnHome },
      )}
      href={`/portfolio/${project.slug}`}
    >
      {project.isInDevelopment && !isOnHome && (
        <ProjectTag text="Em Desenvolvimento" showOnCenterOnMobile />
      )}

      <div className="shrink-0 w-32 h-32 rounded-lg overflow-hidden relative">
        <Image
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
          fill
          className="object-cover"
          placeholder="blur"
          sizes="300px"
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
                  project.isInDevelopment && variant === "smallCompact",
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
