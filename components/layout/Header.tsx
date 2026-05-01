"use client";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import dynamic from "next/dynamic";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

const SocialDropdown = dynamic(
  () => import("@/components/layout/SocialDropdown"),
  {
    ssr: false,
    loading: () => <div className="hidden h-8 w-8 md:block" />,
  },
);

export default function AppHeader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isAtTop = useRef(true);
  const isUserScrolling = useRef(false);
  const userScrollTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    // Mark scroll as intentional only when triggered by actual user input.
    // Layout-shift-induced scrolls (e.g. HomeShowcase slide change) never
    // fire wheel/touchmove/key events, so they won't toggle the header.
    const markIntentional = () => {
      isUserScrolling.current = true;
      clearTimeout(userScrollTimer.current);
      userScrollTimer.current = setTimeout(() => {
        isUserScrolling.current = false;
      }, 300);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ([" ", "ArrowUp", "ArrowDown", "PageUp", "PageDown"].includes(e.key))
        markIntentional();
    };

    const handleScroll = () => {
      if (!isUserScrolling.current || isAtTop.current) return;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) < 8) return;
      setVisible(delta < 0);
      lastScrollY.current = currentY;
    };

    const sentinel = document.getElementById("scroll-sentinel");
    const observer = new IntersectionObserver(
      ([entry]) => {
        isAtTop.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setVisible(true);
          lastScrollY.current = window.scrollY;
        }
      },
      { threshold: 0 },
    );
    if (sentinel) observer.observe(sentinel);

    window.addEventListener("wheel", markIntentional, { passive: true });
    window.addEventListener("touchmove", markIntentional, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(userScrollTimer.current);
      window.removeEventListener("wheel", markIntentional);
      window.removeEventListener("touchmove", markIntentional);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div className="font-geist-mono flex items-center gap-4 leading-5 md:gap-10 md:mt-2">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto md:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cn(
                      "m-1 font-medium animated-underline",
                      isActive && "text-primary",
                    )}
                  >
                    {link.title}
                  </Link>
                );
              })}
          </div>

          {/* Others */}

          <div className="flex items-center gap-3">
            <ThemeSwitcher />

            <SocialDropdown />
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
