import { z } from "zod";
import { mediaSchema, themeSchema } from "@/schemas/primitives";

export const trustBlockSchema = z.object({
  type: z.literal("trust-block"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  badge: mediaSchema,
  title: z.string(),
  metrics: z.array(
    z.object({
      value: z.string(),
      caption: z.string(),
      compact: z.boolean().optional(),
    }),
  ),
  note: z.string(),
  licenses: z.array(z.string()),
});

export type TrustBlockData = z.infer<typeof trustBlockSchema>;
