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
}: {
  theme?: Theme;
  padding?: CardPadding;
  radius?: CardRadius;
  children: ReactNode;
  className?: string;
}) {
  const radiusClass = radius === "inner" ? styles.radiusInner : styles.radiusCard;
  return <div className={cx(styles.card, styles[theme], styles[padding], radiusClass, className)}>{children}</div>;
}
