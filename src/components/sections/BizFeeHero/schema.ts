import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const bizFeeHeroSchema = z.object({
  type: z.literal("biz-fee-hero"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  lead: z.string(),
  actions: z.array(linkSchema),
  tiles: z.array(
    z.object({
      tone: z.enum(["lime", "white", "blue"]),
      caption: z.string(),
      value: z.string(),
      note: z.string(),
    }),
  ),
});

export type BizFeeHeroData = z.infer<typeof bizFeeHeroSchema>;
