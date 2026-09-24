import type { FreeAlwaysData } from "./schema";
import styles from "./styles.module.css";

export function FreeAlways({ caption, value, lead, items, shot, note }: FreeAlwaysData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <div className={styles.kicker}>
          <svg width="72" height="18" viewBox="0 0 72 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="8" stroke="#FFD400" strokeWidth="1.5" />
            <circle cx="27" cy="9" r="8" stroke="#646464" strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx="45" cy="9" r="8" stroke="#646464" strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx="63" cy="9" r="8" stroke="#646464" strokeWidth="1.5" strokeDasharray="3 4" />
          </svg>
          <span className={styles.caption}>{caption}</span>
        </div>
        <span className={styles.value}>{value}</span>
        <p className={styles.lead}>{lead}</p>
      </div>
      <div className={styles.list}>
        {items.map((item, index) => (
          <div key={item.index} className={index === items.length - 1 ? styles.rowLast : styles.row}>
            <span className={styles.index}>{item.index}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.shot}>{shot}</div>
      <p className={styles.note}>{note}</p>
    </section>
  );
}
