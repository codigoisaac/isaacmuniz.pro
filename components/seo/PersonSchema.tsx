import siteMetadata from "@/data/siteMetadata";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteMetadata.siteUrl}/#person`,
        name: siteMetadata.authorName,
        url: siteMetadata.siteUrl,
        jobTitle: "Desenvolvedor Web & Mobile",
        description:
          "Desenvolvedor fullstack brasileiro com 5 anos de experiência em React, Next.js, Node.js e TypeScript.",
        sameAs: [
          siteMetadata.socials.githubLink,
          siteMetadata.socials.linkedinLink,
          siteMetadata.socials.substackLink,
          siteMetadata.socials.twitterLink,
        ],
        knowsAbout: [
          "Desenvolvimento Web",
          "Desenvolvimento Mobile",
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Limeira",
          addressRegion: "São Paulo",
          addressCountry: "BR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteMetadata.siteUrl}/#website`,
        url: siteMetadata.siteUrl,
        name: siteMetadata.authorName,
        description:
          "Portfólio e blog de Isaac Muniz, desenvolvedor fullstack brasileiro.",
        publisher: {
          "@id": `${siteMetadata.siteUrl}/#person`,
        },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
