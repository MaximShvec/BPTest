import { cx } from "@/lib/cx";
import type { AnchorNavData } from "./schema";
import styles from "./styles.module.css";

export function AnchorNav({ items }: AnchorNavData) {
  return (
    <nav className={styles.nav} aria-label="Разделы">
      {items.map((item) => (
        <a key={item.label} href={item.href} className={cx(styles.chip, item.tone === "dark" && styles.dark)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
