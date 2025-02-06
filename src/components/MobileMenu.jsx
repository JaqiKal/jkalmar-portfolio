import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen, handleScroll }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-lg shadow-lg rounded-b-lg p-6"
        >
          <div className="flex flex-col space-y-4 items-center">
            {location.pathname === "/" ? (
              <>
                <a
                  href="#hero"
                  onClick={() => handleScroll("hero")}
                  className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => handleScroll("about")}
                  className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => handleScroll("skills")}
                  className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => handleScroll("projects")}
                  className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => handleScroll("contact")}
                  className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
                >
                  Contact
                </a>
                <a
                  href="#resume"
                  onClick={() => handleScroll("resume")}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
