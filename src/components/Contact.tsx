import { Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ActionLink } from "@/components/ui/ActionLink";
import { backgrounds, contact, links, site } from "@/data/content";

export function Contact() {
  const subject = encodeURIComponent("Research, accessibility, or collaboration");
  return (
    <Section id="contact" labelledBy="contact-heading" background={backgrounds.contact} position="center right">
      <div className="shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div><SectionHeader index="08 ? Contact" title={contact.heading} id="contact-heading" /><Reveal><p className="mt-7 max-w-prose text-secondary">{contact.body}</p></Reveal><Reveal delay={.08} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ActionLink href={links.email} kind="primary">Email Kay</ActionLink><ActionLink href={links.linkedin} kind="ghost" external>LinkedIn</ActionLink><ActionLink href={links.github} kind="ghost" external>GitHub</ActionLink><ActionLink href={links.cv} kind="ghost" external>Download CV</ActionLink></Reveal></div>
        <Reveal delay={.1} className="panel overflow-hidden"><div className="flex items-center justify-between border-b border-white/10 px-5 py-3"><p className="mono-label">New connection</p><span className="h-2 w-2 rounded-full bg-gold" /></div><div className="space-y-5 p-5 md:p-7"><div><p className="mono-label">To</p><p className="mt-2 font-mono text-sm text-secondary">{site.email}</p></div><div><p className="mono-label">Subject</p><p className="mt-2 text-secondary">Research, accessibility, or collaboration</p></div><ActionLink href={`${links.email}?subject=${subject}`} kind="delegate" className="w-full"><Mail aria-hidden="true" className="h-4 w-4" /> Start a conversation</ActionLink></div></Reveal>
      </div>
    </Section>
  );
}
