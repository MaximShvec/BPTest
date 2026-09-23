import { z } from "zod";

export const statPanelSchema = z.object({
  type: z.literal("stat-panel"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  items: z.array(
    z.object({
      title: z.string(),
      text: z.string(),
    }),
  ),
});

export type StatPanelData = z.infer<typeof statPanelSchema>;
