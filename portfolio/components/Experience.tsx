const experiences = [
  { title: "Engineering Manager", company: "PayPal", date: "2024 — Present" },
  { title: "Senior Staff Engineer", company: "PayPal", date: "2021 — 2024" },
  { title: "Fullstack Engineer", company: "Zengaming", date: "2017 — 2018" },
  { title: "Frontend Engineer", company: "Everything.me", date: "2012 — 2015" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-6">
        Experience
      </h2>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex justify-between items-start pb-5 border-b border-border last:border-0"
          >
            <div>
              <h3 className="text-base font-medium text-text-primary">
                {exp.title}
              </h3>
              <p className="text-sm text-text-secondary">{exp.company}</p>
            </div>
            <span className="text-xs text-text-tertiary">{exp.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
