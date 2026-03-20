"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Engineering Manager",
    company: "PayPal",
    date: "2024 — Present",
    details: [
      "Lead a cross-functional team of 6 engineers (Frontend, Backend, Support) building PayPal's experimentation platform and AI-powered sales prospecting tools",
      "Foster high-performance team culture through mentorship, career development, and regular feedback",
      "Collaborate with Product Managers and stakeholders to influence product strategy and align engineering roadmap with company objectives",
      "Led end-to-end UI/UX redesign of experimentation platform, improving usability and visual consistency",
      "Introduced AI capabilities to internal lead generation tools used by global sales teams",
    ],
  },
  {
    title: "Senior Staff Engineer",
    company: "PayPal",
    date: "2021 — 2024",
    details: [
      "Led technical design docs and conducted thorough code reviews across the team",
      "Architected and developed a cloud-native third-party data integration platform using microservices architecture, ensuring scalability and resilience",
      "Owned CI/CD pipelines and infrastructure as team DevOps lead",
      "Introduced streamlined dev lifecycle processes and sprint execution standards",
      "Contributed to feature planning and documentation of the experimentation platform",
    ],
  },
  {
    title: "Fullstack Engineer",
    company: "PayPal",
    date: "2018 — 2021",
    details: [
      "Built internal web tools for big data teams",
      "Created and maintained an internal React UI library",
      "Helped create and maintain the default PayPal template for React applications",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Neura",
    date: "2015 — 2017",
    details: [
      "Lead frontend developer for all company-facing platforms",
      "Built data visualization dashboards and mentored interns",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Everything.me",
    date: "2012 — 2015",
    details: [
      "Developed internal tools, blogs, CMS, and test automation frameworks",
      "Created the open-source Android test automation tool Magneto",
      "Led development of Firefox OS Notes app with Evernote API integration",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="experience" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-6">
        Experience
      </h2>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <div key={i} className="border-b border-border last:border-0">
            <button
              onClick={() => toggle(i)}
              className="w-full flex flex-wrap justify-between items-start gap-x-4 pb-5 cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <ChevronDown
                  className={`w-4 h-4 text-text-tertiary transition-transform duration-200 ${
                    expanded === i ? "rotate-180" : ""
                  }`}
                />
                <div className="text-left">
                  <h3 className="text-base font-medium text-text-primary group-hover:text-text-secondary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{exp.company}</p>
                </div>
              </div>
              <span className="text-xs text-text-tertiary">{exp.date}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expanded === i ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="list-disc list-outside text-sm text-text-secondary leading-relaxed pl-10 space-y-1">
                {exp.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
