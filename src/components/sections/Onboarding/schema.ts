import { z } from "zod";
import { linkSchema, mediaSchema } from "@/schemas/primitives";

export const onboardingSchema = z.object({
  type: z.literal("onboarding"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  steps: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
  cta: linkSchema,
  quote: z.object({
    caption: z.string(),
    text: z.string(),
    name: z.string(),
    role: z.string(),
    media: mediaSchema,
  }),
});

export type OnboardingData = z.infer<typeof onboardingSchema>;
