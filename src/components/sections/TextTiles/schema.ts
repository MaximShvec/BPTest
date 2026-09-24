import { z } from "zod";

export const textTilesSchema = z.object({
  type: z.literal("text-tiles"),
  id: z.string().optional(),
  title: z.string(),
  frame: z.enum(["plain", "white"]).optional(),
  card: z.enum(["roomy", "tight"]).optional(),
  minHeight: z.number().optional(),
  items: z.array(
    z.object({
      span: z.number().optional(),
      theme: z.enum(["white", "blue", "gray"]).optional(),
      caption: z.string().optional(),
      captionTone: z.enum(["muted", "gray"]).optional(),
      title: z.string(),
      text: z.string(),
    }),
  ),
});

export type TextTilesData = z.infer<typeof textTilesSchema>;
