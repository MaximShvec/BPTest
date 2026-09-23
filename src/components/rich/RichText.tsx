import type { ElementType } from "react";

function sanitize(html: string): string {
  return html.replace(/<\/?([a-zA-Z0-9]+)(\s[^>]*)?>/g, (match, tag: string, raw = "") => {
    const name = tag.toLowerCase();
    if (name === "br") return "<br />";
    if (name === "b") return match.startsWith("</") ? "</b>" : "<b>";
    if (name === "span") {
      if (match.startsWith("</")) return "</span>";
      const cls = /class\s*=\s*"([^"]*)"/.exec(raw)?.[1] ?? "";
      const safe = cls
        .split(/\s+/)
        .filter((item) => item === "muted-300")
        .join(" ");
      return safe ? `<span class="${safe}">` : "<span>";
    }
    if (name === "a") {
      if (match.startsWith("</")) return "</a>";
      const href = /href\s*=\s*"([^"]*)"/.exec(raw)?.[1] ?? "";
      if (!href.startsWith("/") && !href.startsWith("http")) return "<a>";
      return `<a href="${href}">`;
    }
    return "";
  });
}

export function RichText({
  value,
  as: Tag = "span",
  className,
}: {
  value: string;
  as?: ElementType;
  className?: string;
}) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: sanitize(value) }} />;
}
