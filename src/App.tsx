import Navbar from "@/components/Navbar";
import { ParticleBackground } from "./components/particleBackground";
import Hero from "@/sections/Hero";
import { About } from "@/sections/About";
import Documents from "@/sections/Documents";
import Contact from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";

export default function App() {

  return (
    <div className={` min-h-screen font-sans transition-colors duration-500`}>
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Documents />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}