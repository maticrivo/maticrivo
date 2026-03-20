"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const heroImage = document.getElementById('hero-image');
    if (!heroImage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroImage);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-border px-8 md:px-20 py-5 flex justify-between items-center">
      <div className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${isScrolledPastHero ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
        <Image
          src="https://www.gravatar.com/avatar/ff03fee9a056f057938db69d3458820b?s=64&d=mp"
          alt="Matias Crivolotti"
          width={32}
          height={32}
          className="rounded-full bg-border"
        />
        <a href="#" className="text-sm font-medium text-text-primary">
          Matias Crivolotti
        </a>
      </div>

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
            className="text-base text-text-secondary hover:text-text-primary transition-colors"
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
