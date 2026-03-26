"use client";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import dynamic from "next/dynamic";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import { useEffect, useRef, useState } from "react";

const ScrambledText = dynamic(() => import("@/components/ScrambledText"), {
  ssr: false,
  // shows normal text while loading
  loading: () => <span>{siteMetadata.headerTitle}</span>,
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
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 mb-10 w-full bg-base-100/70 backdrop-blur-xs transition-transform duration-500 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="general-content-margins header-paddings flex items-center justify-between pt-4 pb-2 md:pt-5 md:pb-4">
        {/* Logo and title */}
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-6">
              <Logo className="text-base-content w-12.5" />
            </div>

            <div className="font-transducer-extended hidden h-6 text-[28px] -mt-3 sm:block">
              <ScrambledText>{siteMetadata.headerTitle}</ScrambledText>
            </div>
          </div>
        </Link>

        {/* Links */}
        <div className="font-geist-mono flex items-center gap-4 leading-5 md:gap-6 mt-2">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto md:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="m-1 font-medium animated-underline"
                >
                  {link.title}
                </Link>
              ))}
          </div>

          {/* Others */}

          <ThemeSwitcher />

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
