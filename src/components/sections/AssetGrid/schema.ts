import { z } from "zod";

export const assetGridSchema = z.object({
  type: z.literal("asset-grid"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  columns: z.array(z.string()).length(5),
  rows: z.array(
    z.object({
      ticker: z.string(),
      networks: z.string(),
      min: z.string(),
      confirms: z.string(),
      fee: z.string(),
    }),
  ),
  notes: z.array(z.string()),
});

export type AssetGridData = z.infer<typeof assetGridSchema>;
