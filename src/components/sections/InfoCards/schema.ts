import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

const cardSchema = z.object({
  span: z.number().optional(),
  spanTablet: z.number().optional(),
  spanMobile: z.number().optional(),
  theme: z.enum(["white", "dark", "ink"]),
  caption: z.string().optional(),
  figure: z.string().optional(),
  figureTone: z.enum(["ink", "lime"]).optional(),
  title: z.string().optional(),
  text: z.string().optional(),
});

export const infoCardsSchema = z.object({
  type: z.literal("info-cards"),
  id: z.string().optional(),
  theme: z.enum(["plain", "dark", "black"]).optional(),
  pad: z.enum(["none", "32", "64"]).optional(),
  gap: z.enum(["24", "32", "40"]).optional(),
  layout: z.enum(["head", "stack", "stacked-head"]).optional(),
  caption: z.string().optional(),
  captionTone: z.enum(["muted", "lime"]).optional(),
  title: z.string().optional(),
  titleMax: z.number().optional(),
  aside: z.string().optional(),
  asideTone: z.enum(["gray", "muted"]).optional(),
  cardGap: z.enum(["8", "12"]).optional(),
  cards: z.array(cardSchema),
  actions: z.array(linkSchema).optional(),
});

export type InfoCardsData = z.infer<typeof infoCardsSchema>;
