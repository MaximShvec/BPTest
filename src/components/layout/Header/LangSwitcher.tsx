"use client";

import { Icon } from "@/components/ui/Icon";
import type { NavLanguage } from "@/schemas/nav";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

export function LangSwitcher({
  languages,
  open,
  current,
  canHover,
  onOpen,
  onClose,
  onToggle,
  onSelect,
  buttonRef,
  inline = false,
}: {
  languages: NavLanguage[];
  open: boolean;
  current: string;
  canHover: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onSelect: (code: string) => void;
  buttonRef: (node: HTMLButtonElement | null) => void;
  inline?: boolean;
}) {
  const currentLabel = languages.find((language) => language.code === current)?.label ?? current;

  return (
    <div
      className={cx(styles.item, styles.lang, inline && styles.langInline, open && styles.open)}
      onMouseOver={() => {
        if (canHover) onOpen();
      }}
      onMouseOut={(event) => {
        if (!canHover) return;
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        onClose();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.handle}
        aria-label="Язык"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
      >
        <Icon name="globe" size={24} className={styles.globe} />
        <span className={styles.langLabel}>{currentLabel}</span>
        <Icon name="chevron-down" size={10} className={styles.arrow} />
      </button>
      <div className={cx(styles.drop, styles.langPanel)}>
        <div className={styles.langGrid}>
          {languages.map((language) => (
            <div key={language.code} data-locale={language.code} className={language.code === current ? styles.current : undefined}>
              {/* TODO: смена локали. Сейчас только выделение, как в header.js. */}
              <a
                href={`#lang-${language.code}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(language.code);
                }}
              >
                {language.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
