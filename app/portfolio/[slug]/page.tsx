import {
  ArrowBendUpLeftIcon,
  ArrowSquareOutIcon,
} from "@phosphor-icons/react/dist/ssr";

import DecryptedText from "@/components/DecryptedText";
import Image from "next/image";
import Link from "next/link";
import TechStackDisplay from "@/components/portfolio/TechStackDisplay";
import { notFound } from "next/navigation";
import portfolio from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="general-content-margins body-content-paddings py-10">
      {/* 1. COMPACT HEADER SECTION */}
      <header className="mb-10 pb-8 border-b border-neutral-content">
        <div className="flex items-center gap-2 mb-4">
          <Link
            href="/portfolio"
            className="hover:text-neutral hover:bg-base-300 p-1 rounded-field transition-colors"
          >
            <ArrowBendUpLeftIcon size={20} />
          </Link>

          <div className="font-geist-mono badge badge-sm badge-secondary px-3 py-3">
            <DecryptedText text={`/portfolio/${project.slug}`} speed={40} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <h1 className="font-saira text-5xl md:text-6xl text-primary leading-tight">
            {project.title}
          </h1>

          {/* Action Button moved to Header */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group flex items-center gap-3 no-underline md:mb-2"
            style={{ textDecoration: "none" }}
          >
            <span className="font-saira tracking-wide">Live Demo</span>

            <ArrowSquareOutIcon
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Integrated Metadata & Tech Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 px-4 border-l-2 border-base-300 bg-base-200/30">
          <div className="font-geist-mono text-sm text-neutral-content flex flex-wrap gap-y-2 items-center">
            <div className="mr-6 tracking-wider underline decoration-dashed decoration-base-300 underline-offset-4">
              {project.date}
            </div>

            <div className="flex gap-3">
              {project.tags.map((tag, index) => (
                <span key={tag} className="flex gap-3 items-center">
                  <span className="text-secondary">{tag}</span>
                  {index < project.tags.length - 1 && (
                    <span className="opacity-30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack moved to Header bar */}
          <div className="flex items-center gap-3">
            <span className="font-geist-mono text-[10px] uppercase tracking-widest opacity-50 hidden md:block">
              Stack:
            </span>

            <TechStackDisplay project={project} />
          </div>
        </div>
      </header>

      {/* 2. JOURNAL CONTENT AREA */}
      <section className="block">
        {/* Project Image Floated Left */}
        <div className="float-left mr-8 mb-6 w-full md:w-1/2 lg:w-1/3">
          <div className="relative overflow-hidden rounded-xl border border-base-300 shadow-lg group">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              placeholder="blur"
              priority
            />
          </div>
        </div>

        {/* Wrapped Description Text */}
        <article className="font-transducer leading-relaxed text-lg text-justify md:text-left">
          <p className="font-bold text-xl mb-4 text-secondary italic">
            {project.excerpt}
          </p>

          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      {/* Footer Decoration */}
      <footer className="mt-20 py-10 border-t border-base-300 text-center clear-both">
        <div className="text-neutral-content font-geist-mono text-xs tracking-[0.5em] opacity-50">
          . . . . . .
        </div>
      </footer>
    </main>
  );
}
