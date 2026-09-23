import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const splitPromoSchema = z.object({
  type: z.literal("split-promo"),
  id: z.string().optional(),
  cards: z.array(
    z.object({
      span: z.number().optional(),
      theme: z.enum(["white", "lime"]),
      caption: z.string(),
      captionTone: z.enum(["muted", "dirty"]).optional(),
      title: z.string(),
      text: z.string(),
      actions: z.array(linkSchema).optional(),
      pinAction: z.boolean().optional(),
    }),
  ),
});

export type SplitPromoData = z.infer<typeof splitPromoSchema>;
