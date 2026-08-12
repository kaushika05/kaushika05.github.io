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
            <Reveal delay={.14} className="panel-soft p-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><p className="mono-label">Colombo, LK</p><p className="mt-2 text-sm text-secondary">06.9271° N · 79.8612° E</p></div>
                <div><p className="mono-label">Morgantown, WV</p><p className="mt-2 text-sm text-secondary">39.6295° N · 79.9559° W</p></div>
              </div>
            </Reveal>
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
