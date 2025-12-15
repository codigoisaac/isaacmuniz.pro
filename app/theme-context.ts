import React, { ChangeEventHandler, useContext } from "react";

export type Theme = "silk" | "dim" | "system";

export const themes: { [key: string]: Theme } = {
  silk: "silk",
  dim: "dim",
};

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
