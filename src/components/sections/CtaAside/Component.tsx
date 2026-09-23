import { NoteButton } from "@/components/ui/NoteButton";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { CtaAsideData } from "./schema";
import styles from "./styles.module.css";

export function CtaAside({ title, lead, actions }: CtaAsideData) {
  return (
    <section className={styles.root}>
      <Grid className={styles.grid}>
        <GridItem span={7} spanTablet={12} spanMobile={12}>
          <div className={styles.copy}>
            <h2 className="h2">{title}</h2>
            {lead ? <p className={`lead ${styles.lead}`}>{lead}</p> : null}
          </div>
        </GridItem>
        <GridItem span={5} spanTablet={12} spanMobile={12}>
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
