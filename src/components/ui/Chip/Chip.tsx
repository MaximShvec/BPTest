import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Chip.module.css";

export function Chip({
  children,
  href,
  onClick,
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a className={cx(styles.chip, className)} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={cx(styles.chip, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cx(styles.chip, className)} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
