import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ActionLink({
  href,
  children,
  kind = "ghost",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  kind?: "primary" | "delegate" | "liaison" | "ghost" | "quiet";
  external?: boolean;
  className?: string;
}) {
  const opensNew = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`action action-${kind} ${className}`}
      {...(opensNew ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      <span className="inline-flex items-center justify-center gap-2">{children}</span>
      {opensNew ? <ArrowUpRight aria-hidden="true" className="h-4 w-4" /> : null}
      {opensNew ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
