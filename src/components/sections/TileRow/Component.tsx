import { cx } from "@/lib/cx";
import type { CSSProperties } from "react";
import type { TileRowData } from "./schema";
import styles from "./styles.module.css";

export function TileRow({ title, titleMax, aside, columns, minHeight, items }: TileRowData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2" style={titleMax ? ({ maxWidth: titleMax } as CSSProperties) : undefined}>
          {title}
        </h2>
        {aside ? <p className={styles.aside}>{aside}</p> : null}
      </div>
      <div className={styles.grid} style={{ "--cols": columns, "--min": minHeight ? `${minHeight}px` : "0px" } as CSSProperties}>
        {items.map((item) => (
          <article key={item.title} className={cx(styles.card, item.theme === "lime" && styles.lime)}>
            <span className={cx(styles.stat, item.statTone === "muted" && styles.muted)}>{item.stat}</span>
            <h3 className={item.titleSize === "24" ? styles.titleLg : styles.titleSm}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
