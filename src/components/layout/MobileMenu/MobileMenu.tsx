"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { Nav, NavItem } from "@/schemas/nav";
import { cx } from "@/lib/cx";
import headerStyles from "../Header/Header.module.css";
import styles from "./MobileMenu.module.css";

function isActive(href: string, pathname: string) {
  const path = href.split("#")[0] ?? href;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function MobileMenu({ nav }: { nav: Nav }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const [openPath, setOpenPath] = useState(pathname);
  const [locale, setLocale] = useState(nav.header.languages.find((language) => language.active)?.code ?? "ru");

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
    setSection(null);
  }

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1200px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={headerStyles.burger}
        aria-label="Меню"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      {open ? (
        <div className={styles.panel}>
          <div className={styles.list}>
            {nav.header.items.map((item) =>
              item.dropdown ? (
                <Section
                  key={item.href}
                  item={item}
                  open={section === item.href}
                  active={isActive(item.href, pathname)}
                  onToggle={() => setSection((current) => (current === item.href ? null : item.href))}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(styles.topLink, isActive(item.href, pathname) && styles.active)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <div className={styles.actions}>
            <Button href={nav.header.actions.login.href} variant="dark" size="lg" fullWidth>
              {nav.header.actions.login.label}
            </Button>
            <Button href={nav.header.actions.signup.href} variant="primary" size="lg" fullWidth>
              {nav.header.actions.signup.label}
            </Button>
          </div>
          <label className={styles.langs}>
            <span className="visually-hidden">Язык</span>
            {/* TODO: смена локали. Сейчас только выделение. */}
            <select value={locale} onChange={(event) => setLocale(event.target.value)}>
              {nav.header.languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}
    </>
  );
}

function Section({
  item,
  open,
  active,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  open: boolean;
  active: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div>
      <button type="button" className={cx(styles.trigger, active && styles.active)} aria-expanded={open} onClick={onToggle}>
        <span>{item.label}</span>
        <Icon name={open ? "minus" : "plus"} size={24} />
      </button>
      <div className={cx(styles.panelBody, open && styles.panelBodyOpen)}>
        <div className={styles.panelInner}>
          <div className={styles.sub}>
            {item.dropdown?.columns.flat().map((link) => (
              <Link key={link.href} href={link.href} onClick={onNavigate}>
                {link.label}
              </Link>
            ))}
            {item.dropdown?.promo ? (
              <Link href={item.dropdown.promo.href} className={styles.promo} onClick={onNavigate}>
                <b>{item.dropdown.promo.title}</b>
                <small>{item.dropdown.promo.subtitle}</small>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
