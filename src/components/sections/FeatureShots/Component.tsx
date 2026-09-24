import type { FeatureShotsData } from "./schema";
import styles from "./styles.module.css";

export function FeatureShots({ title, aside, rows }: FeatureShotsData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      {rows.map((row) => (
        <div key={row.title} className={row.flip ? styles.flip : styles.row}>
          <article className={styles.card}>
            <span className={styles.caption}>{row.caption}</span>
            <h3 className={styles.title}>{row.title}</h3>
            <p className={styles.text}>{row.text}</p>
            <ul>
              {row.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <div className={styles.shot} style={{ height: row.shotHeight }}>
            {row.shot}
          </div>
        </div>
      ))}
    </section>
  );
}
