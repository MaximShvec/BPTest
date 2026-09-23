"use client";

import Link from "next/link";
import { useState } from "react";
import { cx } from "@/lib/cx";
import type { RatesTableData } from "./schema";
import styles from "./styles.module.css";

export function RatesTable({ id, title, aside, filters, columns, actionLabel, rows, note }: RatesTableData) {
  const [filter, setFilter] = useState(filters[0].id);
  const visible = rows.filter((row) => row.groups.includes(filter));

  return (
    <section id={id} className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.aside}>{aside}</span>
      </div>
      <div className={styles.filters} role="group">
        {filters.map((item) => {
          const selected = item.id === filter;
          return (
            <button key={item.id} type="button" className={selected ? styles.filterOn : styles.filter} aria-pressed={selected} onClick={() => setFilter(item.id)}>
              {item.label}
            </button>
          );
        })}
      </div>
      <div className={styles.table}>
        <div className={styles.columns}>
          <span className={styles.pair}>{columns.pair}</span>
          <span className={styles.name}>{columns.asset}</span>
          <span className={cx(styles.rate, styles.end)}>{columns.rate}</span>
          <span className={cx(styles.change, styles.end)}>{columns.change}</span>
          <span className={styles.actionSpace} />
        </div>
        {visible.map((row, index) => (
          <div key={row.pair} className={index === visible.length - 1 ? styles.rowLast : styles.row}>
            <span className={cx(styles.pair, styles.figure)}>{row.pair}</span>
            <span className={cx(styles.name, styles.asset)}>{row.name}</span>
            <span className={cx(styles.rate, styles.figure, styles.end)}>{row.rate}</span>
            <span className={cx(styles.change, styles.delta, styles.end)}>{row.change}</span>
            <Link className={styles.action} href={row.href}>
              {actionLabel}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.cards}>
        {visible.map((row) => (
          <article key={row.pair} className={styles.card}>
            <span className={styles.figure}>{row.pair}</span>
            <span className={styles.asset}>{row.name}</span>
            <span className={styles.figure}>{row.rate}</span>
            <span className={styles.delta}>{row.change}</span>
            <Link className={styles.action} href={row.href}>
              {actionLabel}
            </Link>
          </article>
        ))}
      </div>
      <p className={styles.note}>{note}</p>
    </section>
  );
}
