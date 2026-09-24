import type { FeatureRowsData } from "./schema";
import styles from "./styles.module.css";

export function FeatureRows({ title, aside, rows }: FeatureRowsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      {rows.map((row) => (
        <div key={row.caption} className={styles.row}>
          <span className={styles.caption}>{row.caption}</span>
          <h3 className={styles.title}>{row.title}</h3>
          <p className={styles.text}>{row.text}</p>
          <ul>
            {row.points.map((point, index) => (
              <li key={point} className={index === row.points.length - 1 ? styles.last : undefined}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
