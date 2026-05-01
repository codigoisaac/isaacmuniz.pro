"use client";

import { AnimatePresence, motion } from "motion/react";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoverEffectProps {
  items: ReactNode[];
  className?: string;
  hoverClassName?: string;
  hoveredIndex: string | null;
  setHoveredIndex: (id: string | null) => void;
  idPrefix: string;
}

export const HoverEffect = ({
  items,
  className,
  hoverClassName,
  hoveredIndex,
  setHoveredIndex,
  idPrefix,
}: HoverEffectProps) => {
  return (
    <div
      className={cn("grid grid-cols-1 sm:grid-cols-2 py-10", className)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, idx) => {
        const itemId = `${idPrefix}-${idx}`;
        return (
          <div
            key={itemId}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(itemId)}
          >
            <AnimatePresence>
              {hoveredIndex === itemId && (
                <motion.span
                  className={cn(
                    "absolute inset-0 h-full w-full bg-neutral hidden sm:block rounded-2xl",
                    hoverClassName,
                  )}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                />
              )}
            </AnimatePresence>

            <div className="h-full w-full relative z-20">{item}</div>
          </div>
        );
      })}
    </div>
  );
};
