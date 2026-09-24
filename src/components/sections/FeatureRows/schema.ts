import { z } from "zod";

export const featureRowsSchema = z.object({
  type: z.literal("feature-rows"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  rows: z.array(
    z.object({
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      points: z.array(z.string()),
    }),
  ),
});

export type FeatureRowsData = z.infer<typeof featureRowsSchema>;
