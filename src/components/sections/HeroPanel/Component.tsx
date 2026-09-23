import { Button } from "@/components/ui/Button";
import type { HeroPanelData } from "./schema";
import styles from "./styles.module.css";

export function HeroPanel({ id, caption, title, lead, actions, media, mediaNote }: HeroPanelData) {
  const label = "placeholder" in media ? media.placeholder : "";
  return (
    <section id={id} className={styles.root}>
      <div className={styles.top}>
        <div className={styles.copy}>
          <span className={styles.caption}>{caption}</span>
          <h1 className="h1">{title}</h1>
          <p className={`lead ${styles.lead}`}>{lead}</p>
        </div>
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl"}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.media}>
        <span>{label}</span>
        {mediaNote ? <span className={styles.note}>{mediaNote}</span> : null}
      </div>
    </section>
  );
}
