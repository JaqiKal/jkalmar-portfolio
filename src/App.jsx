import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/layout/Footer";

const HomePage = () => {
  return (
    <div>
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
      {/* Global Wrapper with Background */}
      <div className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Navbar at the top */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 pt-16">
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
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
