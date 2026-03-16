"use client";

import { useState } from "react";
import { sendContactEmail } from "@/actions/contact";
import Text from "@/components/Text";
import SocialButtons from "@/components/SocialButtons";

type FormStatus = "idle" | "sending" | "sent" | "error";

type FormState = {
  name: string;
  email: string;
  message: string;
  whatsapp: string;
  company: string;
};

const labelClass =
  "font-transducer text-xs font-bold uppercase tracking-widest text-neutral-content";

function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    whatsapp: "",
    company: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedWhatsapp, setSubmittedWhatsapp] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      setForm((prev) => ({ ...prev, whatsapp: formatWhatsApp(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const result = await sendContactEmail(form);

    if (result.success) {
      setSubmittedWhatsapp(form.whatsapp);
      setStatus("sent");
      setForm({ name: "", email: "", message: "", whatsapp: "", company: "" });
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-6 py-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">✓</span>
            <Text as="h3" variant="h3" intent="primary">
              Mensagem recebida!
            </Text>
          </div>

          <Text
            variant="p"
            intent="muted"
            className="font-transducer leading-relaxed text-sm"
          >
            Obrigado pelo contato — sua mensagem chegou certinho pra mim. Vou
            ler com atenção e te respondo assim que possível.
          </Text>

          {submittedWhatsapp ? (
            <Text
              variant="p"
              intent="muted"
              className="font-transducer leading-relaxed text-sm"
            >
              Como você deixou seu número de WhatsApp, posso te retornar{" "}
              <span className="text-primary font-medium">
                por e-mail ou pelo WhatsApp
              </span>
              . Nos falamos em breve.
            </Text>
          ) : (
            <Text
              variant="p"
              intent="muted"
              className="font-transducer leading-relaxed text-sm"
            >
              Fique de olho no seu e-mail — é por lá que vou te responder.
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Text variant="caps" intent="muted">
            Me encontre também em
          </Text>
          <SocialButtons size={26} className="text-neutral hover:text-accent" />
        </div>
      </div>
    );
  }

  const isBusy = status === "sending";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClass}>
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="input input-bordered bg-base-200 font-transducer text-sm w-full focus:outline-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="input input-bordered bg-base-200 font-transducer text-sm w-full focus:outline-primary"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClass}>
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Conte-me sobre o seu projeto..."
          className="textarea textarea-bordered bg-base-200 font-transducer text-sm w-full resize-none focus:outline-primary"
        />
      </div>

      {/* WhatsApp + Company row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp{" "}
            <span className="normal-case tracking-normal font-normal opacity-60">
              (opcional)
            </span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="input input-bordered bg-base-200 font-transducer text-sm w-full focus:outline-primary"
          />
          <span className="font-transducer text-xs text-neutral-content opacity-70 leading-snug">
            Preencha só se quiser que eu entre em contato por WhatsApp.
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className={labelClass}>
            Empresa{" "}
            <span className="normal-case tracking-normal font-normal opacity-60">
              (opcional)
            </span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Nome da empresa"
            className="input input-bordered bg-base-200 font-transducer text-sm w-full focus:outline-primary"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={isBusy}
          className="btn btn-accent btn-sm md:btn-md disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status === "error" && (
          <Text
            as="span"
            variant="caps"
            intent="muted"
            className="text-error normal-case tracking-normal text-xs"
          >
            {errorMessage || "Ocorreu um erro. Tente me contatar diretamente."}
          </Text>
        )}
      </div>
    </form>
  );
}
