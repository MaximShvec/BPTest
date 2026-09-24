import type { MetricBarData } from "./schema";
import styles from "./styles.module.css";

export function MetricBar({ items }: MetricBarData) {
  return (
    <section className={styles.bar}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
