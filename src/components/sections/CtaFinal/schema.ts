import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const ctaFinalSchema = z.object({
  type: z.literal("cta-final"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  media: mediaSchema,
  title: z.string(),
  lead: z.string(),
  cta: linkSchema,
});

export type CtaFinalData = z.infer<typeof ctaFinalSchema>;
