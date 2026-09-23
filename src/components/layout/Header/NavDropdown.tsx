import Link from "next/link";
import type { CSSProperties } from "react";
import type { NavDropdown as DropdownData } from "@/schemas/nav";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

export function NavDropdown({ dropdown, alignEnd = false }: { dropdown: DropdownData; alignEnd?: boolean }) {
  const panel = dropdown.panel ?? (dropdown.columns.length > 1 || dropdown.promo ? "wide" : "simple");
  const columns = { "--cols": dropdown.columns.length } as CSSProperties;

  return (
    <div className={cx(styles.drop, panel === "simple" ? styles.simple : styles.wide, alignEnd && styles.alignEnd)}>
      <div className={styles.cols} style={columns}>
        {dropdown.columns.map((column, index) => (
          <dl key={column[0]?.href ?? index}>
            {dropdown.caption ? <dt>{index === 0 ? dropdown.caption : "\u00a0"}</dt> : null}
            {column.map((link) => (
              <dd key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </dd>
            ))}
          </dl>
        ))}
      </div>
      {dropdown.promo ? (
        <div className={styles.extra}>
          <div className={styles.promo}>
            <Link href={dropdown.promo.href} aria-label={dropdown.promo.title} />
            {dropdown.promo.icon ? (
              // Promo marks are source SVGs at fixed pixel sizes.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={dropdown.promo.icon}
                alt=""
                width={dropdown.promo.iconWidth ?? 44}
                height={dropdown.promo.iconHeight ?? 44}
              />
            ) : null}
            <div>
              <b>{dropdown.promo.title}</b>
              <small>{dropdown.promo.subtitle}</small>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
