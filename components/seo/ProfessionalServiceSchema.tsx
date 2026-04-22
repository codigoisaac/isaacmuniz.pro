import siteMetadata from "@/data/siteMetadata";

export default function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteMetadata.siteUrl}/#business`,
    name: "Isaac Muniz - Desenvolvimento Web & Mobile",
    description:
      "Desenvolvedor freelance especializado em sites, aplicativos web e mobile. Atendimento presencial no interior de São Paulo e remoto para todo o Brasil.",
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}/og?page=home`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Limeira",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Limeira" },
      { "@type": "City", name: "Campinas" },
      { "@type": "City", name: "Piracicaba" },
      { "@type": "City", name: "Americana" },
      { "@type": "City", name: "Rio Claro" },
      { "@type": "City", name: "Sorocaba" },
      { "@type": "City", name: "Jundiaí" },
      { "@type": "City", name: "Ribeirão Preto" },
      { "@type": "City", name: "São Carlos" },
      { "@type": "City", name: "São José dos Campos" },
      { "@type": "City", name: "São Paulo" },
      { "@type": "Country", name: "Brasil" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de desenvolvimento",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Desenvolvimento de sites" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento de landing pages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento de aplicativos web",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento de aplicativos mobile",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento de sistemas sob medida",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento fullstack",
          },
        },
      ],
    },
    knowsAbout: [
      "Desenvolvimento Mobile",
      "Desenvolvimento Web",
      "Desenvolvimento de Sites",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "TailwindCSS",
      "PostgreSQL",
      "NestJS",
      "GraphQL",
      "Desenvolvimento Frontend",
      "Desenvolvimento Backend",
      "Desenvolvimento Fullstack",
    ],
    founder: { "@id": `${siteMetadata.siteUrl}/#person` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
