import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const payHeroSchema = z.object({
  type: z.literal("pay-hero"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  stats: z.array(z.object({ value: z.string(), label: z.string() })),
  card: z.object({
    caption: z.string(),
    badge: z.string(),
    rows: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
  receipt: z.object({ caption: z.string(), amount: z.string(), note: z.string() }),
  photo: z.string(),
});

export type PayHeroData = z.infer<typeof payHeroSchema>;
