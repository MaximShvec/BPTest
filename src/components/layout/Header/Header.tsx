"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LogoIcon } from "@/components/icons/logo";
import type { Common } from "@/schemas/common";
import type { Nav } from "@/schemas/nav";
import { cx } from "@/lib/cx";
import { LangSwitcher } from "./LangSwitcher";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

const LANG_ID = "__lang";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  const path = href.split("#")[0] ?? href;
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Header({ nav, common }: { nav: Nav; common: Common }) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const handles = useRef<Record<string, HTMLButtonElement | HTMLAnchorElement | null>>({});
  const [openId, setOpenId] = useState<string | null>(null);
  const [openPath, setOpenPath] = useState(pathname);
  const [canHover, setCanHover] = useState(true);
  const [locale, setLocale] = useState(nav.header.languages.find((language) => language.active)?.code ?? "ru");

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpenId(null);
  }

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenId(null);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenId((current) => {
        if (current) handles.current[current]?.focus();
        return null;
      });
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function onBlur(event: FocusEvent<HTMLElement>) {
    const next = event.relatedTarget;
    if (next instanceof Node && event.currentTarget.contains(next)) return;
    setOpenId(null);
  }

  return (
    <header ref={headerRef} className={styles.header} onBlur={onBlur}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={common.brand.name}>
          <LogoIcon />
          <span className={styles.wordmark} aria-hidden="true" />
        </Link>

        <nav className={styles.nav}>
          {nav.header.items.map((item) => {
            const active = isActive(item.href, pathname);
            const open = openId === item.href;
            const trigger = item.trigger ?? "link";
            return (
              <div
                key={item.href}
                className={cx(styles.item, open && styles.open)}
                onMouseOver={() => {
                  if (canHover && item.dropdown) setOpenId(item.href);
                }}
                onMouseOut={(event) => {
                  if (!canHover || !item.dropdown) return;
                  const next = event.relatedTarget;
                  if (next instanceof Node && event.currentTarget.contains(next)) return;
                  setOpenId((current) => (current === item.href ? null : current));
                }}
              >
                {trigger === "button" ? (
                  <button
                    ref={(node) => {
                      handles.current[item.href] = node;
                    }}
                    type="button"
                    className={cx(styles.handle, active && styles.handleActive)}
                    aria-expanded={item.dropdown ? open : undefined}
                    aria-haspopup={item.dropdown ? "true" : undefined}
                    onClick={() => setOpenId((current) => (current === item.href ? null : item.href))}
                  >
                    {item.label}
                    {item.dropdown ? <Icon name="chevron-down" size={10} className={styles.arrow} /> : null}
                  </button>
                ) : (
                  <Link
                    ref={(node) => {
                      handles.current[item.href] = node;
                    }}
                    href={item.href}
                    className={cx(styles.handle, active && styles.handleActive)}
                    aria-expanded={item.dropdown ? open : undefined}
                    aria-haspopup={item.dropdown ? "true" : undefined}
                    onClick={(event) => {
                      if (!item.dropdown || canHover) return;
                      if (openId !== item.href) {
                        event.preventDefault();
                        setOpenId(item.href);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown ? (
                  <NavDropdown
                    dropdown={item.dropdown}
                    alignEnd={item.href === nav.header.items[nav.header.items.length - 1]?.href}
                  />
                ) : null}
              </div>
            );
          })}
        </nav>

        <LangSwitcher
          languages={nav.header.languages}
          open={openId === LANG_ID}
          current={locale}
          canHover={canHover}
          onOpen={() => setOpenId(LANG_ID)}
          onClose={() => setOpenId((current) => (current === LANG_ID ? null : current))}
          onToggle={() => setOpenId((current) => (current === LANG_ID ? null : LANG_ID))}
          onSelect={(code) => {
            setLocale(code);
            setOpenId(null);
          }}
          buttonRef={(node) => {
            handles.current[LANG_ID] = node;
          }}
        />

        <div className={styles.actions}>
          <Button className={styles.login} href={nav.header.actions.login.href} variant="dark" size="md">
            {nav.header.actions.login.label}
          </Button>
          <Button className={styles.signup} href={nav.header.actions.signup.href} variant="primary" size="md">
            {nav.header.actions.signup.label}
          </Button>
        </div>

        <MobileMenu nav={nav} />
      </div>
    </header>
  );
}
