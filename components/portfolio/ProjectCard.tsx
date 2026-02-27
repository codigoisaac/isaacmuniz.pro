import BlurImage from "@/components/BlurImage";
import FeaturedProjectTag from "./FeaturedProjectTag";
import Link from "next/link";
import { Project } from "@/interfaces/portfolio";
import TagsDisplay from "./TagsDisplay";
import TechStackDisplay from "./TechStackDisplay";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      className="block bg-base-300 p-1 rounded-[14px] h-full"
      href={`/portfolio/${project.slug}`}
    >
      <div className="flex flex-col justify-between bg-base-200 p-4 rounded-xl cursor-pointer relative h-full">
        {project.isFeaturedProject && <FeaturedProjectTag />}

        <BlurImage
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
        />

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
