import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { CtaPanelData } from "./schema";
import styles from "./styles.module.css";

export function CtaPanel({ title, lead, actions }: CtaPanelData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <h2 className="h2">{title}</h2>
        <p className={styles.lead}>{lead}</p>
      </div>
      <div className={styles.actions}>
        {actions.map((action, index) => (
          <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl-text"} spread className={index === 1 ? styles.blue : undefined}>
            <span>{action.label}</span>
            {action.note ? <span className={cx(styles.note, index === 1 && styles.noteBlue)}>{action.note}</span> : null}
          </Button>
        ))}
      </div>
    </section>
  );
}
