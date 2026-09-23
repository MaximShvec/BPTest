import type { Metadata } from "next";
import { renderSections } from "@/components/sections/renderSections";
import { Container } from "@/components/ui/Container";
import { getPage } from "@/lib/content";
import styles from "../page.module.css";

export function generateMetadata(): Metadata {
  const page = getPage("personal");
  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default function PersonalPage() {
  const page = getPage("personal");
  return (
    <Container>
      <div className={styles.stack}>{renderSections(page.sections)}</div>
    </Container>
  );
}
