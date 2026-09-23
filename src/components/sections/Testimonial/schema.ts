import { z } from "zod";
import { mediaSchema, themeSchema } from "@/schemas/primitives";

export const testimonialSchema = z.object({
  type: z.literal("testimonial"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  caption: z.string(),
  quote: z.string(),
  name: z.string(),
  role: z.string(),
  media: mediaSchema.optional(),
});

export type TestimonialData = z.infer<typeof testimonialSchema>;
