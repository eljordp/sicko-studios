import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Services from "@/components/Services";
import ColorGrade from "@/components/ColorGrade";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Showreel />
      <Services />
      <ColorGrade />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}
