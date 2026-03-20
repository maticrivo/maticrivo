const skillCategories = [
  {
    category: "Leadership & Management",
    skills: ["Team Building", "People Management", "Strategic Planning", "Performance Management", "Cross-functional Leadership", "High-Performance Teams"],
  },
  {
    category: "Communication",
    skills: ["Technical Presentations", "Code Reviews", "Cross-team Collaboration", "Stakeholder Management"],
  },
  {
    category: "Problem Solving",
    skills: ["System Architecture", "Process Optimization", "Decision Making", "Technical Design"],
  },
  {
    category: "Innovation & Strategy",
    skills: ["Process Improvement", "Tool Development", "Best Practices", "Product Strategy"],
  },
  {
    category: "Project Management",
    skills: ["Agile Methodologies", "Sprint Planning", "Roadmap Execution"],
  },
];

export default function SoftSkills() {
  return (
    <section id="skills" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-6">
        Skills
      </h2>
      <div className="flex flex-col gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-sm font-medium text-text-primary mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-pill-bg text-pill-text text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
