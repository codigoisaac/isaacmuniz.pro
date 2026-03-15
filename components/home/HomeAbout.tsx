"use client";

import { motion } from "motion/react";
import Text from "@/components/Text";
import Image from "next/image";
import myImage from "@/assets/images/home/me.jpg";
import siteMetadata from "@/data/siteMetadata";
import HeadingLabel from "./HeadingLabel";

function Highlight({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      className="text-primary font-semibold"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

function AnimatedParagraph({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  );
}

export default function HomeAbout() {
  return (
    <section className="py-16">
      <HeadingLabel text="Sobre mim" />

      <div className="block">
        <motion.div
          className="hidden md:block md:float-right md:ml-10 md:mb-6 md:w-[38%]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="aspect-4/5 rounded-xl overflow-hidden">
              <Image src={myImage} alt="Foto de Isaac" />
            </div>

            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/20 rounded-xl -z-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-base-100 border-2 border-base-300 rounded-xl px-4 py-3 shadow-md"
            >
              <div className="font-saira text-2xl font-semibold text-primary leading-none">
                {siteMetadata.yearsOfExperience}+
              </div>

              <div className="font-geist-mono text-[10px] text-neutral-content tracking-wider uppercase mt-0.5">
                anos de exp.
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="md:hidden mb-8 w-full"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="aspect-4/5 rounded-xl overflow-hidden bg-base-200">
              <Image src={myImage} alt="Foto de Isaac" />
            </div>

            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-xl -z-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-base-100 border border-base-300 rounded-xl px-4 py-3 shadow-md"
            >
              <div className="font-saira text-2xl font-semibold text-primary leading-none">
                {siteMetadata.yearsOfExperience}+
              </div>

              <div className="font-geist-mono text-[10px] text-neutral-content tracking-wider uppercase mt-0.5">
                anos de exp.
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="font-transducer text-[1.05rem] leading-[1.85] space-y-5 text-pretty">
          <AnimatedParagraph delay={0.05}>
            Nasci no dia{" "}
            <Highlight delay={0.15}>
              13 de setembro — o Dia do Programador
            </Highlight>
            . Nunca sei se isso foi coincidência ou destino, mas desde criança
            eu já sabia o que queria ser. Comecei a programar por hobby quando
            era adolescente, e não parei mais.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.1}>
            Hoje tenho mais de{" "}
            <Highlight delay={0.2}>
              {siteMetadata.yearsOfExperience} anos de experiência profissional
            </Highlight>{" "}
            construindo software para startups nas áreas de{" "}
            <Highlight delay={0.27}>
              saúde, educação, RH, marketing e tecnologia
            </Highlight>
            . Sou casado, pai de dois filhos e três cachorros (o que significa
            que gerenciar projetos de software é, disparado, a parte mais
            tranquila do meu dia rs).
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.15}>
            Minha obsessão é{" "}
            <Highlight delay={0.25}>qualidade — em dois sentidos</Highlight>. No
            processo: sem enrolação, sem sumir, sem ficar pedindo mil
            informações que poderiam ter sido resolvidas com um bom briefing lá
            no começo. No produto: experiência de uso bem cuidada, boa
            performance e um design que guia o usuário.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.2}>
            <Highlight delay={0.3}>
              Processo claro desde o primeiro contato
            </Highlight>
            : briefing estruturado,{" "}
            <Highlight delay={0.35}>etapas definidas</Highlight>, sem ruído na
            comunicação — e um compromisso de ser o{" "}
            <Highlight delay={0.4}>
              profissional mais fácil de trabalhar
            </Highlight>{" "}
            que você já contratou.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.25}>
            Se você está procurando alguém que{" "}
            <Highlight delay={0.35}>
              não precisa ser cobrado pra entregar
            </Highlight>{" "}
            — e que torna o processo leve no caminho — vamos conversar.
          </AnimatedParagraph>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-8 clear-both"
        >
          <a href="#contato" className="text-primary animated-underline">
            <Text
              as="span"
              variant="caps"
              intent="primary"
              className="normal-case tracking-normal text-sm"
            >
              Entre em contato →
            </Text>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
