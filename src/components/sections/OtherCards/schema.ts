import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const otherCardsSchema = z.object({
  type: z.literal("other-cards"),
  id: z.string().optional(),
  title: z.string(),
  items: z.array(
    z.object({
      theme: z.enum(["ink", "blue", "white"]),
      caption: z.string(),
      title: z.string(),
      text: z.string(),
      action: linkSchema,
    }),
  ),
});

export type OtherCardsData = z.infer<typeof otherCardsSchema>;
