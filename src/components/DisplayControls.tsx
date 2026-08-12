"use client";

import { Contrast, ImageOff, Settings2, Waves, X } from "lucide-react";
import { useState } from "react";
import { usePreferences } from "@/lib/preferences";

export function DisplayControls() {
  const [open, setOpen] = useState(false);
  const prefs = usePreferences();
  const options = [
    { label: "Reduce motion", value: prefs.reducedMotion, set: prefs.setReducedMotion, Icon: Waves },
    { label: "Increase contrast", value: prefs.highContrast, set: prefs.setHighContrast, Icon: Contrast },
    { label: "Hide backgrounds", value: prefs.backgroundsPaused, set: prefs.setBackgroundsPaused, Icon: ImageOff },
  ];
  return (
    <div className="fixed bottom-4 right-4 z-50 print:hidden">
      {open ? (
        <div id="display-panel" className="panel mb-3 w-[min(20rem,calc(100vw-2rem))] p-4">
          <div className="flex items-center justify-between">
            <p className="mono-label">Display preferences</p>
            <button className="flex h-10 w-10 items-center justify-center" onClick={() => setOpen(false)}>
              <X aria-hidden="true" className="h-4 w-4" /><span className="sr-only">Close display preferences</span>
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {options.map(({ label, value, set, Icon }) => (
              <li key={label}>
                <button
                  type="button"
                  aria-pressed={value}
                  onClick={() => set(!value)}
                  className={`flex min-h-12 w-full items-center gap-3 rounded-sm border px-3 py-2 text-left font-mono text-xs uppercase tracking-[.1em] ${value ? "border-gold/60 bg-gold/10" : "border-white/15"}`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  <span>{label}</span><span className="ml-auto text-muted">{value ? "On" : "Off"}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="display-panel"
        className="panel ml-auto flex h-12 items-center gap-2 px-4 font-mono text-xs uppercase tracking-[.12em] text-secondary"
      >
        <Settings2 aria-hidden="true" className="h-4 w-4" /> Display
      </button>
    </div>
  );
}
