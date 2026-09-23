import type { CSSProperties } from "react";
import type { WideMediaData } from "./schema";
import styles from "./styles.module.css";

export function WideMedia({ label, ratio = "21 / 9" }: WideMediaData) {
  return (
    <section>
      <div className={styles.shot} style={{ "--shot-ratio": ratio } as CSSProperties}>
        <span>{label}</span>
      </div>
    </section>
  );
}
