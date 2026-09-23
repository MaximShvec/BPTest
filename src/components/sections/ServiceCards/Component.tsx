import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { ServiceCardsData } from "./schema";
import styles from "./styles.module.css";

export function ServiceCards({ title, aside, items }: ServiceCardsData) {
  return (
    <section className={styles.root}>
      <div className={styles.head}>
        <h2 className={`h2 ${styles.heading}`}>{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <Grid>
        {items.map((item) => {
          const key = item.kind === "card" ? item.title : "placeholder" in item.media ? item.media.placeholder : "media";
          return (
            <GridItem key={key} span={item.span ?? 4} spanTablet={item.spanTablet ?? (item.kind === "media" ? 12 : 6)} spanMobile={item.spanMobile ?? 12}>
              {item.kind === "card" ? (
                <article className={cx(styles.card, item.theme === "dark" ? styles.dark : styles.white)}>
                  <span className={cx(styles.caption, item.captionTone === "lime" ? styles.lime : styles.muted)}>{item.caption}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                  <Button href={item.button.href} variant={item.button.variant ?? "outline"} size={item.button.size ?? "lg"} className={styles.button}>
                    {item.button.label}
                  </Button>
                </article>
              ) : (
                <Media
                  className={cx(styles.shot, item.surface === "blue" && styles.shotBlue)}
                  media={item.media}
                  radius={32}
                  borderColor={item.borderColor}
                  labelStyle="body"
                />
              )}
            </GridItem>
          );
        })}
      </Grid>
    </section>
  );
}
