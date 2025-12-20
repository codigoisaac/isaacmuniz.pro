"use client";

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LogoLight from "@/public/images/logo-light.png";
import LogoDark from "@/public/images/logo-dark.png";
import Link from "next/link";
import Image from "next/image";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata.js";
import { useTheme } from "@/app/theme-context";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("@/components/MobileNav"), {
  ssr: false,
});

const AppHeader: React.FC = () => {
  const theme = useTheme();
  const isLightTheme = theme === "silk";

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between py-10">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-6">
            <Image
              alt="logo"
              src={isLightTheme ? LogoDark : LogoLight}
              width={50}
              height={50}
            />
          </div>

          {typeof siteMetadata.headerTitle === "string" ? (
            <div className="font-ext hidden h-6 text-2xl sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      <div className="font-def flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 font-medium"
              >
                {link.title}
              </Link>
            ))}
        </div>

        <ThemeSwitcher />

        <MobileNav />
      </div>
    </header>
  );
};

export default AppHeader;
