import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeProvider.css";

type ThemeProviderProps = { children: ReactNode };

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("dark-mode") === "true",
  );

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode.toString());
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const toggleDarkMode = (
    x = window.innerWidth / 2,
    y = window.innerHeight / 2,
  ) => {
    const nextDark = !darkMode;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    if (!document.startViewTransition) {
      setDarkMode(nextDark);
      return;
    }

    document.startViewTransition(() => {
      setDarkMode(nextDark);
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
