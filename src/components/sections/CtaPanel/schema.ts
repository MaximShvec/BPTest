import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const ctaPanelSchema = z.object({
  type: z.literal("cta-panel"),
  id: z.string().optional(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
});

export type CtaPanelData = z.infer<typeof ctaPanelSchema>;
