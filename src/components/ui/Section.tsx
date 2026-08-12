import type { CSSProperties, ReactNode } from "react";

export function Section({
  id,
  background,
  children,
  className = "",
  position = "center",
  labelledBy,
}: {
  id?: string;
  background: string;
  children: ReactNode;
  className?: string;
  position?: string;
  labelledBy: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`plate-section ${className}`}>
      <div
        aria-hidden="true"
        className="plate-image"
        style={{
          "--plate-image": `url(${background})`,
          "--plate-position": position,
        } as CSSProperties}
      />
      <div aria-hidden="true" className="plate-scrim" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  index,
  title,
  id,
  description,
}: {
  index: string;
  title: string;
  id: string;
  description?: string;
}) {
  return (
    <header className="max-w-[48rem]">
      <p className="section-label"><span aria-hidden="true" />{index}</p>
      <h2 id={id} className="mt-5 font-serif text-display-lg text-parchment">{title}</h2>
      {description ? <p className="mt-5 max-w-prose text-secondary">{description}</p> : null}
    </header>
  );
}
