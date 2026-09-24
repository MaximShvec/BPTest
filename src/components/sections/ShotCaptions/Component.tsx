import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { ShotCaptionsData } from "./schema";
import styles from "./styles.module.css";

export function ShotCaptions({ title, aside, shots }: ShotCaptionsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <Grid>
        {shots.map((shot) => (
          <GridItem key={shot.placeholder} span={shot.span}>
            <div
              className={cx(styles.shot, shot.surface === "blue" && styles.blue)}
              style={{ height: shot.height, borderColor: shot.border }}
            >
              {shot.placeholder}
            </div>
          </GridItem>
        ))}
      </Grid>
      <Grid>
        {shots.map((shot) => (
          <GridItem key={shot.title} span={shot.span}>
            <div className={styles.caption}>
              <span className={styles.captionTitle}>{shot.title}</span>
              <span className={styles.note}>{shot.note}</span>
            </div>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
