"use client";

import { useId, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./Accordion.module.css";

export type AccordionItem = {
  title: string;
  content: ReactNode;
};

export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div className={styles.item} key={item.title}>
            <h3 className="h4">
              <button
                id={buttonId}
                className={styles.trigger}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span>{item.title}</span>
                <Icon name={expanded ? "minus" : "plus"} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className={expanded ? styles.panelOpen : styles.panel}>
              <div className={styles.inner}>
                <div className={`body muted ${styles.body}`}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
