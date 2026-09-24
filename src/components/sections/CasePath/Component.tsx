import { Button } from "@/components/ui/Button";
import type { CasePathData } from "./schema";
import styles from "./styles.module.css";

export function CasePath({ caption, title, aside, steps, shot, noteCaption, notes, action }: CasePathData) {
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
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.text}</p>
          </article>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.shot}>{shot}</div>
        <div className={styles.note}>
          <span className={styles.noteCaption}>{noteCaption}</span>
          <ul>
            {notes.map((item, index) => (
              <li key={item} className={index === notes.length - 1 ? styles.noteLast : undefined}>
                {item}
              </li>
            ))}
          </ul>
          <Button href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "lg"}>
            {action.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
