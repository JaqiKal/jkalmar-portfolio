import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clickin
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-lg shadow-md py-4 px-6 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo or Brand Name */}
        <a
          href="/"
          className="text-primary-500 text-2xl font-bold"
        >
          Jacqueline Kalmár
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {location.pathname === "/" ? (
            <>
              <a
                href="#hero"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Contact
              </a>
              <a
                href="#resume"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Resume
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                About
              </Link>
              <Link
                to="/skills"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Contact
              </Link>
              <Link
                to="/resume"
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              >
                Resume
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="h-8 w-8 text-neutral-900 dark:text-neutral-100" /> : <Bars3Icon className="h-8 w-8 text-neutral-900 dark:text-neutral-100" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      {isOpen && (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleScroll={handleScroll}
        />
      )}
    </nav>
  );
};

export default Navbar;
