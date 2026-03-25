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

    document.querySelectorAll("link[data-favicon='dynamic']").forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href =
      theme === themes.dark ? "/favicons/favicon-dark.svg" : "/favicons/favicon-light.svg";
    document.head.appendChild(link);
  }, [theme]);

  return null;
}
