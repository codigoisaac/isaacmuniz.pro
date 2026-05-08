import InDevelopmentTag from "./InDevelopmentTag";
import Link from "next/link";
import { Project } from "@/interfaces/portfolio";
import TagsDisplay from "./TagsDisplay";
import TechStackDisplay from "./TechStackDisplay";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({ project, priority }: Props) {
  return (
    <Link
      className="block bg-base-300 p-1 rounded-[14px] h-full"
      href={`/portfolio/${project.slug}`}
    >
      <div
        className={cn(
          "flex flex-col justify-between bg-base-200 p-4 rounded-xl cursor-pointer relative h-full",
          { "pt-8": project.isInDevelopment },
        )}
      >
        {project.isInDevelopment && (
          <InDevelopmentTag showOnCenterOnMobile />
        )}

        <div className="flex justify-center">
          <div className="w-fit rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={`Capa do projeto ${project.title}`}
              className="w-fit h-31"
              placeholder="blur"
              priority={priority}
              sizes="(max-width: 640px) calc(50vw - 2rem), (max-width: 1280px) calc(50vw - 3rem), 380px"
            />
          </div>
        </div>

        <div className="text-xl font-geist-mono font-medium mb-1 mt-5">
          {project.title}
        </div>

        <div className="text-sm mb-5 text-pretty grow text-neutral-content">
          {project.excerpt}
        </div>

        <div className="flex items-end gap-2 justify-between">
          <TagsDisplay tags={project.tags} />

          <TechStackDisplay project={project} />
        </div>
      </div>
    </Link>
  );
}
