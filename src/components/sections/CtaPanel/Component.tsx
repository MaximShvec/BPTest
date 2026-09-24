import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { CtaPanelData } from "./schema";
import styles from "./styles.module.css";

const noteTone = {
  dirty: styles.noteDirty,
  muted: styles.noteMuted,
  gray: styles.noteGray,
} as const;

export function CtaPanel({ theme = "dark", inkButton, title, lead, actions }: CtaPanelData) {
  return (
    <section className={cx(styles.section, theme === "lime" && styles.lime)}>
      <div className={styles.copy}>
        <h2 className="h2">{title}</h2>
        <p className={styles.lead}>{lead}</p>
      </div>
      <div className={styles.actions}>
        {actions.map((action, index) => (
          <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl-text"} spread className={cx(theme === "dark" && index === 1 && styles.blue, inkButton && index === 0 && styles.inkBtn, inkButton && index === 1 && styles.inkText)}>
            <span>{action.label}</span>
            {action.note ? (
              <span className={cx(styles.note, theme === "lime" ? noteTone[action.noteTone ?? "muted"] : index === 1 ? styles.noteBlue : styles.noteDirty)}>
                {action.note}
              </span>
            ) : null}
          </Button>
        ))}
      </div>
    </section>
  );
}
