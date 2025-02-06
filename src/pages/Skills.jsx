const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "Python", "Django", "Logistics", "X", "Y", "Z"];

  return (
    <section className="py-16 px-6 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-heading text-primary-500">My Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
