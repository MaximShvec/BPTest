import { Grid, GridItem } from "@/components/ui/Grid";
import type { StatTilesData } from "./schema";
import styles from "./styles.module.css";

export function StatTiles({ items }: StatTilesData) {
  return (
    <Grid>
      {items.map((item) => (
        <GridItem key={item.caption} span={3}>
          <article className={styles.tile}>
            <span className={styles.caption}>{item.caption}</span>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.note}>{item.note}</span>
          </article>
        </GridItem>
      ))}
    </Grid>
  );
}
