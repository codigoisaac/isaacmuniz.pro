"use server";

import siteMetadata from "@/data/siteMetadata";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(
  data: ContactFormData,
): Promise<ContactActionResult> {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return { success: false, error: "Preencha todos os campos." };
  }

  const { error } = await resend.emails.send({
    from: "Site <website@isaacmuniz.pro>",
    to: siteMetadata.socials.emailAddress,
    replyTo: email,
    subject: `Contato através do Site — ${name}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
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
