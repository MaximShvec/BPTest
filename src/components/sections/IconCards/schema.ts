import { z } from "zod";
import { themeSchema } from "@/schemas/primitives";

const wellSchema = z.enum(["gray", "white", "translucent", "ink"]);

export const iconCardsSchema = z.object({
  type: z.literal("icon-cards"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string().optional(),
  compact: z.boolean().optional(),
  titleSize: z.enum(["32", "36"]).optional(),
  spaced: z.boolean().optional(),
  items: z.array(
    z.object({
      span: z.number().optional(),
      spanTablet: z.number().optional(),
      spanMobile: z.number().optional(),
      theme: themeSchema.optional(),
      icon: z.string(),
      well: wellSchema.optional(),
      iconTone: z.enum(["dark", "lime"]).optional(),
      title: z.string(),
      text: z.string().optional(),
      minHeight: z.number().optional(),
    }),
  ),
});

export type IconCardsData = z.infer<typeof iconCardsSchema>;
