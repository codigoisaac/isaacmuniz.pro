<p align="center">
  <img src="public/favicons/favicon-dark.svg" width="80" alt="Logo isaacmuniz.pro" />
</p>

<h1 align="center">isaacmuniz.pro</h1>

<p align="center">
  Meu portfólio pessoal e blog técnico — construído com Next.js 16, React 19, TailwindCSS 4 e DaisyUI 5.
  <br/>
  <a href="https://isaacmuniz.pro"><strong>isaacmuniz.pro →</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Bun-runtime-FBF0DF?logo=bun&logoColor=black" />
  <img src="https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightblue?logo=creativecommons&logoColor=white" />
</p>

## Sobre

Este é o código-fonte do meu site pessoal — um projeto feito com muito carinho, dedicação e perfeccionismo.

O site reúne portfólio e blog técnico em uma experiência visual refinada, com temas autorais criados via DaisyUI (light e dark), animações construídas com Motion, SEO de ponta a ponta (metadata por página, Open Graph dinâmico, JSON-LD Schema.org, sitemap automático), fontes carregadas localmente para máxima performance e Lighthouse scores acima de 90. Cada detalhe — da tipografia às micro-interações, do carrossel da homepage ao formulário de contato — foi pensado para criar uma ótima experiência de uso.

## Features

### 🗂️ Portfólio de projetos

- Sistema completo com três categorias (autorais, colaborações e outros).
- Cada projeto tem página própria gerada estaticamente, com descrição, galeria de imagens/vídeos e a stack técnica usada no projeto, com ícone de cada tecnologia.
- Os cards têm um efeito de hover compartilhado — ao passar o mouse em um card, os demais se atenuam, direcionando o foco do visitante e criando uma interação divertida.

### 🔧 Sistema de ícones de tecnologias

- Cada tecnologia é registrada em um mapa centralizado (`data/techStack.ts`) que associa um `TechID` tipado a um nome e ícone via `next/image`.
- Para adicionar um novo item basta uma entrada — ela se propaga automaticamente por todo o site.

### 🎠 Carrossel de projetos em destaque

- A homepage exibe um carrossel animado com os projetos mais relevantes.
- Avança automaticamente, com barra de progresso visual, pausa ao hover e navegação manual por setas e indicadores.

### ✍️ Blog baseado em Markdown

- Posts em `.md` locais processados com `gray-matter` e `remark`.
- Syntax highlighting com `PrismLight` com registro seletivo de linguagens para manter o bundle enxuto.
- Suporte a rascunhos via flag `isDraft`.

### 📬 Formulário de contato com envio de e-mail

- Formulário funcional com Server Action do Next.js, integrado ao [Resend](https://resend.com).
- Aceita nome, e-mail, mensagem, WhatsApp (com máscara brasileira) e empresa.
- O e-mail gerado inclui botão "Responder no WhatsApp" com mensagem pré-preenchida, para que eu possa facilmente responder a mensagem do cliente direto no WhatsApp dele.

### 🎨 Temas autorais com DaisyUI

- Dois temas feitos do zero — **"levitation"** (light) e **"nightflight"** (dark) — com paleta customizada.
- O tema persiste no `localStorage` e respeita `prefers-color-scheme`.

### 🪄 Favicon dinâmico

- O favicon alterna automaticamente entre as versões light e dark conforme o tema ativo.
- A troca acontece sem flash via script inline no `<head>`, executado antes da primeira renderização.

### ✨ Animações via Motion

- Animações com `motion/react`: entradas ao scroll, transições de página, efeito de texto scramble no header e micro-interações em botões e cards.
- Elementos above-the-fold usam apenas transforms (sem `opacity: 0`) para não interferir na detecção de LCP.

### 🔍 SEO e Structured Data

- Metadata por página com título, description e keywords.
- Twitter Cards e canonical URLs em todas as páginas.
- JSON-LD Schema.org injetado por página: `Person` + `WebSite` na home, `Article` nos posts do blog e `CreativeWork` nos projetos.
- O `robots.txt` bloqueia crawlers de IA (GPTBot, CCBot, Bytespider, etc.) enquanto permite Google e Bing.

### 🖼️ Open Graph images dinâmicas

- OG images geradas automaticamente para todas as páginas do site via `ImageResponse`.
- Cada página — home, projetos e artigos do blog — tem sua própria OG image com layout, tipografia e conteúdo únicos.
- As imagens incluem fontes customizadas, logo SVG e chips de tecnologia nos projetos.

### 🗺️ Sitemap dinâmico

- Sitemap XML gerado automaticamente a partir das páginas estáticas, projetos e posts do blog.
- Nenhuma manutenção manual necessária — novo conteúdo é indexado automaticamente.

### 🧭 Navegação inteligente

- Header sticky com glassmorphism e auto-hide — esconde ao scrollar para baixo, reaparece ao scrollar para cima.
- Diferencia scroll do usuário de scrolls programáticos para evitar comportamento errático durante transições no conteúdo do site.
- Em mobile, drawer fullscreen via Headless UI.

## Stack técnica

| Camada          | Tecnologias                                                 |
| --------------- | ----------------------------------------------------------- |
| **Framework**   | Next.js 16 (App Router)                                     |
| **UI**          | React 19, TailwindCSS 4, DaisyUI 5                          |
| **Linguagem**   | TypeScript 5                                                |
| **Runtime**     | Bun                                                         |
| **Animações**   | Motion (Framer Motion)                                      |
| **Blog**        | Markdown local, gray-matter, remark, remark-gfm, PrismLight |
| **E-mail**      | Resend                                                      |
| **Ícones**      | Phosphor Icons                                              |
| **Componentes** | Headless UI, Radix UI (tooltips)                            |
| **Utilitários** | clsx, tailwind-merge, tailwind-variants                     |

---

## Pré-requisitos

- [Bun](https://bun.sh) (v1.0+)
- Node.js 18+ (compatibilidade)

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/codigoisaac/isaacmuniz.pro.git
cd isaacmuniz.pro

# Instale as dependências
bun install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Preencha RESEND_API_KEY no .env.local

# Inicie o servidor de desenvolvimento
bun dev
```

O servidor iniciará em [http://localhost:3000](http://localhost:3000).

### Scripts disponíveis

```bash
bun dev       # Dev server com --smol (menor uso de memória)
bun run build # Build de produção
bun start     # Serve o build de produção
bun lint      # ESLint
```

> **Sobre o `--smol`:** o flag `--smol` instrui o garbage collector do Bun a rodar com mais frequência, reduzindo significativamente o consumo de RAM em troca de um custo marginal de performance. Ideal para máquinas com memória limitada — em benchmarks, pode reduzir o uso de ~343 MB para ~54 MB.

## Fontes

Fontes carregadas localmente via `next/font/local` — nenhuma requisição para Google Fonts ou CDNs. Isso garante carregamento instantâneo, elimina layout shift (FOUT/FOIT) e melhora o LCP.

## Licença

Distribuído sob [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/). Sinta-se à vontade para explorar o código, se inspirar e aprender.

---

<p align="center">
  Feito com ☕ e código por <a href="https://isaacmuniz.pro">Isaac Muniz</a>
</p>
