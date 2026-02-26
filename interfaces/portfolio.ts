import { StaticImageData } from "next/image";

export type TechID =
  | "js"
  | "react"
  | "nextjs"
  | "redux"
  | "tailwindcss"
  | "html"
  | "css"
  | "ts"
  | "node"
  | "docker"
  | "express"
  | "mysql"
  | "sequelize"
  | "bootstrap"
  | "daisyui"
  | "vscode"
  | "bun"
  | "gsap"
  | "motion"
  | "markdown"
  | "notion"
  | "babel"
  | "zustand"
  | "zod"
  | "reacthookform"
  | "npmpackages";

type Tag =
  | "Web App"
  | "Website"
  | "Extensão p/ VSCode"
  | "Open Source"
  | "Colaboração";

export type SubjectItem = {
  title: string;
  image: StaticImageData;
  description?: string;
};

type Subject = {
  title: string;
  items: SubjectItem[];
};

export interface Project {
  title: string;
  subtitle?: string;
  excerpt: string;
  slug: string;
  image: StaticImageData;
  subjects?: Subject[];
  link: string;
  repoLink?: string;
  description: string[];
  tech: TechID[];
  tags: Tag[];
  date: string;
}

export interface TechItem {
  name: string;
  image: StaticImageData;
}
