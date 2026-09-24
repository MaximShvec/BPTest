import { z } from "zod";

export const feeTableSchema = z.object({
  type: z.literal("fee-table"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string().optional(),
  valueWidth: z.number().optional(),
  rows: z.array(
    z.object({
      name: z.string(),
      note: z.string(),
      value: z.string(),
    }),
  ),
});

export type FeeTableData = z.infer<typeof feeTableSchema>;
