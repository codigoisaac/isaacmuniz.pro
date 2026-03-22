"use client";

import React, { useEffect, useRef } from "react";

export interface ScrambledTextProps {
  radius?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  scrambleChars = "▒░▓.:",
  className = "",
  style = {},
  children,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const originalText =
      typeof children === "string" ? children : String(children);
    const chars = scrambleChars.split("");

    container.innerHTML = originalText
      .split("")
      .map((char) =>
        char === " "
          ? `<span style="display:inline-block;white-space:pre"> </span>`
          : `<span data-char="${char}" style="display:inline-block">${char}</span>`,
      )
      .join("");

    const spans = Array.from(
      container.querySelectorAll<HTMLSpanElement>("span[data-char]"),
    );

    const timers = new Map<number, ReturnType<typeof setInterval>>();

    const scramble = (span: HTMLSpanElement, idx: number) => {
      if (timers.has(idx)) return;
      const original = span.dataset.char!;
      let count = 0;
      const id = setInterval(() => {
        if (count >= 8) {
          span.textContent = original;
          clearInterval(id);
          timers.delete(idx);
        } else {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          count++;
        }
      }, 40);
      timers.set(idx, id);
    };

    const onMove = (e: PointerEvent) => {
      spans.forEach((span, i) => {
        const r = span.getBoundingClientRect();
        const dist = Math.hypot(
          e.clientX - (r.left + r.width / 2),
          e.clientY - (r.top + r.height / 2),
        );
        if (dist < radius) scramble(span, i);
      });
    };

    container.addEventListener("pointermove", onMove);

    return () => {
      container.removeEventListener("pointermove", onMove);
      timers.forEach(clearInterval);
      timers.clear();
    };
  }, [children, radius, scrambleChars]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={style}
      aria-label={typeof children === "string" ? children : undefined}
    />
  );
};

export default ScrambledText;
