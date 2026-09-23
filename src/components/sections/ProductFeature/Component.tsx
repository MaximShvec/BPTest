import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { ProductFeatureData } from "./schema";
import styles from "./styles.module.css";

const themeClass = {
  white: styles.white,
  black: styles.black,
  blue: styles.blue,
} as const;

const borderColor = {
  white: "#939393",
  black: "#646464",
  blue: "#b6c1c6",
} as const;

export function ProductFeature({ id, reverse = false, theme, caption, title, text, rows, button, media }: ProductFeatureData) {
  const copy = (
    <GridItem key="copy" span={5} spanTablet={12} spanMobile={12}>
      <div className={cx(styles.copy, themeClass[theme])}>
        <span className={styles.caption}>{caption}</span>
        <h2 className="h2">{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.rows}>
          {rows.map((row, index) => (
            <div key={row.label} className={index === rows.length - 1 ? styles.rowLast : styles.row}>
              <span className={styles.label}>{row.label}</span>
              <span className={cx(styles.value, row.emphasis && styles.emphasis, row.tone === "lime" && styles.lime)}>{row.value}</span>
            </div>
          ))}
        </div>
        <Button href={button.href} variant={button.variant ?? "primary"} size={button.size ?? "lg"} className={styles.button}>
          {button.label}
        </Button>
      </div>
    </GridItem>
  );

  const shotMedia = "placeholder" in media && !media.ratio ? { ...media, ratio: "auto" } : media;
  const shot = (
    <GridItem key="media" className={styles.mediaSlot} span={7} spanTablet={12} spanMobile={12}>
      <Media className={cx(styles.media, themeClass[theme])} media={shotMedia} radius={32} borderColor={borderColor[theme]} labelStyle="body" />
    </GridItem>
  );

  return (
    <section id={id}>
      <Grid>{reverse ? [shot, copy] : [copy, shot]}</Grid>
    </section>
  );
}
