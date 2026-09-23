import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

const pillarSchema = z.object({
  id: z.string().optional(),
  theme: themeSchema.optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string().optional(),
  items: z.array(
    z.object({
      text: z.string(),
      muted: z.boolean().optional(),
    }),
  ),
  cta: linkSchema.extend({
    ring: z.enum(["#646464", "#939393"]).optional(),
  }),
});

export const productRowSchema = z.object({
  type: z.literal("product-row"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  hub: z.object({
    media: mediaSchema,
    title: z.string(),
    lead: z.string(),
    cta: linkSchema,
  }),
  pillars: z.array(pillarSchema),
});

export type ProductRowData = z.infer<typeof productRowSchema>;
