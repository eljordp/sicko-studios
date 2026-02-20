const services = [
  {
    title: "Brand Videos",
    description:
      "Cinematic brand films that tell your story. Shot on the Sony FX3 with professional color grading for that premium look your competitors can't touch.",
  },
  {
    title: "Social Content",
    description:
      "Reels, TikToks, and Shorts that stop the scroll. Consistent content that builds your audience and drives engagement.",
  },
  {
    title: "Commercial Spots",
    description:
      "Ad-ready video content designed to convert. From concept to final color grade, we handle the entire production.",
  },
  {
    title: "Event Coverage",
    description:
      "Capture your events with cinematic quality. Grand openings, launches, conferences — we make them look legendary.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-darker">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-white/30" />
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] font-medium">
            What We Do
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Your business deserves
          <br />
          better visuals.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-white/5 p-8 hover:border-white/20 transition-colors group"
            >
              <div className="text-white/30 text-sm font-mono mb-4">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Camera / Color Science callout */}
        <div className="mt-16 border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 text-center md:text-left">
            <div className="text-4xl font-bold tracking-tighter">FX3</div>
            <div className="text-xs uppercase tracking-widest text-gray mt-1">Sony Cinema Line</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <p className="text-lg font-medium">Cinema-grade color science</p>
            <p className="text-gray mt-1">
              Full-frame sensor. S-Cinetone color profiles. Professional LUT-based color grading.
              The same imaging pipeline used in Hollywood productions — now working for your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
