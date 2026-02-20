const packages = [
  {
    name: "Starter",
    price: "$500",
    period: "/mo",
    description: "Get started with consistent content",
    features: [
      "4 short-form videos/month",
      "Basic editing & color grade",
      "Optimized for Reels, TikTok, Shorts",
      "2 revision rounds per video",
      "Monthly content calendar",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,000",
    period: "/mo",
    description: "Scale your content and brand presence",
    features: [
      "8 short-form videos/month",
      "1 brand/promo video (30-60s)",
      "Professional color grading",
      "Sound design & motion graphics",
      "Content strategy included",
      "3 revision rounds per video",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Premium",
    price: "$4,000",
    period: "/mo",
    description: "Full-service visual production",
    features: [
      "12+ short-form videos/month",
      "2 brand/commercial videos",
      "Monthly photo shoot",
      "Full post-production suite",
      "Creative direction & strategy",
      "Unlimited revisions",
      "Priority scheduling",
    ],
    cta: "Go Premium",
    featured: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-red" />
          <p className="text-red text-sm uppercase tracking-[0.3em] font-medium">
            Pricing
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Packages that <span className="text-red">scale.</span>
        </h2>
        <p className="text-gray text-lg mb-16 max-w-xl">
          No hidden fees. No contracts. Just consistent, high-quality content
          for your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative border p-8 flex flex-col ${
                pkg.featured
                  ? "border-red bg-red/5 red-glow"
                  : "border-white/10 hover:border-white/20"
              } transition-colors`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-8 bg-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-bold uppercase tracking-wider">
                {pkg.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-gray text-sm">{pkg.period}</span>
              </div>
              <p className="text-gray text-sm mt-2">{pkg.description}</p>
              <ul className="mt-8 space-y-3 flex-1">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className="text-red mt-0.5">&#10003;</span>
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block text-center font-medium text-sm uppercase tracking-wider py-3.5 transition-colors ${
                  pkg.featured
                    ? "bg-red hover:bg-red-dark text-white"
                    : "border border-white/20 hover:border-red hover:text-red text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 border border-white/5 p-8">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6">
            One-Time Add-Ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Commercial Spot", price: "From $1,500" },
              { name: "Event Coverage", price: "From $800" },
              { name: "Product / Headshot Shoot", price: "From $500" },
            ].map((addon, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm">{addon.name}</span>
                <span className="text-red text-sm font-medium">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
