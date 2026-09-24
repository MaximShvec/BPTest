import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const mediaBlockSchema = z.object({
  type: z.literal("media-block"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  action: linkSchema,
  media: mediaSchema,
});

export type MediaBlockData = z.infer<typeof mediaBlockSchema>;
