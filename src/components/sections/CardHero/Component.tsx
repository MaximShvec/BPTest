import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { CardHeroData } from "./schema";
import styles from "./styles.module.css";

export function CardHero({ theme = "blue", caption, title, lead, actions, shot }: CardHeroData) {
  return (
    <section className={cx(styles.hero, theme === "lime" && styles.lime)}>
      <div className={styles.copy}>
        <div className={styles.kicker}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.caption}>{caption}</span>
        </div>
        <h1 className="h1">{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl-text"} className={action.variant === "dark" ? styles.ink : undefined}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.shot}>{shot}</div>
    </section>
  );
}
