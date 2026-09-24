import { Button } from "@/components/ui/Button";
import type { HeroStatsData } from "./schema";
import styles from "./styles.module.css";

export function HeroStats({ caption, title, lead, actions, highlight, stats }: HeroStatsData) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h1 className="h1">{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl"}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.aside}>
        <div className={styles.highlight}>
          <span className={styles.valueLg}>{highlight.value}</span>
          <span className={styles.note}>{highlight.text}</span>
        </div>
        <div className={styles.pair}>
          {stats.map((stat) => (
            <div key={stat.value} className={styles.stat}>
              <span className={styles.valueMd}>{stat.value}</span>
              <span className={styles.muted}>{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
