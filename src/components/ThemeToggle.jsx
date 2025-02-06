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
      className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700"
    >
      {theme === "light" ? <MoonIcon className="h-6 w-6 text-neutral-900" /> : <SunIcon className="h-6 w-6 text-neutral-100" />}
    </button>
  );
};

export default ThemeToggle;
