import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { SplitMediaCardData } from "./schema";
import styles from "./styles.module.css";

export function SplitMediaCard({ media, title, text, cta, theme = "white" }: SplitMediaCardData) {
  return (
    <Card theme={theme} className={styles.card}>
      <div className={styles.video}>
        <Media media={media} radius={24} />
      </div>
      <div className={styles.copy}>
        <h2 className="h2">{title}</h2>
        <p className={cx("body", "muted", styles.text)}>{text}</p>
        <Button href={cta.href} variant={cta.variant ?? "primary"} size={cta.size ?? "lg"}>
          {cta.label}
        </Button>
      </div>
    </Card>
  );
}
