import { DOCUMENTS } from "@/constants";
import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";
import { DocumentCard } from "../components/DocumentCard";
import { Check, Download } from "lucide-react";

export default function Documents() {
  return (
    <Section id="documents" className="py-10">
      <div className="mx-auto px-6">
        <SectionHeader tag="My Credentials" title="CV & Certificates" />

        {/* Explainer strip */}
        <div className="mt-8 mb-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xl items-center justify-center">
              <Check className="bg-emerald-500 rounded-lg"/>
            </span>
            <p className="text-slate-400 text-sm">
              All certificates are <span className="text-blue-400 font-semibold">officially issued</span> and verifiable.
            </p>
          </div>
        </div>

        {/* Document grid */}
        <div className="grid md:grid-cols-3 gap-4 justify-items-center">
          {DOCUMENTS.map((doc, i) => (
            <DocumentCard key={doc.id} doc={doc} index={i} />
          ))}
        </div>

        {/* Bottom CTA — direct CV download */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-slate-500 text-sm">Want a quick grab?</p>
          <a
            href="/public/documents/CV_NGWESE.pdf"
            download="richmos_cv.pdf"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-white text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #10b981, #14b8a6)",
              boxShadow: "0 8px 32px rgba(16,185,129,0.3)",
            }}
          >
            <span className="text-xl group-hover:animate-bounce">
              <Download/>
            </span>
            Download CV
          </a>
        </div>
      </div>
    </Section>
  );
}