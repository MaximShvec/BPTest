import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { MediaRowData } from "./schema";
import styles from "./styles.module.css";

export function MediaRow({ items }: MediaRowData) {
  return (
    <Grid>
      {items.map((item) => {
        const key = "placeholder" in item.media ? item.media.placeholder : String(item.span);
        return (
          <GridItem key={key} span={item.span} spanTablet={item.spanTablet ?? 12} spanMobile={item.spanMobile ?? 12}>
            <Media
              className={cx(styles.shot, item.surface === "blue" && styles.blue)}
              media={item.media}
              radius={32}
              borderColor={item.borderColor}
              labelStyle="body"
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
