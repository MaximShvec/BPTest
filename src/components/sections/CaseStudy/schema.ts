import { z } from "zod";
import { mediaSchema } from "@/schemas/primitives";

export const caseStudySchema = z.object({
  type: z.literal("case-study"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  steps: z.array(
    z.object({
      index: z.string(),
      title: z.string(),
      text: z.string(),
      theme: z.enum(["dark", "lime"]).optional(),
    }),
  ),
  media: mediaSchema,
  note: z.string(),
});

export type CaseStudyData = z.infer<typeof caseStudySchema>;
