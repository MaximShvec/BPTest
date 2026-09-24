import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const kybPanelSchema = z.object({
  type: z.literal("kyb-panel"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  steps: z.array(z.object({ index: z.string(), title: z.string(), time: z.string() })),
  docsCaption: z.string(),
  docs: z.array(z.string()),
  docsNote: z.string(),
  sideCaption: z.string(),
  sideTitle: z.string(),
  sideText: z.string(),
  action: linkSchema,
});

export type KybPanelData = z.infer<typeof kybPanelSchema>;
