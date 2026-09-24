import { z } from "zod";

export const limitSplitSchema = z.object({
  type: z.literal("limit-split"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  rows: z.array(z.object({ name: z.string(), note: z.string(), value: z.string() })),
  limitCaption: z.string(),
  limitTitle: z.string(),
  limits: z.array(z.object({ label: z.string(), value: z.string() })),
});

export type LimitSplitData = z.infer<typeof limitSplitSchema>;
