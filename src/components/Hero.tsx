"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 video-placeholder opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/40 text-xs uppercase tracking-[0.3em] mb-8"
        >
          Visual Production Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading font-light text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85]"
        >
          SICKO
          <br />
          STUDIOS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 text-lg md:text-xl text-white/50 max-w-lg mx-auto leading-relaxed"
        >
          Cinematic content for businesses that refuse to blend in.
          Color graded to perfection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="bg-white text-black font-medium px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-white/85 transition-all duration-500"
          >
            View Our Work
          </a>
          <a
            href="#packages"
            className="border border-white/15 hover:border-white/40 text-white font-medium px-8 py-3.5 text-xs uppercase tracking-[0.15em] transition-all duration-500"
          >
            See Packages
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/25 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
