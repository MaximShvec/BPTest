import { Card } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import type { TestimonialData } from "./schema";
import styles from "./styles.module.css";

export function Testimonial({ theme = "dark", caption, quote, name, role, media, photoSize = 200 }: TestimonialData) {
  return (
    <Card theme={theme} padding="none" className={styles.card}>
      {media ? <Media className={styles.photo} media={media} width={photoSize} height={photoSize} radius={24} borderColor="#646464" /> : null}
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
