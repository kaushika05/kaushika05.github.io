import { Globe2, Vote, CalendarDays } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ActionLink } from "@/components/ui/ActionLink";
import { backgrounds, delegate, links } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading" background={backgrounds.projects} position="center right">
      <div className="shell">
        <SectionHeader index="05 — Projects" title="Projects" id="projects-heading" />
        <Reveal className="panel mt-12 overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-6 md:p-10">
              <p className="mono-label !text-coral">{delegate.eyebrow}</p>
              <h3 className="mt-5 font-serif text-display-md text-parchment">{delegate.name}</h3>
              <p className="mt-3 text-xl text-gold">{delegate.tagline}</p>
              <p className="mt-6 max-w-prose text-secondary">{delegate.description}</p>
              <div className="mt-8"><ActionLink href={links.delegate} kind="delegate" external>Play DELEGATE</ActionLink></div>
            </div>
            <div className="border-t border-white/10 bg-ink/70 p-6 lg:border-l lg:border-t-0 md:p-10">
              <p className="mono-label">One daily assembly</p>
              <ul className="mt-6 space-y-5">
                {[Globe2, Vote, CalendarDays].map((Icon, i) => <li key={delegate.features[i]} className="flex gap-3 text-secondary"><Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold" /><span>{delegate.features[i]}</span></li>)}
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-2" aria-label="Fifteen vote markers">
                {Array.from({length:15},(_,i)=><span key={i} aria-hidden="true" className={`h-2 rounded-full ${i%3===0 ? "bg-coral" : i%3===1 ? "bg-ember" : "bg-gold"}`} />)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
