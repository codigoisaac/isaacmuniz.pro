import Button from "../Button";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Project } from "@/interfaces/portfolio";
import { Tooltip } from "../Tooltip";

interface Props {
  project: Project;
}

export default function ProjectButtons({ project }: Props) {
  return (
    <div className="flex items-center gap-5">
      {project.tags.includes("Open Source") && project.repoLink && (
        <Tooltip key={project.repoLink} content="Visitar repositório">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="unstiled-link"
          >
            <GithubLogoIcon size={25} weight="duotone" />
          </a>
        </Tooltip>
      )}

      <Button text="Visitar projeto" link={project.link} />
    </div>
  );
}
