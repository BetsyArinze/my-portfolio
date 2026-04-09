import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const buttonStyle: React.CSSProperties = {
  background: "var(--bg)",
  color: "#000",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "clamp(0.3rem, 2vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem)",
  cursor: "pointer",
};

const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { darkMode, toggleDarkMode } = context;

  return (
    <button
      style={buttonStyle}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        toggleDarkMode(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
