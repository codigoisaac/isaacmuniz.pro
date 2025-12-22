import React, { ChangeEventHandler, useContext } from "react";

export const themes = {
  system: "system",
  light: "light",
  dark: "black",
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

interface ThemeContextInterface {
  theme: Theme;
  toggleTheme: ChangeEventHandler<HTMLInputElement>;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: themes.system,
  toggleTheme: () => {},
});

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeContext.Provider");
  }

  return context.theme;
};
