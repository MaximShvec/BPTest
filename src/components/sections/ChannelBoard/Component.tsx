import { cx } from "@/lib/cx";
import type { ChannelBoardData } from "./schema";
import styles from "./styles.module.css";

export function ChannelBoard({ title, aside, columns, rows, balancesTitle, balancesText, balances }: ChannelBoardData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
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
          <div key={row.name} className={styles.row}>
            <span className={styles.name} data-label={columns[0]}>{row.name}</span>
            <span className={styles.where} data-label={columns[1]}>{row.where}</span>
            <span className={styles.time} data-label={columns[2]}>{row.time}</span>
            <span className={styles.fee} data-label={columns[3]}>{row.fee}</span>
          </div>
        ))}
      </div>
      <div className={styles.balanceHead}>
        <h3 className={styles.balanceTitle}>{balancesTitle}</h3>
        <p className={styles.balanceText}>{balancesText}</p>
      </div>
      <div className={styles.balances}>
        {balances.map((item) => (
          <article key={item.code} className={cx(styles.balance, item.theme === "blue" && styles.blue)}>
            <span className={styles.balanceCaption}>{item.caption}</span>
            <span className={styles.code}>{item.code}</span>
            <span className={styles.value}>{item.value}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
