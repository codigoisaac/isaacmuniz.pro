"use client";

import { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import { Project } from "@/interfaces/portfolio";

interface Props {
  project: Project;
}

type ExtraImage = NonNullable<Project["extraImages"]>[number];

export default function ProjectImages({ project }: Props) {
  const [lightbox, setLightbox] = useState<{
    images: ExtraImage[];
    index: number;
  } | null>(null);

  const open = (images: ExtraImage[], index: number) =>
    setLightbox({ images, index });

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((lb) =>
      lb
        ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }
        : null,
    );
  }, []);

  const next = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null,
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

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  if (!project.extraImages || project.extraImages.length === 0) return null;

  const groups = project.extraImages.reduce<Map<string, ExtraImage[]>>(
    (map, img) => {
      if (!map.has(img.internalProject)) map.set(img.internalProject, []);
      map.get(img.internalProject)!.push(img);
      return map;
    },
    new Map(),
  );

  const currentImage = lightbox?.images[lightbox.index];

  return (
    <>
      {/* ── Image Groups ── */}
      <section className="mt-16 space-y-16">
        {Array.from(groups.entries()).map(([groupName, images]) => (
          <div key={groupName}>
            <div className="mb-8 pb-4 border-b border-base-300">
              <h2 className="font-transducer text-xl font-bold text-primary">
                {groupName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.map((img, index) => (
                <figure key={index} className="group flex flex-col gap-3">
                  <button
                    onClick={() => open(images, index)}
                    className="relative overflow-hidden rounded-xl border border-base-300 bg-base-200 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-primary"
                    aria-label={`Ampliar imagem: ${img.title}`}
                  >
                    <Image
                      src={img.imgAddress}
                      alt={img.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                      placeholder="blur"
                    />
                    {/* Hover overlay */}
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

                  <figcaption className="px-1">
                    <p className="font-geist-mono text-sm font-semibold text-base-content">
                      {img.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Lightbox ── */}
      {lightbox && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-[fadeIn_0.15s_ease-out]"
          onClick={close}
        >
          <div
            className="relative flex flex-col items-center max-w-6xl w-full gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
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
                src={currentImage.imgAddress}
                alt={currentImage.title}
                className="w-full h-auto object-contain max-h-[80vh]"
                placeholder="blur"
              />
            </div>

            {/* Caption + nav row */}
            <div className="flex items-center justify-between w-full px-1 gap-4">
              <div className="min-w-0">
                <p className="font-geist-mono text-sm font-semibold text-white truncate">
                  {currentImage.title}
                </p>
                <p className="font-geist-mono text-xs text-white/50 mt-0.5">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
              </div>

              {/* Prev / Next */}
              {lightbox.images.length > 1 && (
                <div className="flex gap-2 shrink-0">
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
