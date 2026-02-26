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

type ExtraImageInfo = {
  internalProject: string;
  title: string;
  imgAddress: StaticImageData;
};

export interface Project {
  title: string;
  subtitle?: string;
  excerpt: string;
  slug: string;
  image: StaticImageData;
  extraImages?: ExtraImageInfo[];
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
