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
    Icon: WhatsappLogoIcon,
  },
  {
    href: siteMetadata.socials.instagramLink,
    label: "Instagram",
    Icon: InstagramLogoIcon,
  },
  {
    href: siteMetadata.socials.linkedinLink,
    label: "LinkedIn",
    Icon: LinkedinLogoIcon,
  },
  {
    href: siteMetadata.socials.githubLink,
    label: "GitHub",
    Icon: GithubLogoIcon,
  },
  {
    href: siteMetadata.socials.emailLink,
    label: "E-mail",
    Icon: EnvelopeIcon,
  },
];

export default socials;
