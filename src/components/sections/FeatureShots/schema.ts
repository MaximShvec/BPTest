import { z } from "zod";

export const featureShotsSchema = z.object({
  type: z.literal("feature-shots"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  rows: z.array(
    z.object({
      flip: z.boolean().optional(),
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      points: z.array(z.string()),
      shot: z.string(),
      shotHeight: z.number(),
    }),
  ),
});

export type FeatureShotsData = z.infer<typeof featureShotsSchema>;
