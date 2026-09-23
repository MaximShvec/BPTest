import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getCommon, getNav } from "@/lib/content";
import styles from "./layout.module.css";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const common = getCommon();
  const nav = getNav();

  return (
    <div className={styles.shell}>
      <Header nav={nav} common={common} />
      <main className={styles.main}>{children}</main>
      <Footer nav={nav} common={common} />
    </div>
  );
}
