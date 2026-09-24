import type { AssetGridData } from "./schema";
import styles from "./styles.module.css";

export function AssetGrid({ id, caption, title, aside, columns, rows, notes }: AssetGridData) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <div>
          <span className={styles.caption}>{caption}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <span className={styles.aside}>{aside}</span>
      </div>
      <div>
        <div className={styles.cols}>
          {columns.map((column, index) => (
            <span key={column} className={index === columns.length - 1 ? styles.colFee : undefined}>
              {column}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row.ticker} className={styles.row}>
            <span className={styles.ticker} data-label={columns[0]}>{row.ticker}</span>
            <span className={styles.networks} data-label={columns[1]}>{row.networks}</span>
            <span className={styles.meta} data-label={columns[2]}>{row.min}</span>
            <span className={styles.confirms} data-label={columns[3]}>{row.confirms}</span>
            <span className={styles.fee} data-label={columns[4]}>{row.fee}</span>
          </div>
        ))}
      </div>
      <div className={styles.notes}>
        {notes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </section>
  );
}
