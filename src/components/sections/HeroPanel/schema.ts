import { z } from "zod";
import { linkSchema, mediaSchema } from "@/schemas/primitives";

export const heroPanelSchema = z.object({
  type: z.literal("hero-panel"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  media: mediaSchema,
  mediaNote: z.string().optional(),
});

export type HeroPanelData = z.infer<typeof heroPanelSchema>;
