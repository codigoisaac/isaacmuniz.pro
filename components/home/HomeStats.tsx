"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import HeadingLabel from "./HeadingLabel";
import siteMetadata from "@/data/siteMetadata";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

const STATS: Stat[] = [
  {
    value: siteMetadata.yearsOfExperience,
    suffix: "+",
    label: "anos de experiência",
    sublabel: "desde 2021 no mercado",
  },
  {
    value: 8,
    suffix: "+",
    label: "empresas atendidas",
    sublabel: "indústria, saúde, educação, RH e mais",
  },
  {
    value: 12,
    suffix: "+",
    label: "projetos entregues",
    sublabel: "sites, plataformas e aplicativos",
  },
];

function AnimatedCounter({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 18,
    restDelta: 0.5,
  });
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      motionValue.set(value);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, motionValue, value, delay]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toString();
      }
    });
  }, [spring]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function HomeStats() {
  return (
    <section className="py-10">
      <HeadingLabel text="Números" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-base-300 rounded-xl overflow-hidden border border-base-300">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: 0.05 + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center justify-center gap-1.5 bg-base-100 px-6 py-8 text-center"
          >
            <div className="font-saira text-4xl md:text-5xl font-bold text-primary leading-none">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix || ""}
                delay={0.12 + i * 0.07}
              />
            </div>

            <div className="font-geist-mono text-[11px] uppercase tracking-widest text-neutral-content mt-1">
              {stat.label}
            </div>

            <div className="font-transducer text-xs text-neutral-content/50 leading-snug">
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
