import { z } from "zod";
import { mediaSchema } from "@/schemas/primitives";

export const flowStepsSchema = z.object({
  type: z.literal("flow-steps"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  aside: z.string(),
  steps: z.array(
    z.object({
      index: z.string(),
      title: z.string(),
      text: z.string(),
    }),
  ),
  media: z.array(
    z.object({
      span: z.number(),
      spanTablet: z.number().optional(),
      spanMobile: z.number().optional(),
      media: mediaSchema,
    }),
  ),
});

export type FlowStepsData = z.infer<typeof flowStepsSchema>;
