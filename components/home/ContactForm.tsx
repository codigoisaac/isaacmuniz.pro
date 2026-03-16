"use client";

import { useState } from "react";
import { sendContactEmail } from "@/actions/contact";
import Text from "@/components/Text";

type FormStatus = "idle" | "sending" | "sent" | "error";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const result = await sendContactEmail(form);

    if (result.success) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  };

  const isBusy = status === "sending" || status === "sent";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
          disabled={isBusy}
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
            {errorMessage || "Ocorreu um erro. Tente me contatar diretamente."}
          </Text>
        )}
      </div>
    </form>
  );
}
