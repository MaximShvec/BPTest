import { RichText } from "@/components/rich/RichText";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { ProductRowData } from "./schema";
import styles from "./styles.module.css";

export function ProductRow({ hub, pillars }: ProductRowData) {
  return (
    <Grid>
      <GridItem span={12}>
        <Card theme="white" className={styles.hub}>
          <Media className={styles.art} media={hub.media} radius={16} width={300} height={200} borderColor="#e3e3e3" />
          <div className={styles.copy}>
            <RichText as="h2" className={cx("h2", styles.title)} value={hub.title} />
            <p className={cx("lead", "muted", styles.lead)}>{hub.lead}</p>
            <Button href={hub.cta.href} variant={hub.cta.variant ?? "primary"} size={hub.cta.size ?? "lg"}>
              {hub.cta.label}
            </Button>
          </div>
        </Card>
      </GridItem>
      {pillars.map((pillar) => (
        <GridItem key={pillar.id ?? pillar.caption} span={6} spanTablet={6} spanMobile={12}>
          <Card id={pillar.id} theme={pillar.theme ?? "white"} className={styles.pillar}>
            <span className="caption">{pillar.caption}</span>
            <h2 className="h2">{pillar.title}</h2>
            {pillar.lead ? <p className="lead muted">{pillar.lead}</p> : null}
            <ul className={styles.list}>
              {pillar.items.map((item) => (
                <li key={item.text} className={cx("h4", item.muted && styles.muted)}>
                  {item.text}
                </li>
              ))}
            </ul>
            <Button
              className={styles.cta}
              href={pillar.cta.href}
              variant={pillar.cta.variant ?? "outline"}
              size={pillar.cta.size ?? "lg"}
              ring={pillar.cta.ring}
            >
              {pillar.cta.label}
            </Button>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
}
