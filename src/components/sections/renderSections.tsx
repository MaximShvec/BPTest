import type { ComponentType } from "react";
import type { Section } from "./schemas";
import { sectionRegistry } from "./registry";

export function renderSections(sections: Section[]) {
  return sections.map((section, index) => {
    const entry = sectionRegistry[section.type];
    if (!entry) {
      if (process.env.NODE_ENV !== "production") {
        throw new Error(`Unknown section type: ${section.type}`);
      }
      return null;
    }
    const Component = entry.Component as ComponentType<typeof section>;
    return <Component key={section.id ?? `${section.type}-${index}`} {...section} />;
  });
}
