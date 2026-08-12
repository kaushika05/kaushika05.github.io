import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { backgrounds, now } from "@/data/content";

export function Now() {
  return (
    <Section id="now" labelledBy="now-heading" background={backgrounds.now} position="center right">
      <div className="shell">
        <SectionHeader index="08 — Now" title="Now" id="now-heading" />
        <Reveal className="panel mt-10 overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-7"><p className="mono-label">Current state</p><p className="font-mono text-[.65rem] uppercase tracking-[.1em] text-gold">August 2026</p></div>
          <dl>{now.map(([key,value])=><div key={key} className="grid gap-1 border-b border-white/10 px-5 py-4 last:border-0 md:grid-cols-[13rem_1fr] md:px-7"><dt className="mono-label">{key}</dt><dd className="text-secondary">{value}</dd></div>)}</dl>
        </Reveal>
      </div>
    </Section>
  );
}
