"use client";

import { useId, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./Tabs.module.css";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export function Tabs({
  items,
  value,
  defaultValue,
  onChange,
}: {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
}) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.id ?? "");
  const current = value ?? internal;
  const baseId = useId();

  function select(id: string) {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1;
    let next = index;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    const item = items[next];
    if (!item) return;
    select(item.id);
    document.getElementById(`${baseId}-tab-${item.id}`)?.focus();
  }

  return (
    <div>
      <div className={styles.list} role="tablist">
        {items.map((item, index) => {
          const selected = item.id === current;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              className={styles.tab}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => {
        const selected = item.id === current;
        return (
          <div
            key={item.id}
            id={`${baseId}-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${item.id}`}
            hidden={!selected}
            className={styles.panel}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
