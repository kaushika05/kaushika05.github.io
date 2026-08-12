import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ActionLink } from "@/components/ui/ActionLink";
import { backgrounds, featured, links } from "@/data/content";

const bars = [22,38,64,42,76,54,88,61,35,71,94,50,68,31,82,58,44,73,40,65,29,84,53,72];

export function FeaturedResearch() {
  return (
    <Section id="research" labelledBy="research-heading" background={backgrounds.research} position="center right">
      <div className="shell">
        <SectionHeader index="02 — Featured research" title="Featured research" id="research-heading" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <Reveal><p className="mono-label !text-coral">Project 01</p><h3 className="mt-4 font-serif text-display-md text-parchment">{featured.title}</h3><p className="mt-3 text-lg text-gold">{featured.subtitle}</p></Reveal>
            <Reveal delay={.06}><p className="mt-6 text-secondary">{featured.description}</p><p className="mt-5 text-secondary">{featured.build}</p></Reveal>
            <Reveal delay={.12} className="mt-9">
              <p className="mono-label">Research questions</p>
              <ul className="mt-4 space-y-3">{featured.questions.map((q) => <li key={q} className="flex gap-3 text-secondary"><span aria-hidden="true" className="mt-[.75em] h-px w-4 shrink-0 bg-gold" />{q}</li>)}</ul>
            </Reveal>
            <Reveal delay={.16} className="mt-9">
              <ul className="flex flex-wrap gap-2">{featured.methods.map((m) => <li key={m} className="border border-white/15 bg-ink/50 px-3 py-1.5 font-mono text-xs text-secondary">{m}</li>)}</ul>
            </Reveal>
            <Reveal delay={.2} className="mt-9 flex flex-col gap-3 sm:flex-row"><ActionLink href="#contact" kind="primary">Discuss this research</ActionLink><ActionLink href={links.cv} kind="ghost" external>View CV</ActionLink></Reveal>
          </div>
          <Reveal delay={.08} className="panel p-5 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center justify-between border-b border-white/10 pb-3"><p className="mono-label">Stereo scene · illustrative</p><span className="font-mono text-[.65rem] uppercase tracking-[.1em] text-gold">Sample frame</span></div>
            <div className="mt-6 space-y-5">
              {["L","R"].map((channel, c) => <div key={channel} className="flex items-center gap-3"><span className="font-mono text-xs text-muted">{channel}</span><div className="flex h-14 flex-1 items-center gap-1">{bars.map((h,i) => <span key={i} aria-hidden="true" className={`${c ? "bg-coral/70" : "bg-gold/80"} flex-1`} style={{height:`${Math.max(8,h-(c?12:0))}%`}} />)}</div></div>)}
              <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-4 font-mono text-xs"><div><p className="text-muted">Direction</p><p className="mt-1 text-parchment">left</p></div><div><p className="text-muted">Confidence</p><p className="mt-1 text-parchment">0.82</p></div></div>
              <pre className="overflow-x-auto bg-ink/85 p-4 font-mono text-xs leading-relaxed text-secondary">{JSON.stringify(featured.sample, null, 2)}</pre>
              <p className="text-sm text-muted">Illustrative output format. No experimental result is reported here.</p>
            </div>
          </Reveal>
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">{featured.meta.map((m) => <div key={m.key} className="panel-soft p-4"><dt className="mono-label">{m.key}</dt><dd className="mt-2 text-sm text-secondary">{m.value}</dd></div>)}</dl>
      </div>
    </Section>
  );
}
