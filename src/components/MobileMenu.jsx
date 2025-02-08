/**
 * MobileMenu.jsx - Mobile Navigation Component
 *
 * This component is responsible for rendering the mobile navigation menu when the hamburger icon is clicked.
 * It is conditionally displayed based on the `isOpen` prop passed from `Navbar.jsx`.
 *
 * - Uses `framer-motion` for smooth animations when opening and closing the menu.
 * - Receives `isOpen` to determine if the menu should be displayed.
 * - Uses `useLocation` from `react-router-dom` to determine active navigation links.
 * - Handles scrolling for internal links when on the homepage.
 * - Uses TailwindCSS for styling with dark mode support.
 *
 * `Navbar.jsx` passes down the `navLinks` array, `handleScroll`, and `setIsOpen` to manage the state and behavior of the mobile menu.
 */

import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen, handleScroll, navLinks }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg shadow-lg rounded-b-lg p-6"
        >
          <div className="flex flex-col space-y-4 items-center">
            {navLinks.map((link) =>
              location.pathname === "/" ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleScroll(link.href.replace("#", ""));
                    setIsOpen(false); // ✅ Close menu after clicking a link
                  }}
                  className="text-primary-800 dark:text-secondary-500 hover:text-tertiary-400 dark:hover:text-tertiary-400 transition hover:scale-110 lg:text-xl font-bold"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)} // ✅ Close menu after clicking a link
                  className="text-primary-800 dark:text-secondary-500 hover:text-tertiary-400 dark:hover:text-tertiary-400 transition hover:scale-110 lg:text-xl font-bold"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  handleScroll: PropTypes.func.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
};

export default MobileMenu;
