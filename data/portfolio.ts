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
      "Minha casa digital, que centraliza meu portfólio e escritos técnicos, priorizando uma estética refinada e uma experiência de leitura impecável.",
    slug: "meu-site",
    image: imgMySite,
    link: "https://isaacmuniz.pro",
    repoLink: "https://github.com/codigoisaac/my-app/",
    description: [
      "Este projeto é construído com Next.js 16, React 19, TailwindCSS 4 e DaisyUI 5, utilizando o runtime Bun para um ambiente de desenvolvimento veloz e moderno. A arquitetura foi pensada para longevidade e alta performance, com foco especial na experiência de leitura.",
      "O blog é alimentado por arquivos Markdown locais processados com gray-matter, remark e remark-gfm, com syntax highlighting otimizado via PrismLight e registro seletivo de linguagens para manter o bundle enxuto. A tipografia e o layout de leitura foram cuidadosamente trabalhados para que o conteúdo técnico seja consumido com conforto e clareza.",
      "O projeto conta com temas DaisyUI autorais usando tokens de cor em OKLCH. A escolha de tema do usuário persiste no localStorage e o site respeita o prefers-color-scheme do sistema operacional do usuário.",
      "A experiência visual é complementada por animações construídas com GSAP e Motion, com transições suaves e carregamento progressivo de imagens.",
      "Para mim, este site é a materialização da minha identidade profissional: um manifesto de que software pode ser belo, funcional e tecnicamente impecável.",
    ],
    tech: [
      "nextjs",
      "react",
      "tailwindcss",
      "daisyui",
      "ts",
      "motion",
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
      "Site institucional para uma empresa industrial brasileira com 30 anos de mercado, desenvolvido com foco em apresentar um catálogo técnico complexo com alta qualidade de UI/UX.",
    slug: "itver",
    image: imgItver,
    link: "https://itver.com.br/",
    description: [
      "A ITVER é uma empresa brasileira com três décadas de atuação no desenvolvimento de soluções de alta performance para manutenção mecânica industrial, atendendo gigantes como Klabin, Suzano, Bracell e Stora Enso. O desafio era claro: substituir um site desatualizado por uma presença digital que estivesse à altura da seriedade técnica da marca.",
      "O site foi desenvolvido com Next.js 16, React 19 e TailwindCSS 4, priorizando performance, SEO e responsividade total. A arquitetura foi pensada para longevidade — com foco em velocidade de carregamento, especialmente em dispositivos móveis.",
      "O ponto central do projeto é a seção de produtos: um catálogo técnico com múltiplos produtos distribuídos por categorias, com um sistema de filtragem e modais detalhados para cada item. A navegação foi estruturada em página única para evitar carregamentos desnecessários e maximizar a retenção do usuário, o que é crítico para um público B2B altamente técnico.",
      "Todo o conteúdo descritivo dos produtos é renderizado via Markdown com react-markdown, permitindo formatação rica — listas, destaques e fórmulas químicas — sem abrir mão da clareza visual. A integração com WhatsApp foi implementada diretamente nos cards e modais dos produtos, reduzindo o atrito entre o interesse do cliente e o contato comercial. O formulário de contato utiliza Resend para envio de e-mails direto do site.",
      "A identidade visual do site foi construída com foco no equilíbrio entre autoridade industrial e modernidade: tipografia sólida, sistema de dark mode via next-themes, micro-interações sutis e uma paleta que transmite confiabilidade técnica.",
    ],
    tech: ["nextjs", "react", "ts", "tailwindcss", "resend"],
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
        showOnHome: true,
        homeTitle: "Portal de candidatos de recrutamento em larga escala",
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
        showOnHome: true,
        homeTitle: "ATS e plataforma de gestão de vagas para empresas",
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
      "Plataforma de ensino online que chegou a ter mais de 10.000 alunos, onde atuei como engenheiro fullstack mantendo e escalando uma arquitetura de microsserviços crítica para o negócio.",
    slug: "sofista",
    image: imgSofista,
    link: "https://sofista.com.br/",
    description: [
      "A Sofista Learning é uma plataforma de ensino online que, durante minha atuação, contava com mais de 10.000 alunos ativos. O desafio técnico central era manter e evoluir uma arquitetura de microsserviços com 5 serviços independentes em Node.js e Express, garantindo alta disponibilidade para sistemas críticos como processamento de pagamentos via Pagar.me e o motor de questões da plataforma.",
      "Uma das contribuições mais relevantes foi a otimização do sistema de ranking de usuários, que apresentava gargalos sérios de performance. Ao identificar as limitações do Sequelize para consultas complexas, refatorei a lógica para SQL puro otimizado com estratégias avançadas de indexação e cache, resultando em um aumento de 40% na performance do sistema.",
      "Além da infraestrutura, modelei um ecossistema completo de notificações, desenhando o schema e as APIs RESTful para gerenciar interações de comunidade de alta frequência e feedback de alunos.",
      "No frontend, desenvolvi dashboards com uso intensivo de dados utilizando React e Redux, entregando métricas de desempenho em tempo real e análises de simulados para uma experiência de aprendizado interativa e orientada a dados.",
    ],
    subjects: [
      {
        title: "Um pouco sobre a Plataforma",
        showOnHome: true,
        homeTitle: "Plataforma de treinamento para vestibulares",
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
      "Aplicativo de saúde e benefícios para Android e iOS, onde atuei como engenheiro fullstack contribuindo com funcionalidades core tanto no app mobile quanto no portal web integrado.",
    slug: "mimo",
    image: imgMimo,
    link: "https://mimobeneficios.com/",
    description: [
      "O Mimo Benefícios é um aplicativo de saúde para Android e iOS. Atuei como engenheiro fullstack no projeto, com responsabilidades que abrangeram tanto o desenvolvimento mobile quanto o backend e o portal web.",
      "No mobile, implementei interfaces complexas e módulos de gestão de saúde utilizando Flutter com o padrão BLoC para gerenciamento de estado, priorizando uma experiência de usuário fluida e consistente entre as plataformas Android e iOS.",
      "No backend, trabalhei com uma API GraphQL construída em NestJS com TypeORM e PostgreSQL, gerenciando resolvers e esquemas para lidar com dados médicos e de saúde dos usuários.",
      "Colaborei também na integração entre o aplicativo móvel e o portal web em Next.js para viabilizar fluxos unificados de registro de usuários e processamento de pagamentos via Vindi.",
    ],
    subjects: [
      {
        title: "Imagens ilustrativas do App",
        showOnHome: true,
        homeTitle: "App mobile de saúde e benefícios para Android e iOS",
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
      "flutter",
      "nextjs",
      "react",
      "ts",
      "nest",
      "node",
      "postgresql",
      "graphql",
      "vindi",
    ],
    tags: ["Aplicativo Mobile", "Aplicativo Web", "Colaboração"],
    date: "2024 - 2025",
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
      "Aplicação de desenho interativo no navegador para criação de arte abstrata, construída com HTML Canvas, JavaScript e CSS.",
    slug: "abyss",
    image: imgAbyss,
    link: "https://codigoisaac.github.io/Abyss/",
    repoLink: "https://github.com/codigoisaac/abyss",
    description: [
      "O Abyss é uma aplicação de desenho criativo que roda inteiramente no navegador, construída com HTML Canvas, JavaScript e CSS puro — sem frameworks ou dependências externas.",
      "O projeto oferece um conjunto rico de controles para a experiência de desenho: transições automáticas de cor pelo espectro HSL ou ajuste manual de matiz, saturação e luminosidade; largura de linha dinâmica ou fixa; modo de pontos conectados para traçados retos entre cliques; e um efeito de sombra com blend mode multiply para criar profundidade nas sobreposições.",
      "A interface de controles pode ser ocultada com a barra de espaço, permitindo uma experiência de desenho sem distrações com tela cheia.",
      "Um detalhe que me deixa feliz: apresentei o app pro meu filho, e de vez em quando ele pede para abrí-lo para desenhar. Ver uma criança se divertir com algo que você construiu do zero é uma das melhores recompensas que um projeto pode dar.",
    ],
    tech: ["js", "css", "html"],
    tags: ["Aplicativo Web", "Open Source"],
    date: "2020",
  },
];

export const allProjects: Project[] = [
  ...portfolioAuthorial,
  ...portfolioColab,
  ...portfolioOthers,
];
