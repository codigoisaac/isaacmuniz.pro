import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import siteMetadata from "./siteMetadata";

const socials = [
  {
    href: siteMetadata.socials.whatsappLink,
    label: "WhatsApp",
    tooltip: "Chamar no WhatsApp",
    Icon: WhatsappLogoIcon,
  },
  {
    href: siteMetadata.socials.instagramLink,
    label: "Instagram",
    tooltip: "Seguir no Instagram",
    Icon: InstagramLogoIcon,
  },
  {
    href: siteMetadata.socials.linkedinLink,
    label: "LinkedIn",
    tooltip: "Conectar no LinkedIn",
    Icon: LinkedinLogoIcon,
  },
  {
    href: siteMetadata.socials.githubLink,
    label: "GitHub",
    tooltip: "Acompanhar no GitHub",
    Icon: GithubLogoIcon,
  },
  {
    href: siteMetadata.socials.emailLink,
    label: "E-mail",
    tooltip: "Enviar email",
    Icon: EnvelopeIcon,
  },
];

export default socials;
