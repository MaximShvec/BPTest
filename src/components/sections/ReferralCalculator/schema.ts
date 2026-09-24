import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

const sliderSchema = z.object({
  label: z.string(),
  min: z.number(),
  max: z.number(),
  minLabel: z.string(),
  maxLabel: z.string(),
  placeholder: z.string(),
  fill: z.number(),
});

export const referralCalculatorSchema = z.object({
  type: z.literal("referral-calculator"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  action: linkSchema,
  presets: z.array(z.object({ label: z.string(), value: z.number() })),
  referrals: sliderSchema,
  turnover: sliderSchema,
  feeRate: z.number(),
  tiers: z.array(z.object({ name: z.string(), share: z.number().nullable(), placeholder: z.string() })),
  monthLabel: z.string(),
  monthPlaceholder: z.string(),
  yearLabel: z.string(),
  yearPlaceholder: z.string(),
  note: z.string(),
});

export type ReferralCalculatorData = z.infer<typeof referralCalculatorSchema>;
