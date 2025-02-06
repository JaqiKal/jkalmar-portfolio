import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-neutral-900 shadow-md py-4">
      <div className="flex justify-center space-x-6">
        {/* If on homepage, scroll; otherwise, navigate */}
        {location.pathname === "/" ? (
          <>
            <a
              href="#hero"
              className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              onClick={() => handleScroll("hero")}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              onClick={() => handleScroll("about")}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </a>
            <a
              href="#resume"
              className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
              onClick={() => handleScroll("resume")}
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
    </nav>
  );
};

export default Navbar;
