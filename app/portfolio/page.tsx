"use client";

import {
  portfolioAuthorial,
  portfolioColab,
  portfolioOthers,
} from "@/data/portfolio";

import { HoverEffect } from "@/components/portfolio/HoverEffect";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectCardCompact from "@/components/portfolio/ProjectCardCompact";
import SeparatorDots from "@/components/SeparatorDots";
import Text from "@/components/Text";
import { useState } from "react";

export default function PortfolioPage() {
  const [globalHoveredIndex, setGlobalHoveredIndex] = useState<string | null>(
    null,
  );

  return (
    <>
      <PageHeader text="/portfolio" />

      {/* Main Projects */}
      <HoverEffect
        idPrefix="authorial"
        hoveredIndex={globalHoveredIndex}
        setHoveredIndex={setGlobalHoveredIndex}
        items={portfolioAuthorial.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      />

      {/* Collaboration Projects */}
      <SeparatorDots />

      <div className="mt-12">
        <Text variant="h3" className="text-center mb-4">
          Projetos com os quais colaborei
        </Text>

        <div className="flex flex-col gap-4">
          <HoverEffect
            idPrefix="colab"
            className="sm:grid-cols-1 py-0"
            hoveredIndex={globalHoveredIndex}
            setHoveredIndex={setGlobalHoveredIndex}
            items={portfolioColab.map((project) => (
              <ProjectCardCompact key={project.slug} project={project} />
            ))}
          />
        </div>
      </div>

      {/* Other Projects */}
      <SeparatorDots />

      <div className="mt-12">
        <Text variant="h3" className="text-center mb-4">
          Outros projetos
        </Text>

        <div className="flex flex-col gap-4">
          <HoverEffect
            idPrefix="others"
            className="sm:grid-cols-1 py-0"
            hoveredIndex={globalHoveredIndex}
            setHoveredIndex={setGlobalHoveredIndex}
            items={portfolioOthers.map((project) => (
              <ProjectCardCompact key={project.slug} project={project} />
            ))}
          />
        </div>
      </div>
    </>
  );
}
