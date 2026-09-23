import type { PlaceholderSectionData } from "./schema";
import { Section } from "@/components/ui/Section";
import styles from "./styles.module.css";

export function PlaceholderSection({ title, id, theme }: PlaceholderSectionData) {
  return (
    <Section id={id} theme={theme ?? "none"}>
      <h2 className={`h2 ${styles.placeholder}`}>{title}</h2>
    </Section>
  );
}
