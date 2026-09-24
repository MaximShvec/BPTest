import type { OtherCardsData } from "./schema";
import styles from "./styles.module.css";

export function OtherCards({ title, items }: OtherCardsData) {
  return (
    <section className={styles.section}>
      <h2 className="h2">{title}</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <a key={item.title} href={item.action.href} className={item.theme === "ink" ? styles.ink : styles.blue}>
            <span className={styles.caption}>{item.caption}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <span className={styles.more}>{item.action.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
