import { createContext, useContext } from "react";

export const themes = {
  light: "levitation",
  dark: "nightflight",
} as const;

export type ThemeName = (typeof themes)[keyof typeof themes];

export interface ThemeContextInterface {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined,
);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
