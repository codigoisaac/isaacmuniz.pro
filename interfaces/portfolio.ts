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
  | "babel";

type Tag = "Web App" | "Website" | "Extensão p/ VSCode" | "Open Source";

export interface Project {
  title: string;
  subtitle?: string;
  excerpt: string;
  slug: string;
  image: StaticImageData;
  link: string;
  description: string[];
  tech: TechID[];
  tags: Tag[];
  date: string;
}

export interface TechItem {
  name: string;
  image: StaticImageData;
}
