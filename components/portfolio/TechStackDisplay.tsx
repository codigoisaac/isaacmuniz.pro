import { Project } from "@/data/portfolio";
import Image from "next/image";
import techStack from "@/data/techStack";

type Props = {
  project: Project;
};

const icon = { size: 14 };

export default function TechStackDisplay({ project }: Props) {
  return (
    <div className="flex flex-wrap gap-2 p-1.5 bg-base-300 w-fit rounded-selector">
      {project.tech.map((id) => {
        const tech = techStack[id];

        return (
          <div
            key={id}
            className="tooltip tooltip-secondary"
            data-tip={tech.name}
          >
            <Image
              src={tech.image}
              alt={tech.name}
              width={icon.size}
              height={icon.size}
            />
          </div>
        );
      })}
    </div>
  );
}
