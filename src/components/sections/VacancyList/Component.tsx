"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import type { VacancyListData } from "./schema";
import styles from "./styles.module.css";

export function VacancyList({ id, caption, title, aside, filters, columns, items }: VacancyListData) {
  const [filter, setFilter] = useState(filters[0].id);
  const visible = items.filter((item) => item.groups.includes(filter));

  return (
    <section id={id} className={styles.root}>
      <div className={styles.head}>
        <div className={styles.heading}>
          <span className="caption">{caption}</span>
          <h2 className="h2">{title}</h2>
        </div>
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
          <span className={styles.role}>{columns.role}</span>
          <span className={styles.team}>{columns.team}</span>
          <span className={styles.place}>{columns.location}</span>
          <span className={styles.format}>{columns.employment}</span>
          <span className={styles.arrowSpace} />
        </div>
        {visible.map((item) => (
          <Link key={item.slug} className={styles.row} href={`/careers/${item.slug}`}>
            <span className={styles.roleTitle}>{item.title}</span>
            <span className={styles.team}>{item.team}</span>
            <span className={styles.place}>{item.location}</span>
            <span className={styles.format}>{item.employment}</span>
            <ArrowRightIcon width={24} height={24} />
          </Link>
        ))}
      </div>
      <div className={styles.cards}>
        {visible.map((item) => (
          <Link key={item.slug} className={styles.card} href={`/careers/${item.slug}`}>
            <span className={styles.roleTitle}>{item.title}</span>
            <span className={styles.meta}>
              {item.team} · {item.location} · {item.employment}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
