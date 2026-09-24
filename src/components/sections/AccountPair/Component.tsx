import { Button } from "@/components/ui/Button";
import type { AccountPairData } from "./schema";
import styles from "./styles.module.css";

export function AccountPair({ caption, title, text, action, cards }: AccountPairData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className="h2">{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button href={action.href} variant={action.variant ?? "dark"} size={action.size ?? "lg"} className={styles.button}>
          {action.label}
        </Button>
      </div>
      {cards.map((card) => (
        <article key={card.caption} className={styles.card}>
          <span className={styles.cardCaption}>{card.caption}</span>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <ul>
            {card.points.map((point, index) => (
              <li key={point} className={index === card.points.length - 1 ? styles.last : undefined}>
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
