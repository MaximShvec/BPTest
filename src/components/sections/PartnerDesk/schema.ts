import { z } from "zod";
import { mediaSchema } from "@/schemas/primitives";

export const partnerDeskSchema = z.object({
  type: z.literal("partner-desk"),
  id: z.string().optional(),
  media: mediaSchema,
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  rows: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      emphasis: z.boolean().optional(),
    }),
  ),
});

export type PartnerDeskData = z.infer<typeof partnerDeskSchema>;
