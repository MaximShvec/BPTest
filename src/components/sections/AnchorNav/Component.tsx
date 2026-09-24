import { cx } from "@/lib/cx";
import type { AnchorNavData } from "./schema";
import styles from "./styles.module.css";

export function AnchorNav({ compact, items }: AnchorNavData) {
  return (
    <nav className={cx(styles.nav, compact && styles.compact)} aria-label="Разделы">
      {items.map((item) => (
        <a key={item.label} href={item.href} className={cx(styles.chip, compact && styles.muted, item.tone === "dark" && styles.dark)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
