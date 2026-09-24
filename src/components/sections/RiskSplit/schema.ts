import { z } from "zod";

export const riskSplitSchema = z.object({
  type: z.literal("risk-split"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  items: z.array(z.object({ title: z.string(), text: z.string() })),
});

export type RiskSplitData = z.infer<typeof riskSplitSchema>;
