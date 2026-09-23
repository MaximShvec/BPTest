import { NoteButton } from "@/components/ui/NoteButton";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { HeroAsideData } from "./schema";
import styles from "./styles.module.css";

export function HeroAside({ badge, title, lead, actions }: HeroAsideData) {
  return (
    <section className={styles.root}>
      <Grid className={styles.grid}>
        <GridItem span={8} spanTablet={12} spanMobile={12}>
          <div className={styles.copy}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              <span className={styles.badgeText}>{badge}</span>
            </div>
            <h1 className="h1">{title}</h1>
            <p className={`lead ${styles.lead}`}>{lead}</p>
          </div>
        </GridItem>
        <GridItem span={4} spanTablet={12} spanMobile={12}>
          <div className={styles.actions}>
            {actions.map((action) => (
              <NoteButton key={action.label} link={action} />
            ))}
          </div>
        </GridItem>
      </Grid>
    </section>
  );
}
