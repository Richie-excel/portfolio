import { SERVICES } from "@/constants";
import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";

export function Services() {
  return (
    <Section id="services" className="py-10">
      <div className="mx-auto px-6">
        <SectionHeader tag="What I Offer" title="Services" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
            <div
              key={s.title}
              className="group p-7 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                < Icon/>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-opacity-100" style={{ color: s.color }}>{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full rounded transition-all duration-500" style={{ background: s.color }} />
            </div>
          )})}
        </div>
      </div>
    </Section>
  );
}