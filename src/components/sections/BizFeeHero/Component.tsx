import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { BizFeeHeroData } from "./schema";
import styles from "./styles.module.css";

export function BizFeeHero({ caption, title, lead, actions, tiles }: BizFeeHeroData) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.kicker}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.caption}>{caption}</span>
        </div>
        <h1 className="h1">{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "xl-text"}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.tiles}>
        {tiles.map((tile) => (
          <article key={tile.caption} className={cx(styles.tile, styles[tile.tone])}>
            <span className={styles.tileCaption}>{tile.caption}</span>
            <span className={styles.tileValue}>{tile.value}</span>
            <span className={styles.tileNote}>{tile.note}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
