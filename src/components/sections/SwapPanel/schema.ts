import { z } from "zod";

export const swapPanelSchema = z.object({
  type: z.literal("swap-panel"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  rates: z.array(z.object({ label: z.string(), value: z.string() })),
  giveLabel: z.string(),
  giveAmount: z.string(),
  giveAsset: z.string(),
  getLabel: z.string(),
  getAmount: z.string(),
  getAsset: z.string(),
  quote: z.array(z.object({ label: z.string(), value: z.string() })),
  action: z.string(),
  shot: z.string(),
});

export type SwapPanelData = z.infer<typeof swapPanelSchema>;
