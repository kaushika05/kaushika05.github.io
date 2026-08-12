"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { backgrounds, links, site } from "@/data/content";
import { usePreferences } from "@/lib/preferences";

export function Hero() {
  const { reducedMotion } = usePreferences();
  const enter = (delay: number) => reducedMotion ? {} : {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .75, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
  return (
    <section aria-labelledby="hero-heading" className="plate-section !min-h-[100svh] !pt-24">
      <div aria-hidden="true" className="plate-image" style={{ "--plate-image": `url(${backgrounds.hero})`, "--plate-position": "center" } as React.CSSProperties} />
      <div aria-hidden="true" className="plate-scrim" />
      <div className="shell relative z-10 flex min-h-[calc(100svh-10rem)] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <div className="flex flex-col">
            <motion.figure {...enter(.08)} className="order-first mb-7 w-32 lg:order-none lg:col-start-2 lg:row-span-2 lg:mb-0 lg:hidden">
              <div className="relative aspect-square overflow-hidden rounded-full border-2 border-gold/70 bg-ink p-1 shadow-[0_0_0_8px_rgba(5,7,13,.6)]">
                <img src="/images/headshot.webp" width="800" height="800" alt="Headshot of Kaushika Wijerathne" className="h-full w-full rounded-full object-cover object-[50%_24%]" />
              </div>
            </motion.figure>
            <motion.p {...enter(.04)} className="mono-label">{site.name}</motion.p>
            <motion.h1 {...enter(.12)} id="hero-heading" className="mt-6 max-w-[19ch] font-serif text-display-xl text-parchment">
              Building more accessible ways to understand and interact with intelligent systems.
            </motion.h1>
            <motion.p {...enter(.22)} className="mt-7 max-w-[61ch] text-secondary">
              Computer science student and accessibility researcher working across human-computer interaction, multimodal AI, spatial audio, and accessible gaming.
            </motion.p>
            <motion.div {...enter(.3)} className="mt-7 font-mono text-xs uppercase tracking-[.13em] text-muted">
              <p>Sri Lanka × United States</p><p className="mt-1">Based at West Virginia University</p>
            </motion.div>
            <motion.div {...enter(.4)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink href={links.delegate} kind="delegate" external>Play DELEGATE</ActionLink>
              <ActionLink href="#research" kind="primary">Explore my research</ActionLink>
              <ActionLink href={links.cv} kind="ghost" external>View CV</ActionLink>
            </motion.div>
          </div>
          <motion.figure {...enter(.26)} className="mx-auto hidden w-44 sm:w-52 lg:block lg:w-full">
            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-gold/70 bg-ink p-1 shadow-[0_0_0_10px_rgba(5,7,13,.6)]">
              <img src="/images/headshot.webp" width="800" height="800" alt="Headshot of Kaushika Wijerathne" className="h-full w-full rounded-full object-cover object-[50%_24%]" />
            </div>
            <figcaption className="sr-only">Professional headshot of Kaushika Wijerathne.</figcaption>
          </motion.figure>
        </div>
      </div>
      <a href="#about" className="shell relative z-10 mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[.13em] text-muted hover:text-gold">
        <ArrowDown aria-hidden="true" className="h-4 w-4" /> Scroll
      </a>
    </section>
  );
}
