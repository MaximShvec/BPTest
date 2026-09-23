import { z } from "zod";
import { mediaSchema } from "@/schemas/primitives";

export const appBlockSchema = z.object({
  type: z.literal("app-block"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  badges: z.array(mediaSchema),
  screens: z.array(mediaSchema),
});

export type AppBlockData = z.infer<typeof appBlockSchema>;
