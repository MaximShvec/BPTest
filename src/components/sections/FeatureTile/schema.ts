import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const featureTileSchema = z.object({
  type: z.literal("feature-tile"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  media: mediaSchema,
  title: z.string(),
  text: z.string(),
  actions: z.array(linkSchema),
});

export type FeatureTileData = z.infer<typeof featureTileSchema>;
