import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about, backgrounds } from "@/data/content";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading" background={backgrounds.about} position="center right">
      <div className="shell">
        <SectionHeader index="01 — About" title={about.heading} id="about-heading" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-prose space-y-6">
            {about.body.map((p, i) => <Reveal key={p} delay={i * .07}><p className="text-secondary">{p}</p></Reveal>)}
          </div>
          <div className="space-y-4">
            {about.cards.map((card, i) => (
              <Reveal key={card.label} delay={i * .07} className="panel p-6">
                <p className="mono-label">{card.label}</p><p className="mt-3 text-secondary">{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
