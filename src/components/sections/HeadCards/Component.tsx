import type { CSSProperties } from "react";
import type { HeadCardsData } from "./schema";
import styles from "./styles.module.css";

export function HeadCards({ id, title, aside, pad = 28, gap = 12, items }: HeadCardsData) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <h2 className="h2">{title}</h2>
        <p className={styles.aside}>{aside}</p>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card} style={{ "--span": item.span ?? 4, "--pad": `${pad}px`, "--gap": `${gap}px` } as CSSProperties}>
            {item.index ? <span className={styles.index}>{item.index}</span> : null}
            {item.caption ? <span className={styles.caption}>{item.caption}</span> : null}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
