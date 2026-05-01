import { useInView } from "@/hooks/scrollProgress";
import type { SectionProps } from "@/types";


export function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  const [ref, inView] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  );
}