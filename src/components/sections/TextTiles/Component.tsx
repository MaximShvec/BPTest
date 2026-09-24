import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { CSSProperties } from "react";
import type { TextTilesData } from "./schema";
import styles from "./styles.module.css";

const themeClass = {
  white: styles.white,
  blue: styles.blue,
  gray: styles.gray,
} as const;

export function TextTiles({ title, frame = "plain", card = "roomy", minHeight, items }: TextTilesData) {
  return (
    <section className={cx(styles.section, frame === "white" && styles.framed)}>
      <h2 className="h2">{title}</h2>
      <Grid>
        {items.map((item) => (
          <GridItem key={item.title} span={item.span ?? 3} spanMobile={12}>
            <article
              className={cx(styles.card, card === "tight" && styles.tight, themeClass[item.theme ?? "white"])}
              style={{ "--min": minHeight ? `${minHeight}px` : "0px" } as CSSProperties}
            >
              {item.caption ? <span className={cx("caption", item.captionTone === "gray" && styles.captionGray)}>{item.caption}</span> : null}
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
