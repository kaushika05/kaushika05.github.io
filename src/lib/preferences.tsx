"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Preferences = {
  reducedMotion: boolean;
  highContrast: boolean;
  backgroundsPaused: boolean;
  setReducedMotion: (value: boolean) => void;
  setHighContrast: (value: boolean) => void;
  setBackgroundsPaused: (value: boolean) => void;
};

const Context = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [manualMotion, setManualMotion] = useState(false);
  const [systemMotion, setSystemMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [backgroundsPaused, setBackgroundsPaused] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setSystemMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const reducedMotion = systemMotion || manualMotion;

  useEffect(() => {
    document.documentElement.dataset.motion = reducedMotion ? "reduced" : "full";
    document.documentElement.dataset.contrast = highContrast ? "high" : "default";
    document.documentElement.dataset.backgrounds = backgroundsPaused ? "paused" : "visible";
  }, [backgroundsPaused, highContrast, reducedMotion]);

  const value = useMemo(
    () => ({
      reducedMotion,
      highContrast,
      backgroundsPaused,
      setReducedMotion: setManualMotion,
      setHighContrast,
      setBackgroundsPaused,
    }),
    [backgroundsPaused, highContrast, reducedMotion],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function usePreferences() {
  const value = useContext(Context);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}
