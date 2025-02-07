const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-6"
    >
      <h1 className="text-5xl font-heading text-primary-500">Hi, I&apos;m Jacqueline Kalmár</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">Logistician & transport leader and Junior full stack sw developer</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-2 rounded-lg bg-primary-700 text-white text-lg font-semibold shadow-md hover:bg-success transform hover:scale-105 transition">View My Work</button>
        <button className="px-6 py-2 rounded-lg bg-primary-700 text-white text-lg font-semibold shadow-md hover:bg-success transform hover:scale-105 transition">View Resume</button>
      </div>
    </section>
  );
};

export default Hero;
