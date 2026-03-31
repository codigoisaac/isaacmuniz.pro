// Responsabilidade: todo o conteúdo textual de SEO e funções utilitárias.
// Regra: se for ajustar como o Google te vê (copy, keywords) → aqui.
// Regra: se for eliminar repetição de padrões de metadata → aqui também.

import siteMetadata from "@/data/siteMetadata";

// ─── Conteúdo global ──────────────────────────────────────────────────────────

export const seoTitle = "Isaac Muniz | Desenvolvedor Web & Mobile";

export const seoDescription =
  "Desenvolvedor com 5 anos de experiência construindo sites, apps e sistemas que resolvem problemas reais e são um prazer de usar.";

// Keywords abrangentes — cobrindo todos os perfis de busca:
// clientes buscando serviços, recrutadores buscando tech, buscas por localidade.
export const baseKeywords: string[] = [
  // ── Serviços (como clientes buscam) ──
  "desenvolvimento de sites",
  "criação de sites",
  "fazer um site",
  "criar site profissional",
  "site para empresa",
  "landing page profissional",
  "desenvolvimento de aplicativos",
  "criação de aplicativos",
  "criar aplicativo",
  "fazer um app",
  "app para empresa",
  "desenvolvimento de sistemas",
  "sistema web sob medida",
  "sistema para empresa",
  "desenvolvimento de e-commerce",
  "loja virtual",

  // ── Contratação (como clientes e recrutadores buscam) ──
  "contratar desenvolvedor web",
  "contratar desenvolvedor fullstack",
  "contratar programador",
  "programador freelancer",
  "desenvolvedor freelancer",
  "freelancer web",
  "freelancer app",
  "freelancer sistema",
  "quanto custa um site",
  "quanto custa um app",
  "orçamento site",
  "orçamento aplicativo",

  // ── Cargo / perfil (como recrutadores buscam) ──
  "desenvolvedor fullstack",
  "desenvolvedor frontend",
  "desenvolvedor backend",
  "desenvolvedor mobile",
  "engenheiro de software",
  "engenheiro frontend",
  "software engineer brasil",
  "desenvolvedor pleno",
  "desenvolvedor sênior",
  "desenvolvedor remoto",
  "desenvolvedor disponível",
  "vaga desenvolvedor react",
  "vaga desenvolvedor fullstack",

  // ── Tecnologias (quem busca por stack específica) ──
  "desenvolvedor React",
  "desenvolvedor React.js",
  "desenvolvedor Next.js",
  "desenvolvedor Node.js",
  "desenvolvedor TypeScript",
  "desenvolvedor Flutter",
  "desenvolvedor NestJS",
  "desenvolvedor GraphQL",
  "desenvolvedor PHP",
  "desenvolvedor Laravel",
  "programador React",
  "programador Node.js",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Flutter",

  // ── Localidade ──
  "desenvolvedor Limeira",
  "desenvolvedor Limeira SP",
  "desenvolvedor Campinas",
  "desenvolvedor São Paulo",
  "desenvolvedor interior SP",
  "freelancer Limeira",
  "programador Limeira",
  "desenvolvimento de sites Limeira",
  "criação de sites Limeira",
  "desenvolvimento de sites São Paulo",

  // ── Marca pessoal ──
  "Isaac Muniz",
  "isaacmuniz.pro",
  "imuniz",
  "imunizpro",
  "imuniz.pro",
];

// ─── Config da OG image padrão ────────────────────────────────────────────────

export const defaultOgImage = {
  url: buildOgImageUrl({ page: "home" }),
  width: 1200,
  height: 630,
  alt: `${siteMetadata.authorName} | Desenvolvedor Web & Mobile`,
};

// ─── Utilitários ─────────────────────────────────────────────────────────────
// Funções que eliminam padrões repetidos nos arquivos de metadata.

// Formata o título OG de uma página interna.
// Exemplo: buildOgTitle("Portfolio") → "Portfolio | Isaac Muniz"
// O layout.tsx usa um template que faz isso para o <title> HTML,
// mas o Open Graph não usa esse template — precisa ser explícito.
export function buildOgTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteMetadata.headerTitle}`;
}

// Monta o objeto Twitter Card padrão para qualquer página.
// Todas as páginas usam o mesmo card type e a mesma imagem.
// Só title e description mudam — por isso são os únicos parâmetros.
export function buildTwitterMeta(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [defaultOgImage.url],
    creator: `@${siteMetadata.socials.twitterHandle}`,
  };
}

// Monta o canonical URL de uma página a partir do path.
// Exemplo: buildCanonical("/portfolio") → { canonical: "https://isaacmuniz.pro/portfolio" }
export function buildCanonical(path: string) {
  return {
    canonical: `${siteMetadata.siteUrl}${path}`,
  };
}

// Keywords que identificam o autor — adicionadas em páginas de conteúdo
// (posts, projetos) para ranquear buscas pelo nome do criador.
export const authorKeywords: string[] = [
  siteMetadata.authorName,
  "isaacmuniz.pro",
  "portfolio desenvolvedor",
];

export function buildOgImageUrl(
  params: { page: string } | { post: string } | { project: string },
): string {
  const qs = new URLSearchParams(params);
  return `${siteMetadata.siteUrl}/og?${qs.toString()}`;
}
