import { Button } from "@/components/ui/Button";
import type { InvoiceHeroData } from "./schema";
import styles from "./styles.module.css";

export function InvoiceHero({ caption, title, lead, actions, stats, invoiceCaption, invoiceTitle, badge, rows, linkLabel, qr, shot }: InvoiceHeroData) {
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
            <div>
              <span className={styles.cardCaption}>{invoiceCaption}</span>
              <span className={styles.cardTitle}>{invoiceTitle}</span>
            </div>
            <span className={styles.badge}>{badge}</span>
          </div>
          <div>
            {rows.map((row, index) => (
              <div key={row.label} className={index === rows.length - 1 ? styles.rowLast : styles.row}>
                <span>{row.label}</span>
                <span className={styles.rowValue}>{row.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.tools}>
            <span className={styles.link}>{linkLabel}</span>
            <span className={styles.qr}>{qr}</span>
          </div>
        </div>
        <div className={styles.shot}>{shot}</div>
      </div>
    </section>
  );
}
