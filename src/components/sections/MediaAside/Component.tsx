import { PlayIcon } from "@/components/icons/play";
import { Grid, GridItem } from "@/components/ui/Grid";
import type { MediaAsideData } from "./schema";
import styles from "./styles.module.css";

export function MediaAside({ id, media, icon, title, text, chips }: MediaAsideData) {
  const label = "placeholder" in media ? media.placeholder : "";
  return (
    <section id={id}>
      <Grid>
        <GridItem span={8} spanTablet={12} spanMobile={12}>
          <div className={styles.media}>
            {icon === "play" ? <PlayIcon className={styles.play} width={56} height={56} /> : null}
            <span>{label}</span>
          </div>
        </GridItem>
        <GridItem span={4} spanTablet={12} spanMobile={12}>
          <aside className={styles.aside}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <div className={styles.chips}>
              {chips.map((chip) => (
                <span key={chip} className={styles.chip}>
                  {chip}
                </span>
              ))}
            </div>
          </aside>
        </GridItem>
      </Grid>
    </section>
  );
}
