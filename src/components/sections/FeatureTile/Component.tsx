import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import type { FeatureTileData } from "./schema";
import styles from "./styles.module.css";

export function FeatureTile({ media, title, text, actions, theme = "lime" }: FeatureTileData) {
  return (
    <Card theme={theme} className={styles.card}>
      <div className={styles.art}>
        <Media media={media} />
      </div>
      <h2 className="h3">{title}</h2>
      <p className="body">{text}</p>
      <div className={styles.actions}>
        {actions.map((action) => (
          <Button key={action.href} href={action.href} variant={action.variant ?? "dark"} size={action.size ?? "lg"}>
            {action.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}
