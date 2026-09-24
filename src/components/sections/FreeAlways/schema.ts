import { z } from "zod";

export const freeAlwaysSchema = z.object({
  type: z.literal("free-always"),
  id: z.string().optional(),
  caption: z.string(),
  value: z.string(),
  lead: z.string(),
  items: z.array(z.object({ index: z.string(), text: z.string() })),
  shot: z.string(),
  note: z.string(),
});

export type FreeAlwaysData = z.infer<typeof freeAlwaysSchema>;
