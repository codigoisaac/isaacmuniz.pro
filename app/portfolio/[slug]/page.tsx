import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectButtons from "@/components/portfolio/ProjectButtons";
import ProjectPageBody from "@/components/portfolio/ProjectPageBody";
import ProjectPageHeader from "@/components/portfolio/ProjectPageHeader";
import ProjectSubjects from "@/components/portfolio/ProjectSubjects";
import { allProjects } from "@/data/portfolio";
import { buildProjectMetadata } from "@/data/seo/project.metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) return {};

  return buildProjectMetadata(project);
}

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <ProjectPageHeader project={project} />

      <ProjectPageBody project={project} />

      {project.subjects && <ProjectSubjects project={project} />}

      <div className="flex justify-center w-full mt-14 -mb-8">
        <ProjectButtons project={project} showBackButton />
      </div>

      <ScrollToTop />
    </>
  );
}
