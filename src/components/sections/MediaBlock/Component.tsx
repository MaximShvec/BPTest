import { PlayIcon } from "@/components/icons/play";
import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { MediaBlockData } from "./schema";
import styles from "./styles.module.css";

export function MediaBlock({ theme = "white", caption, title, text, action, media }: MediaBlockData) {
  const dark = theme === "dark";
  return (
    <Grid>
      <GridItem span={5} spanTablet={12} spanMobile={12}>
        <div className={cx(styles.copy, dark && styles.dark)}>
          <span className="caption">{caption}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={cx(styles.text, dark && styles.dim)}>{text}</p>
          <Button href={action.href} variant={action.variant ?? "outline"} size={action.size ?? "lg"} ring={action.ring} className={styles.action}>
            {action.label}
          </Button>
        </div>
      </GridItem>
      <GridItem span={7} spanTablet={12} spanMobile={12}>
        <div className={styles.shot}>
          <PlayIcon width={56} height={56} />
          <span>{"placeholder" in media ? media.placeholder : null}</span>
        </div>
      </GridItem>
    </Grid>
  );
}
