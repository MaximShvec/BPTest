import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { CardShowcaseData } from "./schema";
import styles from "./styles.module.css";

const themeClass = {
  white: styles.white,
  black: styles.black,
  blue: styles.blue,
} as const;

const borderColor = {
  white: "#e3e3e3",
  black: "#646464",
  blue: "#b6c1c6",
} as const;

export function CardShowcase({ id, items }: CardShowcaseData) {
  const triple = items.length === 3;
  return (
    <section id={id}>
      <Grid>
        {items.map((item, index) => {
          const lastWide = triple && index === items.length - 1;
          return (
            <GridItem key={item.title} span={4} spanTablet={lastWide ? 12 : 6} spanMobile={12}>
              <article className={cx(styles.card, themeClass[item.theme])}>
                <Media
                  className={cx(styles.shot, lastWide && styles.shotWide)}
                  media={item.media}
                  radius={16}
                  borderColor={borderColor[item.theme]}
                  labelStyle="card"
                />
                <span className={styles.caption}>{item.caption}</span>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.price}>
                  <span className={styles.value}>{item.price.value}</span>
                  <span className={styles.note}>{item.price.note}</span>
                </div>
                <Button
                  href={item.button.href}
                  variant={item.button.variant ?? "primary"}
                  size={item.button.size ?? "lg"}
                  fullWidth
                  className={styles.button}
                >
                  {item.button.label}
                </Button>
              </article>
            </GridItem>
          );
        })}
      </Grid>
    </section>
  );
}
