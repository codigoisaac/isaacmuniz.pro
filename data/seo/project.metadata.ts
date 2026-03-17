import { Metadata } from "next";
import { Project } from "@/interfaces/portfolio";
import siteMetadata from "@/data/siteMetadata";

export function buildProjectMetadata(project: Project): Metadata {
  const url = `${siteMetadata.siteUrl}/portfolio/${project.slug}`;

  const techList = project.tech.slice(0, 4).join(", ");

  const description = `${project.excerpt} Desenvolvido com ${techList}.`;

  const keywords = [
    project.title,
    ...project.tech,
    ...project.tags,
    "projeto web",
    "desenvolvimento",
    "Isaac Muniz",
    "portfolio",
  ];

  return {
    title: project.title,

    description,
    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${project.title} | Isaac Muniz`,
      description: project.excerpt,
      url,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Isaac Muniz`,
      description: project.excerpt,
    },
  };
}
