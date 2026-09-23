import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cx } from "@/lib/cx";
import type { CtaData } from "./schema";
import styles from "./styles.module.css";

export function Cta({ id, theme = "white", layout = "center", title, lead, buttons }: CtaData) {
  return (
    <Card id={id} theme={theme} padding="none" className={cx(styles.card, layout === "split" ? styles.split : styles.center)}>
      <div className={styles.copy}>
        <h2 className="h2">{title}</h2>
        {lead ? <p className={cx(styles.lead, theme === "lime" ? styles.ink : "lead muted")}>{lead}</p> : null}
      </div>
      <div className={styles.actions}>
        {buttons.map((button) => (
          <Button key={button.label} href={button.href} variant={button.variant ?? "primary"} size={button.size ?? "lg"}>
            {button.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}
