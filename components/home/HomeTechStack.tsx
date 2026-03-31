"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Text from "@/components/Text";
import { Tooltip } from "@/components/Tooltip";
import techStack from "@/data/techStack";
import { TechID } from "@/interfaces/portfolio";
import HeadingLabel from "./HeadingLabel";

const CORE_TECHS: TechID[] = ["nextjs", "ts", "react", "tailwindcss", "node"];

const OTHER_TECHS: TechID[] = [
  // 2 projects each
  "js",
  "redux",
  "reacthookform",
  "resend",
  "css",
  // 1 project each
  "docker",
  "express",
  "mysql",
  "sequelize",
  "postgresql",
  "nest",
  "graphql",
  "flutter",
  "zustand",
  "zod",
  "bootstrap",
  "daisyui",
  "motion",
  "gsap",
  "markdown",
  "notion",
  "vscode",
  "babel",
  "bun",
  "npmpackages",
  "openapi",
  "swagger",
  "pagarme",
  "vindi",
  "html",
];

export default function HomeTechStack() {
  return (
    <section className="py-8 text-center">
      <HeadingLabel text="Stack" className="justify-center" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <Text as="h2" variant="display" intent="primary">
          Tecnologias com as quais trabalho
        </Text>
      </motion.div>

      {/* Core techs */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-8 mb-2"
      >
        <Text variant="h3" intent="muted" className="mb-5">
          Stack principal
        </Text>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-5">
        {CORE_TECHS.map((id, i) => {
          const tech = techStack[id];
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 transition-colors">
                <div className="relative w-8 h-8">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
              </div>
              <Text
                as="span"
                variant="caps"
                intent="muted"
                className="text-[10px] normal-case tracking-wide font-geist-mono"
              >
                {tech.name}
              </Text>
            </motion.div>
          );
        })}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="border-t border-base-300 my-8"
      />

      {/* Other techs */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-5"
      >
        <Text variant="h3" intent="muted">
          Outras tecnologias com as quais trabalho ou já trabalhei
        </Text>
      </motion.div>

      <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-10 justify-items-center gap-3 lg:px-16 xl:px-32">
        {OTHER_TECHS.map((id, i) => {
          const tech = techStack[id];
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 + i * 0.03 }}
            >
              <Tooltip content={tech.name}>
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-base-200 border border-base-300 hover:border-primary/40 transition-colors cursor-default">
                  <div className="relative w-5 h-5">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Tooltip>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
