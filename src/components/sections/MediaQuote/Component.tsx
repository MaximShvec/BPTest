import type { MediaQuoteData } from "./schema";
import styles from "./styles.module.css";

export function MediaQuote({ video, caption, quote, photo, name, role, portrait }: MediaQuoteData) {
  return (
    <section className={styles.section}>
      <div className={styles.video}>{video}</div>
      <div className={styles.quote}>
        <span className={styles.caption}>{caption}</span>
        <p className={styles.text}>{quote}</p>
        <div className={styles.author}>
          <span className={styles.avatar}>{photo}</span>
          <span className={styles.person}>
            <span className={styles.name}>{name}</span>
            <span className={styles.role}>{role}</span>
          </span>
        </div>
      </div>
      <div className={styles.portrait}>{portrait}</div>
    </section>
  );
}
