import { z } from "zod";
import { linkSchema, mediaSchema } from "@/schemas/primitives";

export const cardShowcaseSchema = z.object({
  type: z.literal("card-showcase"),
  id: z.string().optional(),
  items: z.array(
    z.object({
      theme: z.enum(["white", "black", "blue"]),
      media: mediaSchema,
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      price: z.object({
        value: z.string(),
        note: z.string(),
      }),
      button: linkSchema,
    }),
  ),
});

export type CardShowcaseData = z.infer<typeof cardShowcaseSchema>;
