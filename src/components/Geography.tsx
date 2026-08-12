import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { backgrounds, geography } from "@/data/content";

export function Geography() {
  return (
    <Section labelledBy="geography-heading" background={backgrounds.geography} position="center right">
      <div className="shell">
        <SectionHeader index="09 — Geography" title={geography.heading} id="geography-heading" />
        <Reveal className="panel mt-10 max-w-[45rem] p-6 md:p-8"><p className="text-secondary">{geography.body}</p><div className="mt-7 flex flex-wrap justify-between gap-5 border-t border-white/10 pt-5"><div><p className="mono-label">Indian Ocean</p><p className="mt-1 text-sm text-secondary">Tropical night</p></div><div className="text-left sm:text-right"><p className="mono-label">Appalachia</p><p className="mt-1 text-sm text-secondary">Ridgeline dusk</p></div></div></Reveal>
      </div>
    </Section>
  );
}
