import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center py-20 px-8 md:px-20 gap-6">
      <div className="w-24 h-24 rounded-full bg-border" />
      <h1 className="text-3xl md:text-4xl font-medium text-text-primary">
        Matias Crivolotti
      </h1>
      <p className="text-sm text-text-secondary tracking-widest uppercase text-center">
        Engineering Leader · 15+ Years Building Scalable Systems
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/maticrivo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-border flex items-center justify-center hover:bg-text-tertiary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-text-primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/matiascrivolotti"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-border flex items-center justify-center hover:bg-text-tertiary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-text-primary" />
        </a>
      </div>
    </section>
  );
}
