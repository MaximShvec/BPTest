import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { CtaFinalData } from "./schema";
import styles from "./styles.module.css";

export function CtaFinal({ media, title, lead, cta }: CtaFinalData) {
  return (
    <Card theme="white" className={styles.card}>
      <Media media={media} width={220} height={140} radius={24} borderColor="#e3e3e3" />
      <h2 className={cx("h2", styles.title)}>{title}</h2>
      <p className="lead muted">{lead}</p>
      <Button href={cta.href} variant={cta.variant ?? "primary"} size={cta.size ?? "lg"}>
        {cta.label}
      </Button>
    </Card>
  );
}
