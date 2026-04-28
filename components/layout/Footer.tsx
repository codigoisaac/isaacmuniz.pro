import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import socials from "@/data/socials";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="general-content-margins footer-paddings mt-22 w-full">
      <div className="footer-inside-paddings border-t w-full pt-8 pb-10">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-52">
            <span className="font-transducer-extended text-sm uppercase tracking-wide text-base-content flex items-center gap-2.5">
              {/* <Logo height="20" /> */}

              <span>{siteMetadata.authorName}</span>
            </span>

            <p className="text-xs font-geist-mono text-base-content/40 leading-relaxed">
              Desenvolvendo soluções digitais modernas com foco em performance e
              experiência do usuário.
            </p>

            <p className="text-xs font-geist-mono text-base-content/30 leading-relaxed">
              Website feito com amor usando{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nextjs.org"
                className="hover:text-primary transition-colors duration-200"
              >
                Next.js
              </a>{" "}
              &{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tailwindcss.com"
                className="hover:text-primary transition-colors duration-200"
              >
                TailwindCSS
              </a>
              . Esse projeto é{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteMetadata.repoLink}
                className="hover:text-primary transition-colors duration-200"
              >
                Open Source
              </a>
              .
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 sm:gap-16">
            {/* Navigation */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-geist-mono uppercase tracking-widest text-base-content/30 mb-0.5">
                Páginas
              </span>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-geist-mono text-base-content/55 hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Socials & Contact */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-geist-mono uppercase tracking-widest text-base-content/30 mb-0.5">
                Redes e Contato
              </span>
              {socials.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-geist-mono text-base-content/55 hover:text-primary transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
