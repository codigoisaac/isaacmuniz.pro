import { StaticImageData } from "next/image";
import { TechID } from "./techStack";

// Project images
import imgMySite from "@/assets/images/portfolio/mySite.png";
import imgMyOldSite from "@/assets/images/portfolio/myOldSite.png";
import imgBinaryShift from "@/assets/images/portfolio/binaryShift.png";

export interface Project {
  name: string;
  excerpt: string;
  image: StaticImageData;
  link: string;
  description: string[];
  tech: TechID[];
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
    date: "Mar/2022",
  },
];

export default portfolio;
