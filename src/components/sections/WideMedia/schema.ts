import { z } from "zod";

export const wideMediaSchema = z.object({
  type: z.literal("wide-media"),
  id: z.string().optional(),
  label: z.string(),
  ratio: z.string().optional(),
});

export type WideMediaData = z.infer<typeof wideMediaSchema>;
