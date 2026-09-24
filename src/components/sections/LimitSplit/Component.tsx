import type { LimitSplitData } from "./schema";
import styles from "./styles.module.css";

export function LimitSplit({ title, aside, rows, limitCaption, limitTitle, limits }: LimitSplitData) {
  return (
    <section className={styles.section}>
      <div className={styles.fees}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.aside}>{aside}</span>
        </div>
        <div>
          {rows.map((row, index) => (
            <div key={row.name} className={index === rows.length - 1 ? styles.rowLast : styles.row}>
              <span className={styles.name}>{row.name}</span>
              <span className={styles.note}>{row.note}</span>
              <span className={styles.value}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.limits}>
        <span className={styles.limitCaption}>{limitCaption}</span>
        <h3 className={styles.limitTitle}>{limitTitle}</h3>
        <div className={styles.limitList}>
          {limits.map((item, index) => (
            <div key={item.label} className={index === limits.length - 1 ? styles.limitLast : styles.limit}>
              <span>{item.label}</span>
              <span className={styles.limitValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
