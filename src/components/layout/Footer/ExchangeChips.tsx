"use client";

import Link from "next/link";
import { useState } from "react";
import type { Nav } from "@/schemas/nav";
import { cx } from "@/lib/cx";
import styles from "./Footer.module.css";

function chipHref(pattern: string, side: "buy" | "sell", asset: string) {
  return pattern.replaceAll("{side}", side).replaceAll("{asset}", asset);
}

export function ExchangeChips({ exchange }: { exchange: Nav["footer"]["exchange"] }) {
  const [tab, setTab] = useState(exchange.tabs[0] ?? "USD");

  return (
    <div className={styles.exchange}>
      <div className={styles.tabs} role="tablist">
        {exchange.tabs.map((item) => {
          const selected = item === tab;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              className={cx(styles.tab, selected && styles.tabActive)}
              aria-selected={selected}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className={styles.line} />
      <div className={styles.chipGrid}>
        <div className={styles.chips}>
          {exchange.assets.map((asset) => (
            <Link key={`buy-${asset}`} href={chipHref(exchange.hrefPattern, "buy", asset)} className={styles.chip}>
              {exchange.buyLabel} {asset}
            </Link>
          ))}
        </div>
        <div className={styles.chips}>
          {exchange.assets.map((asset) => (
            <Link key={`sell-${asset}`} href={chipHref(exchange.hrefPattern, "sell", asset)} className={styles.chip}>
              {exchange.sellLabel} {asset}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
