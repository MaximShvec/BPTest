import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const stepCardsSchema = z.object({
  type: z.literal("step-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string().optional(),
  listOffset: z.union([z.literal(4), z.literal(8)]).optional(),
  indexWidth: z.number().optional(),
  cards: z.array(
    z.object({
      span: z.number().optional(),
      spanTablet: z.number().optional(),
      theme: z.enum(["white", "black", "ink"]),
      caption: z.string(),
      captionTone: z.enum(["muted", "lime"]).optional(),
      title: z.string(),
      titleSize: z.enum(["36", "32"]),
      text: z.string().optional(),
      steps: z.array(
        z.object({
          index: z.string(),
          text: z.string(),
        }),
      ),
      button: linkSchema.optional(),
    }),
  ),
});

export type StepCardsData = z.infer<typeof stepCardsSchema>;
