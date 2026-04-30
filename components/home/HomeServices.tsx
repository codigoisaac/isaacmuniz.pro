"use client";

import { motion } from "motion/react";
import {
  BrowserIcon,
  DeviceMobileCameraIcon,
  StackIcon,
  PencilRulerIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import HeadingLabel from "./HeadingLabel";

interface Service {
  id: string;
  icon: Icon;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    id: "websites",
    icon: BrowserIcon,
    title: "Websites & Landing-pages (com SEO)",
    description:
      "Sites modernos, rápidos e que vendem. Cada detalhe pensado para transmitir credibilidade, guiar o visitante e converter, com SEO técnico e otimização para os primeiros resultados do Google.",
    tags: ["Sites institucionais", "Landing pages", "SEO", "Core Web Vitals"],
  },
  {
    id: "apps",
    icon: DeviceMobileCameraIcon,
    title: "Aplicativos Mobile (Android e iOS)",
    description:
      "Apps para Android e iOS com experiência nativa e fluida. Do design ao MVP e ao produto maduro, com foco em usabilidade e performance que faz o usuário voltar.",
    tags: ["Android", "iOS"],
  },
  {
    id: "platforms",
    icon: StackIcon,
    title: "Plataformas, Portais, Ecommerces e Sistemas",
    description:
      "Soluções sob medida para operações internas, gestão e processos que precisam escalar. Dashboards, painéis e sistemas que substituem planilhas e eliminam retrabalho e decisões mal tomadas.",
    tags: ["Dashboards", "Admin panels", "ERPs", "CRMs", "Ecommerces"],
  },
  {
    id: "design",
    icon: PencilRulerIcon,
    title: "Projeto & Design",
    description:
      "Antes de escrever uma linha de código, tudo fica claro no papel. Briefing detalhado, levantamento de requisitos, documentação de especificação, wireframes e UI no Figma, para que o que for desenvolvido seja exatamente o que você tinha em mente.",
    tags: ["Briefing", "Especificação", "Wireframe", "UI Design"],
  },
];

export default function HomeServices() {
  return (
    <section className="py-16">
      <HeadingLabel text="Serviços" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <h2 className="font-saira text-3xl md:text-4xl font-semibold text-base-content leading-tight">
          O que eu entrego
        </h2>
        <p className="font-transducer text-[0.95rem] text-neutral-content mt-3 leading-relaxed max-w-xl">
          Do primeiro rascunho ao produto em produção — com processo claro,
          comunicação direta e entrega que você se orgulha de mostrar.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: 0.06 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 p-6 rounded-xl border border-base-300 bg-base-100 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Icon size={24} weight="duotone" />
              </div>

              <h3 className="font-saira text-xl font-semibold text-base-content leading-snug">
                {service.title}
              </h3>

              <p className="font-transducer text-sm text-neutral-content leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-geist-mono text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-md bg-base-200 text-primary border border-base-300 hover:border-primary cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
