"use client";

import AnimateIn from "./AnimateIn";

export default function Showreel() {
  return (
    <section id="work" className="py-32 md:py-40 px-8">
      <div className="max-w-[1400px] mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-white/25">01</span>
            <div className="w-12 h-px bg-white/15" />
            <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
              Selected Work
            </p>
          </div>
        </AnimateIn>

        {/* Featured video — cinematic 2.39:1 */}
        <AnimateIn>
          <div className="relative aspect-cinematic w-full video-placeholder card-glow mb-8 group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-700">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-8 flex items-center gap-3">
              <span className="font-mono text-[10px] text-white/25 uppercase tracking-wider">2.39 : 1</span>
              <div className="w-6 h-px bg-white/15" />
              <span className="text-xs text-white/30">Featured Showreel</span>
            </div>
          </div>
        </AnimateIn>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Brand Commercial",
            "Social Media Content",
            "Product Showcase",
            "Event Coverage",
            "Business Promo",
            "Interview / Testimonial",
          ].map((title, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-video video-placeholder overflow-hidden">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 video-placeholder" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-sm font-light">{title}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
