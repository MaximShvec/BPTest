import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

const statSchema = z.object({
  value: z.string(),
  text: z.string(),
  theme: z.enum(["lime", "ink"]),
  size: z.enum(["72", "36"]),
});

export const heroStatsSchema = z.object({
  type: z.literal("hero-stats"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  highlight: statSchema,
  stats: z.array(statSchema),
});

export type HeroStatsData = z.infer<typeof heroStatsSchema>;
