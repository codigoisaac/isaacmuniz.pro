import Image from "next/image";
import { notFound } from "next/navigation";
import portfolio from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const project = portfolio.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <div className="flex gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="badge badge-primary">
            {tag}
          </span>
        ))}
      </div>

      <Image
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-8"
        placeholder="blur"
      />

      <div className="prose lg:prose-xl">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-bold">Tech Stack:</h3>

        <p>{project.tech.join(", ")}</p>
      </div>

      <a href={project.link} target="_blank" className="btn btn-primary mt-8">
        Visit Project
      </a>
    </main>
  );
}
