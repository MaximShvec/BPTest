import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { AudienceCardsData } from "./schema";
import styles from "./styles.module.css";

export function AudienceCards({ title, cta, items }: AudienceCardsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        {cta ? (
          <Button href={cta.href} variant={cta.variant ?? "primary"} size={cta.size ?? "lg"}>
            {cta.label}
          </Button>
        ) : null}
      </div>
      <Grid>
        {items.map((item) => (
          <GridItem key={item.index} span={3} spanTablet={6} spanMobile={12}>
            <article className={styles.card}>
              <span className="caption">{item.index}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className="body muted">{item.text}</p>
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
