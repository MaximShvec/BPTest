import { z } from "zod";
import { themeSchema } from "@/schemas/primitives";

export const faqSchema = z.object({
  type: z.literal("faq"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
  lead: z.string(),
  defaultOpen: z.number().nullable().optional(),
  items: z.array(
    z.object({
      q: z.string(),
      a: z.string().optional(),
    }),
  ),
});

export type FaqData = z.infer<typeof faqSchema>;
