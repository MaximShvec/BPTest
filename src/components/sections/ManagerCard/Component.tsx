import { Card } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import type { ManagerCardData } from "./schema";
import styles from "./styles.module.css";

export function ManagerCard({ caption, name, role, text, avatar }: ManagerCardData) {
  return (
    <Card theme="dark" padding="none" className={styles.card}>
      <span className={styles.caption}>{caption}</span>
      <div className={styles.person}>
        <Media className={styles.avatar} media={avatar} width={72} height={72} radius="50%" borderColor="#646464" />
        <span className={styles.meta}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </span>
      </div>
      <p className={styles.text}>{text}</p>
    </Card>
  );
}
