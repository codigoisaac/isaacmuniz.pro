import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";
import portfolio from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader text="/portfolio" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolio.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
