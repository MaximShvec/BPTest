import { z } from "zod";

export const ioColumnsSchema = z.object({
  type: z.literal("io-columns"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  columns: z.array(
    z.object({
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      points: z.array(z.string()),
      shot: z.string(),
      shotHeight: z.number(),
      shotTone: z.enum(["white", "blue"]).optional(),
    }),
  ),
});

export type IoColumnsData = z.infer<typeof ioColumnsSchema>;
