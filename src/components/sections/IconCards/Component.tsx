import { Icon, type IconName } from "@/components/ui/Icon";
import { RichText } from "@/components/rich/RichText";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { CSSProperties } from "react";
import type { IconCardsData } from "./schema";
import styles from "./styles.module.css";

const wellClass = {
  gray: styles.gray,
  white: styles.whiteWell,
  translucent: styles.translucent,
  ink: styles.ink,
} as const;

export function IconCards({ title, compact = false, titleSize = "32", spaced = false, items }: IconCardsData) {
  return (
    <section className={styles.section}>
      {title ? <RichText as="h2" className="h2" value={title} /> : null}
      <Grid>
        {items.map((item) => (
          <GridItem key={item.title} span={item.span ?? 4} spanTablet={item.spanTablet} spanMobile={item.spanMobile ?? 12}>
            <article
              className={cx(styles.card, styles[item.theme ?? "white"], compact && styles.compact, spaced && styles.spaced)}
              style={{ "--card-min": item.minHeight ? `${item.minHeight}px` : "0px" } as CSSProperties}
            >
              <span className={cx(styles.well, wellClass[item.well ?? "gray"], item.iconTone === "lime" && styles.lime)}>
                <Icon name={item.icon as IconName} size={24} />
              </span>
              {compact ? (
                <h3 className={styles.compactTitle}>{item.title}</h3>
              ) : (
                <h3 className={cx(styles.title, titleSize === "36" && styles.title36)}>{item.title}</h3>
              )}
              {item.text ? <p className={cx("body", item.theme === "dark" ? styles.dim : "muted")}>{item.text}</p> : null}
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
