import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import type { Link } from "@/schemas/primitives";
import styles from "./NoteButton.module.css";

const toneClass = {
  dirty: styles.dirty,
  muted: styles.muted,
  gray: styles.gray,
} as const;

export function NoteButton({ link }: { link: Link }) {
  return (
    <Button href={link.href} variant={link.variant ?? "primary"} size={link.size ?? "xl-text"} spread>
      <span>{link.label}</span>
      {link.note ? <span className={cx(styles.note, toneClass[link.noteTone ?? "muted"])}>{link.note}</span> : null}
    </Button>
  );
}
