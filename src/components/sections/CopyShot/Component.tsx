import type { CopyShotData } from "./schema";
import styles from "./styles.module.css";

export function CopyShot({ caption, title, points, shot }: CopyShotData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <ul>
          {points.map((point, index) => (
            <li key={point} className={index === points.length - 1 ? styles.last : undefined}>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.shot}>{shot}</div>
    </section>
  );
}
