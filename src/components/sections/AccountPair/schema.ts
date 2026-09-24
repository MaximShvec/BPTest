import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const accountPairSchema = z.object({
  type: z.literal("account-pair"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  action: linkSchema,
  cards: z.array(z.object({ caption: z.string(), title: z.string(), points: z.array(z.string()) })),
});

export type AccountPairData = z.infer<typeof accountPairSchema>;
