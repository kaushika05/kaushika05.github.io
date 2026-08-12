import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { backgrounds, milestones } from "@/data/content";

export function Milestones() {
  return (
    <Section labelledBy="milestones-heading" background={backgrounds.milestones} position="center right">
      <div className="shell">
        <SectionHeader index="06 — Milestones" title="Selected milestones" id="milestones-heading" />
        <ol className="mt-12 border-t border-white/15">
          {milestones.map(([stamp,kind,body],i)=><Reveal key={body} delay={i*.05}><li className="grid gap-2 border-b border-white/15 bg-ink/55 px-4 py-5 md:grid-cols-[7rem_11rem_1fr] md:items-baseline md:px-6"><span className="font-mono text-xs text-gold">{stamp}</span><span className="mono-label">{kind}</span><span className="text-secondary">{body}</span></li></Reveal>)}
        </ol>
      </div>
    </Section>
  );
}
