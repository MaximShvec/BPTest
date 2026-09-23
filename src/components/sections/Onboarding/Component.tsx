import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import type { OnboardingData } from "./schema";
import styles from "./styles.module.css";

export function Onboarding({ caption, title, steps, cta, quote }: OnboardingData) {
  return (
    <Grid>
      <GridItem span={7} spanTablet={12} spanMobile={12}>
        <section className={styles.main}>
          <span className={styles.caption}>{caption}</span>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.label} className={index === steps.length - 1 ? styles.rowLast : styles.row}>
                <span className={styles.label}>{step.label}</span>
                <span className={styles.value}>{step.value}</span>
              </div>
            ))}
          </div>
          <Button href={cta.href} variant={cta.variant ?? "primary"} size={cta.size ?? "lg"} className={styles.cta}>
            {cta.label}
          </Button>
        </section>
      </GridItem>
      <GridItem span={5} spanTablet={12} spanMobile={12}>
        <aside className={styles.quote}>
          <span className={styles.quoteCaption}>{quote.caption}</span>
          <p className={styles.quoteText}>{quote.text}</p>
          <div className={styles.author}>
            <Media className={styles.avatar} media={quote.media} width={56} height={56} radius="50%" borderColor="#b6c1c6" labelStyle="micro" />
            <span className={styles.person}>
              <span className={styles.name}>{quote.name}</span>
              <span className={styles.role}>{quote.role}</span>
            </span>
          </div>
        </aside>
      </GridItem>
    </Grid>
  );
}
