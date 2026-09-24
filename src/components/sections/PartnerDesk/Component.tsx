import { Media } from "@/components/ui/Media";
import { cx } from "@/lib/cx";
import type { PartnerDeskData } from "./schema";
import styles from "./styles.module.css";

export function PartnerDesk({ media, caption, title, text, rows }: PartnerDeskData) {
  return (
    <section className={styles.section}>
      <div className={styles.shot}>
        {"video" in media ? (
          <Media media={media} radius={32} />
        ) : (
          <>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none" />
            </svg>
            <span>{"placeholder" in media ? media.placeholder : ""}</span>
          </>
        )}
      </div>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.rows}>
          {rows.map((row, index) => (
            <div key={row.label} className={index === rows.length - 1 ? styles.rowLast : styles.row}>
              <span>{row.label}</span>
              <span className={cx(row.emphasis ? styles.strong : styles.value)}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
