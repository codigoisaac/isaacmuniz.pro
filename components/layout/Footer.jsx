"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

const icon = { size: 28, weight: "duotone", className: "text-base-content" };

export default function Footer() {
  return (
    <footer className="general-content-margins footer-paddings mt-22 w-full">
      <div className="footer-inside-paddings border-t w-full pt-6 pb-9 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:place-items-center">
        <div className="flex flex-col gap-0.5 text-xs">
          <div>
            &copy; Isaac Muniz. Feito com{" "}
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

          <div>im.isaac.muniz@gmail.com | +55 (19) 98195-7816</div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/codigoisaac"
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
            href="https://linkedin.com/in/isaac-muniz"
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
            href="mailto:im.isaac.muniz@gmail.com"
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
            href="https://wa.me/5519981957816"
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
