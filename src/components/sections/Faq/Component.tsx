import { RichText } from "@/components/rich/RichText";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { FaqData } from "./schema";
import styles from "./styles.module.css";

export function Faq({ title, lead, items, defaultOpen = 0 }: FaqData) {
  return (
    <Card theme="white" padding="none" className={styles.card}>
      <Grid>
        <GridItem span={4} spanTablet={12} spanMobile={12}>
          <div className={styles.side}>
            <h2 className="h2">{title}</h2>
            <RichText as="p" className={`lead muted ${styles.lead}`} value={lead} />
          </div>
        </GridItem>
        <GridItem span={8} spanTablet={12} spanMobile={12}>
          <div className={styles.list}>
            <Accordion
              defaultOpen={defaultOpen}
              triggerGap={32}
              contentGap={16}
              triggerMinHeight={0}
              triggerFeatures="normal"
              items={items.map((item) => ({
                title: item.q,
                content: item.a ?? "[ОТВЕТ]",
              }))}
            />
          </div>
        </GridItem>
      </Grid>
    </Card>
  );
}
