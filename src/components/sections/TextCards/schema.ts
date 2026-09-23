import { z } from "zod";

export const textCardsSchema = z.object({
  type: z.literal("text-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  items: z.array(
    z.object({
      title: z.string(),
      text: z.string(),
    }),
  ),
});

export type TextCardsData = z.infer<typeof textCardsSchema>;
