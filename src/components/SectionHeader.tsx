interface HeaderProps {
  tag: string
  title: string
}
export function SectionHeader({ tag, title }:HeaderProps) {
  return (
    <div className="text-center">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 mb-4 tracking-widest uppercase">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl text-primary tracking-tight">
        {title}
      </h2>
      <div className="mt-4 w-12 h-0.5 bg-linear-to-r from-emerald-400 to-teal-400 mx-auto rounded" />
    </div>
  );
}