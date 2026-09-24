import type { RiskSplitData } from "./schema";
import styles from "./styles.module.css";

export function RiskSplit({ caption, title, text, items }: RiskSplitData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title}>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemText}>{item.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
