import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import type { AppBlockData } from "./schema";
import styles from "./styles.module.css";

export function AppBlock({ id, caption, title, text, badges, screens }: AppBlockData) {
  return (
    <section id={id} className={styles.root}>
      <Grid className={styles.grid}>
        <GridItem span={6} spanTablet={12} spanMobile={12}>
          <div className={styles.copy}>
            <span className={styles.caption}>{caption}</span>
            <h2 className="h2">{title}</h2>
            <p className={styles.text}>{text}</p>
            <div className={styles.badges}>
              {badges.map((badge) => {
                const key = "placeholder" in badge ? badge.placeholder : "badge";
                return (
                  <Media key={key} className={styles.badge} media={badge} width={200} height={64} radius={12} borderColor="#646464" labelStyle="card" />
                );
              })}
            </div>
          </div>
        </GridItem>
        <GridItem span={6} spanTablet={12} spanMobile={12}>
          <div className={styles.screens}>
            {screens.map((screen) => {
              const key = "placeholder" in screen ? screen.placeholder : "screen";
              return <Media key={key} className={styles.screen} media={screen} radius={24} borderColor="#646464" labelStyle="card" />;
            })}
          </div>
        </GridItem>
      </Grid>
    </section>
  );
}
