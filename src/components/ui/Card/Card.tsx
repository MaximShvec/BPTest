import type { ReactNode } from "react";
import type { Theme } from "@/schemas/primitives";
import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

export type CardPadding = "lg" | "md" | "none";
export type CardRadius = "card" | "inner";

export function Card({
  theme = "white",
  padding = "lg",
  radius = "card",
  children,
  className,
  id,
}: {
  theme?: Theme;
  padding?: CardPadding;
  radius?: CardRadius;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const radiusClass = radius === "inner" ? styles.radiusInner : styles.radiusCard;
  return (
    <div id={id} className={cx(styles.card, styles[theme], styles[padding], radiusClass, className)}>
      {children}
    </div>
  );
}
