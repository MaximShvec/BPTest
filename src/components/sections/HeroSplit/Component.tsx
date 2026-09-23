import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { renderSections } from "@/components/sections/renderSections";
import type { Section } from "@/components/sections/schemas";
import type { HeroSplitData } from "./schema";
import styles from "./styles.module.css";

export function HeroSplit({ badge, title, lead, buttons, media, below }: HeroSplitData) {
  return (
    <Grid>
      <GridItem span={7} spanTablet={12} spanMobile={12}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            <span className="caption">{badge}</span>
          </div>
          <h1 className="h1">{title}</h1>
          <p className={`lead muted ${styles.lead}`}>{lead}</p>
          <div className={styles.actions}>
            {buttons.map((button) => (
              <Button key={button.label} href={button.href} variant={button.variant ?? "primary"} size={button.size ?? "xl-text"}>
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </GridItem>
      <GridItem span={5} spanTablet={12} spanMobile={12}>
        <Media className={styles.photo} media={media} radius={40} borderColor="#939393" />
      </GridItem>
      {below?.map((item, index) => (
        <GridItem
          key={item.section.id ?? index}
          span={item.span ?? 12}
          spanTablet={item.spanTablet}
          spanMobile={item.spanMobile ?? 12}
        >
          {renderSections([item.section as Section])}
        </GridItem>
      ))}
    </Grid>
  );
}
