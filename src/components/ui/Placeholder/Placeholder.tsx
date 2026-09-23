import type { CSSProperties, ReactNode } from "react";
import styles from "./Placeholder.module.css";
import { cx } from "@/lib/cx";

export function Placeholder({
  label,
  ratio,
  width,
  height,
  className,
  radius,
  borderColor,
  labelStyle,
}: {
  label?: ReactNode;
  ratio?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  radius?: number | string;
  borderColor?: string;
  labelStyle?: "body" | "micro";
}) {
  const framed = width != null && height != null;
  const frame = (value: number | string) => (typeof value === "number" ? value + 2 : `calc(${value} + 2px)`);
  const style = {
    width: framed ? frame(width) : width,
    height: framed ? frame(height) : height,
    aspectRatio: framed ? undefined : (ratio ?? "16/9"),
    borderRadius: radius,
    borderColor,
    flexShrink: framed ? 0 : undefined,
    padding: framed ? 0 : undefined,
  } as CSSProperties;

  return (
    <div
      className={cx(styles.placeholder, labelStyle === "body" && styles.bodyLabel, labelStyle === "micro" && styles.microLabel, className)}
      style={style}
    >
      {label}
    </div>
  );
}
