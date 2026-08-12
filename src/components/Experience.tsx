"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { backgrounds, experience } from "@/data/content";

export function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="experience" labelledBy="experience-heading" background={backgrounds.experience} position="center right">
      <div className="shell">
        <SectionHeader index="04 — Experience" title="Experience" id="experience-heading" description="Research, applied cybersecurity, and technical work across WVU." />
        <div className="mt-12 space-y-2">
          {experience.map((role, i) => {
            const expanded=open===i;
            return <article key={role.title} className={`panel overflow-hidden ${expanded ? "border-gold/40" : ""}`}>
              <h3><button type="button" aria-expanded={expanded} aria-controls={`exp-${i}`} onClick={() => setOpen(expanded ? -1 : i)} className="flex min-h-20 w-full items-start gap-4 px-5 py-5 text-left md:items-center md:px-7">
                <span className="font-mono text-xs text-coral">0{i+1}</span>
                <span className="min-w-0 flex-1"><span className="block font-serif text-xl text-parchment md:text-2xl">{role.title}</span><span className="mt-1 block text-sm text-muted">{role.org}</span></span>
                <span className="hidden font-mono text-[.68rem] uppercase tracking-[.1em] text-gold sm:block">{role.period}</span>
                <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 transition-transform ${expanded ? "rotate-180 text-gold" : "text-muted"}`} />
              </button></h3>
              <div id={`exp-${i}`} hidden={!expanded} className="border-t border-white/10 px-5 py-6 md:px-7">
                <div className="grid gap-6 md:grid-cols-[1.3fr_.7fr]"><p className="text-secondary">{role.body}</p><div><p className="mono-label">Focus</p><p className="mt-2 text-sm text-secondary">{role.focus.join(" · ")}</p><p className="mt-4 font-mono text-xs text-gold sm:hidden">{role.period}</p></div></div>
              </div>
            </article>;
          })}
        </div>
      </div>
    </Section>
  );
}
