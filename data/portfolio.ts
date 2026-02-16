import { Project } from "@/interfaces/portfolio";
// Project images
import imgBinaryShift from "@/assets/images/portfolio/binaryShift.png";
import imgDesgruda from "@/assets/images/portfolio/desgruda.png";
import imgMyOldSite from "@/assets/images/portfolio/myOldSite.png";
import imgMySite from "@/assets/images/portfolio/mySite.png";

const portfolio: Project[] = [
  {
    title: "Meu Site",
    excerpt:
      "Minha casa digital, que centraliza meus escritos técnicos e portfólio, priorizando uma estética refinada e uma experiência de leitura impecável.",
    slug: "meu-site",
    image: imgMySite,
    link: "https://isaacmuniz.pro",
    description: [
      "Este projeto utiliza tecnologias de ponta como Next.js 16, React 19 e Tailwind CSS 4 em uma arquitetura pensada para longevidade, alta performance e uma experiência de usuário impecável.",
      "A gestão de conteúdo é feita através de arquivos locais em Markdown e FrontMatter, uma escolha estratégica para eliminar a latência de APIs externas e garantir a resiliência de imagens e textos, evitando a expiração de imagens, que às vezes acontecia no meu antigo site, usando a API do Notion.",
      "A interface utiliza DaisyUI para um sistema de temas consistente e ágil, complementada por animações sutis via GSAP e Motion, mantendo o equilíbrio entre o minimalismo profissional e a identidade de programador.",
      "O fluxo de desenvolvimento foi otimizado com o runtime Bun, permitindo um ambiente veloz e moderno para um site que serve como meu cartão de visitas definitivo e hub de conhecimento técnico.",
      "Para mim, este site é a materialização da minha identidade profissional: um manifesto de que o software pode ser belo, funcional e tecnicamente impecável. Ele representa o centro gravitacional da minha carreira.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "daisyui", "ts"],
    tags: ["Website", "Open Source"],
    date: "2026",
  },

  {
    title: "Desgruda",
    excerpt:
      "Extensão para VS Code que automatiza a organização visual de arquivos JSX/TSX, inserindo espaçamentos inteligentes entre elementos irmãos.",
    slug: "desgruda",
    image: imgDesgruda,
    link: "https://marketplace.visualstudio.com/items?itemName=IsaacMuniz.desgruda",
    description: [
      "O Desgruda é uma ferramenta de Developer Experience (DX) projetada para resolver o amontoamento visual em arquivos React, automatizando a separação de componentes com linhas em branco.",
      "A solução utiliza o @babel/parser para percorrer a Abstract Syntax Tree (AST) do código, identificando com precisão os elementos JSX irmãos e calculando as posições de inserção sem corromper a estrutura do arquivo.",
      "Para garantir edições performáticas e seguras, implementei a biblioteca MagicString, permitindo a manipulação inteligente de strings e a preservação da indentação original do desenvolvedor.",
    ],
    tech: ["ts", "vscode"],
    tags: ["Extensão p/ VSCode", "Open Source"],
    date: "2026",
  },

  {
    title: "Meu Portfolio V1",
    excerpt:
      "A primeira versão do meu portfolio autoral, desenvolvida para fundir design experimental com tecnologias modernas de desenvolvimento.",
    slug: "portfolio-v1",
    image: imgMyOldSite,
    link: "https://isaacmuniz.vercel.app",
    description: [
      "A V1 do meu portfólio foi concebido como um manifesto de design e engenharia, onde a estética retro-futurista de TVs analógicas e efeitos de glitch se fundem a uma arquitetura moderna e performática.",
      "Busquei equilibrar o minimalismo funcional com uma pegada brutalista, utilizando Next.js e TypeScript para construir uma interface altamente interativa que foge dos padrões convencionais de portfólios genéricos.",
      "Um dos pilares técnicos foi a integração com o Notion via API, transformando-o em um Headless CMS para gerenciar o conteúdo de forma dinâmica, sem sacrificar a liberdade artística do front-end customizado.",
      "Este projeto reflete minha crença de que o código é uma extensão da expressão criativa, demonstrando um rigoroso cuidado com a qualidade do software aliado a um senso estético refinado e autoral.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "ts"],
    tags: ["Website"],
    date: "2023",
  },

  {
    title: "BinaryShift",
    excerpt:
      "Uma ferramenta utilitária minimalista para tradução instantânea entre texto e binário, com interface reativa e lógica de estado centralizada.",
    slug: "binary-shift",
    image: imgBinaryShift,
    link: "https://binaryshift.netlify.app/",
    description: [
      "O BinaryShift é uma ferramenta utilitária desenvolvida para realizar a conversão bidirecional entre texto plano e código binário de forma instantânea.",
      "O projeto foi concebido como um estudo de caso para gerenciamento de estado complexo, utilizando Redux para garantir um fluxo de dados previsível e uma interface reativa.",
      "A interface foi construída com React e Tailwind CSS, priorizando a experiência do usuário (UX) com um design minimalista, responsivo e focado na legibilidade dos dados.",
    ],
    tech: ["js", "react", "redux", "tailwindcss"],
    tags: ["Web App"],
    date: "2022",
  },
];

export default portfolio;
