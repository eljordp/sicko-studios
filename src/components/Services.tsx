const services = [
  {
    title: "Brand Videos",
    description:
      "Cinematic brand films that tell your story. Shot on the Sony FX3 for that premium look your competitors don't have.",
  },
  {
    title: "Social Content",
    description:
      "Reels, TikToks, and Shorts that stop the scroll. Consistent content that builds your audience and drives engagement.",
  },
  {
    title: "Commercial Spots",
    description:
      "Ad-ready video content designed to convert. From concept to final cut, we handle the entire production.",
  },
  {
    title: "Event Coverage",
    description:
      "Capture your events with cinematic quality. Grand openings, launches, conferences — we make them look legendary.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-darker/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-red" />
          <p className="text-red text-sm uppercase tracking-[0.3em] font-medium">
            What We Do
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Your business deserves
          <br />
          <span className="text-red">better visuals.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-white/5 p-8 hover:border-red/30 transition-colors group"
            >
              <div className="text-red text-sm font-mono mb-4">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* FX3 callout */}
        <div className="mt-16 border border-red/20 bg-red/5 p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-red text-4xl font-bold tracking-tighter shrink-0">
            FX3
          </div>
          <div>
            <p className="text-lg font-medium">Shot on Sony FX3</p>
            <p className="text-gray mt-1">
              Cinema-grade camera. Full-frame sensor. The same tech used in Hollywood productions —
              now working for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
