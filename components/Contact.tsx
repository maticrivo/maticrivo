import { Github, Linkedin, Download } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-15 px-8 md:px-20 border-t border-border flex flex-col items-center">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        Let's Connect
      </h2>
      <div className="flex gap-4 items-center">
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
        <a
          href="/Matias_Crivolotti_Resume.pdf"
          download
          className="w-10 h-10 rounded-full bg-border flex items-center justify-center hover:bg-text-tertiary transition-colors"
          aria-label="Download Resume"
        >
          <Download className="w-5 h-5 text-text-primary" />
        </a>
      </div>
    </section>
  );
}
