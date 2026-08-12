import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { backgrounds, beyond } from "@/data/content";

export function Beyond() {
  return (
    <Section labelledBy="beyond-heading" background={backgrounds.beyond} position="center right">
      <div className="shell">
        <SectionHeader index="06 ? Beyond the lab" title="Beyond the lab" id="beyond-heading" description="Community work, citizen science, and competitive play that keeps the research grounded." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="panel p-6 md:p-8"><h3 className="mono-label">Service and community science</h3><ul className="mt-6 space-y-6">{beyond.service.map(([title,body])=><li key={title}><p className="font-serif text-xl text-parchment">{title}</p><p className="mt-2 text-secondary">{body}</p></li>)}</ul></Reveal>
          <Reveal delay={.08} className="panel p-6 md:p-8"><h3 className="mono-label">Competitive play</h3><p className="mt-6 font-serif text-2xl text-parchment">{beyond.play.title}</p><p className="mt-4 text-secondary">{beyond.play.body}</p></Reveal>
        </div>
      </div>
    </Section>
  );
}
