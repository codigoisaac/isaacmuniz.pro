"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react";

const icon = { size: 30, weight: "duotone", className: "text-base-content" };

export default function Footer() {
  return (
    <footer className="general-content-margins footer-paddings mt-22 w-full">
      <div className="footer-inside-paddings border-t w-full pt-10 pb-12 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:place-items-center text-xs">
        <div className="flex flex-col gap-0.5">
          <div>
            &copy; Isaac Muniz. Built with{" "}
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

          <div>im.isaac.muniz@gmail.com</div>

          <div>Your best self is eager to have you around.</div>
        </div>

        <div className="flex gap-4">
          <a
            className="unstiled-link"
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
            className="unstiled-link"
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
            className="unstiled-link"
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
        </div>
      </div>
    </footer>
  );
}
