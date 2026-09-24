import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const anchorNavSchema = z.object({
  type: z.literal("anchor-nav"),
  id: z.string().optional(),
  items: z.array(linkSchema.extend({ tone: z.enum(["light", "dark"]).optional() })),
});

export type AnchorNavData = z.infer<typeof anchorNavSchema>;
