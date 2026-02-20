export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="font-heading text-2xl tracking-tight">
            SICKO<span className="text-accent">.</span>
          </div>
          <div className="flex items-center gap-10 text-xs text-white/30 uppercase tracking-[0.2em]">
            <a href="#work" className="hover:text-white transition-all duration-500">Work</a>
            <a href="#services" className="hover:text-white transition-all duration-500">Services</a>
            <a href="#packages" className="hover:text-white transition-all duration-500">Packages</a>
            <a href="#contact" className="hover:text-white transition-all duration-500">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/15 uppercase tracking-[0.15em]">
            Shot on Sony FX3 &middot; Graded in DaVinci Resolve &middot; Delivered in 4K
          </p>
          <p className="text-[10px] text-white/15 tracking-wider">
            &copy; {new Date().getFullYear()} Sicko Studios
          </p>
        </div>
      </div>
    </footer>
  );
}
