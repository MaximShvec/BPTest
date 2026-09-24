import type { TablePreviewData } from "./schema";
import styles from "./styles.module.css";

export function TablePreview({ caption, title, aside, columns, rows, cards, note }: TablePreviewData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.copy}>
          <span className={styles.caption}>{caption}</span>
          <h2 className="h2">{title}</h2>
        </div>
        <p className={styles.aside}>{aside}</p>
      </div>
      <div className={styles.table}>
        <div className={styles.cols}>
          {columns.map((column, index) => (
            <span key={column} className={index === 2 ? styles.amountHead : undefined}>
              {column}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row[0]} className={styles.row}>
            {row.map((cell, index) => (
              <span key={columns[index]} className={index === 2 ? styles.amount : undefined} data-label={columns[index]}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <p className={styles.note}>{note}</p>
    </section>
  );
}
