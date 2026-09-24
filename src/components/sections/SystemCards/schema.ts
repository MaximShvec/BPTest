import { z } from "zod";

export const systemCardsSchema = z.object({
  type: z.literal("system-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  items: z.array(
    z.object({
      title: z.string(),
      text: z.string(),
      theme: z.enum(["white", "lime"]).optional(),
    }),
  ),
});

export type SystemCardsData = z.infer<typeof systemCardsSchema>;
