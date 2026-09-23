import type { CSSProperties, ReactNode } from "react";
import styles from "./Placeholder.module.css";
import { cx } from "@/lib/cx";

export function Placeholder({
  label,
  ratio = "16/9",
  className,
  radius,
}: {
  label: ReactNode;
  ratio?: string;
  className?: string;
  radius?: number | string;
}) {
  const style = {
    aspectRatio: ratio,
    borderRadius: radius,
  } as CSSProperties;

  return (
    <div className={cx(styles.placeholder, className)} style={style}>
      {label}
    </div>
  );
}
