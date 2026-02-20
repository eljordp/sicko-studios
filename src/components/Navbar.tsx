"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl tracking-tight">
          SICKO<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs text-white/40 uppercase tracking-[0.2em]">
          <a href="#work" className="hover:text-white transition-all duration-500">Work</a>
          <a href="#services" className="hover:text-white transition-all duration-500">Services</a>
          <a href="#packages" className="hover:text-white transition-all duration-500">Packages</a>
          <a href="#contact" className="hover:text-white transition-all duration-500">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-white text-black text-xs font-medium px-6 py-2.5 uppercase tracking-wider hover:bg-white/85 transition-all duration-500"
        >
          Get a Quote
        </a>
      </div>
    </motion.nav>
  );
}
