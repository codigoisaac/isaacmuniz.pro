import Image from "next/image";
import { Project } from "@/interfaces/portfolio";
import { Tooltip } from "@/components/Tooltip";
import techStack from "@/data/techStack";

type Props = {
  project: Project;
  shouldDisplayTitle?: boolean;
};

const icon = { size: 14 };

export default function TechStackDisplay({
  project,
  shouldDisplayTitle,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 w-fit h-fit rounded-selector bg-base-300">
      {shouldDisplayTitle && <div className="mr-1 text-sm">Feito com:</div>}

      {project.tech.map((id) => {
        const tech = techStack[id];

        return (
          <Tooltip key={id} content={tech.name}>
            <Image
              src={tech.image}
              alt={tech.name}
              width={icon.size}
              height={icon.size}
            />
          </Tooltip>
        );
      })}
    </div>
  );
}
