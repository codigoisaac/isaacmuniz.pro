"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";
import Text from "@/components/Text";
import HeadingLabel from "@/components/home/HeadingLabel";

const ease = [0.22, 1, 0.36, 1] as const;

export default function NotFound() {
  return (
    <section className="relative min-h-[78vh] flex flex-col justify-center pt-4 pb-20">
      <HeadingLabel text="Erro 404" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease }}
        className="mb-4 leading-none select-none"
        aria-hidden
      >
        <span className="font-transducer-extended text-[clamp(6rem,20vw,14rem)] font-black tracking-tighter text-primary/15">
          404
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18, ease }}
        className="font-saira text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.1] max-w-xl mb-5 -mt-4"
      >
        Página <span className="text-primary">não encontrada</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.32, ease }}
        className="max-w-md mb-10"
      >
        <Text
          variant="p"
          intent="muted"
          className="font-transducer leading-relaxed"
        >
          O endereço que você tentou acessar não existe ou foi removido. Que tal
          voltar para o início e explorar o que está disponível?
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.46, ease }}
        className="flex flex-wrap gap-3"
      >
        <Button internal text="Voltar ao início" link="/" size="md" />

        <Button
          internal
          text="Ver Projetos"
          link="/portfolio"
          variant="soft"
          size="md"
        />
      </motion.div>
    </section>
  );
}
