import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { SpecMediaData } from "./schema";
import styles from "./styles.module.css";

export function SpecMedia({ label, caption, title, text, rows, copyFirst = false, theme = "dark", copySpan = 5, mediaSpan = 7, shot = "plain" }: SpecMediaData) {
  const media = (
    <GridItem span={mediaSpan} spanTablet={12} spanMobile={12}>
      <div className={cx(styles.shot, shot === "roomy" && styles.shotRoomy)}>
        <span>{label}</span>
      </div>
    </GridItem>
  );
  const copy = (
    <GridItem span={copySpan} spanTablet={12} spanMobile={12}>
      <div className={cx(styles.aside, theme === "white" && styles.light)}>
        <span className="caption">{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.specs}>
          {rows.map((row, index) => (
            <div key={row.label} className={index === rows.length - 1 ? styles.rowLast : styles.row}>
              <span>{row.label}</span>
              <span className={cx(row.tone === "muted" && styles.muted, (row.tone === "emphasis" || row.tone === "lime") && styles.emphasis, row.tone === "lime" && styles.lime)}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GridItem>
  );

  return (
    <section>
      <Grid>{copyFirst ? <>{copy}{media}</> : <>{media}{copy}</>}</Grid>
    </section>
  );
}
