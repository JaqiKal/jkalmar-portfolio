import heroImage from "../assets/images/heroImage.webp";
import jaqiTini from "../assets/images/jaqiTini.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[60vh] md:min-h-screen flex flex-col md:flex-row items-stretch w-full"
    >
      {/* Centered Content on Top */}
      <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-6 mt-20">
        <div className="mb-10">
          <img
            src={jaqiTini}
            alt="Profile image"
            className="w-56 h-56 rounded-full object-cover border-1 border-white shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-800  dark:text-secondary-500">Hi, I&apos;m Jacqueline Kalmár</h1>
        <p className="my-10 text-xl text-neutral-900 dark:text-secondary-500">
          <span className="block">Logistician & Transport Leader</span>
          <span className="block">Junior Fullstack Developer</span>
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a href="#projects">
            <button className="px-6 py-3 rounded-lg bg-primary-700 text-white text-lg font-semibold shadow-md hover:bg-primary-500  hover:dark:bg-primary-400 transition hover:scale-105">View My Work</button>
          </a>
          <a href="#resume">
            <button className="px-6 py-3 rounded-lg bg-secondary-500 text-white text-lg font-semibold shadow-md hover:bg-secondary-700 transition hover:scale-105">View Resume</button>
          </a>
        </div>
      </div>

      {/* Left Column: Gradient Background - Hidden on Small Screens */}
      <div className=" hidden md:block md:w-1/2 h-screen bg-gradient-to-b from-neutral-300 to-primary-900 dark:from-primary-900 dark:to-neutral-800"></div>

      {/* Right Column: Hero Image */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen">
        <img
          src={heroImage} // TODO: Replace with real image later
          alt="A silvery ocean merging seamlessly with a pale sky beyond the horizon."
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
