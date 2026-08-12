import Link from "next/link";

export default function NotFound() {
  return (
    <section className="plate-section flex min-h-[100svh] items-end" aria-labelledby="not-found-heading">
      <div aria-hidden="true" className="plate-image" style={{ "--plate-image": "url(/images/sections/contact.webp)", "--plate-position": "center right" } as React.CSSProperties} />
      <div aria-hidden="true" className="plate-scrim" />
      <div className="shell relative z-10 pb-12"><p className="mono-label">Error 404</p><h1 id="not-found-heading" className="mt-5 font-serif text-display-lg text-parchment">That page is off the map.</h1><p className="mt-5 max-w-prose text-secondary">Everything on this site lives along one page.</p><Link href="/" className="action action-primary mt-8">Back home</Link></div>
    </section>
  );
}
