import { useTheme } from "../ThemeProvider";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="toggle-theme-container">
      <div className="toggle-theme" onClick={toggleTheme}>
        <div className="theme-icon">☾</div>
        <div className="theme-ball" />

        <div className="theme-icon">☀︎</div>
      </div>
    </div>
  );
}
