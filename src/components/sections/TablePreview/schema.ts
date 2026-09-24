import { z } from "zod";

export const tablePreviewSchema = z.object({
  type: z.literal("table-preview"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  columns: z.array(z.string()),
  rows: z.array(z.array(z.string())),
  cards: z.array(z.object({ title: z.string(), text: z.string() })),
  note: z.string(),
});

export type TablePreviewData = z.infer<typeof tablePreviewSchema>;
