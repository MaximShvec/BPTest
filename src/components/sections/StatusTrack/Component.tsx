import { cx } from "@/lib/cx";
import type { StatusTrackData } from "./schema";
import styles from "./styles.module.css";

export function StatusTrack({ title, aside, steps }: StatusTrackData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.aside}>{aside}</span>
      </div>
      <div className={styles.track}>
        {steps.map((step, index) => (
          <article key={step.title} className={styles.step}>
            {index < steps.length - 1 ? <span className={styles.line} aria-hidden="true" /> : null}
            <span className={cx(styles.dot, step.tone === "muted" && styles.muted)} />
            <span className={styles.stepTitle}>{step.title}</span>
            <span className={styles.stepText}>{step.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
