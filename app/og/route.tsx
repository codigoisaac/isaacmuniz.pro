import { ImageResponse } from "next/og";
import siteMetadata from "@/data/siteMetadata";
import { getOgFonts } from "./fonts";
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

const eyebrowMain = "Desenvolvedor Web & Mobile";

const staticPages: Record<string, OgContent> = {
  home: {
    eyebrow: eyebrowMain,
    title: siteMetadata.authorName,
    description:
      "Tecnologia bem feita para transformar sua visão de negócio em realidade.",
    chips: [
      "Sites & Landing Pages",
      "Aplicativos Web & Mobile",
      "Sistemas Sob Medida",
      "Integrações e Automações",
    ],
  },
  blog: {
    eyebrow: `${eyebrowMain} > Blog`,
    title: "Blog",
    description:
      "Artigos sobre Programação, engenharia de software e tecnologia.",
    chips: ["TypeScript", "Next.js", "Node.js", "Golang", "Python"],
  },
  portfolio: {
    eyebrow: `${eyebrowMain} > Portfólio`,
    title: "Portfólio",
    description: "Projetos nos quais trabalhei e estou trabalhando.",
    chips: [
      "Sites & Landing Pages",
      "Aplicativos Web & Mobile",
      "Sistemas Sob Medida",
      "Integrações e Automações",
    ],
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
        backgroundColor: "#1a1817",
        fontFamily: "Saira",
      }}
    >
      {/* Barra lateral laranja */}
      <div
        style={{
          width: 14,
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
        {/* Topo: eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              width: 9,
              height: 9,
              backgroundColor: "#fd8540",
              flexShrink: 0,
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

        {/* Centro: logo + brand + título + descrição */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Logo principal */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <svg
              viewBox="0 0 65.635789 81.352625"
              width={105}
              height={130}
              fill="#fd8540"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-5353.4139,594.17151)">
                <path d="m 5402.6404,-594.17148 -16.4084,16.27028 v 16.27022 4.9e-4 16.27029 l 16.4084,-16.27029 v -16.27071 z m 0,32.54099 v 16.27029 9.4e-4 16.27019 16.27021 h 5e-4 l 16.4086,-16.27021 v -16.27118 -16.27029 -16.27068 z m -16.4084,16.27029 h -16.4086 -5e-4 v 9.4e-4 16.27019 h 16.4091 z m 0,-32.541 h -16.4091 l -16.4091,16.27071 h 16.4091 z" />
              </g>
            </svg>
            <span
              style={{
                fontFamily: "TransducerExtended",
                fontSize: 70,
                color: "#f5ece6",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              {siteMetadata.headerTitle}
            </span>
          </div>

          {/* Título da página (para posts/projetos) */}
          {content.title !== siteMetadata.authorName ? (
            <h1
              style={{
                fontSize:
                  content.title.length > 50
                    ? 48
                    : content.title.length > 30
                      ? 58
                      : 68,
                fontWeight: 700,
                color: "#fd8540",
                lineHeight: 1,
                margin: 0,
                letterSpacing: "-0.02em",
                whiteSpace: "pre-wrap",
                maxWidth: 900,
              }}
            >
              {content.title}
            </h1>
          ) : null}

          {/* Descrição */}
          {content.description ? (
            <p
              style={{
                fontSize:
                  content.description.length > 120
                    ? 22
                    : content.description.length > 80
                      ? 28
                      : 35,
                color: "#f5ece6",
                opacity: 0.55,
                margin: 0,
                maxWidth: 820,
                lineHeight: 1.45,
              }}
            >
              {content.description}
            </p>
          ) : null}
        </div>

        {/* Rodapé: chips */}
        <div style={{ display: "flex", gap: 10 }}>
          {content.chips.slice(0, 5).map((chip) => (
            <span
              key={chip}
              style={{
                fontSize: 16,
                color: "#f5ece6",
                backgroundColor: "#3d200e",
                padding: "6px 16px",
                borderRadius: 3,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}

/*

URLS PARA TESTAR EM DEV:

Páginas estáticas:

http://localhost:3000/og?page=home
http://localhost:3000/og?page=blog
http://localhost:3000/og?page=portfolio

Projetos:

http://localhost:3000/og?project=meu-site
http://localhost:3000/og?project=desgruda
http://localhost:3000/og?project=itver
http://localhost:3000/og?project=binary-shift
http://localhost:3000/og?project=bettha
http://localhost:3000/og?project=sofista
http://localhost:3000/og?project=mimo
http://localhost:3000/og?project=abyss

Blog posts:

http://localhost:3000/og?post=bits
http://localhost:3000/og?post=angular-bindings
http://localhost:3000/og?post=laravel-primeiras-impressoes

*/
