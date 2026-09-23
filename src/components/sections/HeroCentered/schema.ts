import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const heroCenteredSchema = z.object({
  type: z.literal("hero-centered"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  media: mediaSchema,
  title: z.string(),
  lead: z.string(),
  cta: linkSchema,
});

export type HeroCenteredData = z.infer<typeof heroCenteredSchema>;
