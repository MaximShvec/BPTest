import type { ScenarioCardsData } from "./schema";
import styles from "./styles.module.css";

export function ScenarioCards({ title, aside, items }: ScenarioCardsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.index} className={styles.card}>
            <span className={styles.index}>{item.index}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
