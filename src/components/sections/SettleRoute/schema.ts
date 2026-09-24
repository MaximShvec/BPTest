import { z } from "zod";

export const settleRouteSchema = z.object({
  type: z.literal("settle-route"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  payerCaption: z.string(),
  payerTitle: z.string(),
  choiceCaption: z.string(),
  choiceTitle: z.string(),
  choiceNote: z.string(),
  fundingCaption: z.string(),
  fundingTitle: z.string(),
  fundingNote: z.string(),
  spotCaption: z.string(),
  spotTitle: z.string(),
  spotNote: z.string(),
  cards: z.array(
    z.object({
      caption: z.string(),
      text: z.string().optional(),
      options: z.array(z.object({ label: z.string(), mark: z.string().optional() })).optional(),
    }),
  ),
});

export type SettleRouteData = z.infer<typeof settleRouteSchema>;
