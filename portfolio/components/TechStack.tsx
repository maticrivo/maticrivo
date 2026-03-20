const skills = [
  "TypeScript",
  "Go",
  "Python",
  "React",
  "GraphQL",
  "Node.js",
  "AWS",
  "GCP",
  "Docker",
  "PostgreSQL",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-5">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 bg-pill-bg text-pill-text text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
