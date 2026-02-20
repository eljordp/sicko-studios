export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-tighter">
          SICKO<span className="text-accent">.</span>
        </div>
        <div className="flex items-center gap-8 text-sm text-gray">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#packages" className="hover:text-white transition-colors">Packages</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-gray-dark">
          &copy; {new Date().getFullYear()} Sicko Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
