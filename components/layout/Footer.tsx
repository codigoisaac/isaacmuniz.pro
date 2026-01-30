"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  WhatsappLogoIcon,
  IconProps,
} from "@phosphor-icons/react";
import siteMetadata from "@/data/siteMetadata";

const icon: IconProps = {
  size: 28,
  weight: "duotone",
  className: "text-base-content",
};

export default function Footer() {
  return (
    <footer className="general-content-margins footer-paddings mt-22 w-full">
      <div className="footer-inside-paddings border-t w-full pt-6 pb-9 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:place-items-center">
        <div className="flex flex-col gap-0.5 text-xs">
          <div>
            &copy; {siteMetadata.authorName}. Feito com{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com"
            >
              TailwindCSS
            </a>
            .
          </div>

          <div>
            {siteMetadata.emailAddress} | {siteMetadata.phoneNumber}
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={siteMetadata.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon
              size={icon.size}
              weight={icon.weight}
              className={icon.className}
            />
          </a>

          <a
            href={siteMetadata.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon
              size={icon.size}
              weight={icon.weight}
              className={icon.className}
            />
          </a>

          <a
            href={siteMetadata.emailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon
              size={icon.size}
              weight={icon.weight}
              className={icon.className}
            />
          </a>

          <a
            href={siteMetadata.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogoIcon
              size={icon.size}
              weight={icon.weight}
              className={icon.className}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
