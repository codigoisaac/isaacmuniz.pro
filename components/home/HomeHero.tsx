"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/Button";
import Text from "@/components/Text";

const services = [
  "Sites & Landing Pages",
  "Aplicativos Web",
  "Sistemas sob medida",
  "Apps Mobile",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeHero() {
  return (
    <section className="relative min-h-[78vh] flex flex-col justify-center pt-4 pb-20">
      {/* ── Terminal prompt label ── */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-2 mb-7"
      >
        <span className="text-primary select-none text-sm pb-[.18rem]">▸</span>

        <Text variant="caps" intent="muted">
          Desenvolvimento Web &amp; Mobile
        </Text>
      </motion.div>

      {/* ── Main headline ── */}
      <div className="overflow-hidden mb-5">
        <motion.h1
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="font-saira text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[1.08] max-w-2xl"
        >
          <span className="text-primary">Tecnologia bem feita,</span> para você
          parar de se preocupar com tecnologia.
        </motion.h1>
      </div>

      {/* ── Subheading ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.28, ease }}
        className="max-w-lg mb-9"
      >
        <Text
          variant="p"
          intent="muted"
          className="leading-relaxed font-transducer"
        >
          {/* "5 anos de experiência" com efeito de marca-texto inclinado */}
          <span className="relative inline-block mr-1">
            <span
              aria-hidden
              className="absolute inset-0 bg-primary/20 rounded-sm scale-x-[1.04] scale-y-[1.1]"
            />
            <span className="relative text-primary font-medium">
              5 anos de experiência
            </span>
          </span>{" "}
          construindo sites, apps e sistemas que resolvem problemas reais e são
          um prazer de usar.
        </Text>
      </motion.div>

      {/* ── Service chips ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.42 }}
        className="flex flex-wrap gap-2 mb-11"
      >
        {services.map((service, i) => (
          <motion.span
            key={service}
            initial={{ opacity: 0, scale: 0.88, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.46 + i * 0.07, ease }}
            className="font-geist-mono text-xs px-3 py-1.5 rounded-selector border border-base-300 bg-base-200 text-neutral-content"
          >
            {service}
          </motion.span>
        ))}
      </motion.div>

      {/* ── CTAs ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.68, ease }}
        className="flex flex-wrap gap-3"
      >
        <Button internal text="Ver Projetos" link="/portfolio" />

        <Button
          internal
          text="Falar Comigo"
          link="#contato"
          variant="outline"
        />
      </motion.div>

      {/* ── Scroll nudge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-0 flex items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-xs text-neutral-content"
        >
          ↓
        </motion.span>

        <Text as="span" variant="caps" intent="muted" className="opacity-60">
          scroll
        </Text>
      </motion.div>
    </section>
  );
}
