import { z } from "zod";

export const bindPanelSchema = z.object({
  type: z.literal("bind-panel"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  steps: z.array(z.object({ index: z.string(), text: z.string() })),
  shot: z.string(),
});

export type BindPanelData = z.infer<typeof bindPanelSchema>;
