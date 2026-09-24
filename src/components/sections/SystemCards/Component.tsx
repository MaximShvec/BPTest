import { cx } from "@/lib/cx";
import type { SystemCardsData } from "./schema";
import styles from "./styles.module.css";

export function SystemCards({ title, aside, items }: SystemCardsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={cx(styles.card, item.theme === "lime" && styles.lime)}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
