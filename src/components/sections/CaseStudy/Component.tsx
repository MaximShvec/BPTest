import { cx } from "@/lib/cx";
import type { CaseStudyData } from "./schema";
import styles from "./styles.module.css";

export function CaseStudy({ caption, title, lead, steps, media, note }: CaseStudyData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <span className="caption">{caption}</span>
        <h2 className="h2">{title}</h2>
        <p className={styles.lead}>{lead}</p>
      </div>
      <div className={styles.steps}>
        {steps.map((step) => (
          <article key={step.index} className={cx(styles.step, step.theme === "lime" && styles.lime)}>
            <span className={styles.index}>{step.index}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </article>
        ))}
      </div>
      <div className={styles.shot}>{"placeholder" in media ? media.placeholder : null}</div>
      <p className={styles.note}>{note}</p>
    </section>
  );
}
