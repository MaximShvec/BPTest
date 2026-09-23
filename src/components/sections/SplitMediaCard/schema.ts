import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const splitMediaCardSchema = z.object({
  type: z.literal("split-media-card"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  media: mediaSchema,
  title: z.string(),
  text: z.string(),
  cta: linkSchema,
});

export type SplitMediaCardData = z.infer<typeof splitMediaCardSchema>;
