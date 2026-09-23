import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Checkbox.module.css";

export function Checkbox({
  label,
  ...input
}: { label: ReactNode } & Omit<InputHTMLAttributes<HTMLInputElement>, "type">) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...input} />
      <span>{label}</span>
    </label>
  );
}
