"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeBelief() {
  return (
    <section className="py-20 flex items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="font-saira text-4xl sm:text-4xl xl:text-5xl font-semibold leading-[1.2] max-w-3xl text-center text-pretty"
      >
        {/* Seu negócio é bom.{" "}
        <span className="text-primary">
          A experiência digital que você oferece
        </span>{" "}
        também deveria ser. */}
        <span className="text-primary">Seu negócio é bom.</span> A experiência
        digital que você oferece{" "}
        <span className="text-primary">também deveria ser.</span>
      </motion.h2>
    </section>
  );
}
