import { Grid, GridItem } from "@/components/ui/Grid";
import type { StatPanelData } from "./schema";
import styles from "./styles.module.css";

export function StatPanel({ caption, title, aside, stats, items }: StatPanelData) {
  return (
    <section className={styles.root}>
      <Grid className={styles.head}>
        <GridItem span={7} spanTablet={12} spanMobile={12}>
          <div className={styles.intro}>
            <span className={styles.caption}>{caption}</span>
            <h2 className="h2">{title}</h2>
          </div>
        </GridItem>
        <GridItem span={5} spanTablet={12} spanMobile={12}>
          <p className={styles.aside}>{aside}</p>
        </GridItem>
      </Grid>
      <Grid>
        {stats.map((stat) => (
          <GridItem key={stat.label} span={3} spanTablet={6} spanMobile={6}>
            <div className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          </GridItem>
        ))}
      </Grid>
      <Grid>
        {items.map((item) => (
          <GridItem key={item.title} span={4} spanTablet={6} spanMobile={12}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
