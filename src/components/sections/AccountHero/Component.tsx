import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { cx } from "@/lib/cx";
import type { AccountHeroData } from "./schema";
import styles from "./styles.module.css";

export function AccountHero({ caption, title, lead, chips, actions, media, balances, receipt }: AccountHeroData) {
  return (
    <Grid className={styles.root}>
      <GridItem span={7} spanTablet={12} spanMobile={12}>
        <div className={styles.copy}>
          <div className={styles.kicker}>
            <span className={styles.dot} />
            <span className="caption">{caption}</span>
          </div>
          <h1 className="h1">{title}</h1>
          <p className={styles.lead}>{lead}</p>
          <div className={styles.chips}>
            {chips.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            {actions.map((action) => (
              <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl-text"}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </GridItem>
      <GridItem span={5} spanTablet={12} spanMobile={12}>
        <div className={styles.side}>
          <div className={styles.shot}>{"placeholder" in media ? media.placeholder : null}</div>
          <div className={styles.balances}>
            {balances.map((item) => (
              <div key={item.label} className={cx(styles.balance, item.tone === "blue" && styles.blue)}>
                <span className={cx("caption", item.tone === "blue" && styles.blueLabel)}>{item.label}</span>
                <span className={styles.figure}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.receipt}>
            <div className={styles.receiptCopy}>
              <span className={styles.receiptCaption}>{receipt.caption}</span>
              <span className={styles.figure}>{receipt.amount}</span>
            </div>
            <span className={styles.receiptNote}>{receipt.note}</span>
          </div>
        </div>
      </GridItem>
    </Grid>
  );
}
