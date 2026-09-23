import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { CSSProperties } from "react";
import type { InfoCardsData } from "./schema";
import styles from "./styles.module.css";

const shell = {
  plain: styles.plain,
  dark: styles.dark,
  black: styles.black,
};

const padClass = {
  none: undefined,
  "32": styles.pad32,
  "64": styles.pad64,
};

const gapClass = {
  "24": styles.gap24,
  "32": styles.gap32,
  "40": styles.gap40,
};

const cardTheme = {
  white: styles.cardWhite,
  dark: styles.cardDark,
  ink: styles.cardInk,
};

export function InfoCards({
  id,
  theme = "plain",
  pad = "none",
  gap = "24",
  layout = "head",
  caption,
  captionTone = "muted",
  title,
  titleMax = 860,
  aside,
  asideTone = "gray",
  cardGap = "12",
  cards,
  actions,
}: InfoCardsData) {
  const titleStyle = { maxWidth: titleMax } as CSSProperties;
  const captionNode = caption ? <span className={cx("caption", captionTone === "lime" ? styles.lime : styles.mutedCaption)}>{caption}</span> : null;
  const titleNode = title ? (
    <h2 className={`h2 ${styles.title}`} style={titleStyle}>
      {title}
    </h2>
  ) : null;

  return (
    <section id={id} className={cx(styles.root, shell[theme], padClass[pad], gapClass[gap])}>
      {layout === "stack" ? (
        <>
          {captionNode}
          {titleNode}
        </>
      ) : (
        <div className={styles.head}>
          <div className={layout === "stacked-head" ? styles.headingCol : undefined}>
            {captionNode}
            {titleNode}
          </div>
          {aside ? <p className={asideTone === "muted" ? styles.asideMuted : styles.aside}>{aside}</p> : null}
        </div>
      )}
      <Grid>
        {cards.map((card) => (
          <GridItem key={card.title ?? card.figure ?? card.caption} span={card.span ?? 4} spanTablet={card.spanTablet} spanMobile={card.spanMobile ?? 12}>
            <article className={cx(styles.card, cardGap === "8" ? styles.cardGap8 : styles.cardGap12, cardTheme[card.theme])}>
              {card.caption ? <span className="caption">{card.caption}</span> : null}
              {card.figure ? <span className={cx(styles.figure, card.figureTone === "lime" && styles.figureLime)}>{card.figure}</span> : null}
              {card.title ? <h3 className={styles.cardTitle}>{card.title}</h3> : null}
              {card.text ? <p className={styles.text}>{card.text}</p> : null}
            </article>
          </GridItem>
        ))}
      </Grid>
      {actions?.length ? (
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "lg"} ring={action.ring}>
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
