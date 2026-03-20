import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center py-20 px-8 md:px-20 gap-6">
      <Image
        id="hero-image"
        src="https://www.gravatar.com/avatar/ff03fee9a056f057938db69d3458820b?s=192&d=mp"
        alt="Matias Crivolotti"
        width={96}
        height={96}
        className="rounded-full bg-border"
      />
      <h1 className="text-3xl md:text-4xl font-medium text-text-primary">
        Matias Crivolotti
      </h1>
      <p className="text-sm text-text-secondary tracking-widest uppercase text-center">
        Engineering Leader · 15+ Years Building Scalable Systems
      </p>
    </section>
  );
}
