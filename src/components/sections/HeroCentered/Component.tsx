import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { HeroCenteredData } from "./schema";
import styles from "./styles.module.css";

export function HeroCentered({ media, title, lead, cta }: HeroCenteredData) {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <Media media={media} />
      </div>
      <h1 className={cx("h1", styles.title)}>{title}</h1>
      <p className={cx("lead", "muted", styles.lead)}>{lead}</p>
      <Button className={styles.cta} href={cta.href} variant={cta.variant ?? "primary"} size={cta.size ?? "xl"}>
        {cta.label}
      </Button>
    </section>
  );
}
