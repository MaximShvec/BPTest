import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const casePathSchema = z.object({
  type: z.literal("case-path"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  steps: z.array(z.object({ index: z.string(), title: z.string(), text: z.string() })),
  shot: z.string(),
  noteCaption: z.string(),
  notes: z.array(z.string()),
  action: linkSchema,
});

export type CasePathData = z.infer<typeof casePathSchema>;
