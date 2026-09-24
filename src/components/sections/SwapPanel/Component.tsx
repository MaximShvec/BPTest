import type { SwapPanelData } from "./schema";
import styles from "./styles.module.css";

export function SwapPanel(data: SwapPanelData) {
  return (
    <section id={data.id} className={styles.section}>
      <div className={styles.info}>
        <span className={styles.lime}>{data.caption}</span>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.text}</p>
        <div className={styles.rates}>
          {data.rates.map((rate, index) => (
            <div key={rate.label} className={index === data.rates.length - 1 ? styles.rateLast : styles.rate}>
              <span>{rate.label}</span>
              <span className={styles.muted}>{rate.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.form}>
        <span className={styles.formLabel}>{data.giveLabel}</span>
        <div className={styles.field}>
          <span className={styles.amount}>{data.giveAmount}</span>
          <span className={styles.asset}>{data.giveAsset}</span>
        </div>
        <span className={styles.formLabel}>{data.getLabel}</span>
        <div className={styles.field}>
          <span className={styles.amount}>{data.getAmount}</span>
          <span className={styles.asset}>{data.getAsset}</span>
        </div>
        <div className={styles.quote}>
          {data.quote.map((row) => (
            <div key={row.label}>
              <span className={styles.muted}>{row.label}</span>
              <span>{row.value}</span>
            </div>
          ))}
        </div>
        <span className={styles.action}>{data.action}</span>
      </div>
      <div className={styles.shot}>{data.shot}</div>
    </section>
  );
}
