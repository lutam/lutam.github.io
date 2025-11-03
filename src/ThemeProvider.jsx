import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    setTheme: () => { },
});

export const useTheme = () => {
  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const [theme, setTheme] = useState(darkMode ? "dark" : "light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  const context = useContext(ThemeContext);
  console.log('useTheme current context:', context);
  context.theme = theme;
  context.setTheme = setTheme;

  return context;
};

export default function ThemeProvider({ children }) {
  const context = useTheme();

  console.log('ThemeProvider render with theme:', context.theme);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
