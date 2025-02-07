import { EnvelopeIcon } from "@heroicons/react/24/solid"; // ✅ Using Heroicons for Email
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Using FontAwesome for GitHub & LinkedIn

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white py-4 mt-0 flex flex-col items-center">
      {/* Social Media Icons */}
      <div className="flex space-x-10">
        {/* Email Icon (Heroicons) */}
        <a
          href="mailto:your-email@example.com"
          className="text-white hover:text-success transition-transform duration-300 hover:scale-110"
          aria-label="Send an Email"
        >
          <EnvelopeIcon className="w-5 h-5" />
        </a>
        {/* GitHub Icon (FontAwesome) */}
        <a
          href="https://github.com/JaqiKal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-success transition-transform duration-300 hover:scale-110"
          aria-label="Visit GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5"
          />
        </a>

        {/* LinkedIn Icon (FontAwesome) */}
        <a
          href="https://www.linkedin.com/in/jacqueline-kalmar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-success transition-transform duration-300 hover:scale-110"
          aria-label="Visit LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-5 h-5"
          />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-xs mt-2 text-gray-400">
        &copy; {new Date().getFullYear()} Made by{" "}
        <a
          href="https://www.linkedin.com/in/jacqueline-kalmar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-success transform hover:scale-105"
        >
          JaqiKal.{" "}
        </a>
        Favicon by{" "}
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfolio icon"
          className="text-primary-500 hover:text-success transform hover:scale-105"
        >
          icons8
        </a>
      </p>
    </footer>
  );
};

export default Footer;
