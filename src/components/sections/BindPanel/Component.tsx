import type { BindPanelData } from "./schema";
import styles from "./styles.module.css";

export function BindPanel({ caption, title, text, steps, shot }: BindPanelData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className="h2">{title}</h2>
        <p className={styles.text}>{text}</p>
        <ol>
          {steps.map((step) => (
            <li key={step.index}>
              <span className={styles.index}>{step.index}</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.shot}>{shot}</div>
    </section>
  );
}
