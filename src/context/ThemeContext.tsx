import { createContext } from "react";

type ThemeContextProps = {
  darkMode: boolean;
  toggleDarkMode: (x?: number, y?: number) => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);
