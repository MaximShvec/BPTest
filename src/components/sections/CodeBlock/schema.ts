import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const codeBlockSchema = z.object({
  type: z.literal("code-block"),
  id: z.string().optional(),
  caption: z.string(),
  title: z.string(),
  text: z.string(),
  actions: z.array(linkSchema),
  codeCaption: z.string(),
  code: z.string(),
});

export type CodeBlockData = z.infer<typeof codeBlockSchema>;
