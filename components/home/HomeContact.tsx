"use client";

import { motion } from "motion/react";
import siteMetadata from "@/data/siteMetadata";
import Text from "@/components/Text";
import HeadingLabel from "./HeadingLabel";
import SocialButtons from "../SocialButtons";
import ContactForm from "./ContactForm";

export default function HomeContact() {
  return (
    <section id="contato" className="py-16">
      <HeadingLabel text="Contato" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mb-2"
      >
        <Text as="h2" variant="display" intent="primary">
          Vamos trabalhar juntos
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mb-10 max-w-md"
      >
        <Text
          variant="p"
          intent="muted"
          className="font-transducer leading-relaxed"
        >
          Tem um projeto em mente? Me manda uma mensagem e vamos conversar sobre
          como posso te ajudar.
        </Text>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 xl:gap-16">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className="md:col-span-2 flex flex-col gap-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div>
            <Text variant="caps" intent="muted" className="mb-3">
              Redes sociais
            </Text>

            <SocialButtons
              size={26}
              className="text-neutral hover:text-accent"
            />
          </div>

          <div>
            <Text variant="caps" intent="muted" className="mb-1.5">
              E-mail direto
            </Text>

            <a
              href={siteMetadata.socials.emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-transducer text-sm animated-underline unstiled-link text-neutral pb-1"
            >
              {siteMetadata.socials.emailAddress}
            </a>
          </div>

          <div>
            <Text variant="caps" intent="muted" className="mb-1.5">
              WhatsApp
            </Text>

            <a
              href={siteMetadata.socials.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-transducer text-sm animated-underline unstiled-link text-neutral pb-1"
            >
              {siteMetadata.socials.phoneNumber}
            </a>
          </div>

          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-base-200 border border-base-300 rounded-selector">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

              <Text
                as="span"
                variant="caps"
                intent="muted"
                className="normal-case tracking-normal"
              >
                Disponível para novos projetos
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
