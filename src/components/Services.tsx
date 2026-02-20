"use client";

import AnimateIn from "./AnimateIn";

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
    <section id="services" className="py-32 md:py-40 px-8 bg-gray-darker">
      <div className="max-w-[1400px] mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/25">02</span>
            <div className="w-12 h-px bg-white/15" />
            <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
              What We Do
            </p>
          </div>
          <h2 className="font-heading font-light text-4xl md:text-6xl tracking-tight mb-20 leading-tight">
            Your business deserves
            <br />
            better visuals.
          </h2>
        </AnimateIn>

        {/* Hero service card */}
        <AnimateIn>
          <div className="group p-10 md:p-12 mb-6 hover:bg-white/[0.02] transition-all duration-700 border border-transparent hover:border-white/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div className="font-mono text-xs text-white/20 mb-4">01</div>
                <h3 className="font-heading text-3xl md:text-4xl font-light tracking-tight group-hover:text-white transition-all duration-500">
                  {services[0].title}
                </h3>
              </div>
              <p className="text-gray leading-relaxed max-w-md md:text-right">
                {services[0].description}
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Remaining services in 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(1).map((service, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="group p-10 hover:bg-white/[0.02] transition-all duration-700 border border-transparent hover:border-white/10 h-full">
                <div className="font-mono text-xs text-white/20 mb-4">0{i + 2}</div>
                <h3 className="font-heading text-2xl font-light tracking-tight mb-4 group-hover:text-white transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Camera / Color Science spec card */}
        <AnimateIn>
          <div className="mt-20 p-10 md:p-12 border border-white/5 flex flex-col md:flex-row items-start md:items-center gap-10">
            <div className="shrink-0">
              <div className="font-heading font-light text-5xl tracking-tight">FX3</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2">Sony Cinema Line</div>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="flex-1">
              <p className="text-lg font-light mb-2">Cinema-grade color science</p>
              <p className="text-gray text-sm leading-relaxed">
                Full-frame sensor. S-Cinetone color profiles. Professional LUT-based color grading
                in DaVinci Resolve. The same imaging pipeline used in Hollywood productions — now working for your brand.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-3 text-right shrink-0">
              <div>
                <div className="font-mono text-[10px] text-white/25 uppercase tracking-wider">Sensor</div>
                <div className="text-sm font-light">Full-Frame 10.2MP</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-white/25 uppercase tracking-wider">Color</div>
                <div className="text-sm font-light">S-Cinetone / S-Log3</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-white/25 uppercase tracking-wider">Grade</div>
                <div className="text-sm font-light">DaVinci Resolve</div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
