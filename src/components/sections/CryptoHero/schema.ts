import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

const walletSchema = z.object({
  ticker: z.string(),
  networks: z.string(),
  balance: z.string(),
  fiat: z.string(),
  theme: z.enum(["ink", "white"]).optional(),
});

export const cryptoHeroSchema = z.object({
  type: z.literal("crypto-hero"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  stats: z.array(z.object({ value: z.string(), label: z.string() })),
  panelCaption: z.string(),
  panelAside: z.string(),
  wallets: z.array(walletSchema),
  tools: z.array(z.string()),
});

export type CryptoHeroData = z.infer<typeof cryptoHeroSchema>;
