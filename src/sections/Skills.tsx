import { Section } from "@/components/animatedSection";
import { SectionHeader } from "@/components/SectionHeader";

import {
  SKILL_COLORS,
  SKILLS,
  type SkillCategory,
} from "@/constants";

import { useState } from "react";

export default function Skills() {
  const [active, setActive] =
    useState<SkillCategory>("Frontend");

  return (
    <Section
      id="skills"
      className="relative"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          tag="What I Know"
          title="Technical Skills"
        />

        {/* Categories */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {(Object.keys(SKILLS) as SkillCategory[]).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-white hover:cursor-pointer hover:scale-105 text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? "shadow-lg"
                    : "border border-slate-700 hover:border-slate-600 bg-slate-700"
                }`}
                style={
                  active === cat
                    ? {
                        background:
                          SKILL_COLORS[cat],
                        boxShadow: `0 8px 24px ${SKILL_COLORS[cat]}40`,
                      }
                    : {}
                }
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Skills Grid */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-4 py-2">
          {SKILLS[active].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="group flex items-center gap-3 p-4 w-fit rounded-xl bg-slate-700 border border-slate-700/50 hover:border-opacity-50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                transitionDelay: `${i * 50}ms`,
                borderColor: `${SKILL_COLORS[active]}20`,
              }}
            >
              {/* Dot */}
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: SKILL_COLORS[active] }}
              />
              <div>
                {/* Skill Name */}
                <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                
                {/* Progress */}
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 rounded-full bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: SKILL_COLORS[active],
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium w-8 text-right">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}