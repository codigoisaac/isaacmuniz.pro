import { ImageResponse } from "next/og";
import siteMetadata from "@/data/siteMetadata";
import { getOgFonts } from "./_lib/fonts";
import { getBlogPostBySlug } from "@/lib/api";
import { allProjects } from "@/data/portfolio";
import techStack from "@/data/techStack";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type OgContent = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
};

const staticPages: Record<string, OgContent> = {
  home: {
    eyebrow: "Desenvolvedor Fullstack & Mobile",
    title: siteMetadata.authorName,
    description:
      "5 anos construindo sites, apps e sistemas que resolvem problemas reais e são um prazer de usar.",
    chips: ["React", "Next.js", "Node.js", "Flutter", "TypeScript"],
  },
  blog: {
    eyebrow: "Blog técnico",
    title: "Artigos &\nTutoriais",
    description:
      "Programação, engenharia de software e reflexões sobre tecnologia.",
    chips: ["React", "Next.js", "Node.js", "TypeScript", "Flutter"],
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Projetos &\nCases",
    description:
      "Web, mobile e sistemas — de projetos autorais a trabalho em equipe em empresas.",
    chips: ["Aplicativo Web", "Aplicativo Mobile", "Open Source"],
  },
};

function resolveContent(searchParams: URLSearchParams): OgContent | null {
  const page = searchParams.get("page");
  const post = searchParams.get("post");
  const project = searchParams.get("project");

  if (page) {
    return staticPages[page] ?? staticPages.home;
  }

  if (post) {
    const data = getBlogPostBySlug(post);
    if (!data) return null;
    return {
      eyebrow: "Blog",
      title: data.title,
      description: data.excerpt,
      chips: data.tags?.slice(0, 4) ?? [],
    };
  }

  if (project) {
    const data = allProjects.find((p) => p.slug === project);
    if (!data) return null;
    return {
      eyebrow: "Portfólio",
      title: data.title,
      description: data.excerpt,
      chips: data.tech.slice(0, 5).map((id) => techStack[id]?.name ?? id),
    };
  }

  return staticPages.home;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const content = resolveContent(searchParams);

  if (!content) return new Response(null, { status: 404 });

  const fonts = await getOgFonts();

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#3f2d24",
        fontFamily: "Saira",
      }}
    >
      {/* Barra lateral laranja */}
      <div
        style={{
          width: 8,
          height: "100%",
          backgroundColor: "#fd8540",
          flexShrink: 0,
        }}
      />

      {/* Conteúdo principal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: "52px 72px",
        }}
      >
        {/* Topo: eyebrow + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#fd8540",
                flexShrink: 0,
                marginTop: 2,
              }}
            />
            <span
              style={{
                fontSize: 20,
                color: "#fd8540",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {content.eyebrow}
            </span>
          </div>
          <span style={{ fontSize: 18, color: "#f5ece6", opacity: 0.35 }}>
            {siteMetadata.siteUrl.replace("https://", "")}
          </span>
        </div>

        {/* Centro: título + descrição */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1
            style={{
              fontSize:
                content.title.length > 50
                  ? 64
                  : content.title.length > 30
                    ? 80
                    : 96,
              fontWeight: 700,
              color: "#fd8540",
              lineHeight: 0.95,
              margin: 0,
              letterSpacing: "-0.03em",
              whiteSpace: "pre-wrap",
              maxWidth: 980,
            }}
          >
            {content.title}
          </h1>
          {content.description ? (
            <p
              style={{
                fontSize: 24,
                color: "#f5ece6",
                opacity: 0.6,
                margin: 0,
                maxWidth: 820,
                lineHeight: 1.45,
              }}
            >
              {content.description}
            </p>
          ) : null}
        </div>

        {/* Rodapé: chips + autor */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {content.chips.slice(0, 5).map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: 16,
                  color: "#f5ece6",
                  backgroundColor: "rgba(245,236,230,0.1)",
                  padding: "6px 16px",
                  borderRadius: 3,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#f5ece6" }}>
            {siteMetadata.authorName}
          </span>
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
