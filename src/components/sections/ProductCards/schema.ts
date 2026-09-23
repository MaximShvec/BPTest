import { z } from "zod";
import { linkSchema, themeSchema } from "@/schemas/primitives";

export const productCardsSchema = z.object({
  type: z.literal("product-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  items: z.array(
    z.object({
      theme: themeSchema,
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      button: linkSchema,
    }),
  ),
});

export type ProductCardsData = z.infer<typeof productCardsSchema>;
