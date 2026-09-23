import { z } from "zod";

const cellSchema = z.union([
  z.string(),
  z.boolean(),
  z.object({
    text: z.string(),
    emphasis: z.boolean().optional(),
    tone: z.enum(["lime", "muted", "ink"]).optional(),
  }),
]);

export const compareTableSchema = z.object({
  type: z.literal("compare-table"),
  id: z.string().optional(),
  title: z.string(),
  headerLabel: z.string(),
  columns: z.array(z.string()),
  columnWidth: z.number().optional(),
  tightHead: z.boolean().optional(),
  rows: z.array(
    z.object({
      label: z.string(),
      values: z.array(cellSchema),
    }),
  ),
});

export type CompareCell = z.infer<typeof cellSchema>;
export type CompareTableData = z.infer<typeof compareTableSchema>;
