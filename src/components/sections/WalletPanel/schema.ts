import { z } from "zod";

export const walletPanelSchema = z.object({
  type: z.literal("wallet-panel"),
  id: z.string().optional(),
  shot: z.string(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  chips: z.array(z.string()),
});

export type WalletPanelData = z.infer<typeof walletPanelSchema>;
