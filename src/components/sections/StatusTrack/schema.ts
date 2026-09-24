import { z } from "zod";

export const statusTrackSchema = z.object({
  type: z.literal("status-track"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  steps: z.array(z.object({ title: z.string(), text: z.string(), tone: z.enum(["lime", "muted"]).optional() })),
});

export type StatusTrackData = z.infer<typeof statusTrackSchema>;
