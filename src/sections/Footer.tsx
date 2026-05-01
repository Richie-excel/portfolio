import { IDENTITY, NAV_ITEMS } from "@/constants";

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-lg font-black text-white mb-1">
              Tech<span className="text-emerald-400">With</span><span className="text-[#fb923c]">Richie</span>
            </div>
            <p className="text-slate-600 text-xs">Building the future, one commit at a time.</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {NAV_ITEMS.map(item => (
              <button key={item} onClick={() => scrollTo(item)} className="text-slate-500 text-sm hover:text-emerald-400 hover:cursor-pointer hover:scale-105 transition-colors">
                {item}
              </button>
            ))}
          </div>

          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} { IDENTITY.name }. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}