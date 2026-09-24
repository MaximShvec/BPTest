import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const levelChainSchema = z.object({
  type: z.literal("level-chain"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  action: linkSchema,
  levels: z.array(
    z.object({
      caption: z.string(),
      value: z.string(),
      text: z.string(),
      theme: z.enum(["lime", "ink"]),
    }),
  ),
});

export type LevelChainData = z.infer<typeof levelChainSchema>;
