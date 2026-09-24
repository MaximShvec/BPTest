import { z } from "zod";

export const beforeAfterSchema = z.object({
  type: z.literal("before-after"),
  id: z.string().optional(),
  title: z.string(),
  text: z.string(),
  photo: z.string(),
  beforeCaption: z.string(),
  before: z.array(z.string()),
  afterCaption: z.string(),
  after: z.array(z.string()),
});

export type BeforeAfterData = z.infer<typeof beforeAfterSchema>;
