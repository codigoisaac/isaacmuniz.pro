"use client";

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "@/app/theme-context";

const AppHeader: React.FC = () => {
  const theme = useTheme();
  return (
    <div className="flex space-x-4 justify-center pt-10">
      <ThemeSwitcher />

      <div
        className="p-4 bg-black text-white dark:bg-white dark:text-black"
        suppressHydrationWarning
      >
        I am now at {theme} mode
      </div>
    </div>
  );
};

export default AppHeader;
