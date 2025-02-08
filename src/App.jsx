import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

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
  return (
    <Router basename="/jkalmar-portfolio">
      <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
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
