import { z } from "zod";
import { mediaSchema, themeSchema } from "@/schemas/primitives";

export const managerCardSchema = z.object({
  type: z.literal("manager-card"),
  id: z.string().optional(),
  theme: themeSchema.optional(),
  caption: z.string(),
  name: z.string(),
  role: z.string(),
  text: z.string(),
  avatar: mediaSchema,
});

export type ManagerCardData = z.infer<typeof managerCardSchema>;
