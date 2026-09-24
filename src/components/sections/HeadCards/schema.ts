import { z } from "zod";

export const headCardsSchema = z.object({
  type: z.literal("head-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  pad: z.number().optional(),
  gap: z.number().optional(),
  items: z.array(
    z.object({
      span: z.number().optional(),
      index: z.string().optional(),
      caption: z.string().optional(),
      title: z.string(),
      text: z.string(),
    }),
  ),
});

export type HeadCardsData = z.infer<typeof headCardsSchema>;
