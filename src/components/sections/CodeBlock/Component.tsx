import { Button } from "@/components/ui/Button";
import type { CodeBlockData } from "./schema";
import styles from "./styles.module.css";

function paint(code: string) {
  return code.split(/("(?:\\.|[^"])*"|[{}])/g).map((part, index) =>
    part === "{" || part === "}" ? (
      <span key={index} className={styles.brace}>
        {part}
      </span>
    ) : part.startsWith('"') ? (
      <span key={index} className={styles.lime}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function CodeBlock({ caption, title, text, actions, codeCaption, code }: CodeBlockData) {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"} size={action.size ?? "lg"}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.code}>
        <span className={styles.codeCaption}>{codeCaption}</span>
        <pre>
          <code>{paint(code)}</code>
        </pre>
      </div>
    </section>
  );
}
