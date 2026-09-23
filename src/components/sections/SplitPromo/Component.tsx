import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { SplitPromoData } from "./schema";
import styles from "./styles.module.css";

export function SplitPromo({ cards }: SplitPromoData) {
  return (
    <section>
      <Grid>
        {cards.map((card) => (
          <GridItem key={card.title} span={card.span ?? 6} spanTablet={12} spanMobile={12}>
            <article className={cx(styles.card, card.theme === "lime" ? styles.lime : styles.white)}>
              <span className={cx("caption", card.captionTone === "dirty" ? styles.dirty : styles.muted)}>{card.caption}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.text}>{card.text}</p>
              {card.actions?.length ? (
                <div className={cx(styles.actions, card.pinAction && styles.pin)}>
                  {card.actions.map((action) => (
                    <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "lg"} ring={action.ring}>
                      {action.label}
                    </Button>
                  ))}
                </div>
              ) : null}
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
