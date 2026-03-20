export default function Contact() {
  return (
    <section id="contact" className="py-15 px-8 md:px-20 border-t border-border flex flex-col items-center">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        Let's Connect
      </h2>
      <div className="flex gap-4">
        <a
          href="https://github.com/maticrivo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border rounded-md text-sm text-pill-text hover:bg-pill-bg transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/matiascrivolotti"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-border rounded-md text-sm text-pill-text hover:bg-pill-bg transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
