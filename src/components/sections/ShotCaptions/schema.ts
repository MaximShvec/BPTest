import { z } from "zod";

export const shotCaptionsSchema = z.object({
  type: z.literal("shot-captions"),
  id: z.string().optional(),
  title: z.string(),
  aside: z.string(),
  shots: z.array(
    z.object({
      span: z.number(),
      height: z.number(),
      placeholder: z.string(),
      border: z.string().optional(),
      surface: z.enum(["white", "blue"]).optional(),
      title: z.string(),
      note: z.string(),
    }),
  ),
});

export type ShotCaptionsData = z.infer<typeof shotCaptionsSchema>;
