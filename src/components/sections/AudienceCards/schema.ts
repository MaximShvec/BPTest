import { z } from "zod";
import { linkSchema, themeSchema } from "@/schemas/primitives";

export const audienceCardsSchema = z.object({
  type: z.literal("audience-cards"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
  cta: linkSchema.optional(),
  items: z.array(
    z.object({
      index: z.string(),
      title: z.string(),
      text: z.string(),
    }),
  ),
});

export type AudienceCardsData = z.infer<typeof audienceCardsSchema>;
