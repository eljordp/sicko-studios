"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-darker">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-white/30" />
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] font-medium">
            Get In Touch
          </p>
          <div className="w-12 h-px bg-white/30" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Ready to elevate your brand?
        </h2>
        <p className="text-gray text-lg mb-12">
          Tell us about your business and we&apos;ll put together a plan
          that fits your goals and budget.
        </p>

        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray focus:border-white/50 focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Business Name"
              className="w-full bg-black border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray focus:border-white/50 focus:outline-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray focus:border-white/50 focus:outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-black border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray focus:border-white/50 focus:outline-none transition-colors"
            />
          </div>
          <select
            className="w-full bg-black border border-white/10 px-4 py-3.5 text-sm text-gray focus:border-white/50 focus:outline-none transition-colors"
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
            className="w-full bg-black border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray focus:border-white/50 focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-medium text-sm uppercase tracking-wider py-4 hover:bg-white/85 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
