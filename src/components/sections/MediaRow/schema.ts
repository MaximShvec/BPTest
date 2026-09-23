import { z } from "zod";
import { mediaSchema } from "@/schemas/primitives";

export const mediaRowSchema = z.object({
  type: z.literal("media-row"),
  id: z.string().optional(),
  items: z.array(
    z.object({
      span: z.number(),
      spanTablet: z.number().optional(),
      spanMobile: z.number().optional(),
      media: mediaSchema,
      borderColor: z.string().optional(),
      surface: z.enum(["white", "blue"]).optional(),
    }),
  ),
});

export type MediaRowData = z.infer<typeof mediaRowSchema>;
