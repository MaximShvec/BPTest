import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Grid.module.css";

export function Grid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(styles.grid, className)}>{children}</div>;
}

export function GridItem({
  span = 12,
  spanTablet,
  spanMobile = 12,
  children,
  className,
}: {
  span?: number;
  spanTablet?: number;
  spanMobile?: number;
  children: ReactNode;
  className?: string;
}) {
  const tablet = spanTablet ?? (span >= 7 ? 12 : 6);
  const style = {
    "--span": span,
    "--span-t": tablet,
    "--span-m": spanMobile,
  } as CSSProperties;

  return (
    <div className={cx(styles.item, className)} style={style}>
      {children}
    </div>
  );
}
