import { z } from "zod";
import { linkSchema, themeSchema } from "@/schemas/primitives";

export const ctaAsideSchema = z.object({
  type: z.literal("cta-aside"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
  lead: z.string().optional(),
  actions: z.array(linkSchema),
});

export type CtaAsideData = z.infer<typeof ctaAsideSchema>;
