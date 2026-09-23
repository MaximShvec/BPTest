import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const heroConverterSchema = z.object({
  type: z.literal("hero-converter"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  widget: z.object({
    modes: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        from: z.array(z.string()).min(1),
        to: z.array(z.string()).min(1),
      }),
    ).min(1),
    giveLabel: z.string(),
    receiveLabel: z.string(),
    giveAssetLabel: z.string(),
    receiveAssetLabel: z.string(),
    amountPlaceholder: z.string(),
    rateLabel: z.string(),
    feeLabel: z.string(),
    lockLabel: z.string(),
    quote: z.object({
      rate: z.string(),
      fee: z.string(),
      lock: z.string(),
    }),
    submit: linkSchema,
  }),
});

export type HeroConverterData = z.infer<typeof heroConverterSchema>;
export type ConverterWidget = HeroConverterData["widget"];
export type ConverterMode = ConverterWidget["modes"][number];
