import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { FlowStepsData } from "./schema";
import styles from "./styles.module.css";

export function FlowSteps({ caption, title, aside, steps, media }: FlowStepsData) {
  return (
    <section className={styles.root}>
      <Grid className={styles.head}>
        <GridItem span={8} spanTablet={12} spanMobile={12}>
          <div className={styles.intro}>
            <span className={styles.caption}>{caption}</span>
            <h2 className="h2">{title}</h2>
          </div>
        </GridItem>
        <GridItem span={4} spanTablet={12} spanMobile={12}>
          <p className={styles.aside}>{aside}</p>
        </GridItem>
      </Grid>
      <Grid>
        {steps.map((step, index) => (
          <GridItem key={step.index} span={3} spanTablet={6} spanMobile={12}>
            <article className={styles.step} data-join={index < steps.length - 1 ? "" : undefined}>
              {index < steps.length - 1 ? (
                <span className={cx(styles.line, index % 2 === 1 && styles.tabletEnd)} aria-hidden="true" />
              ) : null}
              <span className={styles.num}>{step.index}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </article>
          </GridItem>
        ))}
      </Grid>
      <Grid>
        {media.map((item) => (
          <GridItem key={"placeholder" in item.media ? item.media.placeholder : item.span} span={item.span} spanTablet={item.spanTablet ?? 12} spanMobile={item.spanMobile ?? 12}>
            <Media className={styles.shot} media={item.media} radius={32} labelStyle="body" />
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
