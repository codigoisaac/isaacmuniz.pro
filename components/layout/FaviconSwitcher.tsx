"use client";

import { useEffect } from "react";
import { useTheme, themes } from "@/context/theme-context";

export default function FaviconSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href =
        theme === themes.dark ? "/favicon-dark.svg" : "/favicon-light.svg";
    }
  }, [theme]);

  return null;
}
