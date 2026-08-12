import { ArrowUpRight, BookOpenText } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { backgrounds, writing } from "@/data/content";

export function Writing() {
  return (
    <Section id="writing" labelledBy="writing-heading" background={backgrounds.writing} position="center right">
      <div className="shell">
        <SectionHeader
          index="06 ? Writing"
          title="Writing"
          id="writing-heading"
          description="Essays on technology, institutions, ethics, and the histories surrounding public policy."
        />
        <div className="mt-12 grid gap-4 lg:max-w-[58rem]">
          {writing.map((essay, index) => (
            <Reveal key={essay.href} delay={index * 0.06}>
              <a
                href={essay.href}
                target="_blank"
                rel="noreferrer noopener"
                className="panel group grid min-h-48 gap-6 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gold/45 focus-visible:border-gold/60 sm:grid-cols-[auto_1fr_auto] sm:items-start md:p-8"
                aria-label={`Read ${essay.title} as a PDF (opens in a new tab)`}
              >
                <span className="flex h-11 w-11 items-center justify-center border border-gold/35 bg-ink/70 text-gold" aria-hidden="true">
                  <BookOpenText className="h-5 w-5" />
                </span>
                <span>
                  <span className="mono-label !text-coral">{essay.kind} ? {essay.date}</span>
                  <span className="mt-3 block font-serif text-2xl text-parchment md:text-3xl">{essay.title}</span>
                  <span className="mt-1 block text-sm text-gold">{essay.subtitle}</span>
                  <span className="mt-4 block text-secondary">{essay.summary}</span>
                </span>
                <span className="inline-flex items-center gap-2 self-center font-mono text-xs uppercase tracking-[.12em] text-gold sm:self-start">
                  Read PDF <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
