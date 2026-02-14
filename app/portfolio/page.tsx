import { HoverEffect } from "@/components/portfolio/CardHoverEffect";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";
import portfolio from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader text="/portfolio" />

      {/* We map the components into an array and let 
          HoverEffect handle the grid and animations 
      */}
      <HoverEffect
        items={portfolio.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      />
    </>
  );
}
