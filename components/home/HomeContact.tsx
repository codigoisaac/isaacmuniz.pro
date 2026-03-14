"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import siteMetadata from "@/data/siteMetadata";
import Text from "@/components/Text";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function HomeContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // ─────────────────────────────────────────────────────────
      // TODO: Implemente o envio com Resend (ou outra solução).
      //
      // Opção A — Server Action:
      //   import { sendContactEmail } from "@/actions/contact";
      //   await sendContactEmail(form);
      //
      // Opção B — API Route (/app/api/contact/route.ts):
      //   const res = await fetch("/api/contact", {
      //     method: "POST",
      //     body: JSON.stringify(form),
      //   });
      //   if (!res.ok) throw new Error("Failed");
      // ─────────────────────────────────────────────────────────

      // Simulação temporária — remova quando implementar o envio real
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    {
      href: siteMetadata.socials.githubLink,
      label: "GitHub",
      Icon: GithubLogoIcon,
    },
    {
      href: siteMetadata.socials.linkedinLink,
      label: "LinkedIn",
      Icon: LinkedinLogoIcon,
    },
    {
      href: siteMetadata.socials.emailLink,
      label: "E-mail",
      Icon: EnvelopeIcon,
    },
    {
      href: siteMetadata.socials.whatsappLink,
      label: "WhatsApp",
      Icon: WhatsappLogoIcon,
    },
  ];

  return (
    <section id="contato" className="py-16">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 mb-2"
      >
        <span className="text-primary select-none text-sm">▸</span>
        <Text variant="caps" intent="muted">
          Contato
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mb-2"
      >
        <Text as="h2" variant="display" intent="primary">
          Vamos trabalhar juntos?
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
        {/* ── Form ── */}
        <motion.form
          className="md:col-span-3 space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Text as="label" variant="caps" intent="muted">
                Nome
              </Text>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                className="input input-bordered bg-base-200 font-transducer text-sm w-full focus:outline-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Text as="label" variant="caps" intent="muted">
                E-mail
              </Text>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                className="input input-bordered bg-base-200 font-transducer text-sm w-full focus:outline-primary"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <Text as="label" variant="caps" intent="muted">
              Mensagem
            </Text>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Conte-me sobre o seu projeto..."
              className="textarea textarea-bordered bg-base-200 font-transducer text-sm w-full resize-none focus:outline-primary"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn btn-accent btn-sm md:btn-md disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Enviando..."
                : status === "sent"
                  ? "Mensagem enviada ✓"
                  : "Enviar mensagem"}
            </button>

            {status === "error" && (
              <Text
                as="span"
                variant="caps"
                intent="muted"
                className="text-error normal-case tracking-normal text-xs"
              >
                Ocorreu um erro. Tente me contatar diretamente.
              </Text>
            )}
          </div>
        </motion.form>

        {/* ── Contact info + socials ── */}
        <motion.div
          className="md:col-span-2 flex flex-col gap-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* Social icons */}
          <div>
            <Text variant="caps" intent="muted" className="mb-3">
              Redes sociais
            </Text>
            <div className="flex gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-base-content hover:text-primary transition-colors"
                >
                  <Icon size={24} weight="duotone" />
                </a>
              ))}
            </div>
          </div>

          {/* Direct email */}
          <div>
            <Text variant="caps" intent="muted" className="mb-1.5">
              E-mail direto
            </Text>
            <a
              href={siteMetadata.socials.emailLink}
              className="font-transducer text-sm animated-underline"
            >
              {siteMetadata.socials.emailAddress}
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <Text variant="caps" intent="muted" className="mb-1.5">
              WhatsApp
            </Text>
            <a
              href={siteMetadata.socials.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-transducer text-sm animated-underline"
            >
              {siteMetadata.socials.phoneNumber}
            </a>
          </div>

          {/* Availability badge */}
          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-base-200 border border-base-300 rounded-selector">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
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
