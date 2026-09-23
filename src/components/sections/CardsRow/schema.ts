import { z } from "zod";
import { linkSchema, themeSchema } from "@/schemas/primitives";

const cardSchema = z.object({
  theme: themeSchema.optional(),
  title: z.string(),
  text: z.string().optional(),
  badges: z.array(z.string()).optional(),
  avatars: z.array(z.string()).optional(),
  links: z.array(linkSchema).optional(),
  cta: linkSchema.optional(),
  span: z.number().optional(),
  spanTablet: z.number().optional(),
  spanMobile: z.number().optional(),
});

export const cardsRowSchema = z.object({
  type: z.literal("cards-row"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  items: z.array(cardSchema),
});

export type CardsRowData = z.infer<typeof cardsRowSchema>;
