const projects = [
  {
    title: "Magneto",
    description: "Android test automation framework for UI testing",
    link: "https://github.com/EverythingMe/magneto",
  },
  {
    title: "Firefox OS Notes",
    description: "Notes application for Firefox OS",
    link: "https://github.com/EverythingMe/ffos-notes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        Open Source
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 border border-border rounded-lg hover:border-text-tertiary transition-colors"
          >
            <h3 className="text-sm font-medium text-text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
