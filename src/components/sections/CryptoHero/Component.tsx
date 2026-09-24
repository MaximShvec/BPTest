import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { CryptoHeroData } from "./schema";
import styles from "./styles.module.css";

export function CryptoHero({ caption, title, lead, actions, stats, panelCaption, panelAside, wallets, tools }: CryptoHeroData) {
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
      <div className={styles.panel}>
        <div className={styles.panelHead}>
          <span>{panelCaption}</span>
          <span className={styles.panelAside}>{panelAside}</span>
        </div>
        {wallets.map((wallet) => (
          <div key={wallet.ticker} className={cx(styles.wallet, wallet.theme === "ink" && styles.ink)}>
            <div>
              <span className={styles.ticker}>{wallet.ticker}</span>
              <span className={styles.networks}>{wallet.networks}</span>
            </div>
            <div className={styles.amounts}>
              <span className={styles.balance}>{wallet.balance}</span>
              <span className={styles.fiat}>{wallet.fiat}</span>
            </div>
          </div>
        ))}
        <div className={styles.tools}>
          {tools.map((tool, index) => (
            <span key={tool} className={index === 0 ? styles.toolOn : styles.tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
