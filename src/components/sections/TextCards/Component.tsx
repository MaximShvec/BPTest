import { Grid, GridItem } from "@/components/ui/Grid";
import type { TextCardsData } from "./schema";
import styles from "./styles.module.css";

export function TextCards({ title, aside, items }: TextCardsData) {
  return (
    <section className={styles.root}>
      <div className={styles.head}>
        <h2 className={`h2 ${styles.heading}`}>{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <Grid>
        {items.map((item) => (
          <GridItem key={item.title} span={4} spanTablet={6} spanMobile={12}>
            <article className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
