"use client";

import { motion } from "motion/react";
import Text from "@/components/Text";
import siteMetadata from "@/data/siteMetadata";

// ─── Highlighted word with scroll-triggered entrance animation ───
function Highlight({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      className="text-primary font-semibold"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

// ─── Paragraph with subtle entrance ───
function AnimatedParagraph({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  );
}

export default function HomeAbout() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 xl:gap-16 items-center">
        {/* ── Text column ── */}
        <div className="md:col-span-3 order-2 md:order-1">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="text-primary select-none text-sm">▸</span>
            <Text variant="caps" intent="muted">
              Sobre mim
            </Text>
          </motion.div>

          {/* Animated body text */}
          <div className="font-transducer text-[1.05rem] leading-[1.85] space-y-5 text-pretty">
            <AnimatedParagraph delay={0.05}>
              Sou um{" "}
              <Highlight delay={0.15}>desenvolvedor full-stack</Highlight> com{" "}
              <Highlight delay={0.22}>4 anos de experiência</Highlight>{" "}
              construindo produtos digitais do zero — do banco de dados à
              interface final.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.1}>
              Já trabalhei com{" "}
              <Highlight delay={0.2}>startups de educação e saúde</Highlight>,
              desenvolvendo sistemas complexos com Node.js, React, Next.js,
              Flutter e muito mais. Gosto de código limpo, arquitetura pensada e
              entrega que faz diferença.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.15}>
              Hoje ajudo{" "}
              <Highlight delay={0.25}>
                pequenos e médios empreendedores
              </Highlight>{" "}
              a conquistarem presença digital com soluções feitas sob medida —
              sem templates genéricos, sem enrolação.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.2}>
              Se você precisa de um{" "}
              <Highlight delay={0.3}>site profissional</Highlight>, um{" "}
              <Highlight delay={0.35}>sistema web</Highlight> ou um{" "}
              <Highlight delay={0.4}>aplicativo mobile</Highlight>, posso te
              ajudar.
            </AnimatedParagraph>
          </div>

          {/* CTA link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="mt-8"
          >
            <a href="#contato" className="text-primary animated-underline">
              <Text
                as="span"
                variant="caps"
                intent="primary"
                className="normal-case tracking-normal text-sm"
              >
                Vamos conversar →
              </Text>
            </a>
          </motion.div>
        </div>

        {/* ── Image column ── */}
        <motion.div
          className="md:col-span-2 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Main photo */}
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-base-200">
              {/*
               * ⚠️  Substitua o src abaixo pela sua foto.
               * Para usar next/image com URLs externas, adicione o domínio
               * em next.config.ts: images.remotePatterns.
               * Por enquanto, usamos uma <img> comum do Unsplash.
               */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80&crop=face"
                alt={siteMetadata.authorName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative border offset */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-xl -z-10"
            />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-base-100 border border-base-300 rounded-xl px-4 py-3 shadow-md"
            >
              <div className="font-saira text-2xl font-semibold text-primary leading-none">
                4+
              </div>
              <div className="font-geist-mono text-[10px] text-neutral-content tracking-wider uppercase mt-0.5">
                anos de exp.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
