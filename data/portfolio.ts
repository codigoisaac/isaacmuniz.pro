import { StaticImageData } from "next/image";
import { TechID } from "./techStack";

// Project images
import imgMySite from "@/assets/images/portfolio/mySite.png";
import imgDesgruda from "@/assets/images/portfolio/desgruda.png";
import imgMyOldSite from "@/assets/images/portfolio/myOldSite.png";
import imgBinaryShift from "@/assets/images/portfolio/binaryShift.png";

type Tag = "Web App" | "Website" | "Extensão p/ VSCode";

export interface Project {
  name: string;
  excerpt: string;
  image: StaticImageData;
  link: string;
  description: string[];
  tech: TechID[];
  tags: Tag[];
  date: string;
}

const portfolio: Project[] = [
  {
    name: "Meu Site",
    excerpt: "Officia sit ex eu excepteur sunt magna tempor cillum ex culpa.",
    image: imgMySite,
    link: "https://isaacmuniz.vercel.app",
    description: [
      "Nisi do voluptate aliquip fugiat aliqua fugiat ut qui ex non enim minim.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "daisyui", "ts"],
    tags: ["Website"],
    date: "2026",
  },

  {
    name: "Desgruda",
    excerpt:
      "Nostrud excepteur qui id ipsum aliqua irure pariatur nisi veniam.",
    image: imgDesgruda,
    link: "https://marketplace.visualstudio.com/items?itemName=IsaacMuniz.desgruda",
    description: [
      "Nisi do voluptate aliquip fugiat aliqua fugiat ut qui ex non enim minim.",
    ],
    tech: ["ts", "vscode"],
    tags: ["Extensão p/ VSCode"],
    date: "2026",
  },

  {
    name: "Meu Site Antigo",
    excerpt:
      "Elit eu enim id nostrud magna voluptate minim nulla duis culpa Lorem ad consectetur proident.",
    image: imgMyOldSite,
    link: "https://isaacmuniz.vercel.app",
    description: [
      "Nisi do voluptate aliquip fugiat aliqua fugiat ut qui ex non enim minim.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "ts"],
    tags: ["Website"],
    date: "2023",
  },

  {
    name: "BinaryShift",
    excerpt:
      "Um app que traduz código binário em texto, e texto em código binário.",
    image: imgBinaryShift,
    link: "https://binaryshift.netlify.app/",
    description: [
      "Eu precisava de um app para transformar texto em código binário e vice-versa.",
      "Eu também precisava aprender Redux...",
      "Resolvi ambos os problemas fazendo um simples web app - BinaryShift.",
    ],
    tech: ["js", "react", "redux", "tailwindcss"],
    tags: ["Web App"],
    date: "2022",
  },
];

export default portfolio;
