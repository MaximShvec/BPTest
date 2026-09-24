import { z } from "zod";

export const metricBarSchema = z.object({
  type: z.literal("metric-bar"),
  id: z.string().optional(),
  items: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
});

export type MetricBarData = z.infer<typeof metricBarSchema>;
