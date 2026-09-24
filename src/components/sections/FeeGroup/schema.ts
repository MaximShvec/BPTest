import { z } from "zod";

export const feeGroupSchema = z.object({
  type: z.literal("fee-group"),
  id: z.string().optional(),
  index: z.string(),
  title: z.string(),
  text: z.string(),
  rows: z.array(z.object({ name: z.string(), note: z.string(), value: z.string() })),
});

export type FeeGroupData = z.infer<typeof feeGroupSchema>;
