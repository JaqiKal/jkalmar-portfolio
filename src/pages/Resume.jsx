// TODO: Add the english version of the CV and button to download it
const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 px-6"
    >
      <h2 className="text-4xl font-heading text-primary-500 mb-6">My Resume</h2>

      {/* Embedded PDF Viewer */}
      <iframe
        src="/jacqueline-kalmar-cv.pdf"
        className="w-full max-w-3xl h-[500px] border border-neutral-300 dark:border-neutral-700"
      ></iframe>

      {/* Download Button */}
      <a
        href="/jacqueline-kalmar-cv.pdf"
        download="jacqueline-kalmar-cv.pdf"
        className="mt-6 px-6 py-2 rounded-lg bg-primary-500 text-white text-lg font-semibold shadow-md hover:bg-primary-600 transition"
      >
        Download CV
      </a>
    </section>
  );
};

export default Resume;
