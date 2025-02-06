import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Importing an icon
import ThemeToggle from "./components/ThemeToggle"; // ✅ Import the toggle button

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* ✅ Add Theme Toggle Button */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-heading text-primary-500">Heroicons Are Working!</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300">You successfully installed Heroicons.</p>
      {/* Test Icon */}
      <CheckCircleIcon className="w-12 h-12 text-success mt-4" />
    </div>
  );
}

export default App;
