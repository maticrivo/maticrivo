"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Engineering Manager",
    company: "PayPal",
    date: "2024 — Present",
    details: "Leading cross-functional teams of 6+ engineers building experimentation platforms and AI-powered sales tools for global operations. Managing frontend, backend, and support teams.",
  },
  {
    title: "Senior Staff Engineer",
    company: "PayPal",
    date: "2021 — 2024",
    details: "Architected cloud-native third-party data integration platforms at scale. Led end-to-end UI/UX redesign of experimentation platforms. Introduced AI capabilities to internal lead generation tools.",
  },
  {
    title: "Fullstack Engineer",
    company: "Zengaming",
    date: "2017 — 2018",
    details: "Built fullstack features for the gaming platform. Worked on real-time matchmaking and tournament systems.",
  },
  {
    title: "Frontend Engineer",
    company: "Everything.me",
    date: "2012 — 2015",
    details: "Developed mobile-first web applications. Created open source projects including Magneto (Android test automation) and Firefox OS Notes.",
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
                expanded === i ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-text-secondary leading-relaxed pl-6">
                {exp.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
