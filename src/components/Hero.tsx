export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video placeholder — replace with actual showreel */}
      <div className="absolute inset-0 video-placeholder opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-red text-sm uppercase tracking-[0.3em] font-medium mb-6">
          Visual Production Studio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
          SICKO
          <br />
          <span className="text-red">STUDIOS</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray max-w-xl mx-auto leading-relaxed">
          Cinematic content for businesses that refuse to blend in.
          Shot on cinema-grade cameras. Built to convert.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="bg-red hover:bg-red-dark text-white font-medium px-8 py-3.5 text-sm uppercase tracking-wider transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#packages"
            className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3.5 text-sm uppercase tracking-wider transition-colors"
          >
            See Packages
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-red to-transparent" />
      </div>
    </section>
  );
}
