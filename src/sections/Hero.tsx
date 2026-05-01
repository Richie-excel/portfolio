import { DESCRIPTIONS, IDENTITY, ROLES } from "@/constants";
import { useTypewriter } from "@/hooks/typewriter";
import { useState, useEffect } from "react";
import { Socials } from "@/components/Socials";
import { ArrowRight } from "lucide-react";
import avatarImg from "@/assets/richie_2.jpg"
export default function Hero() {
  const typedText = useTypewriter(ROLES);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="px-6 py-10 grid lg:grid-cols-2 gap-16 items-center min-w-full">
        {/* Left content */}
        <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            { IDENTITY.availability}
          </div>

          <h1 className="text-5xl flex flex-col md:text-6xl lg:text-7xl font-black leading-[1.05] mb-4 tracking-tight">
            <span className="text-primary text-start tracking-wider">Hi, I'm</span>
            <span className="my-4 bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              { IDENTITY.name }
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-12 flex items-center mb-6">
            <span className="text-2xl md:text-3xl font-semibold text-slate-600">
              {typedText}
              <span className="inline-block w-5 h-1.5 bg-emerald-400 ml-1 animate-pulse rounded-md" />
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-10 text-start">
            { DESCRIPTIONS.introduction}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 my-10">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex group px-7 py-3.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:shadow-lg hover:cursor-pointer hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              See My Work
              <span className="ml-2 group-hover:ml-3 transition-all duration-200">
                <ArrowRight/>
              </span>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-xl hover:cursor-pointer border border-slate-600 text-primary font-bold text-sm hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200"
            >
              {DESCRIPTIONS.hire_me}
            </button>
          </div>

          {/* Socials */}
          <Socials text="Find me on"/>
        </div>

        {/* Right: Animated avatar card */}
        <div className={`flex justify-center mt-6 mb-18 md:mb-0 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Inner wrapper handles size & upward shift independently */}
          <div className="relative w-72 h-72 md:w-105 md:h-105 -translate-y-8 md:-translate-y-16">
            {/* Orbiting rings */}
            <div className="absolute z-10 inset-0 rounded-full border border-emerald-500/20 animate-spin" style={{ animationDuration: "20s" }}>
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-emerald-400 -translate-x-1/2" />
            </div>

            {/* Avatar with image (inset-6 makes it bigger than inset-12) */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-slate-800 to-slate-900 border border-emerald-500/30 flex items-center justify-center shadow-2xl shadow-emerald-500/10 overflow-hidden">
              <img
                src={avatarImg}
                alt={`${IDENTITY.name} - Software Developer`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-linear-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}