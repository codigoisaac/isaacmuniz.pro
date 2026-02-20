import { TechID, TechItem } from "@/interfaces/portfolio";

import babel from "@/assets/images/techStack/babel.png";
// Tech icons
import bootstrap from "@/assets/images/techStack/bootstrap.webp";
import bun from "@/assets/images/techStack/bun.png";
import css from "@/assets/images/techStack/css.webp";
import daisyui from "@/assets/images/techStack/daisyui.png";
import docker from "@/assets/images/techStack/docker.webp";
import express from "@/assets/images/techStack/express.webp";
import gsap from "@/assets/images/techStack/gsap.png";
import html from "@/assets/images/techStack/html.webp";
import js from "@/assets/images/techStack/js.webp";
import markdown from "@/assets/images/techStack/markdown.png";
import motion from "@/assets/images/techStack/motion.png";
import mysql from "@/assets/images/techStack/mysql.webp";
import nextjs from "@/assets/images/techStack/nextjs.webp";
import node from "@/assets/images/techStack/node.webp";
import notion from "@/assets/images/techStack/notion.png";
import npmpackages from "@/assets/images/techStack/npm-packages.png";
import react from "@/assets/images/techStack/react.webp";
import reacthookform from "@/assets/images/techStack/react-hook-form.png";
import redux from "@/assets/images/techStack/redux.webp";
import sequelize from "@/assets/images/techStack/sequelize.webp";
import tailwindcss from "@/assets/images/techStack/tailwindcss.webp";
import ts from "@/assets/images/techStack/ts.webp";
import vscode from "@/assets/images/techStack/vscode.png";
import zod from "@/assets/images/techStack/zod.png";
import zustand from "@/assets/images/techStack/zustand.png";

const techStack: Record<TechID, TechItem> = {
  js: { name: "JavaScript", image: js },
  react: { name: "React", image: react },
  nextjs: { name: "Next.js", image: nextjs },
  redux: { name: "Redux", image: redux },
  tailwindcss: { name: "TailwindCSS", image: tailwindcss },
  html: { name: "HTML", image: html },
  css: { name: "CSS", image: css },
  ts: { name: "TypeScript", image: ts },
  node: { name: "Node.js", image: node },
  docker: { name: "Docker", image: docker },
  express: { name: "Express.js", image: express },
  mysql: { name: "MySQL", image: mysql },
  sequelize: { name: "Sequelize", image: sequelize },
  bootstrap: { name: "Bootstrap", image: bootstrap },
  daisyui: { name: "daisyUI", image: daisyui },
  vscode: { name: "VSCode API", image: vscode },
  bun: { name: "Bun", image: bun },
  gsap: { name: "GSAP", image: gsap },
  motion: { name: "Motion", image: motion },
  markdown: { name: "Markdown", image: markdown },
  notion: { name: "Notion API", image: notion },
  babel: { name: "Babel", image: babel },
  zustand: { name: "Zustand", image: zustand },
  zod: { name: "Zod", image: zod },
  reacthookform: { name: "React Hook Form", image: reacthookform },
  npmpackages: { name: "NPM Packages", image: npmpackages },
};

export default techStack;
