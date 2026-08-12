import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { backgrounds, researchAreas } from "@/data/content";

export function ResearchAreas() {
  return (
    <Section labelledBy="areas-heading" background={backgrounds.areas} position="center right">
      <div className="shell">
        <SectionHeader index="03 — Research areas" title="Questions I care about" id="areas-heading" />
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {researchAreas.map((area, i) => <Reveal key={area.title} delay={i*.06} className="panel min-h-60 p-7 md:p-9"><p className="font-mono text-xs text-coral">0{i+1}</p><h3 className="mt-6 font-serif text-2xl text-parchment">{area.title}</h3><p className="mt-4 text-secondary">{area.body}</p></Reveal>)}
        </div>
      </div>
    </Section>
  );
}
