import { Metadata } from "next";
import { Project } from "@/interfaces/portfolio";
import siteMetadata from "@/data/siteMetadata";
import {
  buildOgTitle,
  buildCanonical,
  buildTwitterMeta,
  buildOgImageUrl,
  authorKeywords,
} from "@/data/seo/seo-defaults";

export function buildProjectMetadata(project: Project): Metadata {
  const path = `/portfolio/${project.slug}`;
  const techList = project.tech.slice(0, 4).join(", ");
  const description = `${project.excerpt} Desenvolvido com ${techList}.`;
  const ogTitle = buildOgTitle(project.title);
  const ogImageUrl = buildOgImageUrl({ project: project.slug });
  const ogImage = {
    url: ogImageUrl,
    width: 1200,
    height: 630,
    alt: project.title,
  };

  return {
    title: project.title,
    description,
    keywords: [
      project.title,
      ...project.tech,
      ...project.tags,
      ...authorKeywords,
      "projeto web",
      "case desenvolvimento",
      "desenvolvimento profissional",
      "projeto react",
      "projeto typescript",
    ],
    alternates: buildCanonical(path),
    openGraph: {
      title: ogTitle,
      description: project.excerpt,
      url: `${siteMetadata.siteUrl}${path}`,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      ...buildTwitterMeta(ogTitle, project.excerpt),
      images: [ogImageUrl],
    },
  };
}
