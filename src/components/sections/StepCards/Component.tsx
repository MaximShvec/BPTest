import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { StepCardsData } from "./schema";
import styles from "./styles.module.css";

const themeClass = {
  white: styles.white,
  black: styles.black,
  ink: styles.ink,
};

export function StepCards({ id, title, aside, listOffset = 8, indexWidth, cards }: StepCardsData) {
  return (
    <section id={id} className={styles.root}>
      <div className={styles.head}>
        <h2 className={`h2 ${styles.heading}`}>{title}</h2>
        {aside ? <p className={styles.aside}>{aside}</p> : null}
      </div>
      <Grid>
        {cards.map((card) => (
          <GridItem key={card.title} span={card.span ?? 6} spanTablet={card.spanTablet} spanMobile={12}>
            <article className={cx(styles.card, themeClass[card.theme])}>
              <span className={cx("caption", card.captionTone === "lime" ? styles.captionLime : styles.captionMuted)}>{card.caption}</span>
              <h3 className={card.titleSize === "32" ? styles.title32 : styles.title36}>{card.title}</h3>
              {card.text ? <p className={styles.text}>{card.text}</p> : null}
              <ul className={cx(styles.list, listOffset === 4 ? styles.tight : styles.loose, indexWidth === 20 && styles.fixed)}>
                {card.steps.map((step) => (
                  <li key={step.index} className={styles.item}>
                    <span className={styles.index}>{step.index}</span>
                    <span>{step.text}</span>
                  </li>
                ))}
              </ul>
              {card.button ? (
                <Button className={styles.cta} href={card.button.href} variant={card.button.variant ?? "primary"} size={card.button.size ?? "lg"}>
                  {card.button.label}
                </Button>
              ) : null}
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
