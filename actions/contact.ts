"use server";

import siteMetadata from "@/data/siteMetadata";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  whatsapp?: string;
  company?: string;
};

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(
  data: ContactFormData,
): Promise<ContactActionResult> {
  const { name, email, message, whatsapp, company } = data;

  if (!name || !email || !message) {
    return { success: false, error: "Preencha todos os campos obrigatórios." };
  }

  const whatsappDigits = whatsapp?.replace(/\D/g, "") ?? "";
  const whatsappMessage = encodeURIComponent(
    `Oi, tudo bem?\nIsaac aqui.\nRecebi a mensagem que você enviou através do meu site (isaacmuniz.pro), e vim te responder aqui, já que você deixou seu WhatsApp.\nObrigado por ter entrado em contato.`,
  );
  const whatsappLink = whatsappDigits
    ? `https://wa.me/55${whatsappDigits}?text=${whatsappMessage}`
    : null;

  const { error } = await resend.emails.send({
    from: "Site <website@isaacmuniz.pro>",
    to: siteMetadata.socials.emailAddress,
    replyTo: email,
    subject: `Contato através do Site: ${name}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
      ${
        whatsappLink
          ? `<p><strong>WhatsApp:</strong> ${whatsapp} &nbsp;·&nbsp; <a href="${whatsappLink}" style="background:#25D366;color:#fff;padding:4px 10px;border-radius:4px;text-decoration:none;font-weight:bold;">Responder no WhatsApp</a></p>`
          : ""
      }
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("[Resend error]", error);
    return { success: false, error: "Falha ao enviar. Tente novamente." };
  }

  return { success: true };
}
