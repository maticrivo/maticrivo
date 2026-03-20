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
    </section>
  );
}
