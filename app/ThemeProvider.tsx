"use client";

import React, { useEffect, useState } from "react";
import { Theme, ThemeContext, themes } from "./theme-context";

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dim";

    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme) return savedTheme;

    const doesSystemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return doesSystemPrefersDark ? themes.dim : themes.silk;
  });

  const toggleTheme = (): void => {
    const newTheme = theme == themes.dim ? themes.silk : themes.dim;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
