"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/interfaces/portfolio";
import { HoverEffect } from "@/components/portfolio/HoverEffect";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Text from "@/components/Text";
import ProjectCardCompact from "../portfolio/ProjectCardCompact";

interface Props {
  projects: Project[];
}

export default function HomeProjects({ projects }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-2">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-primary select-none text-sm">▸</span>
            <Text variant="caps" intent="muted">
              Portfólio
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <Text as="h2" variant="display" intent="primary">
              Projetos em destaque
            </Text>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden sm:block"
        >
          <Link href="/portfolio" className="animated-underline">
            <Text
              as="span"
              variant="caps"
              intent="muted"
              className="normal-case tracking-normal text-sm"
            >
              Ver todos →
            </Text>
          </Link>
        </motion.div>
      </div>

      {/* Projects grid — falls back gracefully if no slugs match */}
      {projects.length > 0 ? (
        <HoverEffect
          idPrefix="colab"
          className="sm:grid-cols-1 py-0"
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          items={projects.map((project) => (
            <ProjectCardCompact key={project.slug} project={project} />
          ))}
        />
      ) : (
        // Placeholder shown when slugs haven't been configured yet
        <div className="py-12 text-center border border-dashed border-base-300 rounded-xl mt-6">
          <p className="font-geist-mono text-sm text-neutral-content">
            Configure{" "}
            <code className="bg-base-200 px-1 rounded-selector">
              FEATURED_PROJECT_SLUGS
            </code>{" "}
            em{" "}
            <code className="bg-base-200 px-1 rounded-selector">
              app/page.tsx
            </code>
          </p>
        </div>
      )}

      {/* Mobile "ver todos" */}
      <div className="flex justify-center mt-4 sm:hidden">
        <Link href="/portfolio" className="animated-underline">
          <Text
            as="span"
            variant="caps"
            intent="muted"
            className="normal-case tracking-normal text-sm"
          >
            Ver todos os projetos →
          </Text>
        </Link>
      </div>
    </section>
  );
}
