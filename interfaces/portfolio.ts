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
  | "npmpackages"
  | "postgresql"
  | "flutter"
  | "nest"
  | "graphql"
  | "pagarme"
  | "vindi"
  | "openapi"
  | "swagger"
  | "resend"
  | "python"
  | "django"
  | "golang"
  | "reactnative"
  | "expo"
  | "php";

type Tag =
  | "Aplicativo Web"
  | "Aplicativo Mobile"
  | "Website"
  | "Extensão p/ VSCode"
  | "Open Source"
  | "Colaboração";

export type SubjectItem = {
  title: string;
  image?: StaticImageData;
  video?: string;
  description?: string;
  containImageSize?: boolean;
};

type Subject = {
  title: string;
  items: SubjectItem[];
  showOnHome?: boolean;
  homeTitle?: string;
  showcaseOrder?: number;
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
  isFeaturedProject?: boolean;
}

export interface TechItem {
  name: string;
  image: StaticImageData;
}
