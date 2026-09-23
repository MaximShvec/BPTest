import { z } from "zod";
import { linkSchema, themeSchema } from "@/schemas/primitives";

export const ctaSchema = z.object({
  type: z.literal("cta"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  layout: z.enum(["center", "split"]).optional(),
  title: z.string(),
  lead: z.string().optional(),
  buttons: z.array(linkSchema),
  actionsOffset: z.boolean().optional(),
});

export type CtaData = z.infer<typeof ctaSchema>;
