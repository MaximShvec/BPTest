import { z } from "zod";
import { mediaSchema } from "@/schemas/primitives";

export const mediaAsideSchema = z.object({
  type: z.literal("media-aside"),
  id: z.string().optional(),
  media: mediaSchema,
  icon: z.enum(["play"]).optional(),
  title: z.string(),
  text: z.string(),
  chips: z.array(z.string()),
});

export type MediaAsideData = z.infer<typeof mediaAsideSchema>;
