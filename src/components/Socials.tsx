import { SOCIALS } from "@/constants";

export function Socials ({text}:{text:string}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-slate-600 text-sm">{text}</span>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
        {SOCIALS.map(s => {
          const Icon = s.icon;
          return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200 hover:scale-105 text-sm font-medium"
          >
            <Icon className="mx-auto"/>
            <span className="hidden sm:inline">{s.label}</span>
          </a>
        )})}

      </div>
    </div>
  )
}