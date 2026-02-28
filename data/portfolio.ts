import { Project } from "@/interfaces/portfolio";
import imgAbyss from "@/assets/images/portfolio/abyss.png";
import imgBettha from "@/assets/images/portfolio/bettha/main.png";
import imgBetthaCandidates1 from "@/assets/images/portfolio/bettha/candidates/1.png";
import imgBetthaCandidates2 from "@/assets/images/portfolio/bettha/candidates/2.png";
import imgBetthaCandidates3 from "@/assets/images/portfolio/bettha/candidates/3.png";
import imgBetthaCandidates4 from "@/assets/images/portfolio/bettha/candidates/4.png";
import imgBetthaCompanies1 from "@/assets/images/portfolio/bettha/companies/1.png";
import imgBetthaCompanies2 from "@/assets/images/portfolio/bettha/companies/2.png";
import imgBetthaCompanies3 from "@/assets/images/portfolio/bettha/companies/3.png";
import imgBetthaCompanies4 from "@/assets/images/portfolio/bettha/companies/4.png";
import imgBetthaCompanies5 from "@/assets/images/portfolio/bettha/companies/5.png";
import imgBetthaGames1 from "@/assets/images/portfolio/bettha/games/esg.png";
import imgBetthaGames2 from "@/assets/images/portfolio/bettha/games/security.png";
import imgBinaryShift from "@/assets/images/portfolio/binaryShift.png";
import imgDesgruda from "@/assets/images/portfolio/desgruda.png";
import imgItver from "@/assets/images/portfolio/itver/main.png";
import imgMimo from "@/assets/images/portfolio/mimo/main.png";
import imgMimo1 from "@/assets/images/portfolio/mimo/1.png";
import imgMimo2 from "@/assets/images/portfolio/mimo/2.png";
import imgMimo3 from "@/assets/images/portfolio/mimo/3.png";
import imgMyOldSite from "@/assets/images/portfolio/myOldSite.png";
import imgMySite from "@/assets/images/portfolio/mySite.png";
import imgSofista from "@/assets/images/portfolio/sofista/main.png";
import imgSofista1 from "@/assets/images/portfolio/sofista/home.png";

export const portfolioAuthorial: Project[] = [
  {
    title: "Meu Site",
    excerpt:
      "Minha casa digital, que centraliza meus escritos técnicos e portfólio, priorizando uma estética refinada e uma experiência de leitura impecável.",
    slug: "meu-site",
    image: imgMySite,
    link: "https://isaacmuniz.pro",
    repoLink: "https://github.com/codigoisaac/my-app/",
    description: [
      "Este projeto utiliza tecnologias de ponta como Next.js 16, React 19 e Tailwind CSS 4 em uma arquitetura pensada para longevidade, alta performance e uma experiência de usuário impecável.",
      "A gestão de conteúdo é feita através de arquivos locais em Markdown e FrontMatter, uma escolha estratégica para eliminar a latência de APIs externas e garantir a resiliência de imagens e textos, evitando a expiração de imagens que ocorria no meu site anterior devido às URLs temporárias da API do Notion.",
      "A interface utiliza DaisyUI para um sistema de temas consistente e ágil, complementada por animações sutis via GSAP e Motion, mantendo o equilíbrio entre o minimalismo profissional e a identidade de programador.",
      "O fluxo de desenvolvimento foi otimizado com o runtime Bun, permitindo um ambiente veloz e moderno para um site que serve como meu cartão de visitas definitivo e hub de conhecimento técnico.",
      "Para mim, este site é a materialização da minha identidade profissional: um manifesto de que o software pode ser belo, funcional e tecnicamente impecável. Ele representa o centro gravitacional da minha carreira.",
    ],
    tech: [
      "nextjs",
      "react",
      "tailwindcss",
      "daisyui",
      "ts",
      "bun",
      "markdown",
    ],
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
    repoLink: "https://github.com/codigoisaac/desgruda/",
    description: [
      "O Desgruda é uma ferramenta de Developer Experience (DX) projetada para resolver o amontoamento visual em arquivos React, automatizando a separação de componentes com linhas em branco.",
      "A solução utiliza o @babel/parser para percorrer a Abstract Syntax Tree (AST) do código, identificando com precisão os elementos JSX irmãos e calculando as posições de inserção sem corromper a estrutura do arquivo.",
      "Para garantir edições performáticas e seguras, implementei a biblioteca MagicString, permitindo a manipulação inteligente de strings e a preservação da indentação original do desenvolvedor.",
    ],
    tech: ["ts", "vscode", "babel"],
    tags: ["Extensão p/ VSCode", "Open Source"],
    date: "2026",
    isFeaturedProject: true,
  },

  {
    title: "ITVER",
    excerpt:
      "Do labore minim officia irure. Ad quis aliqua ipsum non mollit consequat esse eiusmod culpa.",
    slug: "itver",
    image: imgItver,
    link: "https://itver.com.br/",
    description: [
      "Sint laboris minim nulla in ex culpa esse pariatur non. Tempor reprehenderit incididunt id quis labore est quis incididunt elit incididunt ad consectetur nisi non. Elit velit voluptate sint excepteur cupidatat reprehenderit aute. Irure mollit eu aute in adipisicing. Aliqua labore non quis sint cupidatat laboris ut nulla do sint. Velit officia amet amet veniam sit veniam proident esse tempor quis nulla voluptate. Aute velit aliqua duis occaecat minim voluptate ipsum qui fugiat magna dolor velit irure eiusmod.",
      "Magna minim cillum non ad dolore aliquip sint deserunt irure culpa laboris tempor. Aliquip nulla et officia commodo sint et ipsum commodo commodo in. Enim et eiusmod consectetur occaecat consectetur. Do id dolor culpa mollit adipisicing adipisicing. Reprehenderit quis quis labore consequat quis ea officia eu velit ut eiusmod dolore.",
    ],
    tech: ["nextjs", "react", "ts", "tailwindcss"],
    tags: ["Website"],
    date: "2026",
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
    tags: ["Aplicativo Web"],
    date: "2022",
  },
];

