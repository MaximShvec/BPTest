import { z } from "zod";

export const specMediaSchema = z.object({
  type: z.literal("spec-media"),
  id: z.string().optional(),
  label: z.string(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  copyFirst: z.boolean().optional(),
  theme: z.enum(["dark", "white"]).optional(),
  copySpan: z.number().optional(),
  mediaSpan: z.number().optional(),
  shot: z.enum(["plain", "roomy"]).optional(),
  rows: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      tone: z.enum(["muted", "emphasis", "lime"]).optional(),
    }),
  ),
});

export type SpecMediaData = z.infer<typeof specMediaSchema>;
