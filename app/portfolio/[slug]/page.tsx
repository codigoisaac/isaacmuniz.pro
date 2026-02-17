import ProjectButtons from "@/components/portfolio/ProjectButtons";
import ProjectPageBody from "@/components/portfolio/ProjectPageBody";
import ProjectPageHeader from "@/components/portfolio/ProjectPageHeader";
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
      <ProjectPageHeader project={project} />

      <ProjectPageBody project={project} />

      <div className="flex justify-center w-full mt-14 -mb-8">
        <ProjectButtons project={project} />
      </div>
    </>
  );
}
