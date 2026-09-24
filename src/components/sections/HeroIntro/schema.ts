import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const heroIntroSchema = z.object({
  type: z.literal("hero-intro"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
});

export type HeroIntroData = z.infer<typeof heroIntroSchema>;
