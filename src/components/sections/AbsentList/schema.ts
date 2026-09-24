import { z } from "zod";

export const absentListSchema = z.object({
  type: z.literal("absent-list"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  items: z.array(z.object({ title: z.string(), text: z.string() })),
});

export type AbsentListData = z.infer<typeof absentListSchema>;
