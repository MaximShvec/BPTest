import { cx } from "@/lib/cx";
import { Card } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import type { TrustBlockData } from "./schema";
import styles from "./styles.module.css";

export function TrustBlock({ badge, title, metrics, note, licenses }: TrustBlockData) {
  return (
    <Card theme="white" className={styles.card}>
      <div className={styles.top}>
        <div className={styles.intro}>
          <Media className={styles.badge} media={badge} radius={8} width={158} height={40} borderColor="#e3e3e3" />
          <h3 className={`h3 ${styles.title}`}>{title}</h3>
        </div>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.value} className={cx(styles.metric, metric.compact && styles.compact)}>
              <span className={styles.value}>{metric.value}</span>
              <span className="caption">{metric.caption}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.licenses}>
        <p className="small muted">{note}</p>
        <ul className={styles.row}>
          {licenses.map((label) => (
            <li key={label} className={styles.license}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
