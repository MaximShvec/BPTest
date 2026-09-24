import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

const sliderSchema = z.object({
  label: z.string(),
  display: z.string(),
  min: z.number(),
  max: z.number(),
  start: z.number(),
  unit: z.enum(["eur", "count"]),
});

export const feeCalculatorSchema = z.object({
  type: z.literal("fee-calculator"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  action: linkSchema,
  profiles: z.array(z.object({ label: z.string(), values: z.array(z.number()) })),
  sliders: z.array(sliderSchema),
  rates: z.object({
    service: z.number(),
    incoming: z.number(),
    payment: z.number(),
    exchange: z.number(),
    card: z.number(),
  }),
  resultCaption: z.string(),
  lines: z.array(z.string()),
  totalLabel: z.string(),
  totalDisplay: z.string(),
  lineDisplay: z.string(),
});

export type FeeCalculatorData = z.infer<typeof feeCalculatorSchema>;
