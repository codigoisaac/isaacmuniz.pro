import siteMetadata from "@/data/siteMetadata";
import SocialButtons from "../SocialButtons";

export default function Footer() {
  return (
    <footer className="general-content-margins footer-paddings mt-22 w-full">
      <div className="footer-inside-paddings border-t w-full pt-6 pb-9 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:place-items-center">
        {/* Text */}
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
            {siteMetadata.socials.emailAddress} |{" "}
            {siteMetadata.socials.phoneNumber}
          </div>

          <div>
            Esse projeto é{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={siteMetadata.repoLink}
            >
              Open Source
            </a>
            .
          </div>
        </div>

        <SocialButtons />
      </div>
    </footer>
  );
}
