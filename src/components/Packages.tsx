"use client";

import AnimateIn from "./AnimateIn";

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
    <section id="packages" className="py-32 md:py-40 px-8">
      <div className="max-w-[1400px] mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/25">03</span>
            <div className="w-12 h-px bg-white/15" />
            <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
              Pricing
            </p>
          </div>
          <h2 className="font-heading font-light text-4xl md:text-6xl tracking-tight mb-6 leading-tight">
            Packages that scale.
          </h2>
          <p className="text-gray text-lg font-light mb-20 max-w-xl">
            No hidden fees. No contracts. Just consistent, high-quality content
            for your business.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div
                className={`relative p-10 md:p-12 flex flex-col h-full transition-all duration-700 ${
                  pkg.featured
                    ? "bg-white/[0.03] border border-white/15 card-glow"
                    : "border border-white/5 hover:border-white/15 hover:bg-white/[0.01]"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-10 bg-accent text-white text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1">
                    Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl font-light tracking-tight">
                  {pkg.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-light">{pkg.price}</span>
                  <span className="text-white/30 text-sm">{pkg.period}</span>
                </div>
                <p className="text-gray text-sm mt-3 font-light">{pkg.description}</p>
                <ul className="mt-10 space-y-4 flex-1">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="text-white/25 mt-0.5">&#10003;</span>
                      <span className="text-white/60 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 block text-center text-xs uppercase tracking-[0.15em] py-4 transition-all duration-500 ${
                    pkg.featured
                      ? "bg-white text-black font-medium hover:bg-white/85"
                      : "border border-white/10 hover:border-white/30 text-white font-light"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Add-ons */}
        <AnimateIn>
          <div className="mt-20 border border-white/5 p-10 md:p-12">
            <h3 className="font-heading text-2xl font-light tracking-tight mb-8">
              One-Time Add-Ons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { name: "Commercial Spot", price: "From $1,500" },
                { name: "Event Coverage", price: "From $800" },
                { name: "Product / Headshot Shoot", price: "From $500" },
              ].map((addon, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-sm font-light">{addon.name}</span>
                  <span className="text-sm text-stone font-mono">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
