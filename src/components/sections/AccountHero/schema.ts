import { z } from "zod";
import { linkSchema, mediaSchema } from "@/schemas/primitives";

export const accountHeroSchema = z.object({
  type: z.literal("account-hero"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  chips: z.array(z.string()),
  actions: z.array(linkSchema),
  media: mediaSchema,
  balances: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      tone: z.enum(["white", "blue"]).optional(),
    }),
  ),
  receipt: z.object({
    caption: z.string(),
    amount: z.string(),
    note: z.string(),
  }),
});

export type AccountHeroData = z.infer<typeof accountHeroSchema>;
