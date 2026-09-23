import { z } from "zod";
import { themeSchema } from "@/schemas/primitives";

export const trustStripSchema = z.object({
  type: z.literal("trust-strip"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
  metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  licenses: z.array(z.string()),
});

export type TrustStripData = z.infer<typeof trustStripSchema>;
