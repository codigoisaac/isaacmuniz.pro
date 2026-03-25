"use client";

import React, { useEffect, useState } from "react";
import { ThemeContext, themes, ThemeName } from "./theme-context";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") return themes.light;
    const savedTheme = localStorage.getItem("theme") as ThemeName;
    if (Object.values(themes).includes(savedTheme)) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((previousTheme) => {
      const next = previousTheme === themes.dark ? themes.light : themes.dark;
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
