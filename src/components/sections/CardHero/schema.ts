import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const cardHeroSchema = z.object({
  type: z.literal("card-hero"),
  id: z.string().optional(),
  theme: z.enum(["blue", "lime"]).optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  shot: z.string(),
});

export type CardHeroData = z.infer<typeof cardHeroSchema>;
