import type { BeforeAfterData } from "./schema";
import styles from "./styles.module.css";

function Column({ caption, items, tone }: { caption: string; items: string[]; tone: "before" | "after" }) {
  return (
    <div className={tone === "after" ? styles.after : styles.before}>
      <span className={styles.caption}>{caption}</span>
      {items.map((item, index) => (
        <p key={item} className={index === items.length - 1 ? styles.last : styles.item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export function BeforeAfter({ title, text, photo, beforeCaption, before, afterCaption, after }: BeforeAfterData) {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 className="h2">{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.photo}>{photo}</div>
      </div>
      <Column caption={beforeCaption} items={before} tone="before" />
      <Column caption={afterCaption} items={after} tone="after" />
    </section>
  );
}
