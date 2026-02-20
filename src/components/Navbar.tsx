export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          SICKO<span className="text-red">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray uppercase tracking-widest">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#packages" className="hover:text-white transition-colors">Packages</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-red hover:bg-red-dark text-white text-sm font-medium px-5 py-2.5 transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
