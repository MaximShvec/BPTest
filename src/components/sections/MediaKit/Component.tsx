import { Button } from "@/components/ui/Button";
import type { MediaKitData } from "./schema";
import styles from "./styles.module.css";

export function MediaKit({ title, text, action, files }: MediaKitData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <Button href={action.href} variant={action.variant ?? "outline-dark"} size={action.size ?? "lg"}>
          {action.label}
        </Button>
      </div>
      <div className={styles.files}>
        {files.map((file) => (
          <a key={file.label} href={file.href} className={styles.file}>
            {file.label}
          </a>
        ))}
      </div>
    </section>
  );
}
