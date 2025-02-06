import ThemeToggle from "./components/ThemeToggle"; // ✅ Import the toggle button
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* ✅ Add Theme Toggle Button */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {/* Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
