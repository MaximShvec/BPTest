import { z } from "zod";
import { nestedSection } from "@/components/sections/Grid/schema";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

const belowItemSchema = z.object({
  span: z.number().optional(),
  spanTablet: z.number().optional(),
  spanMobile: z.number().optional(),
  section: nestedSection(),
});

export const heroSplitSchema = z.object({
  type: z.literal("hero-split"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  badge: z.string(),
  title: z.string(),
  lead: z.string(),
  buttons: z.array(linkSchema),
  media: mediaSchema,
  below: z.array(belowItemSchema).optional(),
});

export type HeroSplitData = {
  type: "hero-split";
  id?: string;
  theme?: z.infer<typeof themeSchema>;
  badge: string;
  title: string;
  lead: string;
  buttons: z.infer<typeof linkSchema>[];
  media: z.infer<typeof mediaSchema>;
  below?: Array<{
    span?: number;
    spanTablet?: number;
    spanMobile?: number;
    section: { type: string; id?: string } & Record<string, unknown>;
  }>;
};
