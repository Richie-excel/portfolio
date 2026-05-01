import { PROJECTS } from "@/constants";
import { Section } from "../components/animatedSection";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" className="py-28">
      <div className="mx-auto px-6">
        <SectionHeader tag="What I've Built" title="Featured Projects" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </Section>
  );
}