export const portfolioColab: Project[] = [
  {
    title: "Bettha.com",
    excerpt:
      "Engenharia de frontend para um ecossistema de recrutamento em larga escala, abrangendo plataformas B2B/B2C e jogos de avaliação via pacotes NPM.",
    slug: "bettha",
    image: imgBettha,
    subjects: [
      {
        title: "Plataforma de Candidatos",
        items: [
          {
            title: "Dash Desktop - Home",
            image: imgBetthaCandidates1,
          },
          {
            title: "Programas",
            image: imgBetthaCandidates2,
          },
          {
            title: "Empresas",
            image: imgBetthaCandidates3,
          },
          {
            title: "Página da Empresa",
            image: imgBetthaCandidates4,
          },
        ],
      },
      {
        title: "Plataforma para Empresas",
        items: [
          {
            title: "Acompanhamento da Vaga",
            image: imgBetthaCompanies1,
          },
          {
            title: "Gestão de Gestores e Testes",
            image: imgBetthaCompanies2,
          },
          {
            title: "Shortlists de Candidatos",
            image: imgBetthaCompanies3,
          },
          {
            title: "Uma das telas de criação de vaga",
            image: imgBetthaCompanies4,
          },
          {
            title: "Outra tela de criação de vaga",
            image: imgBetthaCompanies5,
          },
        ],
      },
      {
        title: "Testes Comportamentais em forma de Jogos",
        items: [
          {
            title: "ESG - Um jogo que testa sua memória",
            description:
              "O candidato precisa clicar nos botões na ordem exata da animação, antes do tempo acabar. De quebra, aprende sobre ESG (um conjunto de padrões e boas práticas que define se uma empresa é socialmente consciente, sustentável e corretamente gerenciada).",
            image: imgBetthaGames1,
          },
          {
            title:
              "Segurança do Trabalho - Um jogo que testa sua capacidade de priorização",
            description:
              "Nesse jogo o candidato precisa avaliar as imagens e símbolos, que representam problemas que podem acontecer em ambientes de trabalho, e organizá-los por ordem de mais emergenciais.",
            image: imgBetthaGames2,
          },
        ],
      },
    ],
    link: "https://www.bettha.com/",
    description: [
      "Atuei como um dos engenheiros de frontend no desenvolvimento do Portal do Candidato e da Plataforma de Gestão Empresarial (ATS). O foco nessas plataformas foi a construção de interfaces escaláveis integradas a uma arquitetura de microsserviços no backend, utilizando um Design System centralizado com Tailwind CSS para garantir a consistência entre os produtos.",
      "Para a parceira Cia de Talentos, desenvolvi Jogos de Avaliação (Assessments) baseados em navegador, utilizando Next.js e Zustand para o gerenciamento de estados complexos em tempo real, priorizando alta performance e baixa latência.",
      "Liderei a modularização exclusiva desses jogos em pacotes NPM privados, o que viabilizou a distribuição e integração das ferramentas em sistemas web legados da parceira, mantendo um controle rigoroso de versionamento e portabilidade.",
      "A qualidade técnica foi pautada no uso de TypeScript, Zod e React Hook Form para validação estrita de dados, aplicando os princípios de SOLID e Clean Code para assegurar a manutenibilidade das aplicações.",
      "Além da implementação técnica, contribuí para a maturidade operacional da equipe ao reestruturar fluxos de trabalho no Kanban e implementar o rastreamento de Pull Requests, otimizando a transparência e a previsibilidade das entregas de engenharia.",
    ],
    tech: [
      "nextjs",
      "react",
      "ts",
      "tailwindcss",
      "zustand",
      "zod",
      "reacthookform",
      "npmpackages",
      "openapi",
      "swagger",
    ],
    tags: ["Aplicativo Web", "Colaboração"],
    date: "2023 - 2024",
    isFeaturedProject: true,
  },

  {
    title: "Sofista Learning",
    excerpt:
      "Lorem ipsum fugiat do id veniam in in ad. Aliquip aliquip enim do nostrud minim aute labore Lorem. Anim labore est dolor nostrud ut exercitation cillum.",
    slug: "sofista",
    image: imgSofista,
    link: "https://sofista.com.br/",
    description: [
      "Fugiat anim ad exercitation adipisicing esse culpa nostrud eu amet nulla eu. Commodo proident qui cupidatat minim ad nostrud. Laborum ullamco consequat nostrud et aliqua. Ad occaecat eu nulla minim laborum do fugiat ex.",
      "Ut non aliqua cupidatat id deserunt ad enim et irure magna eu qui cupidatat. Enim voluptate aliquip officia sint ad. Aliqua minim ea irure elit amet nisi officia consequat aliqua cillum aliqua in incididunt. Labore et minim mollit officia tempor sit ullamco irure mollit. Aute id proident sint incididunt ex ea duis qui excepteur.",
      "Consectetur veniam ut sint fugiat reprehenderit reprehenderit nisi proident sunt do deserunt ut. Occaecat est mollit aliqua sit adipisicing aliquip et laborum esse nulla. Sit aliqua amet do nostrud proident mollit duis ex aliquip nulla do veniam sit et. Deserunt ullamco irure ad mollit nulla. Lorem eu reprehenderit amet consectetur eu proident. Ut cupidatat adipisicing nostrud nulla anim incididunt minim.",
      "Ex adipisicing commodo enim et aliqua aliqua mollit. Mollit laborum ut in cillum. Anim consectetur dolore exercitation cupidatat magna incididunt mollit velit sit dolore magna quis.",
      "Deserunt do deserunt eu ad nostrud. Cupidatat veniam sunt nulla cillum anim consectetur ad fugiat in nulla elit pariatur labore culpa. Enim do aliquip ut id qui ut proident et. Cillum ipsum officia nisi veniam. Ut ea aliquip occaecat nulla pariatur in in dolor fugiat tempor duis et officia Lorem.",
    ],
    subjects: [
      {
        title: "Um pouco sobre a Plataforma",
        items: [
          {
            title: "Conheça a Sofista",
            description:
              "Vídeo de apresentação da plataforma feito no período em que eu era um dos colaboradores do projeto. É muito legal para mim assistir isso e ver várias funcionalidades e interfaces que eu desenvolvi ou ajudei a desenvolver.",
            video: "/videos/sofista.mp4",
          },
          { title: "Home da plataforma", image: imgSofista1 },
        ],
      },
    ],
    tech: [
      "react",
      "js",
      "redux",
      "bootstrap",
      "reacthookform",
      "node",
      "express",
      "css",
      "mysql",
      "sequelize",
      "docker",
      "pagarme",
    ],
    tags: ["Aplicativo Web", "Colaboração"],
    date: "2022 - 2023",
  },

  {
    title: "Aplicativo Mimo Benefícios",
    excerpt:
      "Lorem ipsum fugiat do id veniam in in ad. Aliquip aliquip enim do nostrud minim aute labore Lorem. Anim labore est dolor nostrud ut exercitation cillum.",
    slug: "mimo",
    image: imgMimo,
    link: "https://mimobeneficios.com/",
    description: [
      "Fugiat anim ad exercitation adipisicing esse culpa nostrud eu amet nulla eu. Commodo proident qui cupidatat minim ad nostrud. Laborum ullamco consequat nostrud et aliqua. Ad occaecat eu nulla minim laborum do fugiat ex.",
      "Ut non aliqua cupidatat id deserunt ad enim et irure magna eu qui cupidatat. Enim voluptate aliquip officia sint ad. Aliqua minim ea irure elit amet nisi officia consequat aliqua cillum aliqua in incididunt. Labore et minim mollit officia tempor sit ullamco irure mollit. Aute id proident sint incididunt ex ea duis qui excepteur.",
      "Consectetur veniam ut sint fugiat reprehenderit reprehenderit nisi proident sunt do deserunt ut. Occaecat est mollit aliqua sit adipisicing aliquip et laborum esse nulla. Sit aliqua amet do nostrud proident mollit duis ex aliquip nulla do veniam sit et. Deserunt ullamco irure ad mollit nulla. Lorem eu reprehenderit amet consectetur eu proident. Ut cupidatat adipisicing nostrud nulla anim incididunt minim.",
      "Ex adipisicing commodo enim et aliqua aliqua mollit. Mollit laborum ut in cillum. Anim consectetur dolore exercitation cupidatat magna incididunt mollit velit sit dolore magna quis.",
      "Deserunt do deserunt eu ad nostrud. Cupidatat veniam sunt nulla cillum anim consectetur ad fugiat in nulla elit pariatur labore culpa. Enim do aliquip ut id qui ut proident et. Cillum ipsum officia nisi veniam. Ut ea aliquip occaecat nulla pariatur in in dolor fugiat tempor duis et officia Lorem.",
    ],
    subjects: [
      {
        title: "Imagens ilustrativas do App",
        items: [
          {
            title: "Home",
            image: imgMimo1,
            containImageSize: true,
          },
          {
            title: "Funcionalidades",
            image: imgMimo2,
            containImageSize: true,
          },
          {
            title: "Mimo Fit",
            image: imgMimo3,
            containImageSize: true,
          },
        ],
      },
    ],
    tech: [
      "nextjs",
      "react",
      "ts",
      "nest",
      "node",
      "flutter",
      "postgresql",
      "graphql",
      "vindi",
    ],
    tags: ["Aplicativo Mobile", "Aplicativo Web", "Colaboração"],
    date: "2022 - 2023",
  },
];

