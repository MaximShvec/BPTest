import { z } from "zod";

export const tileRowSchema = z.object({
  type: z.literal("tile-row"),
  id: z.string().optional(),
  title: z.string(),
  titleMax: z.number().optional(),
  aside: z.string().optional(),
  columns: z.number(),
  minHeight: z.number().optional(),
  items: z.array(
    z.object({
      stat: z.string(),
      statTone: z.enum(["default", "muted"]).optional(),
      title: z.string(),
      titleSize: z.enum(["16", "24"]),
      text: z.string(),
      theme: z.enum(["white", "lime"]).optional(),
    }),
  ),
});

export type TileRowData = z.infer<typeof tileRowSchema>;
