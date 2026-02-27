"use client";

import SubjectModal, { SubjectModalItem } from "./SubjectModal";
import { useCallback, useState } from "react";

import Image from "next/image";
import { Project } from "@/interfaces/portfolio";

interface Props {
  project: Project;
}

export default function ProjectSubjects({ project }: Props) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const flatItems: SubjectModalItem[] =
    project.subjects?.flatMap((subject) =>
      subject.items.map((item) => ({
        ...item,
        subjectTitle: subject.title,
      })),
    ) ?? [];

  const total = flatItems.length;

  const close = useCallback(() => setModalIndex(null), []);
  const prev = useCallback(
    () => setModalIndex((i) => (i !== null ? (i - 1 + total) % total : null)),
    [total],
  );
  const next = useCallback(
    () => setModalIndex((i) => (i !== null ? (i + 1) % total : null)),
    [total],
  );

  if (!project.subjects || project.subjects.length === 0) return null;

  let flatCursor = 0;
  const flatIndexMap: number[][] = project.subjects.map((subject) =>
    subject.items.map(() => flatCursor++),
  );

  return (
    <>
      <section className="mt-16 space-y-16">
        {project.subjects.map((subject, subjectIndex) => (
          <div key={subject.title}>
            <div className="mb-8 pb-4 border-b border-base-300">
              <h2 className="font-transducer text-xl font-bold text-primary">
                {subject.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {subject.items.map((item, itemIndex) => {
                const globalIndex = flatIndexMap[subjectIndex][itemIndex];
                const isVideo = !!item.video;

                return (
                  <figure key={itemIndex} className="group flex flex-col gap-3">
                    <button
                      onClick={() => setModalIndex(globalIndex)}
                      className={`relative overflow-hidden rounded-xl border border-base-300 bg-base-200 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-primary${item.containImageSize ? " max-h-80 w-full" : ""}`}
                      aria-label={`${isVideo ? "Reproduzir vídeo" : "Ampliar imagem"}: ${item.title}`}
                    >
                      {isVideo ? (
                        <>
                          <video
                            src={item.video}
                            className={`w-full pointer-events-none ${item.containImageSize ? "h-full object-contain" : "h-auto object-cover"}`}
                            muted
                            playsInline
                            preload="metadata"
                          />
                          {/* Play icon overlay */}
                          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-14 h-14 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                            >
                              <path d="M8 5.14v14l11-7-11-7z" />
                            </svg>
                          </span>
                        </>
                      ) : item.image ? (
                        <>
                          <Image
                            src={item.image}
                            alt={item.title}
                            className={`w-full transition-transform duration-500 group-hover:scale-[1.015] ${item.containImageSize ? "h-full object-contain" : "h-auto object-cover"}`}
                            placeholder="blur"
                          />
                          {/* Zoom icon overlay */}
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
                        </>
                      ) : null}
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
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {modalIndex !== null && (
        <SubjectModal
          items={flatItems}
          index={modalIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
