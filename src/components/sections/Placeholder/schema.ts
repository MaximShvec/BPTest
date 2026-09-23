import { z } from "zod";
import { themeSchema } from "@/schemas/primitives";

export const placeholderSectionSchema = z.object({
  type: z.literal("placeholder"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
});

export type PlaceholderSectionData = z.infer<typeof placeholderSectionSchema>;
