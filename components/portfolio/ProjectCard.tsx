import BlurImage from "@/components/BlurImage";
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
      className="flex flex-col justify-between bg-base-200 p-4 rounded-xl border-3 border-base-300 h-full relative z-20 cursor-pointer"
      href={`/portfolio/${project.slug}`}
    >
      <BlurImage src={project.image} alt={`Capa do projeto ${project.title}`} />

      <div className="text-xl font-geist-mono font-medium mb-1 mt-5">
        {project.title}
      </div>

      <div className="text-sm mb-5 text-pretty grow">{project.excerpt}</div>

      <div className="flex items-end gap-2 justify-between">
        <TagsDisplay tags={project.tags} />

        <TechStackDisplay project={project} />
      </div>
    </Link>
  );
}
