import { z } from "zod";

export const ratesTableSchema = z.object({
  type: z.literal("rates-table"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  filters: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
    }),
  ).min(1),
  columns: z.object({
    pair: z.string(),
    asset: z.string(),
    rate: z.string(),
    change: z.string(),
  }),
  actionLabel: z.string(),
  rows: z.array(
    z.object({
      pair: z.string(),
      asset: z.string(),
      name: z.string(),
      rate: z.string(),
      change: z.string(),
      href: z.string(),
      groups: z.array(z.string()),
    }),
  ),
  note: z.string(),
});

export type RatesTableData = z.infer<typeof ratesTableSchema>;
