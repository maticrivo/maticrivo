export default function About() {
  return (
    <section id="about" className="py-15 px-8 md:px-20 border-t border-border">
      <h2 className="text-xs text-text-tertiary tracking-widest uppercase mb-4">
        About
      </h2>
      <p className="text-base text-text-secondary leading-relaxed max-w-xl">
        Engineering Manager at PayPal leading cross-functional teams building
        experimentation platforms and AI-powered sales tools for global
        operations. Based in Tel Aviv, Israel. Originally from Argentina.
      </p>
      <div className="flex flex-wrap gap-6 mt-5">
        <span className="text-sm text-text-tertiary">Spanish (Native)</span>
        <span className="text-sm text-text-tertiary">Hebrew (Native)</span>
        <span className="text-sm text-text-tertiary">English (Fluent)</span>
      </div>
    </section>
  );
}
