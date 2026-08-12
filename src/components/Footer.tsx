import { Heart } from "lucide-react";
import { links, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-parchment">{site.name}</p>
          <p className="mt-2 text-sm text-muted">Computer Science · Accessibility · HCI · Multimodal AI</p>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-secondary">
            Made with <Heart aria-label="love" className="h-4 w-4 fill-coral text-coral" /> in Morgantown, West Virginia.
          </p>
        </div>
        <div className="space-y-2 font-mono text-xs uppercase tracking-[.12em] text-muted md:text-right">
          <p>Sri Lanka × United States</p>
          <p>© 2026 Kaushika Wijerathne. All rights reserved.</p>
          <p lang="si" className="font-sans text-base normal-case tracking-normal text-secondary">ආයුබෝවන්</p>
        </div>
      </div>
      <div className="shell mt-8 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[.12em] text-muted">
        <a href={links.email} className="hover:text-gold">Email</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-gold">GitHub</a>
        <a href={links.cv} target="_blank" rel="noreferrer" className="hover:text-gold">CV</a>
      </div>
    </footer>
  );
}
