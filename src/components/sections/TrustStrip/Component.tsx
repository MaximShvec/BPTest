import { Card } from "@/components/ui/Card";
import type { TrustStripData } from "./schema";
import styles from "./styles.module.css";

export function TrustStrip({ title, metrics, licenses }: TrustStripData) {
  return (
    <Card theme="white" padding="none" className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <span className={styles.value}>{metric.value}</span>
              <span className="caption">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <ul className={styles.row}>
        {licenses.map((label, index) => (
          <li key={label} className={index === 0 ? styles.first : index === licenses.length - 1 ? styles.last : undefined}>
            {label}
          </li>
        ))}
      </ul>
    </Card>
  );
}
