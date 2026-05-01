import { TIMELINE, typeColors, typeLabels } from "@/constants";
import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";

export default function Experience() {

  return (
    <Section id="experience" className="py-10">
      <div className="mx-auto px-6">
        <SectionHeader tag="My Journey" title="Experience & Timeline" />

        <div className="mt-16 relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-emerald-500/50 via-slate-700 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-10" : "md:pl-10"} group`}>
                    <div className="p-5 rounded-2xl bg-gray-800/50 border border-slate-700/50 hover:border-emerald-500/20 transition-all duration-300 hover:bg-slate-800">
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${typeColors[item.type]}20`, color: typeColors[item.type] }}>
                          {typeLabels[item.type]}
                        </span>
                        <span className="text-slate-600 text-xs font-bold">{item.year}</span>
                      </div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-primary/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full border-2 border-emerald-500 -translate-x-1/2 mt-5 z-10" style={{ borderColor: typeColors[item.type] }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}