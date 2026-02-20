export default function Showreel() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-white/30" />
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] font-medium">
            Selected Work
          </p>
        </div>

        {/* Featured video — 16:9 landscape */}
        <div className="relative aspect-video w-full video-placeholder card-glow mb-8 group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/5 transition-all">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <p className="absolute bottom-6 left-6 text-sm text-gray">
            Replace with showreel or featured video
          </p>
        </div>

        {/* Video grid — landscape thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Brand Commercial",
            "Social Media Content",
            "Product Showcase",
            "Event Coverage",
            "Business Promo",
            "Interview / Testimonial",
          ].map((title, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video video-placeholder overflow-hidden">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-gray mt-1">Replace with video thumbnail</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
