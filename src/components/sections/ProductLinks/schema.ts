import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const productLinksSchema = z.object({
  type: z.literal("product-links"),
  id: z.string().optional(),
  items: z.array(
    z.object({
      theme: z.enum(["blue", "ink"]),
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      action: linkSchema,
    }),
  ),
});

export type ProductLinksData = z.infer<typeof productLinksSchema>;
