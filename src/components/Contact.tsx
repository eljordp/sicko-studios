"use client";

import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 px-8 bg-gray-darker">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateIn>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="font-mono text-xs text-white/25">04</span>
            <div className="w-12 h-px bg-white/15" />
            <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
              Get In Touch
            </p>
            <div className="w-12 h-px bg-white/15" />
          </div>
          <h2 className="font-heading font-light text-4xl md:text-6xl tracking-tight mb-6 leading-tight">
            Ready to elevate your brand?
          </h2>
          <p className="text-gray text-lg font-light mb-16">
            Tell us about your business and we&apos;ll put together a plan
            that fits your goals and budget.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none transition-all duration-500"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none transition-all duration-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none transition-all duration-500"
              />
            </div>
            <select
              className="w-full bg-[#0a0a0a] border border-white/10 px-5 py-4 text-sm text-white/25 focus:border-white/40 focus:outline-none transition-all duration-500"
              defaultValue=""
            >
              <option value="" disabled>
                Interested in...
              </option>
              <option value="starter">Starter Package — $500/mo</option>
              <option value="growth">Growth Package — $2,000/mo</option>
              <option value="premium">Premium Package — $4,000/mo</option>
              <option value="one-time">One-Time Project</option>
              <option value="custom">Custom / Not Sure</option>
            </select>
            <textarea
              placeholder="Tell us about your business and what you're looking for..."
              rows={5}
              className="w-full bg-transparent border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/25 focus:border-white/40 focus:outline-none transition-all duration-500 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-medium text-xs uppercase tracking-[0.15em] py-4.5 hover:bg-white/85 transition-all duration-500"
            >
              Send Message
            </button>
          </form>
        </AnimateIn>
      </div>
    </section>
  );
}
