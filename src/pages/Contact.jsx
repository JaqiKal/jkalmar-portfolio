const Contact = () => {
  return (
    <section className="py-16 px-6 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-heading text-primary-500">Contact Me</h2>
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">Feel free to reach out to me for any collaboration or job opportunities!</p>
        <div className="mt-6">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-2 rounded-lg bg-primary-500 text-white text-lg font-semibold shadow-md hover:bg-primary-600 transition"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
