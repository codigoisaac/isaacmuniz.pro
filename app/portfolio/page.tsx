import { portfolioAuthorial, portfolioColab } from "@/data/portfolio";

import { HoverEffect } from "@/components/portfolio/HoverEffect";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectCardCompact from "@/components/portfolio/ProjectCardCompact";
import SeparatorDots from "@/components/SeparatorDots";
import Text from "@/components/Text";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader text="/portfolio" />

      <HoverEffect
        items={portfolioAuthorial.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      />

      <SeparatorDots />

      <div className="mt-12">
        <Text variant="h3" className="text-center mb-4">
          Outros projetos com os quais colaborei
        </Text>

        <div className="flex flex-col gap-4">
          <HoverEffect
            className="sm:grid-cols-1 py-0"
            items={portfolioColab.map((project) => (
              <ProjectCardCompact key={project.slug} project={project} />
            ))}
          />
        </div>
      </div>
    </>
  );
}
