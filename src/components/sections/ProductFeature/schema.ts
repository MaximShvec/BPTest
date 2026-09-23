import { z } from "zod";
import { linkSchema, mediaSchema } from "@/schemas/primitives";

export const productFeatureSchema = z.object({
  type: z.literal("product-feature"),
  id: z.string().optional(),
  reverse: z.boolean().optional(),
  theme: z.enum(["white", "black", "blue"]),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  rows: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      emphasis: z.boolean().optional(),
      tone: z.enum(["lime"]).optional(),
    }),
  ),
  button: linkSchema,
  media: mediaSchema,
});

export type ProductFeatureData = z.infer<typeof productFeatureSchema>;
