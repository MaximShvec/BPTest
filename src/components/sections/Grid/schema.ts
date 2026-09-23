import { z } from "zod";
import { themeSchema } from "@/schemas/primitives";

type NestedSchema = z.ZodType<{ type: string; id?: string }>;

let nestedSchema: NestedSchema | null = null;

export function bindNestedSection(schema: NestedSchema) {
  nestedSchema = schema;
}

export function nestedSection() {
  return z.lazy(() => {
    if (!nestedSchema) throw new Error("Nested section schema is not bound");
    return nestedSchema;
  });
}

export const gridSectionSchema = z.object({
  type: z.literal("grid"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  items: z.array(
    z.object({
      span: z.number().optional(),
      spanTablet: z.number().optional(),
      spanMobile: z.number().optional(),
      section: nestedSection(),
    }),
  ),
});

export type GridSectionData = {
  type: "grid";
  id?: string;
  theme?: z.infer<typeof themeSchema>;
  items: Array<{
    span?: number;
    spanTablet?: number;
    spanMobile?: number;
    section: { type: string; id?: string } & Record<string, unknown>;
  }>;
};
