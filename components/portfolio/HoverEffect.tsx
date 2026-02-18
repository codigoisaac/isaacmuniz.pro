"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: ReactNode[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral block rounded-3xl"
                layoutId="hoverBackground"
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="h-full w-full overflow-hidden relative z-20">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
