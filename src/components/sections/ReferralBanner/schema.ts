import { z } from "zod";
import { linkSchema, mediaSchema, themeSchema } from "@/schemas/primitives";

export const referralBannerSchema = z.object({
  type: z.literal("referral-banner"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  title: z.string(),
  lead: z.string(),
  media: mediaSchema,
  items: z.array(
    z.object({
      text: z.string().optional(),
      title: z.string().optional(),
      theme: themeSchema.optional(),
      cta: linkSchema.optional(),
    }),
  ),
});

export type ReferralBannerData = z.infer<typeof referralBannerSchema>;
