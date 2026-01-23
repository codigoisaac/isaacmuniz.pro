"use client";

import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata.js";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@/components/layout/Logo"), {
  ssr: false,
  loading: () => <div style={{ width: 50, height: 50 }} />,
});

const MobileNav = dynamic(() => import("@/components/layout/MobileNav"), {
  ssr: false,
});

const ThemeSwitcher = dynamic(
  () => import("@/components/layout/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <div className="h-8 w-8" />,
  },
);

export default function AppHeader() {
  return (
    <header className="font-transducer sticky top-0 z-50 flex w-full items-center justify-between pb-10 pt-7">
      {/* Logo and title */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-6">
            <Logo />
          </div>

          {typeof siteMetadata.headerTitle === "string" ? (
            <div className="font-transducer-entended hidden h-6 text-2xl sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-4 leading-5 md:-mr-6 md:space-x-6 mt-2">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto md:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 font-medium hover:underline"
              >
                {link.title}
              </Link>
            ))}
        </div>

        {/* Others */}

        <ThemeSwitcher />

        <MobileNav />
      </div>
    </header>
  );
}
