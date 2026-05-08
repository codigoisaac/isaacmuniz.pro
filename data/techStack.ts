import { TechID, TechItem } from "@/interfaces/portfolio";

import babel from "@/assets/images/techStack/babel.png";
// Tech icons
import bootstrap from "@/assets/images/techStack/bootstrap.webp";
import django from "@/assets/images/techStack/django.svg";
import drf from "@/assets/images/techStack/drf.png";
import php from "@/assets/images/techStack/php.svg";
import expo from "@/assets/images/techStack/expo.svg";
import golang from "@/assets/images/techStack/golang.svg";
import python from "@/assets/images/techStack/python.svg";
import reactnative from "@/assets/images/techStack/reactnative.svg";
import bun from "@/assets/images/techStack/bun.png";
import css from "@/assets/images/techStack/css.webp";
import daisyui from "@/assets/images/techStack/daisyui.png";
import docker from "@/assets/images/techStack/docker.webp";
import express from "@/assets/images/techStack/express.webp";
import flutter from "@/assets/images/techStack/flutter.svg";
import graphql from "@/assets/images/techStack/graphql.svg";
import gsap from "@/assets/images/techStack/gsap.png";
import html from "@/assets/images/techStack/html.webp";
import js from "@/assets/images/techStack/js.webp";
import markdown from "@/assets/images/techStack/markdown.png";
import motion from "@/assets/images/techStack/motion.png";
import mysql from "@/assets/images/techStack/mysql.webp";
import nest from "@/assets/images/techStack/nest.svg";
import nextjs from "@/assets/images/techStack/nextjs.svg";
import node from "@/assets/images/techStack/node.svg";
import notion from "@/assets/images/techStack/notion.png";
import npmpackages from "@/assets/images/techStack/npm-packages.png";
import openapi from "@/assets/images/techStack/openapi.svg";
import pagarme from "@/assets/images/techStack/pagarme.png";
import postgresql from "@/assets/images/techStack/postgresql.svg";
import react from "@/assets/images/techStack/react.svg";
import reacthookform from "@/assets/images/techStack/react-hook-form.png";
import redux from "@/assets/images/techStack/redux.webp";
import resend from "@/assets/images/techStack/resend.svg";
import sequelize from "@/assets/images/techStack/sequelize.webp";
import swagger from "@/assets/images/techStack/swagger.svg";
import tailwindcss from "@/assets/images/techStack/tailwindcss.svg";
import ts from "@/assets/images/techStack/ts.svg";
import vindi from "@/assets/images/techStack/vindi.png";
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
  postgresql: { name: "PostgreSQL", image: postgresql },
  flutter: { name: "Flutter", image: flutter },
  nest: { name: "NestJS", image: nest },
  graphql: { name: "GraphQL", image: graphql },
  pagarme: { name: "Pagar.me", image: pagarme },
  vindi: { name: "Vindi", image: vindi },
  openapi: { name: "OpenAPI", image: openapi },
  swagger: { name: "Swagger", image: swagger },
  resend: { name: "Resend", image: resend },
  python: { name: "Python", image: python },
  django: { name: "Django", image: django },
  drf: { name: "Django REST Framework", image: drf },
  golang: { name: "Go", image: golang },
  reactnative: { name: "React Native", image: reactnative },
  expo: { name: "Expo", image: expo },
  php: { name: "PHP", image: php },
};

export default techStack;
