import { z } from "zod";

export const payoutBlockSchema = z.object({
  type: z.literal("payout-block"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  steps: z.array(z.object({ caption: z.string(), title: z.string(), text: z.string() })),
  shot: z.string(),
  noteCaption: z.string(),
  noteTitle: z.string(),
  noteText: z.string(),
});

export type PayoutBlockData = z.infer<typeof payoutBlockSchema>;
