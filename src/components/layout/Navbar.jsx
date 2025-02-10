/**
 * Navbar.jsx - Main Navigation Component
 *
 * This component is responsible for rendering the main navigation bar, including both
 * the desktop and mobile versions. It handles theme toggling and dynamic navigation.
 *
 * - Uses `useState` to manage the mobile menu state (`isOpen`)
 * - Uses `useLocation` from `react-router-dom` to determine active navigation links
 * - Passes navigation links (`navLinks`) to `MobileMenu.jsx` for mobile rendering
 *
 * MobileMenu.jsx is a separate component that is conditionally rendered when `isOpen` is true.
 * It receives `navLinks`, `setIsOpen`, and `handleScroll` to manage navigation on smaller screens.
 */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to handle smooth scrolling to sections
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Define navigation links for both desktop and mobile
  const navLinks = [
    { name: "Home", href: "#hero", to: "/" },
    { name: "About", href: "#about", to: "/about" },
    { name: "Skills", href: "#skills", to: "/skills" },
    { name: "Projects", href: "#projects", to: "/projects" },
    { name: "Contact", href: "#contact", to: "/contact" },
    { name: "Resume", href: "#resume", to: "/resume" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-300 dark:bg-primary-900/90 backdrop-blur-lg shadow-md py-4 px-6 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo or Brand Name */}
        <a
          href="/"
          className="text-primary-800  dark:hover:text-tertiary-400 hover:text-tertiary-400 dark:text-secondary-500 transition hover:scale-110 lg:text-2xl font-bold"
        >
          Jacqueline Kalmár
        </a>

        {/* Desktop Navigation - Visible on medium and larger screens */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) =>
            location.pathname === "/" ? (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-800 dark:text-secondary-500 hover:text-tertiary-400 dark:hover:text-tertiary-400 transition hover:scale-110 lg:text-xl font-bold"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-primary-800 dark:text-secondary-400 hover:text-tertiary-400 dark:hover:text-tertiary-400 transition hover:scale-110 lg:text-xl font-bold"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) - Visible on small screens */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="h-8 w-8 text-primary-800 dark:text-secondary-400" /> : <Bars3Icon className="h-8 w-8 text-primary-800 dark:text-secondary-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Component - Renders only when isOpen is true */}
      {isOpen && (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleScroll={handleScroll}
          navLinks={navLinks} // Pass navigation links to MobileMenu
        />
      )}
    </nav>
  );
};

export default Navbar;
