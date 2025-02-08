import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg bg-primary-900/20 dark:bg-secondary-100/20 transition hover:bg-primary-900/10 dark:hover:bg-secondary-100/10"
    >
      {theme === "light" ? <MoonIcon className="h-6 w-6 text-secondary-50" /> : <SunIcon className="h-6 w-6 text-warning" />}
    </button>
  );
};

export default ThemeToggle;
