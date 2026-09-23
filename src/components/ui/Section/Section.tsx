import type { ReactNode } from "react";
import type { Theme } from "@/schemas/primitives";
import { Card } from "@/components/ui/Card";

export function Section({
  id,
  theme = "none",
  children,
  className,
}: {
  id?: string;
  theme?: Theme | "none";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {theme === "none" ? children : <Card theme={theme}>{children}</Card>}
    </section>
  );
}
