import { StaticImageData } from "next/image";

// Tech icons
import bootstrap from "@/assets/images/techStack/bootstrap.webp";
import css from "@/assets/images/techStack/css.webp";
import docker from "@/assets/images/techStack/docker.webp";
import express from "@/assets/images/techStack/express.webp";
import html from "@/assets/images/techStack/html.webp";
import js from "@/assets/images/techStack/js.webp";
import mysql from "@/assets/images/techStack/mysql.webp";
import nextjs from "@/assets/images/techStack/nextjs.webp";
import node from "@/assets/images/techStack/node.webp";
import react from "@/assets/images/techStack/react.webp";
import redux from "@/assets/images/techStack/redux.webp";
import sequelize from "@/assets/images/techStack/sequelize.webp";
import tailwindcss from "@/assets/images/techStack/tailwindcss.webp";
import ts from "@/assets/images/techStack/ts.webp";
import daisyui from "@/assets/images/techStack/daisyui.png";

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
  | "daisyui";

export interface TechItem {
  name: string;
  image: StaticImageData;
}

const techStack: Record<TechID, TechItem> = {
  js: {
    name: "JavaScript",
    image: js,
  },
  react: {
    name: "React",
    image: react,
  },
  nextjs: {
    name: "Next.js",
    image: nextjs,
  },
  redux: {
    name: "Redux",
    image: redux,
  },
  tailwindcss: {
    name: "TailwindCSS",
    image: tailwindcss,
  },
  html: {
    name: "HTML",
    image: html,
  },
  css: {
    name: "CSS",
    image: css,
  },
  ts: {
    name: "TypeScript",
    image: ts,
  },
  node: {
    name: "Node.js",
    image: node,
  },
  docker: {
    name: "Docker",
    image: docker,
  },
  express: {
    name: "Express.js",
    image: express,
  },
  mysql: {
    name: "MySQL",
    image: mysql,
  },
  sequelize: {
    name: "Sequelize",
    image: sequelize,
  },
  bootstrap: {
    name: "Bootstrap",
    image: bootstrap,
  },
  daisyui: {
    name: "daisyUI",
    image: daisyui,
  },
};

export default techStack;
