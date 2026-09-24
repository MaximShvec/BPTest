import { z } from "zod";

export const copyShotSchema = z.object({
  type: z.literal("copy-shot"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  points: z.array(z.string()),
  shot: z.string(),
});

export type CopyShotData = z.infer<typeof copyShotSchema>;
