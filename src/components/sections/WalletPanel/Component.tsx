import type { WalletPanelData } from "./schema";
import styles from "./styles.module.css";

export function WalletPanel({ shot, caption, title, text, chips }: WalletPanelData) {
  return (
    <section className={styles.section}>
      <div className={styles.shot}>{shot}</div>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
