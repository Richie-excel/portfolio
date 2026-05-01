import { useState } from "react";
import { useInView } from "@/hooks/scrollProgress";
import type { Project } from "@/types";
import { BiCheck } from "react-icons/bi";

interface ProjectCardProps {
  p: Project;
  i: number;
}

export function ProjectCard({
  p,
  i,
}: ProjectCardProps) {
  const [ref, inView] =
    useInView<HTMLDivElement>(0.1);

  const [hovered, setHovered] =
    useState(false);
  const Icon = p.icon
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl bg-slate-700 border border-slate-700/50 overflow-hidden transition-all duration-700 hover:border-opacity-50 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      style={{
        transitionDelay: `${i * 100}ms`,
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0)"
          : "translateY(32px)",
        borderColor: hovered
          ? `${p.glow}40`
          : undefined,
        boxShadow: hovered
          ? `0 20px 60px ${p.glow}15`
          : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div
        className={`relative h-44 bg-linear-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-25 h-25"/>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${p.glow}20, transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2">
          {p.title}
        </h3>

        <p className="text-gray-400 text-sm tracking-wide leading-relaxed mb-4">
          {p.desc}
        </p>

        {/* Features */}
        <div className="space-y-1 mb-5">
          {p.features
            .slice(0, 2)
            .map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-xs text-slate-500"
              >
                <span style={{ color: p.glow }}>
                  <BiCheck className="w-4 h-4"/>
                </span>

                {feature}
              </div>
            ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-700/70 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={p.githubUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-lg border border-slate-600 text-slate-400 text-xs font-bold text-center hover:border-slate-500 hover:text-white transition-all duration-200"
          >
            GitHub
          </a>
          {p.liveUrl && (
            <a
              href={p.liveUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg text-xs font-bold text-center text-white transition-all duration-200"
              style={{
                background: p.glow,
              }}
            >
              Live Demo
            </a>      
          )}
        </div>
      </div>
    </div>
  );
}