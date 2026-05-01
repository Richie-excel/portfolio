import { TESTIMONIALS } from "@/constants";
import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";
import { RenderStars } from "@/components/RenderStart";

export function Testimonials() {
  return (
    <Section id="testimonials" className="py-10">
      <div className="mx-auto px-6">
        <SectionHeader tag="What They Say" title="Testimonials" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group p-7 rounded-2xl backdrop-blur-sm bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/20 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                { RenderStars(t.rating)}
              </div>

              <p className="text-slate-300 text-xs leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-black">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}