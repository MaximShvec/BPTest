import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const blogPreviewSchema = z.object({
  type: z.literal("blog-preview"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
  mark: mediaSchema,
  lead: z.string(),
  cta: linkSchema,
  articles: z.array(
    z.object({
      title: z.string(),
      category: z.string(),
      date: z.string(),
      cover: mediaSchema,
    }),
  ),
});

export type BlogPreviewData = z.infer<typeof blogPreviewSchema>;
