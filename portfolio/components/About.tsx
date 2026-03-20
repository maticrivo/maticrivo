export default function About() {
  return (
    <section id="about" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        About
      </h2>
      <p className="text-base text-text-secondary leading-relaxed">
        Engineering Manager & Architect with 15+ years of experience, including 8+ years at PayPal driving technical excellence in high-scale fintech environments. Proven track record in people management and leading high-performance teams while remaining deeply hands-on. Passionate about technical mentorship, code quality, and fostering engineering culture.
      </p>
      <div className="flex flex-wrap gap-6 mt-5">
        <span className="text-sm text-text-tertiary">Spanish (Native)</span>
        <span className="text-sm text-text-tertiary">Hebrew (Native)</span>
        <span className="text-sm text-text-tertiary">English (Fluent)</span>
      </div>
    </section>
  );
}
