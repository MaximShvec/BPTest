import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { LevelChainData } from "./schema";
import styles from "./styles.module.css";

function Arrow() {
  return (
    <svg className={styles.arrow} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#646464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function LevelChain({ caption, title, text, action, levels }: LevelChainData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button href={action.href} variant={action.variant ?? "outline"} size={action.size ?? "lg"}>
          {action.label}
        </Button>
      </div>
      <div className={styles.chain}>
        {levels.map((level, index) => (
          <div key={level.caption} className={styles.slot}>
            {index > 0 ? <Arrow /> : null}
            <article className={cx(styles.level, level.theme === "lime" ? styles.lime : styles.ink)}>
              <span className={styles.levelCaption}>{level.caption}</span>
              <span className={styles.value}>{level.value}</span>
              <span className={styles.levelText}>{level.text}</span>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
