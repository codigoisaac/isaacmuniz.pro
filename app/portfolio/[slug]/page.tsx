import ProjectBody from "@/components/portfolio/ProjectBody";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import { notFound } from "next/navigation";
import portfolio from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <ProjectHeader project={project} />

      <ProjectBody project={project} />
    </>
  );
}
