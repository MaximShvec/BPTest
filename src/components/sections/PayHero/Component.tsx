import { Button } from "@/components/ui/Button";
import type { PayHeroData } from "./schema";
import styles from "./styles.module.css";

export function PayHero({ caption, title, lead, actions, stats, card, receipt, photo }: PayHeroData) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.kicker}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.caption}>{caption}</span>
        </div>
        <h1 className={`h1 ${styles.title}`}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant ?? "dark"}
              size={action.size ?? "xl-text"}
              className={action.variant === "outline" ? styles.outline : styles.ink}
            >
              {action.label}
            </Button>
          ))}
        </div>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.aside}>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.cardCaption}>{card.caption}</span>
            <span className={styles.badge}>{card.badge}</span>
          </div>
          <div>
            {card.rows.map((row, index) => (
              <div key={row.label} className={index === card.rows.length - 1 ? styles.rowLast : styles.row}>
                <span>{row.label}</span>
                <span className={styles.rowValue}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.receipt}>
          <div>
            <span className={styles.receiptCaption}>{receipt.caption}</span>
            <span className={styles.amount}>{receipt.amount}</span>
          </div>
          <span className={styles.receiptNote}>{receipt.note}</span>
        </div>
        <div className={styles.photo}>{photo}</div>
      </div>
    </section>
  );
}
