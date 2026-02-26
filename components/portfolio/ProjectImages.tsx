"use client";

import { Project, SubjectItem } from "@/interfaces/portfolio";
import { useCallback, useEffect, useState } from "react";

import Image from "next/image";

interface Props {
  project: Project;
}

export default function ProjectImages({ project }: Props) {
  const [lightbox, setLightbox] = useState<{
    items: SubjectItem[];
    index: number;
  } | null>(null);

  const open = (items: SubjectItem[], index: number) =>
    setLightbox({ items, index });

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((lb) =>
      lb
        ? { ...lb, index: (lb.index - 1 + lb.items.length) % lb.items.length }
        : null,
    );
  }, []);

  const next = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.items.length } : null,
    );
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  if (!project.subjects || project.subjects.length === 0) return null;

  const currentItem = lightbox?.items[lightbox.index];

  return (
    <>
      {/* ── Subjects ── */}
      <section className="mt-16 space-y-16">
        {project.subjects.map((subject) => (
          <div key={subject.title}>
            <div className="mb-8 pb-4 border-b border-base-300">
              <h2 className="font-transducer text-xl font-bold text-primary">
                {subject.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {subject.items.map((item, index) => (
                <figure key={index} className="group flex flex-col gap-3">
                  <button
                    onClick={() => open(subject.items, index)}
                    className="relative overflow-hidden rounded-xl border border-base-300 bg-base-200 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-primary"
                    aria-label={`Ampliar imagem: ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                      placeholder="blur"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6"
                        />
                      </svg>
                    </span>
                  </button>

                  <figcaption className="px-1 space-y-1">
                    <p className="font-geist-mono text-sm font-semibold text-base-content">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="font-transducer text-sm text-neutral-content leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Lightbox ── */}
      {lightbox && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-[fadeIn_0.15s_ease-out]"
          onClick={close}
        >
          <div
            className="relative flex flex-col items-center max-w-6xl w-full gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute -top-2 -right-2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-base-100 text-base-content hover:bg-base-200 transition-colors shadow-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-auto object-contain max-h-[75vh]"
                placeholder="blur"
              />
            </div>

            {/* Caption + description + nav */}
            <div className="flex items-start justify-between w-full px-1 gap-4">
              <div className="min-w-0 space-y-1">
                <p className="font-geist-mono text-sm font-semibold text-white">
                  {currentItem.title}
                </p>
                {currentItem.description && (
                  <p className="font-transducer text-sm text-white/60 leading-relaxed">
                    {currentItem.description}
                  </p>
                )}
                <p className="font-geist-mono text-xs text-white/40">
                  {lightbox.index + 1} / {lightbox.items.length}
                </p>
              </div>

              {lightbox.items.length > 1 && (
                <div className="flex gap-2 shrink-0 mt-0.5">
                  <button
                    onClick={prev}
                    aria-label="Imagem anterior"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próxima imagem"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
