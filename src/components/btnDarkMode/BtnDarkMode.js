import { useEffect } from "react";
import { useLocalStorage } from "./../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

const BtnDarkMode = () => {
  // Custom hook to manage theme state in local storage
  const [theme, setTheme] = useLocalStorage("theme", detectDarkMode());

  // Effect to add or remove theme classes on body based on theme state
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    // Dispatch custom event to notify other components of theme change
    window.dispatchEvent(new Event("themeChange"));
  }, [theme]);

  // Effect to listen for system dark mode preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme]);

  // Toggle theme state
  const toggleThemeMode = () => {
    setTheme((currentValue) => (currentValue === "light" ? "dark" : "light"));
  };

  // Define button classes based on theme state
  const btnClass =
    theme === "dark" ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn";

  return (
    <button className={btnClass} onClick={toggleThemeMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
