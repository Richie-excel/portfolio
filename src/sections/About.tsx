import { TAGS, DESCRIPTIONS, STATS } from "@/constants";
import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";

export function About() {
  return (
    <Section id="about" className="py-10 relative mb-10">
      <div className="container mx-auto px-6">
        <SectionHeader tag="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 items-start mt-10">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-primary text-lg leading-relaxed">
              {DESCRIPTIONS.about_1}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {DESCRIPTIONS.about_2}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 mt-2">
              {TAGS.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-500/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {STATS.map(s => (
              <div key={s.label} className="group p-6 rounded-2xl bg-slate-700 border border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800 transition-all duration-300 text-center">
                <div className="text-3xl font-black text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">{s.value}</div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}