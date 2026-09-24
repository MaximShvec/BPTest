import { cx } from "@/lib/cx";
import type { CSSProperties } from "react";
import type { IoColumnsData } from "./schema";
import styles from "./styles.module.css";

export function IoColumns({ title, aside, columns }: IoColumnsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <div className={styles.grid}>
        {columns.map((column) => (
          <div key={column.caption} className={styles.column}>
            <article className={styles.card}>
              <span className={styles.caption}>{column.caption}</span>
              <h3 className={styles.title}>{column.title}</h3>
              <p className={styles.text}>{column.text}</p>
              <ul>
                {column.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <div className={cx(styles.shot, column.shotTone === "blue" && styles.blue)} style={{ "--h": `${column.shotHeight}px` } as CSSProperties}>
              {column.shot}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
