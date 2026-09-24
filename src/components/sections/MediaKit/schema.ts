import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const mediaKitSchema = z.object({
  type: z.literal("media-kit"),
  id: z.string().optional(),
  title: z.string(),
  text: z.string(),
  action: linkSchema,
  files: z.array(z.object({ label: z.string(), href: z.string() })),
});

export type MediaKitData = z.infer<typeof mediaKitSchema>;
