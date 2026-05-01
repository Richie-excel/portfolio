import { useInView } from "@/hooks/scrollProgress";
import { useState } from "react";
import type { Document  } from "@/types";
import { Check, Download, Eye } from "lucide-react";

interface DocumentCardProps {
  doc: Document;
  index: number;
}

export function DocumentCard({ doc, index }: DocumentCardProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.1);
  const [hovered, setHovered] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const Icon = doc.icon;
  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl md:max-w-md overflow-hidden border transition-all duration-500 hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(28px)",
        background: "rgba(15,23,42,0.7)",
        borderColor: hovered ? `${doc.glow}40` : "rgba(71,85,105,0.4)",
        boxShadow: hovered ? `0 20px 60px ${doc.glow}12` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient stripe */}
      <div className={`h-1 w-full bg-linear-to-r`} style={{ background: `linear-gradient(90deg, ${doc.glow}, transparent)` }} />

      {/* Header */}
      <div className={`px-6 pt-5 pb-4 mb-4 bg-linear-to-br ${doc.gradient}`}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: `${doc.glow}18`, border: `1px solid ${doc.glow}30` }}
            >
              <Icon/>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs leading-tight">{doc.title}</h3>
              <p className="text-slate-500 text-xs font-medium mt-0.5">{doc.subtitle}</p>
            </div>
          </div>
          {/* Meta badges */}
          <div className="flex gap-1 item-center justify-center shrink-0">
            {doc.meta.map(m => (
              <span
                key={m}
                className="px-2 py-0.5 rounded-md text-[0.5rem] font-bold"
                style={{ background: `${doc.glow}18`, color: doc.glow }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pb-6 space-y-6">
        <p className="text-slate-400 text-xs leading-relaxed mb-4">{doc.desc}</p>

        {/* Action buttons */}
        <div className="flex gap-3 mt-4">
          {/* Preview — opens in new tab */}
          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-bold transition-all duration-200 hover:bg-slate-800"
            style={{ borderColor: "rgba(71,85,105,0.5)", color: "#94a3b8" }}
          >
            <span>
              <Eye/>
            </span>
            Preview
          </a>

          {/* Download — uses HTML download attribute for forced file download */}
          <a
            href={doc.href}
            download={doc.filename}
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: downloaded
                ? "#065f46"
                : `linear-gradient(135deg, ${doc.glow}cc, ${doc.glow}88)`,
              color: "#fff",
              boxShadow: `0 4px 20px ${doc.glow}30`,
            }}
          >
            {downloaded ? (
              <><span><Check/></span> Downloaded!</>
            ) : (
              <><span><Download/></span> Download</>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}