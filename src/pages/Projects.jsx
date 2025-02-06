const Projects = () => {
  const projects = [
    { name: "Portfolio Website", description: "A modern portfolio built with React and TailwindCSS." },
    { name: "Logistics Tracker", description: "A web app for managing logistics and transport operations." },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-heading text-primary-500">My Projects</h2>
        <div className="mt-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-neutral-700 rounded-lg shadow"
            >
              <h3 className="text-2xl font-semibold text-primary-500">{project.name}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
