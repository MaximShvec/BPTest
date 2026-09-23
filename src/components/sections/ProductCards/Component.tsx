import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { ProductCardsData } from "./schema";
import styles from "./styles.module.css";

const themeClass = {
  light: styles.white,
  white: styles.white,
  dark: styles.white,
  black: styles.white,
  lime: styles.lime,
  blue: styles.blue,
} as const;

export function ProductCards({ title, aside, items }: ProductCardsData) {
  return (
    <section className={styles.root}>
      <div className={styles.head}>
        <h2 className={`h2 ${styles.heading}`}>{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <Grid>
        {items.map((item) => (
          <GridItem key={item.title} span={6} spanTablet={6} spanMobile={12}>
            <article className={cx(styles.card, themeClass[item.theme])}>
              <span className={styles.caption}>{item.caption}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              <Button href={item.button.href} variant={item.button.variant ?? "dark"} size={item.button.size ?? "lg"} className={styles.button}>
                {item.button.label}
              </Button>
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
