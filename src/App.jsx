import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        <Navbar />
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
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
    </Router>
  );
};

export default App;
