import type { FeeTableData } from "./schema";
import styles from "./styles.module.css";

export function FeeTable({ id, title, aside, rows }: FeeTableData) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        {aside ? <p className={styles.aside}>{aside}</p> : null}
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
    </section>
  );
}
