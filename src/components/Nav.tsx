"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { links, nav, site } from "@/data/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 20);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? "border-white/10 bg-ink/95 backdrop-blur-md" : "border-transparent bg-ink/30"}`}>
      <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#main" className="font-serif text-lg text-parchment hover:text-gold">{site.shortName}</a>
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-mono text-[.7rem] uppercase tracking-[.13em] text-muted transition-colors hover:text-gold">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={links.cv} target="_blank" rel="noreferrer" className="font-mono text-[.7rem] uppercase tracking-[.13em] text-muted hover:text-gold">CV</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="font-mono text-[.7rem] uppercase tracking-[.13em] text-muted hover:text-gold">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="font-mono text-[.7rem] uppercase tracking-[.13em] text-muted hover:text-gold">LinkedIn</a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>
      <div id="mobile-menu" hidden={!open} className="border-t border-white/10 bg-ink lg:hidden">
        <ul className="shell py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className="block min-h-11 py-3 font-mono text-xs uppercase tracking-[.13em] text-secondary">{item.label}</a>
            </li>
          ))}
          <li className="flex flex-wrap gap-5 border-t border-white/10 py-4">
            <a href={links.cv} className="font-mono text-xs uppercase tracking-[.13em] text-gold">CV</a>
            <a href={links.github} className="font-mono text-xs uppercase tracking-[.13em] text-gold">GitHub</a>
            <a href={links.linkedin} className="font-mono text-xs uppercase tracking-[.13em] text-gold">LinkedIn</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
