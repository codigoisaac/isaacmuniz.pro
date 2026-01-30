"use client";

import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const icon = { size: 30, weight: "duotone", className: "text-base-content" };

export default function Footer() {
  return (
    <footer className="general-content-margins footer-paddings mt-22 w-full">
      <div className="footer-inside-paddings border-t w-full pt-10 pb-12 flex justify-between place-items-center text-xs">
        <div className="flex flex-col">
          <div className="mb-1">
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

          <div>Powered by excessive amounts of coffee and heavy techno.</div>
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
        </div>
      </div>
    </footer>
  );
}
