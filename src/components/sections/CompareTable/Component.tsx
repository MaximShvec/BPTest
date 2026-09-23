"use client";

import { CheckIcon } from "@/components/icons/check";
import { MinusIcon } from "@/components/icons/minus";
import { Tabs } from "@/components/ui/Tabs";
import { cx } from "@/lib/cx";
import type { CompareCell, CompareTableData } from "./schema";
import styles from "./styles.module.css";

function Cell({ value }: { value: CompareCell }) {
  if (typeof value === "boolean") {
    return value ? <CheckIcon /> : <MinusIcon />;
  }
  if (typeof value === "string") return <span className={styles.plain}>{value}</span>;
  return <span className={cx(styles.plain, value.emphasis && styles.emphasis, value.tone === "lime" && styles.lime)}>{value.text}</span>;
}

export function CompareTable({ id, title, headerLabel, columns, rows }: CompareTableData) {
  return (
    <section id={id} className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.table}>
        <div className={styles.head}>
          <span className={styles.headLabel}>{headerLabel}</span>
          {columns.map((column) => (
            <span key={column} className={styles.headCell}>
              {column}
            </span>
          ))}
        </div>
        {rows.map((row, index) => (
          <div key={row.label} className={index === rows.length - 1 ? styles.rowLast : styles.row}>
            <span className={styles.label}>{row.label}</span>
            {row.values.map((value, valueIndex) => (
              <span key={`${row.label}-${columns[valueIndex] ?? valueIndex}`} className={styles.cell}>
                <Cell value={value} />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.tabs}>
        <Tabs
          items={columns.map((column, columnIndex) => ({
            id: column,
            label: column,
            content: (
              <div className={styles.list}>
                {rows.map((row, index) => (
                  <div key={row.label} className={index === rows.length - 1 ? styles.pairLast : styles.pair}>
                    <span className={styles.label}>{row.label}</span>
                    <span className={styles.cell}>
                      <Cell value={row.values[columnIndex]} />
                    </span>
                  </div>
                ))}
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
