import type { FeeGroupData } from "./schema";
import styles from "./styles.module.css";

export function FeeGroup({ id, index, title, text, rows }: FeeGroupData) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.index}>{index}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.table}>
        {rows.map((row, i) => (
          <div key={row.name} className={i === rows.length - 1 ? styles.rowLast : styles.row}>
            <span className={styles.name}>{row.name}</span>
            <span className={styles.note}>{row.note}</span>
            <span className={styles.value}>{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
