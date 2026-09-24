import type { PayoutBlockData } from "./schema";
import styles from "./styles.module.css";

export function PayoutBlock({ caption, title, aside, steps, shot, noteCaption, noteTitle, noteText }: PayoutBlockData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.copy}>
          <span className={styles.caption}>{caption}</span>
          <h2 className="h2">{title}</h2>
        </div>
        <p className={styles.aside}>{aside}</p>
      </div>
      <div className={styles.steps}>
        {steps.map((step) => (
          <article key={step.caption} className={styles.step}>
            <span className={styles.stepCaption}>{step.caption}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.text}</p>
          </article>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.shot}>{shot}</div>
        <div className={styles.note}>
          <span className={styles.noteCaption}>{noteCaption}</span>
          <h3 className={styles.noteTitle}>{noteTitle}</h3>
          <p className={styles.noteText}>{noteText}</p>
        </div>
      </div>
    </section>
  );
}
