// Notifica o IndexNow sobre todas as URLs do site após o build.
// Roda automaticamente pelo script "build"

import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const KEY = "2bb0b8b4d83240fb96325cc7d64149b9"; // chave pública por design, sem problema em commitar
const HOST = "isaacmuniz.pro";
const BASE_URL = `https://${HOST}`;

// Lê slugs de blog a partir dos arquivos .md
const blogPostsDir = join(process.cwd(), "data", "blog-posts");
const blogSlugs = readdirSync(blogPostsDir)
  .filter((f) => f.endsWith(".md"))
  .filter((f) => {
    const content = readFileSync(join(blogPostsDir, f), "utf-8");
    return !content.includes("isDraft: true");
  })
  .map((f) => f.replace(/\.md$/, ""));

// Lê slugs de projetos a partir do arquivo portfolio.ts via regex
const portfolioFile = readFileSync(
  join(process.cwd(), "data", "portfolio.ts"),
  "utf-8",
);
const projectSlugs = [
  ...portfolioFile.matchAll(/slug:\s*["']([^"']+)["']/g),
].map((match) => match[1]);

const allUrls = [
  BASE_URL,
  `${BASE_URL}/portfolio`,
  `${BASE_URL}/blog`,
  ...projectSlugs.map((slug) => `${BASE_URL}/portfolio/${slug}`),
  ...blogSlugs.map((slug) => `${BASE_URL}/blog/${slug}`),
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE_URL}/${KEY}.txt`,
  urlList: allUrls,
};

console.log(`IndexNow: enviando ${allUrls.length} URLs...`);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (response.status === 200 || response.status === 202) {
  console.log(`IndexNow: sucesso (${response.status}).`);
  allUrls.forEach((url) => console.log(`  ${url}`));
} else {
  const body = await response.text();
  // Não quebra o build
  console.warn(`IndexNow: aviso ${response.status}: ${body}`);
}
