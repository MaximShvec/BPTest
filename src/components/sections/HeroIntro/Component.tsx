import { Button } from "@/components/ui/Button";
import type { HeroIntroData } from "./schema";
import styles from "./styles.module.css";

export function HeroIntro({ caption, title, lead, actions }: HeroIntroData) {
  return (
    <section className={styles.hero}>
      <span className="caption">{caption}</span>
      <h1 className={`h1 ${styles.title}`}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
      <div className={styles.actions}>
        {actions.map((action) => (
          <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl"}>
            {action.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
