"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-border px-8 md:px-20 py-5 flex justify-between items-center">
      <a href="#" className="text-base font-medium text-text-primary">
        Matias Crivolotti
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1 cursor-pointer"
        aria-label="Menu"
      >
        <span className="w-5 h-0.5 bg-text-primary rounded-sm transition-all" />
        <span className="w-3.5 h-0.5 bg-text-primary rounded-sm transition-all" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary border-b border-border px-8 md:px-20 py-4 flex flex-col gap-3">
          <a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" className="text-sm text-text-secondary hover:text-text-primary transition-colors" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#tech-stack" className="text-sm text-text-secondary hover:text-text-primary transition-colors" onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#projects" className="text-sm text-text-secondary hover:text-text-primary transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}