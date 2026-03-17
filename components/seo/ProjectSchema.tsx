import { Project } from "@/interfaces/portfolio";
import siteMetadata from "@/data/siteMetadata";
import techStack from "@/data/techStack";

type Props = {
  project: Project;
};

export default function ProjectSchema({ project }: Props) {
  const projectUrl = `${siteMetadata.siteUrl}/portfolio/${project.slug}`;

  const techNames = project.tech
    .map((id) => techStack[id]?.name)
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": projectUrl,
    name: project.title,
    description: project.excerpt,
    url: project.link,
    sameAs: projectUrl,
    author: {
      "@id": `${siteMetadata.siteUrl}/#person`,
    },
    creator: {
      "@id": `${siteMetadata.siteUrl}/#person`,
    },
    dateCreated: project.date,
    inLanguage: "pt-BR",
    keywords: [...project.tags, ...techNames].join(", "),
    isPartOf: {
      "@type": "Collection",
      "@id": `${siteMetadata.siteUrl}/portfolio`,
      name: "Portfólio de Isaac Muniz",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
