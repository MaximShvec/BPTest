import { Button } from "@/components/ui/Button";
import type { KybPanelData } from "./schema";
import styles from "./styles.module.css";

export function KybPanel({ caption, title, aside, steps, docsCaption, docs, docsNote, sideCaption, sideTitle, sideText, action }: KybPanelData) {
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
        {steps.map((step, index) => (
          <article key={step.index} className={styles.step}>
            {index < steps.length - 1 ? <span className={styles.line} aria-hidden="true" /> : null}
            <span className={styles.num}>{step.index}</span>
            <span className={styles.stepTitle}>{step.title}</span>
            <span className={styles.time}>{step.time}</span>
          </article>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.docs}>
          <span className={styles.docsCaption}>{docsCaption}</span>
          <div className={styles.docGrid}>
            {docs.map((doc) => (
              <span key={doc}>{doc}</span>
            ))}
          </div>
          <p className={styles.docsNote}>{docsNote}</p>
        </div>
        <div className={styles.side}>
          <span className={styles.sideCaption}>{sideCaption}</span>
          <h3 className={styles.sideTitle}>{sideTitle}</h3>
          <p className={styles.sideText}>{sideText}</p>
          <Button href={action.href} variant={action.variant ?? "dark"} size={action.size ?? "lg"} className={styles.sideButton}>
            {action.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
