import { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { ConverterFallback, ExchangeConverter } from "./Converter";
import type { HeroConverterData } from "./schema";
import styles from "./styles.module.css";

export function HeroConverter({ caption, title, lead, actions, widget }: HeroConverterData) {
  return (
    <section>
      <Grid>
        <GridItem span={6} spanTablet={12} spanMobile={12}>
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
        <GridItem span={6} spanTablet={12} spanMobile={12}>
          <Suspense fallback={<ConverterFallback widget={widget} />}>
            <ExchangeConverter widget={widget} />
          </Suspense>
        </GridItem>
      </Grid>
    </section>
  );
}
