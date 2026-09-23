import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { CSSProperties } from "react";
import type { HeroMediaData } from "./schema";
import styles from "./styles.module.css";

export function HeroMedia({ caption, title, lead, actions, mediaLabel, ratio = "4 / 5" }: HeroMediaData) {
  return (
    <section>
      <Grid>
        <GridItem span={7} spanTablet={12} spanMobile={12}>
          <div className={styles.copy}>
            <span className="caption">{caption}</span>
            <h1 className="h1">{title}</h1>
            <p className={`lead ${styles.lead}`}>{lead}</p>
            <div className={styles.actions}>
              {actions.map((action) => (
                <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "lg"}>
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </GridItem>
        <GridItem span={5} spanTablet={12} spanMobile={12}>
          <div className={styles.shot} style={{ "--shot-ratio": ratio } as CSSProperties}>
            <span>{mediaLabel}</span>
          </div>
        </GridItem>
      </Grid>
    </section>
  );
}
