import { z } from "zod";

export const statTilesSchema = z.object({
  type: z.literal("stat-tiles"),
  id: z.string().optional(),
  items: z.array(z.object({ caption: z.string(), value: z.string(), note: z.string() })),
});

export type StatTilesData = z.infer<typeof statTilesSchema>;
