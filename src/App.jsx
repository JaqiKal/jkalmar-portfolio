import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const HomePage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => setIsDark(document.documentElement.classList.contains("dark"));

    checkDarkMode();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkDarkMode);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", checkDarkMode);
    };
  }, []);

  return (
    <Router basename="/jkalmar-portfolio">
      {/* Global Wrapper with Background */}
      <div className="relative w-full min-h-screen bg-neutral-300">
        {/* Page Content */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
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
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
