import { Project } from "@/interfaces/portfolio";
// Project images
import imgBinaryShift from "@/assets/images/portfolio/binaryShift.png";
import imgDesgruda from "@/assets/images/portfolio/desgruda.png";
import imgMyOldSite from "@/assets/images/portfolio/myOldSite.png";
import imgMySite from "@/assets/images/portfolio/mySite.png";

const portfolio: Project[] = [
  {
    title: "Meu Site",
    excerpt: "Officia sit ex eu excepteur sunt magna tempor cillum ex culpa.",
    slug: "meu-site",
    image: imgMySite,
    link: "https://isaacmuniz.vercel.app",
    description: [
      "Nisi do voluptate aliquip fugiat aliqua fugiat ut qui ex non enim minim.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "daisyui", "ts"],
    tags: ["Website", "Open Source"],
    date: "2026",
  },

  {
    title: "Desgruda",
    excerpt:
      "Nostrud excepteur qui id ipsum aliqua irure pariatur nisi veniam.",
    slug: "desgruda",
    image: imgDesgruda,
    link: "https://marketplace.visualstudio.com/items?itemName=IsaacMuniz.desgruda",
    description: [
      "Nisi do voluptate aliquip fugiat aliqua fugiat ut qui ex non enim minim.",
    ],
    tech: ["ts", "vscode"],
    tags: ["Extensão p/ VSCode", "Open Source"],
    date: "2026",
  },

  {
    title: "Meu Site Antigo",
    excerpt:
      "Elit eu enim id nostrud magna voluptate minim nulla duis culpa Lorem ad consectetur proident.",

    slug: "meu-site-antigo",
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
    title: "BinaryShift",
    excerpt:
      "Um app que traduz código binário em texto, e texto em código binário.",
    slug: "binary-shift",
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