export const portfolioOthers: Project[] = [
  {
    title: "Meu Antigo Site",
    excerpt:
      "A primeira versão do meu portfolio autoral, desenvolvida para fundir design experimental com tecnologias modernas de desenvolvimento.",
    slug: "site-v1",
    image: imgMyOldSite,
    link: "https://isaacmuniz.vercel.app/",
    description: [
      "A V1 do meu site foi concebida como um manifesto de design e engenharia, onde a estética retro-futurista de TVs analógicas e efeitos de glitch se fundem a uma arquitetura moderna e performática.",
      "Busquei equilibrar o minimalismo funcional com uma pegada brutalista, utilizando Next.js e TypeScript para construir uma interface altamente interativa que foge dos padrões convencionais de portfólios genéricos.",
      "Um dos pilares técnicos foi a integração com o Notion via API, transformando-o em um Headless CMS para gerenciar o conteúdo de forma dinâmica, sem sacrificar a liberdade artística do front-end customizado.",
      "Este projeto reflete minha crença de que o código é uma extensão da expressão criativa, demonstrando um rigoroso cuidado com a qualidade do software aliado a um senso estético refinado e autoral.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "ts", "notion"],
    tags: ["Website"],
    date: "2023",
    isFeaturedProject: true,
  },

  {
    title: "Abyss",
    excerpt:
      "A primeira versão do meu portfolio autoral, desenvolvida para fundir design experimental com tecnologias modernas de desenvolvimento.",
    slug: "abyss",
    image: imgAbyss,
    link: "https://isaacmuniz.vercel.app/",
    description: [
      "A V1 do meu site foi concebida como um manifesto de design e engenharia, onde a estética retro-futurista de TVs analógicas e efeitos de glitch se fundem a uma arquitetura moderna e performática.",
      "Busquei equilibrar o minimalismo funcional com uma pegada brutalista, utilizando Next.js e TypeScript para construir uma interface altamente interativa que foge dos padrões convencionais de portfólios genéricos.",
      "Um dos pilares técnicos foi a integração com o Notion via API, transformando-o em um Headless CMS para gerenciar o conteúdo de forma dinâmica, sem sacrificar a liberdade artística do front-end customizado.",
      "Este projeto reflete minha crença de que o código é uma extensão da expressão criativa, demonstrando um rigoroso cuidado com a qualidade do software aliado a um senso estético refinado e autoral.",
    ],
    tech: ["nextjs", "react", "tailwindcss", "ts", "notion"],
    tags: ["Website"],
    date: "2023",
  },
];

export const allProjects: Project[] = [
  ...portfolioAuthorial,
  ...portfolioColab,
  ...portfolioOthers,
];
