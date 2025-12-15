"use client";

import React, { useEffect, useState } from "react";
import { Theme, ThemeContext, themes } from "./theme-context";

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes.system);

  useEffect(() => console.log(`theme: ${theme}`), [theme]);

  const toggleTheme = (): void => {
    const newTheme = theme == themes.dim ? themes.silk : themes.dim;
    setTheme(newTheme);
    console.log(`setting data-theme and localStorage to: ${newTheme}`);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const contextValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themes.dim
        : themes.silk;

    const themeToUse: Theme = savedTheme ?? systemTheme;

    document.documentElement.setAttribute("data-theme", themeToUse);

    localStorage.setItem("theme", themeToUse);

    setTheme(themeToUse);
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
