"use client";

import Image from "next/image";
import { SubjectItem } from "@/interfaces/portfolio";
import { useEffect } from "react";

export type SubjectModalItem = SubjectItem & { subjectTitle: string };

interface Props {
  items: SubjectModalItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function SubjectModal({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const currentItem = items[index];
  const total = items.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-6xl w-full gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
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

        {/* Caption + nav */}
        <div className="flex items-start justify-between w-full px-1 gap-4">
          <div className="min-w-0 space-y-1">
            <p className="font-geist-mono text-xs text-primary uppercase tracking-widest">
              {currentItem.subjectTitle}
            </p>

            <p className="font-geist-mono text-sm font-semibold text-white">
              {currentItem.title}
            </p>
            {currentItem.description && (
              <p className="font-transducer text-sm text-white/60 leading-relaxed">
                {currentItem.description}
              </p>
            )}

            <p className="font-geist-mono text-xs text-white/40">
              {index + 1} / {total}
            </p>
          </div>

          {total > 1 && (
            <div className="flex gap-2 shrink-0 mt-0.5">
              <button
                onClick={onPrev}
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
                onClick={onNext}
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
  );
}
