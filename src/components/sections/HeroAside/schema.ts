import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const heroAsideSchema = z.object({
  type: z.literal("hero-aside"),
  id: z.string().optional(),
  badge: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
});

export type HeroAsideData = z.infer<typeof heroAsideSchema>;
