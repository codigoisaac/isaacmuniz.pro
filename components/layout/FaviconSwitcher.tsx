"use client";

import { useEffect, useRef } from "react";
import { useTheme, themes } from "@/context/theme-context";

export default function FaviconSwitcher() {
  const { theme } = useTheme();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      return;
    }

    document.querySelectorAll("link[rel~='icon']").forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href =
      theme === themes.dark ? "/favicon-dark.svg" : "/favicon-light.svg";
    document.head.appendChild(link);
  }, [theme]);

  return null;
}
