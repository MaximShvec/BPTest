import { z } from "zod";

export const mediaQuoteSchema = z.object({
  type: z.literal("media-quote"),
  id: z.string().optional(),
  video: z.string(),
  caption: z.string(),
  quote: z.string(),
  photo: z.string(),
  name: z.string(),
  role: z.string(),
  portrait: z.string(),
});

export type MediaQuoteData = z.infer<typeof mediaQuoteSchema>;
