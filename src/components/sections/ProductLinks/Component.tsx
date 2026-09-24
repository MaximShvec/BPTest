import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { ProductLinksData } from "./schema";
import styles from "./styles.module.css";

export function ProductLinks({ items }: ProductLinksData) {
  return (
    <section className={styles.section}>
      {items.map((item) => (
        <article key={item.title} className={cx(styles.card, item.theme === "ink" ? styles.ink : styles.blue)}>
          <span className={styles.caption}>{item.caption}</span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
          <Button href={item.action.href} variant={item.action.variant ?? "dark"} size={item.action.size ?? "lg"} className={item.theme === "blue" ? styles.inkButton : undefined}>
            {item.action.label}
          </Button>
        </article>
      ))}
    </section>
  );
}
