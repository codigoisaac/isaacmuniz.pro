import BlurImage from "@/components/BlurImage";
import { Project } from "@/data/portfolio";
import TechStackDisplay from "./TechStackDisplay";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col justify-between bg-base-200 p-2 rounded-selector border-3 border-base-300">
      <BlurImage src={project.image} alt={`Capa do projeto ${project.name}`} />

      <div className="text-xl font-geist-mono font-medium mb-1 mt-5">
        {project.name}
      </div>

      <div className="text-sm mb-5 text-pretty grow">{project.excerpt}</div>

      <TechStackDisplay project={project} />
    </div>
  );
}
