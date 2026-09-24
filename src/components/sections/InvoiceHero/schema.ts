import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const invoiceHeroSchema = z.object({
  type: z.literal("invoice-hero"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  stats: z.array(z.object({ value: z.string(), label: z.string() })),
  invoiceCaption: z.string(),
  invoiceTitle: z.string(),
  badge: z.string(),
  rows: z.array(z.object({ label: z.string(), value: z.string() })),
  linkLabel: z.string(),
  qr: z.string(),
  shot: z.string(),
});

export type InvoiceHeroData = z.infer<typeof invoiceHeroSchema>;
