import type { ComponentType } from "react";
import { placeholderSectionSchema, type PlaceholderSectionData } from "./Placeholder/schema";
import { PlaceholderSection } from "./Placeholder/Component";
import { sectionSchema } from "./schemas";

export const sectionRegistry = {
  placeholder: {
    schema: placeholderSectionSchema,
    Component: PlaceholderSection,
  },
} satisfies Record<
  string,
  {
    schema: typeof placeholderSectionSchema;
    Component: ComponentType<PlaceholderSectionData>;
  }
>;

export { sectionSchema };
