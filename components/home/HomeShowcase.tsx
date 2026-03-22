"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import { Project, SubjectItem } from "@/interfaces/portfolio";
import TagsDisplay from "@/components/portfolio/TagsDisplay";
import TechStackDisplay from "@/components/portfolio/TechStackDisplay";
import Text from "@/components/Text";
import { allProjects } from "@/data/portfolio";
import Button from "../Button";
import HeadingLabel from "./HeadingLabel";

// ─── Build the slide list from flagged subjects ────────────────────────────────

interface Slide {
  project: Project;
  homeTitle: string;
  items: SubjectItem[];
}

const slides: Slide[] = allProjects.flatMap((project) =>
  (project.subjects ?? [])
    .filter((s) => s.showOnHome)
    .map((s) => ({
      project,
      homeTitle: s.homeTitle ?? s.title,
      items: s.items,
    })),
);

// ─── Constants ─────────────────────────────────────────────────────────────────

const THROTTLE_MS = 650;
const ease = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (d: number) => ({ y: d > 0 ? 56 : -56, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (d: number) => ({ y: d > 0 ? -56 : 56, opacity: 0 }),
};

// ─── Nav arrow ────────────────────────────────────────────────────────────────

function NavArrow({
  direction,
  onClick,
}: {
  direction: "up" | "down";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "up" ? "Anterior" : "Próximo"}
      className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/40 text-primary bg-primary/10 hover:bg-primary/20 hover:border-primary transition-colors cursor-pointer"
    >
      <span className="text-sm leading-none">
        {direction === "up" ? "↑" : "↓"}
      </span>
    </button>
  );
}

// ─── Media item ────────────────────────────────────────────────────────────────

function MediaItem({
  item,
  isPortrait,
  priority = false,
}: {
  item: SubjectItem;
  isPortrait: boolean;
  priority?: boolean;
}) {
  const aspectClass = isPortrait ? "aspect-[9/19]" : "aspect-video";

  return (
    <div
      className={`rounded-xl overflow-hidden bg-base-300 ${aspectClass} w-full`}
    >
      {item.video ? (
        <video
          src={item.video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          placeholder="blur"
          priority={priority}
        />
      ) : null}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function HomeShowcase() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const isHoveredRef = useRef(false);
  const lastWheelRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((delta: 1 | -1) => {
    const now = Date.now();
    if (now - lastWheelRef.current < THROTTLE_MS) return;
    lastWheelRef.current = now;
    setDir(delta);
    // Infinite loop: wraps around at both ends
    setCurrent((prev) => (prev + delta + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return;
      e.preventDefault();
      navigate(e.deltaY > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [navigate]);

  if (slides.length === 0) return null;

  const { project, homeTitle, items } = slides[current];

  const displayItems = items.slice(0, 4);
  const isPortrait = displayItems.some((i) => i.containImageSize);

  const mediaGridCols = isPortrait
    ? displayItems.length <= 2
      ? "grid-cols-2"
      : "grid-cols-3"
    : displayItems.length === 1
      ? "grid-cols-1"
      : "grid-cols-2";

  return (
    <section
      ref={containerRef}
      className="relative my-14 rounded-2xl bg-base-200 border border-base-300 overflow-hidden"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      {/* ── Header bar ───────────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-8 pt-5 pb-4 flex items-center justify-between border-b border-base-300">
        <HeadingLabel text="Trabalhos" className="mb-0" />

        <div className="flex items-center gap-3">
          <NavArrow direction="up" onClick={() => navigate(-1)} />
          <Text variant="caps" intent="muted" className="text-xs tabular-nums">
            {current + 1} / {slides.length}
          </Text>
          <NavArrow direction="down" onClick={() => navigate(1)} />
        </div>
      </div>

      {/* ── Slide area ───────────────────────────────────────────────────────── */}
      <div className="min-h-[52vh] md:min-h-[60vh] relative">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={`${project.slug}--${homeTitle}`}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease }}
            className="absolute inset-0 p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] grid-rows-[1fr_auto] gap-x-8 md:gap-x-12 gap-y-4 items-center"
          >
            {/* ── Left: project info ──────────────────────────────────────── */}
            <div className="flex flex-col gap-4 order-2 md:order-1 self-center">
              <div className="font-geist-mono text-[11px] text-primary uppercase tracking-widest font-semibold">
                {project.title}
              </div>

              <div className="font-saira text-2xl sm:text-3xl font-semibold text-primary leading-tight">
                {homeTitle}
              </div>

              {/* Full excerpt — no line clamp */}
              <Text
                variant="p"
                intent="muted"
                className="font-transducer text-sm leading-relaxed"
              >
                {project.excerpt}
              </Text>

              <TagsDisplay tags={project.tags} />

              <TechStackDisplay project={project} />
            </div>

            {/* ── Right: media grid ───────────────────────────────────────── */}
            <div className="flex items-center order-1 md:order-2">
              <div className={`grid gap-3 w-full ${mediaGridCols}`}>
                {displayItems.map((item, i) => (
                  <MediaItem
                    key={i}
                    item={item}
                    isPortrait={isPortrait}
                    priority={current === 0}
                  />
                ))}
              </div>
            </div>

            {/* ── Bottom center: buttons spanning both columns ─────────────── */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.35, ease: "easeOut" }}
              className="col-span-1 md:col-span-2 row-start-2 flex gap-2 justify-center pb-2"
            >
              <Button
                internal
                variant="soft"
                size="sm"
                text="Ver projeto completo →"
                className="font-geist-mono"
                link={`/portfolio/${project.slug}`}
              />
              <Button
                internal
                variant="ghost"
                size="sm"
                text="Ver todos projetos"
                className="font-geist-mono"
                link="/portfolio"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Footer: dots + scroll hint ───────────────────────────────────────── */}
      <div className="px-6 sm:px-8 py-4 border-t border-base-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-base-300 hover:bg-neutral-content"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="hidden sm:flex items-center gap-2.5 select-none">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-center w-5 h-5 rounded text-neutral-content text-[10px] leading-none font-geist-mono">
              ↑
            </div>
            <div className="flex items-center justify-center w-5 h-5 rounded text-neutral-content text-[10px] leading-none font-geist-mono">
              ↓
            </div>
          </div>
          <Text
            variant="caps"
            intent="muted"
            className="normal-case tracking-normal text-[10px] leading-snug"
          >
            Scroll ou botões
            <br />
            para navegar
          </Text>
        </div>
      </div>
    </section>
  );
}
