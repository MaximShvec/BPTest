import { Card } from "@/components/ui/Card";
import { cx } from "@/lib/cx";
import { Media } from "@/components/ui/Media";
import type { TestimonialData } from "./schema";
import styles from "./styles.module.css";

export function Testimonial({ theme = "dark", caption, quote, name, role, media, photoSize = 200 }: TestimonialData) {
  return (
    <Card theme={theme} padding="none" className={cx(styles.card, theme !== "dark" && theme !== "black" && styles.ink)}>
      {media ? <Media className={styles.photo} media={media} width={photoSize} height={photoSize} radius={24} borderColor={theme === "blue" ? "#939393" : "#646464"} /> : null}
      <div className={styles.body}>
        <span className="caption">{caption}</span>
        <p className={styles.quote}>{quote}</p>
        <div className={styles.author}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </Card>
  );
}
