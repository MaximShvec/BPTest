import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const heroMediaSchema = z.object({
  type: z.literal("hero-media"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  mediaLabel: z.string(),
  ratio: z.string().optional(),
});

export type HeroMediaData = z.infer<typeof heroMediaSchema>;
