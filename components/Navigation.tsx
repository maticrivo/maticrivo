"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-border px-8 md:px-20 py-5 flex justify-between items-center">
      <a href="#" className="text-base font-medium text-text-primary">
        Matias Crivolotti
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer text-text-primary hover:text-text-secondary transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-primary border-b border-border px-8 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
