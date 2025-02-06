import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle"; // ✅ Import the toggle button
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        <Navbar />

        {/* ✅ Add Theme Toggle Button */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        {/* Content */}
        <Routes>
          <Route
            path="/"
            element={<Hero />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
