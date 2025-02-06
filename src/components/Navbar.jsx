import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-neutral-900 shadow-md py-4">
      <div className="flex justify-center space-x-6">
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
          to="/resume"
          className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="text-neutral-900 dark:text-neutral-100 hover:text-primary-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
