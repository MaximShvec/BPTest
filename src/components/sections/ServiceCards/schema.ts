import { z } from "zod";
import { linkSchema, mediaSchema } from "@/schemas/primitives";

const spanFields = {
  span: z.number().optional(),
  spanTablet: z.number().optional(),
  spanMobile: z.number().optional(),
};

export const serviceCardsSchema = z.object({
  type: z.literal("service-cards"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  items: z.array(
    z.discriminatedUnion("kind", [
      z.object({
        kind: z.literal("card"),
        ...spanFields,
        theme: z.enum(["white", "dark"]),
        caption: z.string(),
        captionTone: z.enum(["muted", "lime"]),
        title: z.string(),
        text: z.string(),
        button: linkSchema,
      }),
      z.object({
        kind: z.literal("media"),
        ...spanFields,
        media: mediaSchema,
        borderColor: z.string().optional(),
        surface: z.enum(["white", "blue"]).optional(),
      }),
    ]),
  ),
});

export type ServiceCardsData = z.infer<typeof serviceCardsSchema>;
